import clsx from 'clsx'

type TextProps = {
  as?: keyof typeof variants // 'h1', 'p', etc.
  variant?: keyof typeof variants
  className?: string
  children: React.ReactNode
}
const baseStyles = 'text-gray-800'
const variants = {
  p: 'font-body text-lg leading-relaxed mb-10',
  h1: 'font-heading font-bold text-display-1 mb-4',
  h2: 'font-heading font-bold text-display-2 mb-4',
  h3: 'font-heading font-bold text-display-3 mb-4',
  h4: 'font-heading font-bold text-display-4 mb-4',
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
