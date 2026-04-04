class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []
        path = []

        def dfs(start):
            if len(path) == len(nums):
                result.append(path[:])
                return
            
            for i in range(len(nums)):
                curr = nums[i]
                if curr in path:
                    continue
                path.append(curr)
                dfs(i+1)
                path.pop()

        # for i in range(len(nums)):
        dfs(0)
        
        return result
