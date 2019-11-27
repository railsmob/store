import events from "@railsmob/events";

export default class Store {
  state = {};

  // aliases
  on = (eventId, ...other) => events.on(`store_${eventId}`, ...other);
  once = (eventId, ...other) => events.once(`store_${eventId}`, ...other);
  off = (eventId, ...other) => events.off(`store_${eventId}`, ...other);
  emit = (eventId, ...other) => events.emit(`store_${eventId}`, ...other);

  update = fn => {
    this.emit("will_update", this.state);
    this.state = fn(this.state);
    this.emit("update", this.state);
  };
}
