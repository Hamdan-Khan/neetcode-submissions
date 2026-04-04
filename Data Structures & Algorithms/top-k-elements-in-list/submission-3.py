class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # nums = [1,1,2,2,3,4,4,4]
        # table = { 1: 2, 2:2, 3:1. 4:3}

        table = {}
        for n in nums:
            if table.get(n):
                table[n] = table[n] + 1
            else:
                table[n] = 1
    
        keyv = table.items()
        # [[1,2],[2,2],[3,1]]
        s = sorted(keyv, key=lambda x:x[1], reverse=True)
        s = [ x[0] for x in s ]
        return s[:k]