var OAuth = require('./oauthExt').OAuth_Ext;
var Queries = require('./trelloQueries').Queries;

var query = function(options) {
    //return new Queries(new OAuth(options));
    var test = new Queries(new OAuth(options));
    console.log(test);
}

query({
     appkey: "asdfasdasdsada",
    appSecret: "sdafasddfsadassaasdasdasdasdasdasd",
    callbackUrl: "https://localhost/whatever"
});

