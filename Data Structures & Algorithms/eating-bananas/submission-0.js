class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let k = 1;

        while (true){
            let totalTime = 0;
            for( const p of piles){
                totalTime += Math.ceil((p/k));
            }
            
            if(totalTime <=h){
                return k;
            }
            
            k++;
        }
    }
}
