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
      this.onAppInfosResult = callback;
      cobalt.plugins.send(this, "getAppInfos", {})
    },
    handleEvent: function(json) {
      if (typeof this.onAppInfosResult === 'function') {
        this.onAppInfosResult(json.data)
      }
    }
  };
  cobalt.plugins.register(plugin);

})(cobalt || {});