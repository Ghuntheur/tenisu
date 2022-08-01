import { describe, it, expect } from 'vitest'
import { separateNumbers } from '@/helpers'

describe('[HELPERS]: separateNumbers', () => {
  it('should return string', () => {
    expect(separateNumbers(12)).toBeTypeOf('string')
  })

  it('should separate numbers', () => {
    expect(separateNumbers(12)).toEqual('12')
    expect(separateNumbers(1234)).toEqual('1 234')
    expect(separateNumbers(123456789)).toEqual('123 456 789')
    expect(separateNumbers(123.456789)).toEqual('123.456 789')
  })
})
