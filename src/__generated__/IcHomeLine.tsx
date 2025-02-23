/**
 * 이 파일은 scripts/generateIcons.mjs에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 scripts/generateIcons.mjs를 수정하세요.
 */

import { IconBase } from '../Icon.base';
import { IconProps } from '../type';

export const IcHomeLine = ({ ref, ...props }: IconProps) => {
  return (
    <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
      <path
        d="M20.29 7.00048L14.73 2.89048C13.1036 1.70317 10.8964 1.70317 9.27 2.89048L3.72 7.00048C2.64544 7.77462 2.0061 9.01612 2 10.3405V17.7705C2.06002 20.1637 4.04665 22.0564 6.44 22.0005H17.56C19.9534 22.0564 21.94 20.1637 22 17.7705V10.3305C21.9914 9.01185 21.3567 7.77576 20.29 7.00048ZM20.5 17.7705C20.4404 19.3354 19.1251 20.5568 17.56 20.5005H6.44C4.87698 20.5512 3.56502 19.333 3.5 17.7705V10.3405C3.50534 9.4904 3.91817 8.69448 4.61 8.20048L10.16 4.10048C11.2561 3.30006 12.7439 3.30006 13.84 4.10048L19.39 8.21048C20.0812 8.6959 20.4948 9.48583 20.5 10.3305V17.7705ZM7.5 15.7505H16.5C16.9142 15.7505 17.25 16.0863 17.25 16.5005C17.25 16.9147 16.9142 17.2505 16.5 17.2505H7.5C7.08579 17.2505 6.75 16.9147 6.75 16.5005C6.75 16.0863 7.08579 15.7505 7.5 15.7505Z"
        fillRule="evenodd"
        clipRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
      />
    </IconBase>
  );
};

IcHomeLine.displayName = 'IcHomeLine';
