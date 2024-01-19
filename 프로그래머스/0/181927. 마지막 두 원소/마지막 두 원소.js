function solution(num_list) {
    const copy = num_list;
    const length = num_list.length;
    
    if (num_list[length - 1] > num_list[length - 2]) {
        copy.push(num_list[length - 1] - num_list[length - 2]);
    } else {
        copy.push(2 * num_list[length - 1]);
    }
    
    return copy;
}