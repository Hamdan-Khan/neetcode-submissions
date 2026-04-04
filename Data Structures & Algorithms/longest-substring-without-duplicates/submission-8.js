class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(!s) return 0;
        let length = 0;
        let l = 0;
        let charMap = {};

        for (var r = 0; r < s.length; r++){
            let char = s[r];
            if(charMap[char] !== undefined) {
                l = Math.max(charMap[char] + 1,l);
            }
                charMap[char] = r;
                length = Math.max(length, r-l+1);
        }

        return length;
    }
}
