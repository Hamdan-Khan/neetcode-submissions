class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        nums = sorted(candidates)
        result = []
        path = []

        def dfs(i, target):
            # if i > len(nums):
            #     return
            if target == 0:
                result.append(path[:])
                return
            if target < 0:
                return

            for j in range(i, len(nums)):
                if j>i and nums[j] == nums[j-1]:
                    continue
                path.append(nums[j])
                dfs(j+1, target - nums[j])
                path.pop()
        
        dfs(0,target)
        return result


        # for i in range(len(nums)):
        #     remaining = target - nums[i]
        #     path = [num[i]]
        #     if remaining == 0:
        #         result.append(path)
        #         continue
        #     if remaining < 0:
        #         continue
        #     for j in range(i+1, len(nums)):
        #         if remaining - nums[j] > 0: 