class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) {
        let result = [];
        for ( let i = 0; i< t.length;i++){
            let curr = t[i];
            let j = i+1;
            while (curr >= t[j] && j < t.length){
                j++;
            }
            if (curr < t[j]) result.push(j-i)
            else result.push(0);
        }
        return result;
    }
}
