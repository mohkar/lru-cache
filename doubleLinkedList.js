

class DoubleLinkedList {

	constructor(size) {
		this.head = null
		this.tail = null		
		this.size = size
		this.currentSize = 0
	}

	moveToHead(node) {
		if (this.head === node) {
			return
		}

		if (this.tail == node) {
			this.tail = node.prev
		}

		var prevNode = node.prev
		prevNode.next = node.next
		node.prev = null
		node.next = head
		head = node
	}

	removeFromLast() {
		if (this.tail !== null) {
			var lastNode = this.tail
			var lastNodeVal = lastNode.val
			this.tail = lastNode.prev
			this.currentSize--
			lastNode = null
			return lastNodeVal
		}	
	}

	insertToHead(node) {

		if (this.tail == null) {
			this.tail = node
		}

		if (this.currentSize < this.size) {
			node.next = this.head
			this.head = node
			this.currentSize++	
		} else {
			removeFromLast()
			insertToHead(node)
		}
	}

}

module.exports = DoubleLinkedList
