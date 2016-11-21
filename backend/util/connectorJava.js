/**
 * Created by wit on 10/11/2016.
 */
(function () {

    const Connector = class{

        constructor(net){
            this.net = net;
            this.port = 5000;
            this.ip = 'localhost';
        }
        connect() {
            if( this.client == null){
                this.client = new this.net.Socket();
                // console.log(this.client);
            }
            if(this.client._connecting == false){
                this.client.connect(this.port,this.ip,function () {
                    console.log("connected to Java");
                })
            }
            else {
                console.log("already connected to Java");
            }
        }
        sent(data,callback){
            if(this.client == null || ! this.client._connecting){this.connect();}
            if((typeof data) != "string")
                data = "";
            this.client.write(data);
            this.client.on('data',function (data) {
                callback(data.toString());
            });
            this.client.end()
        }
    };
    module.exports = function (net) {
        return new Connector(net);
    };
})();
