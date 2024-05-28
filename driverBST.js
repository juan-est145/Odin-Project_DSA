const { BinaryTree, prettyPrint } = require('./balancedBST');

function randomArray(size = 11) {
	return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

const myTree = new BinaryTree(randomArray());
const newValues = randomArray();
prettyPrint(myTree.root);
console.log(myTree.isBalanced());
console.log(myTree.levelOrder());
console.log(myTree.preOrder());
console.log(myTree.postOrder());
console.log(myTree.inOrder());
newValues.forEach((item) => myTree.insert(item));
prettyPrint(myTree.root);
console.log(myTree.isBalanced());
let isBalanced = myTree.isBalanced();
if (isBalanced === false) {
	myTree.rebalance();
	prettyPrint(myTree.root);
	console.log(myTree.isBalanced());
}
console.log(myTree.levelOrder());
console.log(myTree.preOrder());
console.log(myTree.postOrder());
console.log(myTree.inOrder());