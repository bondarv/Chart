import { getNewValue } from './getNewValue';

const INITIAL_VALUE = 7.1;

test('should return new value', () => {
  expect(getNewValue(INITIAL_VALUE)).not.toEqual(INITIAL_VALUE);
});

test('should be less than 10', () => {
  expect(getNewValue(INITIAL_VALUE)).toBeLessThan(10);
});

test('value should always change', () => {
  const spy = jest.fn(getNewValue);

  for (let i = 0; i < 500; i++) {
    expect(spy(INITIAL_VALUE)).not.toEqual(INITIAL_VALUE);
  }
});
