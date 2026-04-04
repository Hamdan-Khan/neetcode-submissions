class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        // Sort the array
        let num = nums.sort((a, b) => a - b);

        let maxCount = 1;
        let currentCount = 1;

        for (let i = 1; i < num.length; i++) {
            if (num[i] === num[i - 1]) {
                // Skip duplicates
                continue;
            } else if (num[i] === num[i - 1] + 1) {
                // Consecutive number
                currentCount++;
            } else {
                // Reset current count
                currentCount = 1;
            }

            // Update max count
            maxCount = Math.max(maxCount, currentCount);
        }

        return maxCount;
    }
}
