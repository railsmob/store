export default class Store {
  /**
   * @typedef {Object} State
   */
  state: {};
  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  on: (eventId: string, fn: Function) => void;
  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  once: (eventId: string, fn: Function) => void;
  /**
   * @param {string} eventId
   * @param {Function} [fn]
   */
  off: (eventId: string, fn?: Function | undefined) => void;
  /**
   * @param {string} eventId
   * @param {any} [args]
   */
  emit: (eventId: string, args?: any) => void;
  /**
   * @param {(state: State) => State} fn
   */
  update: (fn: (state: Object) => Object) => void;
}
