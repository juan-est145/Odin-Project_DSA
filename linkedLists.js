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
	at (index) {
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
			return ;
		if (this.listHead.next === null) {
			this.listHead = null;
			return ;
		}
		let temp = this.listHead;
		while (temp.next.next != null)
			temp = temp.next;
		temp.next = null;
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

listHead.pop();
console.log(listHead.toString());
listHead.append("a");
console.log(listHead.toString());
listHead.pop();
console.log(listHead.toString());
listHead.pop();
console.log(listHead.toString());

listHead.prepend("xd");
console.log(listHead.contains("xd"));
console.log(listHead.contains(false));
listHead.append(false);
console.log(listHead.contains(false));