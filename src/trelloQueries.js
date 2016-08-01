class Queries {
    constructor(oauth) {
        this.uri = "https://api.trello.com";
        this.oauth = oauth
    }

    getUserInfo(tokenkeyPair) {
        var self = this;
        var userInfoPromise = new Promise(function (resolve, reject) {
            self.oauth.get(
                `${self.uri}/1/members/me`,
                tokenkeyPair.accessToken,
                tokenkeyPair.accessTokenSecrete,
                function (error, data, response) {
                    if (!error) {
                        resolve(data);
                    } else {
                        reject(error);
                    }
                });
        });

        return userInfoPromise;
    };

    getUserTrelloBoards(tokenInfo) {
        var self = this;
        var userBoardsPromise = new Promise(function (resolve, reject) {
            self.oauth.get(
                `${self.uri}/1/members/me/boards`,
                tokenInfo.accToken,
                tokenInfo.accTokenSecrete,
                function (err, data, response) {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject({ 'error': err });
                    }
                }
            );
        });

        return userBoardsPromise;
    };

    getBoardLists(boardIdAndTokenInfo) {
        var self = this;
        var boardlistsPromise = new Promise(function (resolve, reject) {
            self.oauth.get(
                `${self.uri}/1/boards/${boardIdAndTokenInfo.boardId}/lists`,
                boardIdAndTokenInfo.tokenInfo.accToken,
                boardIdAndTokenInfo.tokenInfo.accTokenSecrete,
                function (err, data, response) {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject({ 'error': err });
                    }
                }
            );
        });

        return boardlistsPromise;
    };

    getCardsOnList(boardListAndTokenInfo) {
        var self = this;
        var cardsOnListPromise = new Promise(function (resolve, reject) {
            self.oauth.get(
                `${self.uri}/1/lists/${boardListAndTokenInfo.listId}/cards`,
                boardListAndTokenInfo.tokenInfo.accToken,
                boardListAndTokenInfo.tokenInfo.accTokenSecrete,
                function (err, data, response) {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject({ 'error': err });
                    }
                }
            );
        });
        return cardsOnListPromise;
    };
}

module.exports.Queries = Queries;