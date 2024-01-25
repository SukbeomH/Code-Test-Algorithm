function solution(sizes) {
    let width = 0; 
    let height = 0;
    
    sizes
        .map((ele) => ele.sort((a, b) => b - a))
        .forEach(([w, h]) => {
            if (w > width) width = w;
            if (h > height) height = h;
        })
    
    return width * height;
}