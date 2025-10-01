import styles from './Badge.module.css';
import clsx from 'clsx';
import type { BadgeSize, BadgeColor, BadgeVariant } from './badgeConfig';

const badgeStyleVariant = (variant: BadgeVariant, color: BadgeColor, size: BadgeSize) => {
  const badgeStyle = clsx(styles.badge, styles[variant], styles[color], styles[size]);
  return badgeStyle;
};

type BadgeProps = {
  color: BadgeColor;
  variant: BadgeVariant;
  size?: BadgeSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: string;
};

export function Badge({
  color,
  children,
  variant,
  size = 'medium',
  iconLeft,
  iconRight,
}: BadgeProps) {
  const badgeVariantStyle = badgeStyleVariant(variant, color, size);
  return (
    <div className={badgeVariantStyle}>
      {iconLeft}
      {children && <p>{children}</p>}
      {iconRight}
    </div>
  );
}
