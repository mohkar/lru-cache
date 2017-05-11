class Node {

	constructor(val) {
		this.prev = null
		this.val = val
		this.next = null
	}

	getPrev() {
		this.prev
	}

	getNext() {
		this.next
	}

	getVal() {
		this.val
	}

	setVal(val) {
		this.val = val
	}

}

module.exports = Node