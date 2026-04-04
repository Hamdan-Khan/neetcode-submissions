class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let s = 1;
        let e = Math.max(...piles);
        let res = e;

        while (s<=e){
            let k = Math.floor((s+e)/2);
            let totalTime = 0;
            for( const p of piles){
                totalTime += Math.ceil((p/k));
            }
            if(totalTime > h){
                s = k+1;
            } else{
                res = k;
                e = k-1;
            }
        }

        return res;
    }
}
