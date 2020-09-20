import Node from './Node';

export default class LinkedList {  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;

    // if there is current head, setHead to next node
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }

  }

}
