'use strict';

var OAuth = require('./oauthExt').OAuth_Ext;
var Queries = require('./trelloQueries').Queries;

var query = function query(options) {
    return new Queries(new OAuth(options));
};

module.exports = query;


/** EXPECTED USE CASE PARAM
 query({
    appkey: "asdfasdasdsada",
    appSecret: "sdafasddfsadassaasdasdasdasdasdasd",
    callbackUrl: "https://localhost/whatever"
});

 */