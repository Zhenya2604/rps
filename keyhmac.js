let cryptoJs = require('crypto-js');

class KeyAndHmac{
    constructor(message, key){
        this.message = message;
        this.key = key;
    }
    
    createKey(){
        return cryptoJs.lib.WordArray.random(256).toString(cryptoJs.enc.Hex);
    }

    getHmac(){
        return cryptoJs.HmacSHA3(this.message, this.key).toString(cryptoJs.enc.Hex);
    }
}
module.exports = KeyAndHmac;