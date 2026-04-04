class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let s = 0;
        let e = matrix.length - 1;

        while (s<=e){
            let m = Math.floor((e + s)/2);
            let rowLength = matrix[m].length;

            if (target < matrix[m][0]){
                e = m - 1;
            } else if (target > matrix[m][rowLength - 1]){
                s = m + 1;
            } else{
                let s2 = 0;
                let e2 = rowLength - 1;

                while (s2<=e2){
                    let m2 = Math.floor((e2+s2)/2);
                    let curr = matrix[m][m2];
                    if(target == curr) return true;
                    else if(target < curr){
                        e2 = m2-1;
                    }else{
                        s2 = m2+1;
                    }
                }
                return false;
            }

        }
        return false;
    }
}
