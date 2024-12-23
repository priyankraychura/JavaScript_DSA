let queue = [1, 2, 3, 4, 5, 6, 7];

function reverseQueue() {
    let stack = [];
    
    while (queue.length > 0) {
        stack.push(queue.shift());
    }
    
    while (stack.length > 0) {
        queue.push(stack.pop());
    }
    
    return queue;
}

console.log(reverseQueue());

// STEP BY STEP EXPLANATION:
// 1. Create empty stack
// 2. While queue is not empty, push elements from queue to stack
// 3. While stack is not empty, push elements from stack to queue
// 4. Return queue