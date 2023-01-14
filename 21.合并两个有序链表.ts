/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const values: number[] = [];
    while (list1 || list2) {
        list1 && (values.push(list1.val), list1 = list1.next);
        list2 && (values.push(list2.val), list2 = list2.next);
    }
    values.sort((a, b) => a - b);
    let head: ListNode = null, q: ListNode = null;
    for (const item of values) {
        let p = new ListNode(item);
        if (head === null) {
            head = p;
            q = head;
        } else {
            q.next = p;
            q = p;
        }
    }
    return head;
};
// @lc code=end

