import { getKeyValue } from './object';

const object = {
  name: 'test',
};

test('Get properly key from a object', () => {
  expect(getKeyValue(object, 'name')).toBe(object.name);
  expect(getKeyValue(object, 'another')).toBe(undefined);
});
