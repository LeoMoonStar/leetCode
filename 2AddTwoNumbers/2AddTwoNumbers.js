/**
 * Definition for singly-linked list. */
  function ListNode(val) {
      this.val = val;
     this.next = null;
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * 1+2=3
 * 1->1 +2->0 = 3 -> 1
 * 
 * 2->4->3 +5->6= 7->
 * 
 */

var addTwoNumbers = function(l1, l2) {

    if(l1.next!=null&&l2.next==null){// 1->2 + 5 = 6 -> 2
        var head=ListNode
    }
    if(l1.next==null&&l2.next==null){// a + b
        if(l1.val+l2.val>10){// 5 + 7= 2 -> 1
            var head=ListNode((l1.val+l2.val)%10);
            head.next=ListNode(1);
            return head;
        }
        else{
            return ListNode(l1.val+l2.val);// 3 + 2 -> 5
        }      
    }
};