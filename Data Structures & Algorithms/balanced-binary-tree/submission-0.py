# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        balanced = True

        def dfs(node):
            nonlocal balanced
            #  1 
            # 2 3
            #  5  4
            # 6
            if node == None:
                return 0

            left = dfs(node.left)
            right = dfs(node.right)

            balanced = balanced and abs(left - right) <= 1

            return max(left,right) + 1
        
        dfs(root)
        
        return balanced