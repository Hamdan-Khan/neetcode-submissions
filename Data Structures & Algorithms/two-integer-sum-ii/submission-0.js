class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(num, target) {
    // let result = [];
    //     let i = 0;
    //     while (i<numbers.length){
    //         let j = i+1;
    //         while(numbers[i]+numbers[j]!=target && j < numbers.length){
    //             j++;
    //         }
    //         if (numbers[i]+numbers[j]==target){
    //             result.push(i,j)
    //             return result;
    //         }
    //         i++;
    //     }
    let l = 0;
    let r = num.length-1;
    while(l<r){
        let sum = num[l]+num[r];
        if (sum > target){
            r--;
        } else if(sum < target){
            l++;
        } else{
            return [l+1,r+1]
        }
    }
    return [];
    }
}
