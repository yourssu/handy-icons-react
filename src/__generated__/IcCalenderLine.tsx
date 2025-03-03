/**
 * 이 파일은 scripts/generateIcons.mjs에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 scripts/generateIcons.mjs를 수정하세요.
 */

import { IconBase } from '../Icon.base';
import { IconProps } from '../type';

export const IcCalenderLine = ({ ref, ...props }: IconProps) => {
  return (
    <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
      <path
        d="M16.5 8.16H7.5C7.08579 8.16 6.75 8.49579 6.75 8.91C6.75 9.32421 7.08579 9.66 7.5 9.66H16.5C16.9142 9.66 17.25 9.32421 17.25 8.91C17.25 8.49579 16.9142 8.16 16.5 8.16Z"
        xmlns="http://www.w3.org/2000/svg"
      />
      <path
        d="M16.89 3.57H17C19.7614 3.57 22 5.80858 22 8.57V17.57C22 20.3314 19.7614 22.57 17 22.57H7C5.67392 22.57 4.40215 22.0432 3.46447 21.1055C2.52678 20.1679 2 18.8961 2 17.57V8.57C2 5.80858 4.23858 3.57 7 3.57H7.09V1.75C7.09 1.33579 7.42579 1 7.84 1C8.25421 1 8.59 1.33579 8.59 1.75V3.57H15.39V1.75C15.39 1.33579 15.7258 1 16.14 1C16.5542 1 16.89 1.33579 16.89 1.75V3.57ZM17 21.07C18.933 21.07 20.5 19.503 20.5 17.57V8.57C20.5 6.637 18.933 5.07 17 5.07H7C5.067 5.07 3.5 6.637 3.5 8.57V17.57C3.5 19.503 5.067 21.07 7 21.07H17Z"
        fillRule="evenodd"
        clipRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
      />
    </IconBase>
  );
};

IcCalenderLine.displayName = 'IcCalenderLine';
