'use strict';
// Creates a node containing the data and a reference to the next
// item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        // if the queue is empty, there is nothing
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = this.first.next;
        // if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }

        return node.value;
    }
}

// Implement a peek() function outside of the Queue class that lets you take 
// a peek at what the 1st item in the queue is.
function peek(queue) {
    // If the queue is empty return nothing
    if (queue.first === null) return null;
    return queue.first.value;
}

// Implement a isEmpty() function outside the Queue class that allows
// you to check if the queue is empty or not
function isEmpty(queue) {
    return queue.first === null;
}

// Implement a display() function outside of the Queue class that
// lets you display what's in the queue.
function display(queue) {
    // Create a copy of the object and clonet to keep reference
    var tmpQueue = Object.create(queue);
    if (tmpQueue.first === null) {
      console.log(`Queue is empty`);
    }
    // Check display first element and dequeue
    while (!isEmpty(tmpQueue)) {
      console.log(peek(tmpQueue));
      tmpQueue.dequeue();
    }
}

// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, 
// and Checkov to the queue
let starTrekQ = new Queue();
starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
console.log(starTrekQ);
console.log(`\n################PEEK################`)
console.log(peek(starTrekQ));
console.log(isEmpty(starTrekQ));
console.log(`\n################DISPLAY################`);
display(starTrekQ);
// Empty queue
let emptyQueue = new Queue();
console.log(`\n################EMPTY################`);
console.log(peek(emptyQueue));
console.log(isEmpty(emptyQueue))

function removeElement(queue, element) {
    let newQueue = new Queue();
    while (!isEmpty(queue)) {
        if (peek(queue) !== element) {
            newQueue.enqueue(peek(queue));
        }
        queue.dequeue();
    }

    return newQueue;
}

// Remove Spock from the queue and display the resulting queue.
console.log(`\n################REMOVE SPOCK################`);
let rspQueue = removeElement(starTrekQ, 'Spock');
display(rspQueue);