/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let node: ListNode = new ListNode(0,head);
    let p: ListNode = node, q: ListNode = node;
    while (n >= 0) {
        p = p.next;
        n--;
    }
    while (p) {
        q = q.next;
        p = p.next;
    }
    q.next = q.next.next;
    return node.next;
};
// @lc code=end

