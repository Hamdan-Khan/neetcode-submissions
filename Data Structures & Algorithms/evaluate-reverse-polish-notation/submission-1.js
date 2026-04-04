class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        
        for (const t of tokens) {
            if (t === "+") {
                stack.push(stack.pop() + stack.pop());
            } else if (t === "-") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a - b); // Correct order
            } else if (t === "/") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(Math.trunc(a / b)); // Ensure integer division
            } else if (t === "*") {
                stack.push(stack.pop() * stack.pop());
            } else {
                stack.push(parseInt(t));
            }
        }

        return stack[0];
    }
}
