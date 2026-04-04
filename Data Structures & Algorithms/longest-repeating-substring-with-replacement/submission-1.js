class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let length = 0;
        let l = 0;
        let charCount = {};
        let maxFreq = 0;

        for ( let r = 0; r <s.length; r++){
            let window = r - l + 1;
            let str = s[r];
            if (charCount[str] == undefined){
                charCount[str] = 1;
            } else {
                charCount[str]++;
            }
            maxFreq = Math.max(maxFreq, charCount[str]);
            
            while ( (r-l+1) - maxFreq > k ){
                charCount[s[l]] --;
                l++;
            }
            
            console.log(charCount, "-- Window size:", window, "-- MaxFreq:",maxFreq)
            length = Math.max((r-l+1),length);

        } 

        return length;
    }
}

// XXYYXXAAA , k = 2
