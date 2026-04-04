class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charCount = {};
        let maxFreq = 0;
        let l = 0;
        let length = 0;

        for(let r = 0; r < s.length; r++){
            let str = s[r];
            console.log(charCount, "-- Window size:", r-l+1, "-- MaxFreq:",maxFreq)
            
            charCount[str] = (charCount[str] || 0) + 1;
            maxFreq = Math.max(maxFreq, charCount[str]);
            
            while((r-l+1) - maxFreq > k){
                charCount[s[l]] -=1;
                l = l+1;
            }
            
            length = Math.max(length, r-l+1)
        }

        
        return length;
    }
}

// XXYYXXAAA , k = 2

// XXXXXXAAA , return 6 
// BBCCDDAA , return 2