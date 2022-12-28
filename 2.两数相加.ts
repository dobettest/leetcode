/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let next:number=0;
    let head=new ListNode();
    let p=head;
    while(l1||l2||next){
        let val=next;
        let node=new ListNode();
        if(l1){
            val+=l1.val;
            l1=l1.next;
        }
        if(l2){
            val+=l2.val;
            l2=l2.next;
        }
        node.val=val%10;
        next=Math.floor(val/10);
        p.next=node;
        p=p.next;
    }
    return head.next;
};
// @lc code=end

