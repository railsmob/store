import events from '@railsmob/events';

export default class Store {
  /**
   * @typedef {Object} State
   */
  state = {};

  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  on = (eventId, fn) => events.on(`store_${eventId}`, fn);
  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  once = (eventId, fn) => events.once(`store_${eventId}`, fn);
  /**
   * @param {string} eventId
   * @param {Function} [fn]
   */
  off = (eventId, fn) => events.off(`store_${eventId}`, fn);
  /**
   * @param {string} eventId
   * @param {any} [args]
   */
  emit = (eventId, args) => events.emit(`store_${eventId}`, args);

  /**
   * @param {(state: State) => State} fn
   */
  update = fn => {
    this.emit('will_update', this.state);
    this.state = fn(this.state);
    this.emit('update', this.state);
  };
}
