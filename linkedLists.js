class Node {
	constructor() {
		this.value = null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.#listSize = 0;
	}
	#listSize;
	append(value) {
		if (this.head === null) {
			this.head = new Node();
			this.head.value = value;
			this.#listSize++;
			return;
		}
		let temp = this.head;
		while (temp.next != null)
			temp = temp.next;
		temp.next = new Node();
		temp.next.value = value;
		this.#listSize++;
	}
	prepend(value) {
		if (this.head === null) {
			this.head = new Node();
			this.head.value = value;
			this.#listSize++;
			return;
		}
		const newNode = new Node();
		newNode.value = value;
		newNode.next = this.head;
		this.head = newNode;
		this.#listSize++;
	}
	size() {
		return (this.#listSize);
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

console.log(head.size());

head.append(2);
head.append(232);
head.prepend("dasd");

console.log(head.size());


