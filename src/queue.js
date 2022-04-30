const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.queue = new ListNode()
  }

  getUnderlyingList() {
    return this.queue
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    let head = this.queue;
    if (!head.value) {
      head.value = value;
      return this.queue;
    }
    
    let tail = this.queue;
    while (tail.next) {
      tail = tail.next;
     }
     tail.next = newNode;
     return this.queue;
  }

  dequeue() {
    let el = this.queue.value;    
    this.queue = this.queue.next;
    return el;
  }
}

module.exports = {
  Queue
};
