class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for(let i =0; i<nums.length;i++){
                count[nums[i]] = (count[nums[i]] || 0 ) + 1;
        }
        let frequency = Object.entries(count);

        frequency.sort((a,b)=>b[1]-a[1]);

        return frequency.slice(0,k).map(value=>value[0])
    }
}
