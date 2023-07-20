class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const getIntersectionNode = function (headA, headB) {
  let a = headA,
    b = headB;
  while (a !== b) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }
  return a;
};

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
