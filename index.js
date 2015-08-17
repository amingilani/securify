var Mnemonic = require('bitcore-mnemonic');
var code = new Mnemonic(Mnemonic.Words.ENGLISH);
var hello = code.toString();
console.log(hello);
