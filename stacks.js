"use strict";

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be top
        of the stack. */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, then create a
        new node, add data to the new node, and have the pointer
        point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have
        to point the pointer to the next item and that next item
        becomes the top of the stack */
    /* If the stack is empty, then the node will be top
        of the stack. */
    if (this.top === null) {
      return null;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

// Helper functions
function peek(stack) {
  if (!stack.top) return null;
  return stack.top.data;
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(stack) {
  let currNode = stack.top;
  if (isEmpty(stack)) {
    console.log("Empty Stack");
    return;
  }
  while (currNode.next !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
  console.log(currNode.data);
}

function main() {
  /* Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack. */
  let starTrek = new Stack();
  console.log(starTrek);
  var newItems = ["Kirk", "Spock", "McCoy", "Scotty"];
  for (let i of newItems) {
    starTrek.push(i);
    console.log(starTrek);
  }

  console.log(peek(starTrek));
  console.log(isEmpty(starTrek));
  display(starTrek);
  let emptyStack = new Stack();
  console.log(`\n########\nisEmpty(emptyStack)`);
  console.log(emptyStack);
  console.log(isEmpty(emptyStack));
  display(emptyStack);

  starTrek.pop("McCoy");
  console.log(starTrek);
}

main();

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let palindrome_test = new Stack();
  // Insert elements
  for (let letter of s) {
    palindrome_test.push(letter);
  }
  let reversed_string = "";
  while (palindrome_test.top !== null) {
    reversed_string += palindrome_test.pop();
  }

  return s == reversed_string;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function matchingParens(str) {
  const stack = new Stack();
  let open_position = new Stack();
  if (!str) return null;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
      open_position.push(i);
    }
    if (str[i] === ")") {
      if (stack.pop() === null) {
        console.log(`Found ")" at position ${i} you are missing an "("`);
        return false;
      }
      open_position.pop();
    }
  }

  if (isEmpty(open_position)) {
    return true;
  } else {
    console.log(open_position);
    console.log(
      `Found "(" at position ${open_position.top.data} you are missing a ")"`
    );
    return false;
  }
}

console.log(`\n################################\nmatchingParens\n`);
console.log(matchingParens("3+((3 + 2)"));

function find_max(stack) {
  // find maximum
  let currNode = stack.top;
  let maximum = currNode.data;
  while (currNode.next !== null) {
    currNode = currNode.next;
    if (currNode.data > maximum) {
      maximum = currNode.data;
    }
  }

  return maximum;
}

function sortStack(stack, ascending = true) {
  // Sort stack in ascending order by default
  let tempStack = new Stack();

  if (isEmpty(stack)) {
    console.log(`Can't sort empty stack`);
    return;
  }
  while (!isEmpty(stack)) {
    let tmp = stack.pop();
    if (ascending) {
      while (peek(tempStack) !== null && tmp > peek(tempStack)) {
        stack.push(tempStack.pop());
      }
    } else {
      while (tmp < peek(tempStack)) {
        stack.push(tempStack.pop());
      }
    }
    tempStack.push(tmp);
  }
  return tempStack;
}

let testStack = new Stack();

testStack.push(5);
testStack.push(3);
testStack.push(9);
console.log(`\nNot sorted\n`);
display(testStack);
let sorted = sortStack(testStack);
console.log(`\nSorted\n`);
display(sorted);

testStack = new Stack();
testStack.push(1);
testStack.push(3);
testStack.push(1);
console.log(`\nNot sorted\n`);
display(testStack);
sorted = sortStack(testStack);
console.log(`\nSorted\n`);
display(sorted);
