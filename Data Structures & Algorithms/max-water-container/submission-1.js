class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h) {
        let maxW = 0;
        let l = 0;
        let r = h.length - 1;

        while (l<r){
            let area = Math.min(h[l],h[r]) * (r-l);
            console.log(area, "l" , l, "r", r, "... r-l", r-l, "... min", Math.min(h[l],h[r]) );
            maxW = Math.max(maxW,area);

            // compare height of left with right, not left with left+1
            // if left is equal or less than right, increment left
            // otherwise decrement right
            if (h[l] <= h[r]) l++
            else r--
        }
        return maxW
    }
}
