import { getResponse } from '../apiFetcher';

'use strict'; // eslint-disable-line

test('Fetches hello world from localhost', async () => {
  expect.assertions(1);
  const data = await getResponse();
  expect(data).toBe('Hello World!');
});
