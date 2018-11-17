'use strict';

var fcash = module.exports;

// module information
fcash.version = 'v' + require('./package.json').version;
fcash.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of fcash-lib found. ' +
      'Please make sure to require fcash-lib and check that submodules do' +
      ' not also include their own fcash-lib dependency.';
    throw new Error(message);
  }
};
fcash.versionGuard(global._fcash);
global._fcash = fcash.version;

// crypto
fcash.crypto = {};
fcash.crypto.BN = require('./lib/crypto/bn');
fcash.crypto.ECDSA = require('./lib/crypto/ecdsa');
fcash.crypto.Hash = require('./lib/crypto/hash');
fcash.crypto.Random = require('./lib/crypto/random');
fcash.crypto.Point = require('./lib/crypto/point');
fcash.crypto.Signature = require('./lib/crypto/signature');

// encoding
fcash.encoding = {};
fcash.encoding.Base58 = require('./lib/encoding/base58');
fcash.encoding.Base58Check = require('./lib/encoding/base58check');
fcash.encoding.BufferReader = require('./lib/encoding/bufferreader');
fcash.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
fcash.encoding.Varint = require('./lib/encoding/varint');

// utilities
fcash.util = {};
fcash.util.buffer = require('./lib/util/buffer');
fcash.util.js = require('./lib/util/js');
fcash.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
fcash.errors = require('./lib/errors');

// main bitcoin library
fcash.Address = require('./lib/address');
fcash.Block = require('./lib/block');
fcash.MerkleBlock = require('./lib/block/merkleblock');
fcash.BlockHeader = require('./lib/block/blockheader');
fcash.HDPrivateKey = require('./lib/hdprivatekey.js');
fcash.HDPublicKey = require('./lib/hdpublickey.js');
fcash.Networks = require('./lib/networks');
fcash.Opcode = require('./lib/opcode');
fcash.PrivateKey = require('./lib/privatekey');
fcash.PublicKey = require('./lib/publickey');
fcash.Script = require('./lib/script');
fcash.Transaction = require('./lib/transaction');
fcash.URI = require('./lib/uri');
fcash.Unit = require('./lib/unit');

// dependencies, subject to change
fcash.deps = {};
fcash.deps.bnjs = require('bn.js');
fcash.deps.bs58 = require('bs58');
fcash.deps.Buffer = Buffer;
fcash.deps.elliptic = require('elliptic');
fcash.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
fcash.Transaction.sighash = require('./lib/transaction/sighash');
