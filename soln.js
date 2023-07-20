/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const getLength = (node) => {
  let length = 0;
  while (node) {
    length++;
    node = node.next;
  }
  return length;
};

const getIntersectionNode = (headA, headB) => {
  const lengthA = getLength(headA);
  const lengthB = getLength(headB);
  let diff = Math.abs(lengthA - lengthB);

  let longerList = lengthA > lengthB ? headA : headB;
  while (diff > 0) {
    longerList = longerList.next;
    diff--;
  }

  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }

  return null;
};

// Example 1
const intersectVal1 = 8;
const listA1 = new ListNode(
  4,
  new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5))))
);
const listB1 = new ListNode(
  5,
  new ListNode(6, new ListNode(1, listA1.next.next))
);
const skipA1 = 2;
const skipB1 = 3;

let intersectionNode1 = getIntersectionNode(listA1, listB1);
if (intersectionNode1) {
  console.log("Intersected at:", intersectionNode1.val);
} else {
  console.log("No intersection");
}

// Example 2
const intersectVal2 = 2;
const listA2 = new ListNode(
  1,
  new ListNode(9, new ListNode(1, new ListNode(2, new ListNode(4))))
);
const listB2 = new ListNode(3, new ListNode(2, listA2.next.next.next));
const skipA2 = 3;
const skipB2 = 1;

let intersectionNode2 = getIntersectionNode(listA2, listB2);
if (intersectionNode2) {
  console.log("Intersected at:", intersectionNode2.val);
} else {
  console.log("No intersection");
}

// Example 3
const intersectVal3 = 0;
const listA3 = new ListNode(2, new ListNode(6, new ListNode(4)));
const listB3 = new ListNode(1, new ListNode(5));
const skipA3 = 3;
const skipB3 = 2;

let intersectionNode3 = getIntersectionNode(listA3, listB3);
if (intersectionNode3) {
  console.log("Intersected at:", intersectionNode3.val);
} else {
  console.log("No intersection");
}
