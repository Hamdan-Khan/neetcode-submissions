class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        length = 0
        l = 0
        freq = {}
        maxFreq = 0

        for r in range(len(s)):
            # first, we store the frequency of the element at the right pointer
            curr = s[r]
            if freq.get(curr) is None:
                freq[curr] = 1
            else:
                freq[curr] += 1
            
            # why update the max frequency just now?
            # because in the next step we'll make sure that the max frequency is of the elements in the 
            # window and not any element whatsoever (out the window too)
            maxFreq = max(maxFreq, freq[curr])

            # length of the window - maximum frequency 
            # if AAAAB is the window, the replacements would be 1 i.e. the B letter
            # because we have length of window = 5 and max frequency of A = 4, so 5-4 = 1
            # replacements = (l-r+1) - maxFreq


            # shrining phase, only triggers when replacements exceed the legal "k" value
            # we shrink the window from left side because it is only possible that we get a larger window
            # by proceeding on the right where new elements are present.
            # we shrink the window until the replacements needed become <= k
            # when we are doing this, we also need to update the frequencies of elements being removed from
            # the window in the table
            while ((r-l+1) - maxFreq > k):
                freq[s[l]] -= 1
                l += 1

            # updating the result state i.e. length of the window in every step
            length = max(length, (r-l+1))

        return length
