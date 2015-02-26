/**
 * Simple class that posts messages to a specific target.
 */
MessagePoster = function() {
  this.targetOrigin = null;
};

MessagePoster.prototype = {
  post: function(obj) {
    if (!this.targetOrigin) {
      alert('Unknown target origin, cannot post');
    } else {
      top.postMessage(obj, this.targetOrigin);
    }
  }
};
