"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OAuth = require('oauth').OAuth;

var OAuth_Ext = function () {
    function OAuth_Ext(options) {
        _classCallCheck(this, OAuth_Ext);

        this.appkey = options.appkey;
        this.appSecret = options.appSecret;
        this.callbackUrl = options.callbackUrl;

        this.trelloAuthUrls = {
            requestURL: "https://trello.com/1/OAuthGetRequestToken",
            accessURL: "https://trello.com/1/OAuthGetAccessToken",
            authorizeURL: "https://trello.com/1/OAuthAuthorizeToken"
        };
    }

    _createClass(OAuth_Ext, [{
        key: "configOAuth",
        value: function configOAuth() {
            return new OAuth(this.trelloAuthUrls.requestURL, this.trelloAuthUrls.accessURL, this.appkey, this.appSecret, "1.0", this.callbackUrl, "HMAC-SHA1");
        }
    }]);

    return OAuth_Ext;
}();

module.exports.OAuth_Ext = OAuth_Ext;