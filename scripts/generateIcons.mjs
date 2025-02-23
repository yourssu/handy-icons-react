/**
 * 이 코드는 svg 파일 형태로 작성된 아이콘을 YDS Web에서 사용할 수 있도록 React 컴포넌트로 변환하는 코드입니다.
 */

import fs from 'node:fs';
import fsPromise from 'node:fs/promises';
import path from 'path';
import prettier from 'prettier';
import { DOMParser, XMLSerializer } from 'xmldom';

import prettierConfig from '../prettier.config.mjs';

const _dirname = path.resolve();
const ICONS_DIR = path.join(_dirname, './assets/static');
const ICONS_COMPONENTS_DIR = path.join(_dirname, './src/__generated__');
const ICONS_INDEX_PATH = path.join(_dirname, './src/__generated__/index.ts');

const toCamelCase = (str) => {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

const isCamelCase = (str) => {
  return /^[a-z][A-Za-z0-9]*$/.test(str);
};

function camelizeElementAttributes(elem) {
  const queue = [elem];

  while (queue.length) {
    const curElem = queue.pop();

    if (curElem.hasAttributes()) {
      Array.from(curElem.attributes).forEach((attr) => {
        if (!isCamelCase(attr.name)) {
          curElem.setAttribute(toCamelCase(attr.name), attr.value);
          curElem.removeAttribute(attr.name);
        }
      });
    }

    if (curElem.hasChildNodes()) {
      Array.from(curElem.childNodes).forEach((child) => {
        if (child.nodeType === 1) {
          queue.push(child);
        }
      });
    }
  }

  return elem;
}

const SVGComponentTemplate = (name, viewBox, svg) => `/**
 * 이 파일은 scripts/generateIcons.mjs에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 scripts/generateIcons.mjs를 수정하세요.
 */

import { IconBase } from '../Icon.base';
import { IconProps } from '../type';

export const ${name} = ({ref, ...props}: IconProps) => {
  return <IconBase ref={ref} viewBox="${viewBox}" {...props}>
    ${svg}
  </IconBase>
};

${name}.displayName = '${name}';
`;

const clearIconsDir = async () => {
  // generated folder
  if (await fsPromise.stat(ICONS_COMPONENTS_DIR).catch(() => false)) {
    await fsPromise.rm(ICONS_COMPONENTS_DIR, { recursive: true });
  }
  await fsPromise.mkdir(ICONS_COMPONENTS_DIR);
};

const getIcons = async () => {
  const svgIconPaths = (await fsPromise.readdir(ICONS_DIR)).map((filename) =>
    path.resolve(ICONS_DIR, filename)
  );
  const icons = await Promise.all(
    svgIconPaths.map(async (svgIconPath) => {
      const svgIcon = await fsPromise.readFile(svgIconPath, 'utf-8');
      const svgIconName = path.basename(svgIconPath, '.svg');
      const svgIconComponentName = (
        svgIconName.charAt(0).toUpperCase() + svgIconName.slice(1)
      ).replace(/_([a-z])/g, (match, char) => char.toUpperCase());
      const svgIconComponentPath = path.join(ICONS_COMPONENTS_DIR, `${svgIconComponentName}.tsx`);
      return {
        icon: svgIcon,
        name: svgIconName,
        componentName: svgIconComponentName,
        componentPath: svgIconComponentPath,
      };
    })
  );
  return icons;
};

const convertIcons = async (icons) => {
  // Convert Icons
  const serializer = new XMLSerializer();
  const domParser = new DOMParser();
  await Promise.all(
    icons.map(async ({ icon, componentName, componentPath }) => {
      const dom = domParser.parseFromString(icon, 'image/svg+xml');
      const $svg = dom.getElementsByTagName('svg')[0];

      camelizeElementAttributes($svg);
      $svg.setAttribute('fill', 'current');
      Array.from(dom.getElementsByTagName('path')).forEach((p) => p.removeAttribute('fill'));
      const viewBox = $svg.getAttribute('viewBox');
      const innerSvg = Array.from($svg.childNodes)
        .map((v) => serializer.serializeToString(v))
        .join('');
      const component = SVGComponentTemplate(componentName, viewBox, innerSvg);
      const prettyComponent = await prettier.format(component, {
        ...prettierConfig,
        filepath: componentPath,
      });
      await fsPromise.writeFile(componentPath, prettyComponent);
    })
  );
};

const createIndexTs = async (icons) => {
  const index = icons
    .map(({ componentName }) => `export { ${componentName} } from './${componentName}';`)
    .join('\n');
  const prettyIndex = await prettier.format(index, {
    ...prettierConfig,
    filepath: ICONS_INDEX_PATH,
  });
  await fsPromise.writeFile(ICONS_INDEX_PATH, prettyIndex);
};

(async () => {
  if (fs.existsSync(ICONS_COMPONENTS_DIR)) {
    await fsPromise.rm(ICONS_COMPONENTS_DIR, { recursive: true });
  }

  await fsPromise.mkdir(ICONS_COMPONENTS_DIR);
  await clearIconsDir();
  const icons = await getIcons();
  await convertIcons(icons);
  await createIndexTs(icons);
})();
