class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []
        path = []

        def dfs():
            if len(path) == len(nums):
                result.append(path[:])
                return
            
            for i in range(len(nums)):
                curr = nums[i]
                if curr in path:
                    continue
                path.append(curr)
                dfs()
                path.pop()
        dfs()
        
        return result
