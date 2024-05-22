class Node {
	constructor() {
		this.value = null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.listHead = null;
		this.#listSize = 0;
	}
	#listSize;
	append(value) {
		if (this.listHead === null) {
			this.listHead = new Node();
			this.listHead.value = value;
			this.#listSize++;
			return;
		}
		let temp = this.listHead;
		while (temp.next != null)
			temp = temp.next;
		temp.next = new Node();
		temp.next.value = value;
		this.#listSize++;
	}
	prepend(value) {
		if (this.listHead === null) {
			this.listHead = new Node();
			this.listHead.value = value;
			this.#listSize++;
			return;
		}
		const newNode = new Node();
		newNode.value = value;
		newNode.next = this.listHead;
		this.listHead = newNode;
		this.#listSize++;
	}
	size() {
		return (this.#listSize);
	}
	head() {
		return (this.listHead);
	}
	toString() {
		let temp = this.listHead;
		let string = "";
		while (temp != null) {
			string += `( ${temp.value} ) -> `;
			temp = temp.next;
		}
		string += "null";
		return (string);
	}
}

const listHead = new LinkedList();

console.log(listHead.size());

listHead.append(2);
listHead.append(232);
listHead.prepend("dasd");

console.log(listHead.size());

console.log(listHead.head());

