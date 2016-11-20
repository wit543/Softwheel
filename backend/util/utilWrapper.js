/**
 * Created by wit on 11/20/2016.
 */
/**
 * Created by wit on 11/17/2016.
 */
(function () {
    class utilWrapper{

        constructor(database,expertSystem){
            this.database = database;
            this.expert_system = expertSystem;
        }
    }

    module.exports = function (pg,expertSystem) {

        return new utilWrapper(pg,expertSystem);
    };
})();