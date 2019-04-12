(function(cobalt){
    var plugin={
        name:"appInfos",

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
        },
        handleEvent:function(json){
            cobalt.log(this.name, ' plugin : unknown event received :', json)
        }
    };
    cobalt.plugins.register(plugin);

})(cobalt || {});