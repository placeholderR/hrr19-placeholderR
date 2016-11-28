var ticketPosition = [0, 0];
var observer = null;

function emitChange() {
  observer(ticketPosition);
}

exports.observe = function(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
};

exports.moveTicket = function (toX, toY) {
  ticketPosition = [toX, toY];
  emitChange();
}