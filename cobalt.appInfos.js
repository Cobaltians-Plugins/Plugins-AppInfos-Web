(function(cobalt){
    var plugin={
        classes:{
			ios: "CobaltAppInfosPlugin",
            android: "io.kristal.appinfos.AppInfosPlugin"
        },
        init:function(){
            //create shortcuts
            cobalt.getAppInfos = this.getAppInfos.bind(this);
        },
        getAppInfos:function(callback){
            cobalt.plugins.send(this, "getAppInfos", {}, function( data ){
				if (typeof callback == "function"){
					callback(data);
				}else{
                    cobalt.log('Received infos = ',data, typeof callback)
                }
            })
        }
    };
    cobalt.plugins.register(plugin);

})(cobalt || {});