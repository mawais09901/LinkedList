import { Node } from "./Node.js";
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      count += 1;
    }
    return count;
  }

  headNode() {
    return this.head;
  }

  tailNode() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    let targetNode = this.head;
    for (let i = 0; i < index; i++) {
      targetNode = targetNode.next;
    }
    return targetNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      let popped = this.head;
      this.head = null;
      return popped;
    }

    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const popped = currentNode.next;
    currentNode.next = null;
    return popped;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.next;
      index += 1;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    const newNode = new Node(value);

    if (index === 0 || !this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let count = 0;

    while (currentNode && count < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    newNode.next = currentNode;
    previousNode.next = newNode;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;

    let previousNode = null;
    let count = 0;
    while (currentNode && count < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    if(!currentNode) return;
    previousNode.next = currentNode.next;
  }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
list.removeAt(6);
console.log(list.toString());
