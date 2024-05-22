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


listHead.append(2);
listHead.append(232);
listHead.prepend("dasd");
listHead.append(323);
listHead.prepend("Otro resultado exitoso");

console.log(listHead.toString());
console.log("");
console.log(listHead.at(0));
console.log(listHead.at("1"));
console.log(listHead.at(2));
console.log(listHead.at(3));
console.log(listHead.at(999));
console.log(listHead.at("-1"));
console.log(listHead.at(listHead.size() - 1));