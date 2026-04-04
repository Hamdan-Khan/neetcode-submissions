class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let bMap = {
            "(" : ")",
            "{" : "}",
            "[" : "]"
        }
        let stack = [];

        for (const b of s){
            if(bMap[b] != undefined){
                stack.push(b);
            } else{
                if (b !== bMap[stack[stack.length - 1]]) return false;
                stack.pop();
            }
        }
        return stack.length === 0;
    }
}
