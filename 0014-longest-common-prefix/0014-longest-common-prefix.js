/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let arr = [];
    
    for (let i in strs[0]) {
        let set = new Set();
        
        strs.forEach(e => {
            set.add(e[i]);
        });
        
        if (set.size === 1) {
            arr.push(...set);
        } else {
            break;
        }
    }
    
    return arr.join('');
};