'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queries = function () {
    function Queries(oauth) {
        _classCallCheck(this, Queries);

        this.uri = "https://api.trello.com";
        this.oauth = oauth;
    }

    _createClass(Queries, [{
        key: 'getUserInfo',
        value: function getUserInfo(tokenkeyPair) {
            var self = this;
            var userInfoPromise = new Promise(function (resolve, reject) {
                self.oauth.get(self.uri + '/1/members/me', tokenkeyPair.accessToken, tokenkeyPair.accessTokenSecrete, function (error, data, response) {
                    if (!error) {
                        resolve(data);
                    } else {
                        reject(error);
                    }
                });
            });

            return userInfoPromise;
        }
    }, {
        key: 'getUserTrelloBoards',
        value: function getUserTrelloBoards(tokenInfo) {
            var self = this;
            var userBoardsPromise = new Promise(function (resolve, reject) {
                self.oauth.get(self.uri + '/1/members/me/boards', tokenInfo.accToken, tokenInfo.accTokenSecrete, function (err, data, response) {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject({ 'error': err });
                    }
                });
            });

            return userBoardsPromise;
        }
    }, {
        key: 'getBoardLists',
        value: function getBoardLists(boardIdAndTokenInfo) {
            var self = this;
            var boardlistsPromise = new Promise(function (resolve, reject) {
                self.oauth.get(self.uri + '/1/boards/' + boardIdAndTokenInfo.boardId + '/lists', boardIdAndTokenInfo.tokenInfo.accToken, boardIdAndTokenInfo.tokenInfo.accTokenSecrete, function (err, data, response) {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject({ 'error': err });
                    }
                });
            });

            return boardlistsPromise;
        }
    }, {
        key: 'getCardsOnList',
        value: function getCardsOnList(boardListAndTokenInfo) {
            var self = this;
            var cardsOnListPromise = new Promise(function (resolve, reject) {
                self.oauth.get(self.uri + '/1/lists/' + boardListAndTokenInfo.listId + '/cards', boardListAndTokenInfo.tokenInfo.accToken, boardListAndTokenInfo.tokenInfo.accTokenSecrete, function (err, data, response) {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject({ 'error': err });
                    }
                });
            });
            return cardsOnListPromise;
        }
    }]);

    return Queries;
}();

module.exports.Queries = Queries;