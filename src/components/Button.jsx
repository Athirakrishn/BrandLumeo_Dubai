'use client';

import Link from 'next/link';

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  className = '',
  ...props
}) {
  const cls = `btn btn--${variant} ${className}`.trim();
  const linkHref = href || to;

  if (linkHref) {
    return (
      <Link href={linkHref} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
