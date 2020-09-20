export default class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error("Next node must be member of Node class");
    }
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}
