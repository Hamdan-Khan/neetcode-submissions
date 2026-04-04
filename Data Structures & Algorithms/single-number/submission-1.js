class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let result = 0;
        // XOR - bitwise operator
        // returns 0 if find a duplicate e.g 3 ^ 3 would look like:
        // 11 ^ 11 = 00
        // returns 1 (not integer but bit) otherwise e.g 3 ^ 4 = 7
        // 11 ^ 100 = 111 
        // when it comes to finding duplicate, XOR is the goto
        for( const num of nums ){
            result = result ^ num
        }
        return result
    }
}
