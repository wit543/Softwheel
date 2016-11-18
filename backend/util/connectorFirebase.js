/**
 * Created by wit on 11/17/2016.
 */

(function (){
    const fb = class{
        constructor(firebase,config){
            this.firebase = firebase;
            this.config = config;
            this.firebase.initializeApp(this.config);
            this.database = firebase.database();
        }
        query(refer,callback){
            var ref = this.database.ref(refer);
            callback(ref);
            // ref.on('value',function (snapshot) {
            //     callback(snapshot);
            // }, function (errorObject) {
            //     console.log("The read failed: " + errorObject.code);
            // });
        }
    };
    module.exports = function (firebase,config) {
        return new fb(firebase,config);
    };



})();



