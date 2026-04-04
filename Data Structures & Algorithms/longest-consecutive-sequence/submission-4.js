class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length ==0) return 0;
        let num = nums.sort((a,b)=> a-b);
        let count = 1;
        let longest = 1;
        for (let i = 0; i<num.length;i++){
            if (num[i] == num[i+1]) continue;
            
            if(num[i]+1 == num[i+1]){
                count = count+1;
            }else if( num[i]+1 != num[i+1]){
                count = 1;
            }
            longest = Math.max(count,longest);
        }
        return longest;
    }
}
