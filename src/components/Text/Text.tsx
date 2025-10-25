import { ReactNode } from 'react'
import clsx from 'clsx'

type TextProps = {
  as?: keyof typeof variants // 'h1', 'p', etc.
  variant?: keyof typeof variants
  className?: string
  children: ReactNode
}
const baseStyles = 'text-gray-800'

const headingClasses = 'font-heading font-bold text-display-1 mb-4'

const variants = {
  p: 'font-body text-lg leading-relaxed mb-6',
  h1: 'text-display-1 ' + headingClasses,
  h2: 'text-display-2 ' + headingClasses,
  h3: 'text-display-3 ' + headingClasses,
  h4: 'text-display-4 ' + headingClasses,
}

export const Text = ({ as = 'p', variant, className, children }: TextProps) => {
  const Tag = as // Use `as` to dynamically determine the tag.
  const variantToUse = variant || as

  return (
    <Tag className={clsx(baseStyles, variants[variantToUse], className)}>
      {children}
    </Tag>
  )
}
