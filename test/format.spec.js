import { format } from '../src/utils'

describe('format util', () => {
  it('should output the input string as is', () => {
    const actual = format('test value')
    expect(actual).toBe('test value')
  })

  it('should replace placeholders', () => {
    const actual = format('{0} foo {1} bar', '123', '456')
    expect(actual).toBe('123 foo 456 bar')
  })

  it('should handle escaped { and }', () => {
    const actual = format('\\{0\\} {0}', 'test')
    expect(actual).toBe('{0} test')
  })

  it('should replace with empty value with null or undefined', () => {
    const actual = format('{0} {1} {2}', null, undefined, 'test')
    expect(actual).toBe('  test')
  })
})
