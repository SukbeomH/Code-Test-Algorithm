/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let hour = "";
    let min = "";
    const temp = time.split(":");
    const maxH = 23;
    const maxM = 59;
    let i = 9;
    
    if (temp[0] === "??") {
        hour = maxH;
    }
    if (temp[1] === "??") {
        min = maxM;
    }
    
    while (hour === "" || min === "") {
        if (Number(temp[0].replace("?", i)) <= maxH && hour === "") {
            hour = temp[0].replace("?", i);
        }
        if (Number(temp[1].replace("?", i)) <= maxM && min === "") {
            min = temp[1].replace("?", i);
        }
        i--;
    }
    
    return hour + ":" + min
};