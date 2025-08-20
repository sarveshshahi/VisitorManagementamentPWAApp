import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Typography Components
 * 
 * A collection of typography components to ensure consistent text styling
 * across the application.
 */

/**
 * Heading Component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to display
 * @param {string} props.size - The heading size (h1, h2, h3, h4)
 * @param {string} props.className - Additional CSS classes
 */
export function Heading({ 
  children, 
  size = 'h1', 
  className, 
  ...props 
}) {
  const sizeClasses = {
    h1: 'text-2xl font-bold tracking-[-0.015em]',
    h2: 'text-xl font-bold tracking-[-0.015em]',
    h3: 'text-lg font-semibold',
    h4: 'text-base font-semibold',
  };

  return (
    <div
      className={cn(sizeClasses[size] || sizeClasses.h1, 'text-[#111418]', className)}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Text Component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to display
 * @param {string} props.size - The text size (xs, sm, base, lg)
 * @param {string} props.weight - The font weight (normal, medium, semibold, bold)
 * @param {string} props.color - The text color (default, muted, accent)
 * @param {string} props.className - Additional CSS classes
 */
export function Text({ 
  children, 
  size = 'base', 
  weight = 'normal',
  color = 'default',
  className, 
  ...props 
}) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    default: 'text-[#111418]',
    muted: 'text-[#60758a]',
    accent: 'text-blue-600',
  };

  return (
    <p
      className={cn(
        sizeClasses[size] || sizeClasses.base,
        weightClasses[weight] || weightClasses.normal,
        colorClasses[color] || colorClasses.default,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Label Component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to display
 * @param {string} props.htmlFor - The ID of the form element this label is for
 * @param {string} props.className - Additional CSS classes
 */
export function Label({ 
  children, 
  htmlFor, 
  className, 
  ...props 
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('text-base font-medium text-[#111418] pb-1', className)}
      {...props}
    >
      {children}
    </label>
  );
}