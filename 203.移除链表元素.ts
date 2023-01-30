/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let node: ListNode = new ListNode(0, head);
    let p: ListNode = node;
    while (head) {
        if (head.val === val) {
            p.next = head.next;
        } else {
            p = p.next;
        }
        head = head.next;
    }
    return node.next;
};
// @lc code=end

