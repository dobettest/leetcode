/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
    let q:ListNode=null;
    while (head) {
        let p:ListNode=new ListNode(head.val);
        if(q===null){
            q=p;
        }else{
            p.next=q;
            q=p;
        }
        head=head.next;
    }
    return q;
};
// @lc code=end

