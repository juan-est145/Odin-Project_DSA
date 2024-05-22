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
}

const head = new LinkedList();

//console.log(head);

head.append(32);
head.append(433);
head.append(932);
head.append(312);

console.log(head);