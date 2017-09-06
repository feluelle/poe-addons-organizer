const AJAX = require("./ajax");

class PastebinClient {
    constructor() {

    }
    
    getAuthToken() {
        return AJAX.get('https://pastebin.com/raw/8d9TP2wU');
    }

}

module.exports = PastebinClient;