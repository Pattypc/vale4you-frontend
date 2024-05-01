import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Skeleton } from './skeleton'

export const defaultClassname =
  'dark:bg-gradient-to-b dark:from-primary-100 dark:to-primary-700 dark:text-primary-tone-by-tone bg-dark-200 text-white-100 bg-dark-300 border border-dark-300 dark:border-primary-100'

export const blackClassname =
  'dark:bg-dark-200 border dark:border-primary-100 border-dark-300 bg-white-100 dark:hover:text-primary-100'

export const gradientClassname =
  'bg-gradient-to-b from-primary-100 to-primary-700 text-primary-tone-by-tone uppercase rounded-lg font-semibold'

export const outlineClassname =
  'dark:bg-dark-200 dark:border-dark-500 border rounded-md bg-white-200 border border-white-500'

export const linkClassname =
  'font-bold dark:font-medium dark:text-primary-100 text-dark-200'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-poppins  transition-colors focus-visible:outline-none focus-visible:ring-1 font-normal dark:focus-visible:ring-primary-600 focus-visible:ring-white-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        clear: '',
        default:
          'dark:bg-gradient-to-b dark:from-primary-100 dark:to-primary-700 dark:text-primary-tone-by-tone bg-dark-200 text-white-100 bg-dark-300 border border-dark-300 dark:border-primary-100',
        black:
          'dark:bg-dark-200 border dark:border-primary-100 border-dark-300 bg-white-100 dark:hover:text-primary-100',
        gradient:
          'bg-gradient-to-b from-primary-100 to-primary-700 text-primary-tone-by-tone uppercase rounded-lg font-semibold',
        ouline:
          'dark:bg-dark-200 dark:border-dark-500 border rounded-md bg-white-200 border border-white-500',
        link: 'font-bold dark:font-medium dark:text-primary-100 text-dark-200'
      },
      size: {
        clear: '',
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  classNameSkeleton?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      classNameSkeleton,
      ...props
    },
    ref
  ) => {
    if (isLoading)
      return (
        <Skeleton className={cn('h-10 w-full rounded-lg', classNameSkeleton)} />
      )

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
