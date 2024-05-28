const prettyPrint = (node, prefix = "", isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
	}
	console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
	}
};

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor(array) {
		array = array.filter((value, index) => array.indexOf(value) === index).sort((a, b) => a - b);
		this.root = this.buildTree(array);
	}
	buildTree(array) {
		if (array.length <= 0)
			return (null);
		if (array.length === 1)
			return (new TreeNode(array[0]));
		let midPoint = Math.floor((array.length) / 2);
		const root = new TreeNode(array[midPoint]);
		root.left = this.buildTree(array.slice(0, midPoint))
		root.right = this.buildTree(array.slice(midPoint + 1, array.length));
		return (root);
	}
	insert(value, root = this.root) {
		if (root === null)
			return (new TreeNode(value));
		else if (value === root.value)
			return (null);
		else if (value < root.data)
			root.left = this.insert(value, root.left);
		else if (value > root.data)
			root.right = this.insert(value, root.right);
		return (root);
	}
	deleteItem(value, root = this.root) {
		if (root === null)
			return (null);
		else if (root.data === value && root.left === null && root.right === null)
			return (null);
		else if (root.data === value) {
			if (root.left !== null && root.right === null)
				return (root.left);
			else if (root.right !== null && root.left === null)
				return (root.right);
			root.data = this.minValue(root.right);
			root.right = this.deleteItem(root.data, root.right);
		}
		else if (value < root.data)
			root.left = this.deleteItem(value, root.left);
		else if (value > root.data)
			root.right = this.deleteItem(value, root.right);
		return (root);
	}
	minValue(root = this.root) {
		let temp = root;
		let result = null;
		while (temp !== null) {
			result = temp.data;
			temp = temp.left;
		}
		return (result);
	}
	maxValue(root = this.root) {
		let temp = root;
		let result = null;
		while (temp !== null) {
			result = temp.data;
			temp = temp.right;
		}
		return (result);
	}
	find(value, root = this.root) {
		if (root === null)
			return (null);
		else if (value === root.data)
			return (root);
		else if (value < root.data)
			return (this.find(value, root.left));
		return (this.find(value, root.right));
	}
	levelOrder(callback, root = this.root) {
		if (root === null)
			return (null);
		const queue = [];
		const result = [];
		queue.push(root);
		while (queue.length !== 0) {
			if (queue[0].left !== null)
				queue.push(queue[0].left);
			if (queue[0].right !== null)
				queue.push(queue[0].right);
			let currentNode = queue.shift();
			if (callback)
				callback(currentNode);
			else
				result.push(currentNode.data);
		}
		if (!callback)
			return (result);
	}
	inOrder(callback, root = this.root) {
		if (root === null)
			return ([]);
		let result = [];
		result = result.concat(this.inOrder(callback, root.left));
		if (callback)
			callback(root);
		else
			result.push(root.data);
		result = result.concat(this.inOrder(callback, root.right));
		if (!callback)
			return (result);
		return ([]);
	}
	preOrder(callback, root = this.root) {
		if (root === null)
			return ([]);
		let result = [];
		if (callback)
			callback(root);
		else
			result.push(root.data);
		result = result.concat(this.preOrder(callback, root.left));
		result = result.concat(this.preOrder(callback, root.right));
		if (!callback)
			return (result);
		return ([]);
	}
	postOrder(callback, root = this.root) {
		if (root === null)
			return ([]);
		let result = [];
		result = result.concat(this.postOrder(callback, root.left));
		result = result.concat(this.postOrder(callback, root.right));
		if (callback)
			callback(root);
		else
			result.push(root.data);
		if (!callback)
			return (result);
		return ([]);
	}
	height(node = this.root) {
		if (node === null)
			return (-1);
		let leftHeight = this.height(node.left);
		let rightHeight = this.height(node.right);
		return (Math.max(leftHeight, rightHeight) + 1);
	}
	depth(node, root = this.root) {
		let counter = 0;
		if (node === null)
			return (0);
		else if (node.data === root.data)
			return (counter)
		else if (node.data < root.data)
			counter = this.depth(node, root.left) + 1;
		else if (node.data > root.data)
			counter = this.depth(node, root.right) + 1;
		return (counter);
	}
}

//const bST = new BinaryTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const bST = new BinaryTree([20, 40, 30, 50, 70, 80]);
prettyPrint(bST.root);
const newNode = new BinaryTree([42]);
bST.insert(newNode.root.data);
prettyPrint(bST.root);
console.log(bST.depth(newNode.root));
console.log(bST.height());