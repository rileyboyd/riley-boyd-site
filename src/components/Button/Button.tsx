import * as React from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variants = {
  primary: 'bg-[#252525] hover:bg-[#3a3a3a] text-white focus-visible:ring-[#252525]',
  secondary: 'bg-[#4f4f4f] hover:bg-[#636363] text-white focus-visible:ring-[#4f4f4f]',
  outline: 'border-2 border-[#252525] hover:bg-[#252525] hover:text-white text-[#252525]',
  ghost: 'hover:bg-gray-100 text-[#252525]',
  link: 'text-[#252525] underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'h-9 py-2 px-4 text-xs',
  md: 'h-11 py-4 px-6 text-sm',
  lg: 'h-14 py-5 px-8 text-base',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center gap-2 font-medium leading-tight text-center uppercase whitespace-nowrap transition-all duration-500',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          '[&_svg]:size-4 [&_svg]:shrink-0', // Icon support
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
