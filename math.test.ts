import { add, subtract } from './math'

test('1 and 2 should Equal to 3', () => {
    expect(add(1, 2)).toBe(3)
})


test('3 subtracted by 6 should return -3', () => {
    expect(subtract(3, 6)).toBe(-3)
})