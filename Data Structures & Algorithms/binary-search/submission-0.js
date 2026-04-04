class Solution {
    search(nums, target) {
        let mid = 0;
        let start = 0;
        let end = nums.length - 1;
        for (let i = 0; i< nums.length;i++){
            mid = Math.floor(end+start/2);
            if (nums[mid] == target) {
                return mid;
            }else if (nums[mid] < target) {
                start = mid+1;
            }else{
                end = mid-1;
            }
        }    
        return -1;        
    }
}
