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
      {...props}
    />
  )
}

export { Skeleton }
