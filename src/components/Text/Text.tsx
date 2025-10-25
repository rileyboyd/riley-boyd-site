import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Text.module.css'

type TextProps = {
  as?: keyof typeof variants // 'h1', 'p', etc.
  variant?: keyof typeof variants
  className?: string
  children: ReactNode
}
const baseStyles = 'text-gray-800'
const headingStyles = `font-bold mb-4 ${styles.fontHeading}`

const variants = {
  p: `${styles.fontBody} text-lg leading-relaxed mb-6`,
  h1: `${styles.textDisplay1} ${headingStyles}`,
  h2: `${styles.textDisplay2} ${headingStyles}`,
  h3: `${styles.textDisplay3} ${headingStyles}`,
  h4: `${styles.textDisplay4} ${headingStyles}`,
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
