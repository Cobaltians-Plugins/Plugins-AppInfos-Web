(function(cobalt) {
  var plugin = {
    classes: {
      ios: "CobaltAppInfosPlugin",
      android: "io.kristal.appinfos.AppInfosPlugin"
    },
    init: function() {
      cobalt.getAppInfos = this.getAppInfos.bind(this);
    },
    getAppInfos: function(callback) {
      cobalt.getAppInfosCallback = callback;
      cobalt.plugins.send(this, "getAppInfos", {})
    },
    handleEvent: function(json) {
      if (typeof cobalt.getAppInfosCallback === 'function') {
        cobalt.getAppInfosCallback(json.data)
      }
    }
  };
  cobalt.plugins.register(plugin);

})(cobalt || {});