import { it, expect } from 'vitest'
import { getFoo } from './mod'

it('works', () => {
  expect(getFoo()).toBe('bar')
})
