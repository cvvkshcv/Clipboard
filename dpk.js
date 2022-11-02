const crypto = require("crypto");

const createHash = (payload, isString = false) => {
  if (!isString) {
    payload = JSON.stringify(payload);
  }
  // 512 bits -> 64 bytes converted to hex will always give 128 characters.
  return crypto.createHash("sha3-512").update(payload).digest("hex");
};

exports.deterministicPartitionKey = (event) => {
  if (!event) return "0"; // if there is no event return default value
  // if already partitionKey exists return it, else hash the object and return the value
  return event?.partitionKey || createHash(event);
};


/*
  Removed unused if/else conditions which leads to confustion and hard to debug
  created Util method to encrypt the data
  removed MAX_PARTITION_KEY_LENGTH  logic because the createHash will always give 128 chars
    - length string, so the > 256 condition never hits
*/