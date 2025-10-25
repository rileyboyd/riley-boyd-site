import * as React from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variants = {
  primary: 'bg-[#252525] hover:bg-[#252525]/90 text-white',
  secondary: 'bg-[#4f4f4f] hover:bg-[#4f4f4f]/80 text-white',
  outline: 'border border-[#252525] bg-transparent hover:bg-[#252525] hover:text-white text-[#252525]',
  ghost: 'hover:bg-[#252525]/10 text-[#252525]',
  link: 'text-[#252525] underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'h-9 rounded-md px-3 text-sm',
  md: 'h-10 rounded-md px-4 py-2 text-sm',
  lg: 'h-11 rounded-md px-8 text-base',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
          'disabled:opacity-50 disabled:pointer-events-none',
          '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
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
