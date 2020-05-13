/**
 * A data structure, similar to Stack, that follows the FIFO order
 *
 * Ex) Uploading resources, line at disneyland, printing/task processing
 *
 * Can be created using arrays (which hide the work behind the scenes using shift and unshift) or LLs
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
