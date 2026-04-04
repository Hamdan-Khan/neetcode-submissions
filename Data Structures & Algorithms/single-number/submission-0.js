class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let result = 0;
        for( const num of nums ){
            result = result ^ num
        }
        return result
    }
}
