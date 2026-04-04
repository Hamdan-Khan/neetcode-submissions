class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let sArr = s.split("");
        let size = sArr.length;
        let stack = [];
        let map = {
            "}":"{",
            "]":"[",
            ")":"(",
        }
        for (let i = 0; i<size ;i++){
            let e = sArr[i]
            if (!(e in map)){
                stack.push(e);
                continue;
            }
            if (map[e] == stack[stack.length - 1]){
                stack.pop();
                continue;
            }
            return false;
        }
        return stack.length == 0;
    }
}
