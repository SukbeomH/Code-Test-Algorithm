class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(val) {
        this.queue[this.rear++] = val;
    }

    dequeue() {
        const val = this.queue[this.front++];
        return val;
    }

    getMax() {
        return Math.max(...this.queue.slice(this.front));
    }

    size() {
        return this.rear - this.front;
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    let count = 0;
    let order = location;
    priorities.forEach((v) => queue.enqueue(v));

    while (true) {
        const max = queue.getMax();
        const value = queue.dequeue();
        if (value === max) {
            count++;
            if (order === 0) break;
        } else {
            queue.enqueue(value);
        }
        order = order === 0 ? queue.size() - 1 : order - 1;
    }
    return count;
}