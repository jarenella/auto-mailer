const userKeys = require('../userKeys/userKeys');

function containsKey(key) {
    let containsKey = false;
    for (i=0; i<userKeys.length; i++) {
        if (key == userKeys[i]) {
            containsKey = true;
            break
        }
    }
    return containsKey;
}

module.exports = containsKey;