class BucketNode {
	constructor(key, value) {
		this.#key = key;
		this.value = value;
		this.next = null;
	}
	#key;
	getKey() {
		return (this.#key);
	}
}

class HashMap {
	constructor() {
		this.#array = new Array(16).fill(null);
	}
	#array;
	hash(key) {
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
		}
		return hashCode;
	}
	set(key, value) {
		let keyValue = this.hash(key);
		if (this.#array[keyValue] === null) {
			this.#array[keyValue] = new BucketNode(key, value);
			return;
		}
		let temp = this.#array[keyValue];
		while (temp.next != null && temp.getKey() !== key)
			temp = temp.next;
		if (temp.getKey() === key)
			temp.value = value;
		else
			temp.next = new BucketNode(key, value);
	}
	get(key) {
		let hashCode = this.hash(key);
		if (this.#array[hashCode] === null)
			return (null);
		let tempNode = this.#array[hashCode];
		while (tempNode != null && tempNode.getKey() != key)
			tempNode = tempNode.next;
		return (tempNode === null ? null : tempNode.value);
	}
	has(key) {
		return (this.get(key) === null ? false : true);
	}
}