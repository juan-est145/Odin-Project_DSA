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
			return ;
		}
		let temp = this.head;
		while (temp.next != null)
			temp = temp.next;
		temp.next = new Node();
		temp.next.value = value;
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

head.append(32);
head.append(433);
head.append(932);
head.append(312);

console.log(head.toString());
console.log(head.toString());