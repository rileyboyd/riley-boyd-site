import { getNumberOfYearsSinceDate } from '@/app/(home)/getNumberOfYearsSinceDate'

describe('getNumberOfYearsSinceDate', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01'))
  })

  it('returns 0 when the input date is the same as the fixed date', () => {
    const inputDate = '2023-01-01'
    expect(getNumberOfYearsSinceDate(inputDate)).toBe(0)
  })

  it('returns 1 when the input date is one year before the current date', () => {
    const inputDate = '2022-01-01'
    expect(getNumberOfYearsSinceDate(inputDate)).toBe(1)
  })

  it('returns 2 when the input date is two years before the current date', () => {
    const inputDate = '2021-01-01'
    expect(getNumberOfYearsSinceDate(inputDate)).toBe(2)
  })

  it('returns 0 when the input date is in the same year but later in the year than the current date', () => {
    const inputDate = '2023-12-31'
    expect(getNumberOfYearsSinceDate(inputDate)).toBe(-1)
  })

  it('returns -1 when the input date is in the future', () => {
    const inputDate = '2024-01-01'
    expect(getNumberOfYearsSinceDate(inputDate)).toBe(-1)
  })

  it('returns the correct number of years when the input date is before the current date but not in the same year', () => {
    const inputDate = '2022-06-15'
    expect(getNumberOfYearsSinceDate(inputDate)).toBe(0) // It is before January 1, 2023, but still in 2022
  })

  it('returns 0 when the input date is exactly the same time and day as the current date', () => {
    const inputDate = '2023-01-01T00:00:00Z'
    expect(getNumberOfYearsSinceDate(inputDate)).toBe(0)
  })

  // Test when the input month is in the future (same year)
  it('returns -1 when the input month is in the future within the same year', () => {
    const inputDate = '2023-06-15' // June is after January
    expect(getNumberOfYearsSinceDate(inputDate)).toBe(-1)
  })

  // Test when the input day is in the future within the same month (same year)
  it('returns -1 when the input day is in the future within the same month and year', () => {
    const inputDate = '2023-01-10' // January 10 is after January 1
    expect(getNumberOfYearsSinceDate(inputDate)).toBe(-1)
  })
})
