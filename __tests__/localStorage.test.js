import { saveUser } from '../localStorage';
import MockStorage from '../__mocks__/MockStorage';

'use strict'; // eslint-disable-line

const storageCache = {};
const AsyncStorage = new MockStorage(storageCache);

jest.setMock('AsyncStorage', AsyncStorage);

test('Saves user data to localStorage/cache', async () => {
  expect.assertions(2);
  const testUser = {
    id: 0,
    firstName: 'Imanol',
    lastName: 'Avendano',
    friendList: [1, 2, 3],
    credentials: {
      email: 'imanol.avendano@gmail.com',
      username: 'emanol',
      password: 'hash-salt-password',
    },
  };
  const data = await saveUser(testUser);
  // expect(AsyncStorage.setItem('user', testUser)).toBe(true);
  expect(data).toBe(200); // TODO: figure out what a succesful save to AsyncStorage actually returns
});
