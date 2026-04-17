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
            console.log('topRow is: ', topRow)
            console.log('middleRow is: ', middleRow)
            console.log('bottomRow is: ', bottomRow)

            if(matrix.length === 1) return this.searchRow(matrix[0], target)

            console.log('matrix[middleRow][matrix[middleRow].length - 1] is: ', matrix[middleRow][matrix[middleRow].length - 1])

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
                console.log('inside the else middleRow is: ', middleRow)
                return this.searchRow(matrix[middleRow], target)
            }
        }
        return false;



    }

    searchRow(row, target){
        console.log('inside searchRow')
        console.log('about to search this row: ', row)
        for(let i = 0; i <= row.length - 1; i++){
                    if(row[i] === target) return true
                }
        return false
    }

}
