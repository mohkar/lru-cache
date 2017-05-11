var DoubleLinkedList = require("./doubleLinkedList.js")
var Node = require("./node.js")

class LRUCache {
	constructor(size) {
		this.PageMap = {}
		this.PageList = new DoubleLinkedList(size)
	}

	accessPage(pageNumber) {
		if (this.PageMap[pageNumber]) {
			this.PageList.moveToHead(this.PageMap[pageNumber])
		} else {
			if (this.PageList.currentSize < this.PageList.size) {
				var node = new Node(pageNumber)
				this.PageMap[pageNumber] = node
				this.PageList.insertToHead(node)	
			} else {
				var lastPageNumber = this.PageList.removeFromLast()

			}
			
		}
	}

	showStatus() {
		console.log("PageMap: ", this.PageMap, "PageList: ", this.PageList)
	}
}

var Cache = new LRUCache(3)
Cache.accessPage(2)
Cache.showStatus()

Cache.accessPage(9)
Cache.showStatus()

Cache.accessPage(3)
Cache.showStatus()