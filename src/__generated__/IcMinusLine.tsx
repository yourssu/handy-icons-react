/**
 * 이 파일은 scripts/generateIcons.mjs에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 scripts/generateIcons.mjs를 수정하세요.
 */

import { IconBase } from '../Icon.base';
import { IconProps } from '../type';

export const IcMinusLine = ({ ref, ...props }: IconProps) => {
  return (
    <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
      <path
        d="M19.75 12.5H3.75C3.33579 12.5 3 12.1642 3 11.75C3 11.3358 3.33579 11 3.75 11H19.75C20.1642 11 20.5 11.3358 20.5 11.75C20.5 12.1642 20.1642 12.5 19.75 12.5Z"
        xmlns="http://www.w3.org/2000/svg"
      />
    </IconBase>
  );
};

IcMinusLine.displayName = 'IcMinusLine';
