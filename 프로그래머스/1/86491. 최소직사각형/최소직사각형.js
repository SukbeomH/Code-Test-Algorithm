function solution(sizes) {
    let width = []; 
    let height = [];
    
    sizes
        .map((ele) => ele.sort((a, b) => b - a))
        .forEach(([w, h]) => {
            width.push(w);
            height.push(h);
        })
    
    width.sort((a, b) => b - a);
    height.sort((a, b) => b - a);
    
    return width[0] * height[0];
}