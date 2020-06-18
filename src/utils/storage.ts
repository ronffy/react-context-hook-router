/**
 * @description 
 * @author ronffy
 * @Date 2020-06-11 15:55:21
 * @LastEditTime 2020-06-18 10:35:05
 * @LastEditors ronffy
 */
const localStorage = window.localStorage;

class Storage {
  private prefix = ''

  register(prefix) {
    this.prefix = prefix;
  }

  getItem(key) {
    return localStorage.getItem(this.getPrefixKey(key));
  }

  setItem(key, value) {
    localStorage.setItem(this.getPrefixKey(key), value);
    return this;
  }

  clear() {
    localStorage.clear();
    return this;
  }

  removeItem(key) {
    localStorage.removeItem(this.getPrefixKey(key));
    return this;
  }

  private getPrefixKey(key) {
    if (!this.prefix) {
      console.warn('warning: 建议给 storage 增加 prefix，方便区分不同项目的 storage。');
      return key;
    }
    if (!key) {
      return this.prefix;
    }
    return `${this.prefix}-${key}`;
  }
}

export default new Storage();
