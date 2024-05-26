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
		else if (value === root.value) {
			return (null);
		}
		else if (value < root.data)
			root.left = this.insert(value, root.left);
		else if (value > root.data)
			root.right = this.insert(value, root.right);
		return (root);
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
}

const bST = new BinaryTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(bST.root);
console.log(bST.levelOrder());
bST.levelOrder((item) => {
	item.data *= 2;
});
prettyPrint(bST.root);