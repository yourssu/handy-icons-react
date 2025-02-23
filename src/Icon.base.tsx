import { IconProps } from './type';

export const IconBase = ({ ref, ...props }: IconProps) => {
  const { size, color, children, ...rest } = props;

  return (
    <svg
      fill={color ?? 'currentColor'}
      height={size ?? '24px'}
      ref={ref}
      width={size ?? '24px'}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  );
};

IconBase.displayName = 'IconBase';
