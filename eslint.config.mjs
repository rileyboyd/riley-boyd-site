import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Use FlatCompat to extend old-style configs
const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  // Next.js recommended rules + TypeScript + disable rules that conflict with Prettier
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

  // Ignore generated files
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
]

export default eslintConfig
