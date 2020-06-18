/**
 * @description 
 * @author ronffy
 * @Date 2020-06-11 15:55:21
 * @LastEditTime 2020-06-11 17:02:17
 * @LastEditors ronffy
 */
const localStorage = window.localStorage;

class Storage {
  getItem(key) {
    return localStorage.getItem(key);
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
    return this;
  }

  clear() {
    localStorage.clear();
    return this;
  }

  removeItem(key) {
    localStorage.removeItem(key);
    return this;
  }
}

export default new Storage();
