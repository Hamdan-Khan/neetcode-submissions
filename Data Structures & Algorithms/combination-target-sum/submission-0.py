class Solution:
    def combinationSum(self, nums: List[int], t: int) -> List[List[int]]:
        result = []
        path = []

        def dfs(start, target):
            if target == 0:
                result.append(path[:])
                return
            if target < 0:
                return

            for i in range(start, len(nums)):
                curr = nums[i]
                path.append(curr)
                dfs(i,  target - curr)
                path.pop()
        
        dfs(0, t)
        return result