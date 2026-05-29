import React from 'react';
import { cn } from '../../lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'success';

const variants: Record<BadgeVariant, string> = {
  default: 'border-transparent bg-slate-950 text-white',
  secondary: 'border-transparent bg-slate-100 text-slate-700',
  outline: 'border-slate-200 bg-white text-slate-700',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
