import { cn } from '@/lib/utils'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react'
import { Button } from './button'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  classNameContainer?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', icon, classNameContainer, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className={cn('relative', classNameContainer)}>
        <span className="absolute dark:text-white-500 text-white-700 -translate-y-1/2 start-4 top-1/2">
          {type !== 'password' ? (
            icon
          ) : (
            <Lock
              size={16}
              className="w-4 h-4 dark:text-white-500 text-white-700"
            />
          )}
        </span>
        <input
          type={showPassword ? 'text' : type}
          className={cn(
            'border dark:border-dark-500 dark:placeholder:text-white-500 placeholder:text-white-700 dark:bg-dark-200 bg-white-200 border-white-500 dark:hover:border-white-600 dark:focus-visible:ring-white-600 focus-visible:ring-white-500 rounded-md flex h-10 w-full py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
            icon || type === 'password' ? 'pl-10 pr-3' : 'px-3',
            type === 'password' && 'pr-8',
            className
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <Button
            type="button"
            variant="clear"
            size="sm"
            className="absolute dark:text-white-500 text-white-700 -translate-y-1/2 end-0 top-1/2"
            onClick={() => setShowPassword(prev => !prev)}
            disabled={props.value === '' || props.disabled}
          >
            {!showPassword ? (
              <EyeOff size={16} aria-hidden="true" />
            ) : (
              <Eye size={16} aria-hidden="true" />
            )}
            <span className="sr-only">
              {showPassword ? 'Hide password' : 'Show password'}
            </span>
          </Button>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
