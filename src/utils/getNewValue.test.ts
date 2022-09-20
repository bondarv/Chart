import { getNewValue } from './getNewValue';

const INITIAL_VALUE = 7.1;

test('should return new value', () => {
  expect(getNewValue(INITIAL_VALUE)).not.toEqual(INITIAL_VALUE);
});

test('should be less than 10', () => {
  expect(getNewValue(INITIAL_VALUE)).toBeLessThan(10);
});

test('should be recursion when the same value', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(INITIAL_VALUE / 10);
  expect(() => getNewValue(INITIAL_VALUE)).toThrow();
  jest.spyOn(global.Math, 'random').mockRestore();
});
