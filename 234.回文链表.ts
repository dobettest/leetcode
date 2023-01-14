/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
    const values: number[] = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    for (let i = 0, j = values.length - 1; i < j; i++, j--) {
        if (values[i] !== values[j]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

