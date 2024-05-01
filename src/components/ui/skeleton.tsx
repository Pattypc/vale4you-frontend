import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md dark:bg-dark-300 bg-white-600',
        className
      )}
      id="skeleton"
      title="skeleton"
      aria-details="showing when isLoading prop was passed to a parent element"
      {...props}
    />
  )
}

export { Skeleton }
