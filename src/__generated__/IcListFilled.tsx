/**
 * 이 파일은 scripts/generateIcons.mjs에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 scripts/generateIcons.mjs를 수정하세요.
 */

import { IconBase } from '../Icon.base';
import { IconProps } from '../type';

export const IcListFilled = ({ ref, ...props }: IconProps) => {
  return (
    <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
      <path
        d="M15.62 11H6C5.44772 11 5 10.5523 5 10C5 9.44772 5.44772 9 6 9H15.62C16.1723 9 16.62 9.44772 16.62 10C16.62 10.5523 16.1723 11 15.62 11Z"
        xmlns="http://www.w3.org/2000/svg"
      />
      <path
        d="M6 14H18.82C19.3723 14 19.82 14.4477 19.82 15C19.82 15.5523 19.3723 16 18.82 16H6C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14Z"
        xmlns="http://www.w3.org/2000/svg"
      />
    </IconBase>
  );
};

IcListFilled.displayName = 'IcListFilled';
