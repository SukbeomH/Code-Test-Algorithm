function solution(arr, query) {
    let answer = arr;
    query.forEach((ele, idx) => {
        if (idx % 2 === 0){
            answer = answer.slice(0, ele + 1);
        } else {
            answer = answer.slice(ele);
        }
    })
    
    return answer;
}