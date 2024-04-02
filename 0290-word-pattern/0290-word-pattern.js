/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let answer = true;
    const type = [...pattern];
    const word = s.split(" ");
    let map = new Map();
    
    if (type.length !== word.length) {
        return false;
    }
    if (new Set(word).size !== new Set(type).size) {
        return false;
    }
    for (let i in type) {
        if (map.has(type[i]) && map.get(type[i]) != word[i]) {
            return false;
        }
        map.set(type[i], word[i]);
    }
    
    return true;
};