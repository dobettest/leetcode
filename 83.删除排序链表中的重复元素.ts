/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }
    let fast: ListNode = head.next;
    let slow: ListNode = head;
    while (fast) {
        if (slow.val === fast.val) {
            slow.next = fast.next;
        }else{
            slow=slow.next;
        }
        fast=fast.next;
    }
    return head;
};
// @lc code=end

