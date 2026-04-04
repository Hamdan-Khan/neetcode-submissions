class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in range(9):
            seen = set()
            for col in range(9):
                curr = board[row][col]
                if curr != ".":
                    if curr in seen:
                        return False
                    seen.add(curr)
        
        for row in range(9):
            seen = set()
            for col in range(9):
                curr = board[col][row]
                if curr != ".":
                    if curr in seen:
                        return False
                    seen.add(curr)

        for i in range(9):
            seen = set()
            for j in range(3):
                for k in range(3):
                    row = math.floor(i/3) * 3 + j
                    col = (i%3) * 3 + k
                    print(f"({row} , {col})")
                    curr = board[row][col]
                    if curr != ".":
                        if curr in seen:
                            return False
                        seen.add(curr)
        
        return True