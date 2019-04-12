(function(cobalt){
    var plugin={
        name:"appInfos",

        init:function(){
            //create shortcuts
            cobalt.getAppInfos = this.getAppInfos.bind(this);
        },
        getAppInfos:function(callback){
            this.send("getAppInfos", {}, function( data ){
				if (typeof callback == "function"){
					callback(data);
				}else{
                    cobalt.log('Received infos = ',data, typeof callback)
                }
            })
        },
        handleEvent:function(json){
            cobalt.log(this.name, ' plugin : unknown event received :', json)
        },
        send:function(action, data, callback){
			cobalt.send({ type : "plugin", name : this.name, action : action, data : data }, callback);
        }
    };
    cobalt.plugins.register(plugin);

})(cobalt || {});