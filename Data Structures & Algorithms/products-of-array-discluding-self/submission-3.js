class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProd = 1;
        let prefixes = [];
        nums.forEach((_,i)=>{
            prefixProd *= (nums[i-1] ?? 1)
            prefixes[i] = prefixProd;
        })
        
        let suffixProd = 1;
        let suffixes = [];
        for (let i = nums.length - 1; i >= 0; i--){
            suffixProd *= (nums[i+1] ?? 1);
            suffixes[i] = suffixProd;
        }

        let result = [];
        prefixes.forEach((p,i)=>{
            result[i] = p * suffixes[i];
        })

        return result;
    }
}
