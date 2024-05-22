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
	tail() {
		let temp = this.listHead;
		while (temp.next != null)
			temp = temp.next;
		return (temp);
	}
	at(index) {
		let number = parseInt(index);
		if (!Number.isInteger(number) || number < 0)
			return (null);
		let temp = this.listHead;
		for (let i = 0; i < number; i++) {
			if (temp === null)
				return (null);
			temp = temp.next;
		}
		return (temp);
	}
	pop() {
		if (this.listHead === null)
			return;
		if (this.listHead.next === null) {
			this.listHead = null;
			this.#listSize--;
			return;
		}
		let temp = this.listHead;
		while (temp.next.next != null)
			temp = temp.next;
		temp.next = null;
		this.#listSize--;
	}
	contains(value) {
		let temp = this.listHead;
		while (temp != null) {
			if (temp.value === value)
				return (true);
			temp = temp.next;
		}
		return (false);
	}
	find(value) {
		let temp = this.listHead;
		for (let i = 0; i < this.#listSize; i++) {
			if (temp.value === value)
				return (i);
			temp = temp.next;
		}
		return (null);
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
	insertAt(value, index) {
		let number = parseInt(index);
		let temp = this.listHead;
		if (!Number.isInteger(number) || number < 0)
			return (null);
		if (number === 0) {
			this.prepend(value);
			return;
		}
		for (let i = 0; i < this.#listSize; i++) {
			if (i === index - 1) {
				let newNode = new Node();
				newNode.value = value;
				newNode.next = temp.next;
				temp.next = newNode;
				this.#listSize++;
				return (newNode);
			}
			temp = temp.next;
		}
		return (null);
	}
	removeAt(index) {
		let number = parseInt(index);
		let temp = this.listHead;
		if (!Number.isInteger(number) || number < 0)
			return (null);
		if (this.listHead === null)
			return (null);
		if (number === 0) {
			this.listHead = this.listHead.next;
			this.#listSize--;
			return ;
		}
		for (let i = 0; i < this.#listSize; i++) {
			if (i === index - 1) {
				temp.next = temp.next.next;
				this.#listSize--;
				return ;
			}
			temp = temp.next;
		}
		return (null);
	}
}

const listHead = new LinkedList();

listHead.append("d");
listHead.append(232);
listHead.append(42);
listHead.append(true);

console.log(listHead.toString());
