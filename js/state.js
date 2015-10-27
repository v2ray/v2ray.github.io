function SiteState() {
  var self = this;
  self.stateChangeCallbacks = [];

  window.onpopstate = function (event) {
    self.reloadState();
  };
  self.reloadState();
}

SiteState.prototype.reloadState = function() {
  var self = this;
  var hash = window.location.hash;
  if (hash !== null && self.state && hash.indexOf(self.state, hash.length - self.state.length) > -1) {
    // We are already in this state.
    return;
  }
  self.article = 'index-zh-cn';
  self.newState();
  var entries = hash.substring(1).split('&');
  entries.forEach(function(entry) {
    var eqPos = entry.indexOf('=');
    if (eqPos > 0) {
      var key = entry.substring(0, eqPos);
      var value = entry.substring(eqPos + 1);

      if (key === 'a') {
        self.article = value;
      } else if (key === 'z') {
        self.state = value;
      }
    }
  });
  self.onStateChange();
};

SiteState.prototype.onStateChange = function() {
  var self = this;
  self.stateChangeCallbacks.forEach(function(f) {
    f(self);
  });
};

SiteState.prototype.registerStateChangeCallback = function(callback) {
  this.stateChangeCallbacks.push(callback);
};

SiteState.prototype.newState = function() {
  var state = "";
  var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

  for(var i=0; i < 7; i++) {
    state += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  this.state = state;
};

SiteState.prototype.getArticle = function() {
  return this.article;
};

SiteState.prototype.setArticle = function(articleId) {
  this.article = articleId;
};

SiteState.prototype.pushState = function() {
  this.newState();
  var hash = '#a=' + this.article + '&z=' + this.state;
  window.location = hash;
  this.onStateChange();
};

var v2raySiteState = new SiteState();
