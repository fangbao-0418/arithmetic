console.log('====== 2. 删除链表的倒数第N个节点 ======');
// 示例：

// 2. 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}
var removeNthFromEnd = function(head, n) {
    // your code
    var temp = { next: head }
    var p1 = temp
    var p2 = temp
    while (p1.next) {
        if (--n < 0) {
           p2 = p2.next
        }
        p1 = p1.next
    }
    p2.next = p2.next.next
    console.log(temp.next)
    return temp.next
}

removeNthFromEnd(head, 1)

console.log('====== 3. 一个请求控制函数 ======');