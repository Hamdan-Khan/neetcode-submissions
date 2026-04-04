class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.sort((a,b)=>a-b);
        let result = [];
        for (let p = 0; p<n.length-2; p++){
            if (p > 0 && n[p] === n[p - 1]) continue;
            let l = p+1;
            let r = n.length - 1;
            while(l<r){
                let sum = n[p]+n[l]+n[r];
                if ( sum < 0 ){
                    l++;
                } else if ( sum > 0){
                    r--;
                } else {
                    result.push([n[p],n[l],n[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                }
            }
        }
        return result;
    }
}
