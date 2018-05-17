/* eslint no-return-assign: 0, no-prototype-builtins: 0, prefer-promise-reject-errors: 0 */
// citation: https://stackoverflow.com/questions/40952566/how-to-test-async-storage-with-jest

export default class MockStorage {
  constructor(cache = {}) {
    this.storageCache = cache;
  }

  setItem = jest.fn((key, value) => {
    return new Promise((resolve, reject) => {
      return (typeof key !== 'string' || typeof value !== 'string')
        ? reject(new Error('key and value must be string'))
        : resolve(this.storageCache[key] = value);
    });
  });

  getItem = jest.fn((key) => {
    return new Promise((resolve) => {
      return this.storageCache.hasOwnProperty(key)
        ? resolve(this.storageCache[key])
        : resolve(null);
    });
  });

  removeItem = jest.fn((key) => {
    return new Promise((resolve, reject) => {
      return this.storageCache.hasOwnProperty(key)
        ? resolve(delete this.storageCache[key])
        : reject('No such key!');
    });
  });

  clear = jest.fn((key) => {
    return new Promise((resolve, reject) => resolve(this.storageCache = {}));
  });

  getAllKeys = jest.fn((key) => {
    return new Promise((resolve, reject) => resolve(Object.keys(this.storageCache)));
  });
}
