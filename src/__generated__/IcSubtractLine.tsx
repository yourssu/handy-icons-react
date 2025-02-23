/**
 * 이 파일은 scripts/generateIcons.mjs에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 scripts/generateIcons.mjs를 수정하세요.
 */

import { IconBase } from '../Icon.base';
import { IconProps } from '../type';

export const IcSubtractLine = ({ ref, ...props }: IconProps) => {
  return (
    <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
      <path
        d="M11.44 2H12.56C17.7736 2 22 6.22643 22 11.44V12.56C22 17.7736 17.7736 22 12.56 22H11.44C6.22643 22 2 17.7736 2 12.56V11.44C2 6.22643 6.22643 2 11.44 2ZM12.56 20.5C16.9315 20.4673 20.4673 16.9315 20.5 12.56V11.44C20.4673 7.06846 16.9315 3.53267 12.56 3.5H11.44C7.06846 3.53267 3.53266 7.06846 3.5 11.44V12.56C3.53266 16.9315 7.06846 20.4673 11.44 20.5H12.56Z"
        fillRule="evenodd"
        clipRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
      />
      <path
        d="M16 11.25H8C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75H16C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25Z"
        xmlns="http://www.w3.org/2000/svg"
      />
    </IconBase>
  );
};

IcSubtractLine.displayName = 'IcSubtractLine';
