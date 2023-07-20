const getIntersectionNode = (headA, headB) => {
  let ptrA = headA;
  let ptrB = headB;

  while (ptrA !== ptrB) {
    // Move both pointers forward one step
    ptrA = ptrA ? ptrA.next : headB;
    ptrB = ptrB ? ptrB.next : headA;
  }

  // If they meet at an intersection, either ptrA or ptrB will be the intersection node.
  // Otherwise, they will both be null indicating no intersection.
  return ptrA;
};

// Example 1
const intersectionNode1 = getIntersectionNode(listA1, listB1);
if (intersectionNode1) {
  console.log("Intersected at:", intersectionNode1.val);
} else {
  console.log("No intersection");
}

// Example 2
const intersectionNode2 = getIntersectionNode(listA2, listB2);
if (intersectionNode2) {
  console.log("Intersected at:", intersectionNode2.val);
} else {
  console.log("No intersection");
}

// Example 3
const intersectionNode3 = getIntersectionNode(listA3, listB3);
if (intersectionNode3) {
  console.log("Intersected at:", intersectionNode3.val);
} else {
  console.log("No intersection");
}
