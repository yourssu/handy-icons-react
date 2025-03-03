/**
 * 이 파일은 scripts/generateIcons.mjs에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 scripts/generateIcons.mjs를 수정하세요.
 */

import { IconBase } from '../Icon.base';
import { IconProps } from '../type';

export const IcMailFilled = ({ ref, ...props }: IconProps) => {
  return (
    <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
      <path
        d="M6 4H18C20.2091 4 22 5.79086 22 8V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V8C2 5.79086 3.79086 4 6 4ZM13.4 13.55L19.74 8.85C20.0229 8.64199 20.0854 8.24483 19.88 7.96C19.7821 7.82401 19.6333 7.73345 19.4675 7.70896C19.3017 7.68447 19.1331 7.72813 19 7.83L12.59 12.5C12.4296 12.6681 12.2074 12.7633 11.975 12.7633C11.7426 12.7633 11.5204 12.6681 11.36 12.5L5 7.83C4.86758 7.73134 4.70127 7.68958 4.53795 7.71399C4.37463 7.73839 4.2278 7.82694 4.13 7.96C3.92242 8.24224 3.98036 8.63892 4.26 8.85L10.56 13.5C10.952 13.8719 11.4697 14.0825 12.01 14.09C12.5245 14.0899 13.0204 13.8973 13.4 13.55Z"
        fillRule="evenodd"
        clipRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
      />
    </IconBase>
  );
};

IcMailFilled.displayName = 'IcMailFilled';
