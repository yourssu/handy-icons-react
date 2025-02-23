import { ComponentPropsWithRef } from 'react';

export type IconSize = '12px' | '16px' | '20px' | '24px' | '28px' | '32px' | '36px';

export interface IconProps extends ComponentPropsWithRef<'svg'> {
  color?: string;
  size?: IconSize;
}
