class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        // do a binary search on the rows

        // probably need a function to see if the target is inside a row

        // Find the the middle row, check if it's in there...

        let topRow = 0
        let bottomRow = matrix.length - 1;

        while(topRow <= bottomRow){
            let middleRow = Math.floor((bottomRow + topRow) / 2);

            if(matrix[middleRow][matrix[middleRow].length - 1] < target ){
                console.log('inside if')
                topRow = middleRow + 1;
                console.log('topRow: ', topRow)
            }
            else if(matrix[middleRow][0] > target){
                console.log('inside else if')
                bottomRow = middleRow - 1;
            }
            else{
                // we found the row, now search the row...
                return this.searchRow(matrix[middleRow], target)
            }
        }
        return false;
    }

    searchRow(row, target){
        let left = 0;
        let right = row.length - 1;

        while(left <= right){
            let mid = Math.floor((left + right ) / 2)
            if(row[mid] < target){
                left = mid + 1;
            }
            else if(row[mid] > target){
                right = mid - 1;
            }
            else{
                return true;
            }
        }
        return false;
    }

}
