import { saveUser } from '../localStorage';

'use strict'; // eslint-disable-line

test('saves User', async () => {
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
  expect.assertions(1);
  const data = await saveUser(testUser);
  expect(data).toBe(200); // TODO: figure out what a succesful save to AsyncStorage actually returns
});
