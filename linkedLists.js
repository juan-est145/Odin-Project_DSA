class Node {
	constructor() {
		this.value = null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	append(value) {
		if (this.head === null) {
			this.head = new Node();
			this.head.value = value;
			return;
		}
		let temp = this.head;
		while (temp.next != null)
			temp = temp.next;
		temp.next = new Node();
		temp.next.value = value;
	}
	prepend(value) {
		if (this.head === null) {
			this.head = new Node();
			this.head.value = value;
			return;
		}
		const newNode = new Node();
		newNode.value = value;
		newNode.next = this.head;
		this.head = newNode;
	}
	toString() {
		let temp = this.head;
		let string = "";
		while (temp != null) {
			string += `( ${temp.value} ) -> `;
			temp = temp.next;
		}
		string += "null";
		return (string);
	}
}

const head = new LinkedList();

