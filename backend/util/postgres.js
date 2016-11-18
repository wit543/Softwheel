/**
 * Created by wit on 11/17/2016.
 */
(function () {
    class postgres{

        constructor(pg,config){
            this.pg = pg;
            this.config = config;
            this.pool = new this.pg.Pool(this.config);
            this.pool.on('error', function (err, client) {
                // if an error is encountered by a client while it sits idle in the pool
                // the pool itself will emit an error event with both the error and
                // the client which emitted the original error
                // this is a rare occurrence but can happen if there is a network partition
                // between your application and the database, the database restarts, etc.
                // and so you might want to handle it and at least log it out
                console.error('idle client error', err.message, err.stack)
            })
        }
        query(query,callback){
            this.pool.connect(function(err, client, done) {
                if(err) {
                    console.error('error fetching client from pool', err);
                    callback([{}]);
                }
                else
                    client.query(query, function(err, result) {
                        if(!err){
                            callback(result.rows);
                        }
                        else{
                            console.error('error running query', err);
                            callback({err:err});
                        }
                        done();
                    });
            });
        }
    }

    module.exports = function (pg,config) {

        return new postgres(pg,config);
    };
})();