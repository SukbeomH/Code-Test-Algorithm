function solution(priorities, location) {
    const copyPriorities = [...priorities]
    const dataset = priorities.map((priority,idx)=>({priority,idx}))
    let excuteCount = 0

    while(dataset.length !== 0){
        const maxValue = Math.max(...copyPriorities)
        const {priority,idx} = dataset.shift()
        if(priority >= maxValue){
            excuteCount++
            copyPriorities[idx] = 0
            if(idx === location){
                break;
            }
        }
        else{
            dataset.push({priority,idx})
        }
    }
    return excuteCount
}