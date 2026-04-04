class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        result = []
        path = []
        nums.sort()

        def dfs(start, target):
            if start >= len(nums):
                return
            if target == 0:
                result.append(path[:])
                return
            if target < 0:
                return
            curr = nums[start]

            path.append(curr)
            dfs(start, target - curr)

            path.pop()
            dfs(start+1, target)
        
        dfs(0,target)

        return result