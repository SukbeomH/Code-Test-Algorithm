/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let hour = "";
    let min = "";
    const maxH = 23;
    const maxM = 59;
    let i = 9;
    
    if (time.split(":")[0] === "??") {
        hour = maxH;
    }
    if (time.split(":")[1] === "??") {
        min = maxM;
    }
    
    while (hour === "" || min === "") {
        const temp = time;
        const hm = temp.replaceAll("?", i).split(":");
        if (Number(hm[0]) <= maxH && hour === "") {
            hour = hm[0];
        }
        if (Number(hm[1]) <= maxM && min === "") {
            min = hm[1];
        }
        i--;
    }
    
    return hour + ":" + min
};