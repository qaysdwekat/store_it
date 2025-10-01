import styles from './Badge.module.css';
import clsx from 'clsx';
import type { NotificationSize, BadgeColor, BadgeVariant } from './badgeConfig';

const badgeStyleVariant = (
  variant: BadgeVariant,
  color: BadgeColor,
  size: NotificationSize,
) => {
  const badgeStyle = clsx(
    styles.notification,
    styles[variant],
    styles[color],
    styles[size],
  );
  return badgeStyle;
};

type BadgeNotification = {
  color: BadgeColor;
  size?: NotificationSize;
  children?: number;
};

export function BadgeNotification({
  color,
  children,
  size = 'small',
}: BadgeNotification) {
  const badgeVariantStyle = badgeStyleVariant('highContrast', color, size);
  return (
    <div className={badgeVariantStyle}>{children && <p>{children}</p>}</div>
  );
}
