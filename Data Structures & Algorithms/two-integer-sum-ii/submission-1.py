class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # [1,2,3,4]
        # l= 0 , r = 3
        # sum < target : l++
        # sum > target : r--
        # O(n) time.c , O(1) space.c

        l, r = 0, len(numbers)-1
        while l < r :
            s = numbers[l] + numbers[r]
            if s == target:
                break
            elif s < target:
                l = l+1
            else:
                r = r -1
        
        return [l+1, r+1]