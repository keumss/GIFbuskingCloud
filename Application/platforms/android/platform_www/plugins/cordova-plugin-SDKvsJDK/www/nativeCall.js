cordova.define("cordova-plugin-SDKvsJDK.nativeCall", function(require, exports, module) {

module.exports ={

    runJava : function(arg0, success, error) {
        cordova.exec(success, error, "SDKvsJDK", "runJava", [arg0]);
    },
    
    runNative : function(arg0, success, error){
        cordova.exec(success, error, "SDKvsJDK", "runNative", [arg0]);
    }



}

});
