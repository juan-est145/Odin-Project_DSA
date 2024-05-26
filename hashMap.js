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
		this.#buckets = new Array(16).fill(null);
	}
	#buckets;
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
		if (keyValue < 0 || keyValue >= this.#buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
		if (this.#buckets[keyValue] === null) {
			this.#buckets[keyValue] = new BucketNode(key, value);
			return;
		}
		let temp = this.#buckets[keyValue];
		while (temp.next != null && temp.getKey() !== key)
			temp = temp.next;
		if (temp.getKey() === key)
			temp.value = value;
		else
			temp.next = new BucketNode(key, value);
	}
	get(key) {
		let hashCode = this.hash(key);
		if (hashCode < 0 || hashCode >= this.#buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
		if (this.#buckets[hashCode] === null)
			return (null);
		let tempNode = this.#buckets[hashCode];
		while (tempNode != null && tempNode.getKey() != key)
			tempNode = tempNode.next;
		return (tempNode === null ? null : tempNode.value);
	}
	has(key) {
		return (this.get(key) === null ? false : true);
	}
	remove(key) {
		let hashCode = this.hash(key);
		if (hashCode < 0 || hashCode >= this.#buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
		if (this.#buckets[hashCode] === null)
			return (false);
		let tempNode = this.#buckets[hashCode];
		let prevNode = null;
		while (tempNode !== null && tempNode.getKey() != key) {
			prevNode = tempNode;
			tempNode = tempNode.next;
		}
		if (tempNode !== null) {
			if (prevNode !== null)
				this.#buckets[hashCode] = tempNode.next;
			else
				prevNode.next = tempNode.next;
			return (true);
		}
		return (false);
	}
	length() {
		let counter = 0;
		let temp;
		this.#buckets.forEach((item) => {
			temp = item;
			while (temp != null) {
				counter++;
				temp = temp.next;
			}
		});
		return (counter);
	}
	clear() {
		this.#buckets.fill(null);
	}
	keys() {
		let temp;
		const result = [];
		this.#buckets.forEach((item) => {
			temp = item;
			while (temp != null) {
				result.push(temp.getKey());
				temp = temp.next;
			}
		});
		return (result);
	}
	values() {
		let temp;
		const result = [];
		this.#buckets.forEach((item) => {
			temp = item;
			while (temp != null) {
				result.push(temp.value);
				temp = temp.next;
			}
		});
		return (result);
	}
	entries () {
		let temp;
		const result = [];
		this.#buckets.forEach((item) => {
			temp = item;
			while (temp != null) {
				const pairs = [];
				pairs.push(temp.getKey());
				pairs.push(temp.value);
				result.push(pairs);
				temp = temp.next;
			}
		});
		return (result);
	}
}