/**
 * A class to keep track of active documents in the debugger.
 */
DocumentHolder = function() {
  this.loadedDocs = {};
  this.isEditable = false;
  this.isDebugable = false;
};

DocumentHolder.prototype = {
  addDoc: function(fileId, doc) {
    this.loadedDocs[fileId] = {
      doc: doc
    };
  },

  getDoc: function(fileId) {
    return this.loadedDocs[fileId].doc;
  }
};
