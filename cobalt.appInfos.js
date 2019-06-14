(function(cobalt) {
  var plugin = {
    name: 'CobaltAppInfosPlugin',
    classes: {
      ios: "CobaltAppInfosPlugin",
      android: "io.kristal.appinfos.AppInfosPlugin"
    },
    init: function() {
      cobalt.getAppInfos = this.getAppInfos.bind(this);
    },
    getAppInfos: function(callback) {
      cobalt.plugins.send(this, "getAppInfos", {}, callback)
    }
  };
  cobalt.plugins.register(plugin);

})(cobalt || {});