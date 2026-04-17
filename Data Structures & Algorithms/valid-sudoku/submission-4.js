class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        function computedSquare(row,col){
            if(row < 3 && col < 3){
                return 0;
            }
            if(row < 3 && col < 6){
                return 1;
            }
            if(row < 3 && col < 9){
                return 2;
            }
             if(row < 6 && col < 3){
                return 3;
            }
            if(row < 6 && col < 6){
                return 4;
            }
            if(row < 6 && col < 9){
                return 5;
            }
             if(row < 9 && col < 3){
                return 6;
            }
            if(row < 9 && col < 6){
                return 7;
            }
            if(row < 9 && col < 9){
                return 8;
            }
        }
        const columnMap = new Map([
            [0, []],
            [1, []],
            [2, []],
            [3, []],
            [4, []],
            [5, []],
            [6, []],
            [7, []],
            [8, []],
            [8, []],
            ]);

            const rowMap = new Map([
            [0, []],
            [1, []],
            [2, []],
            [3, []],
            [4, []],
            [5, []],
            [6, []],
            [7, []],
            [8, []],
            [8, []],
            ]);

            const squareMap = new Map(); 

        for (let row = 0; row < board.length; row++){
            for (let col = 0; col < board.length; col++){
                const squareKey = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
                if(columnMap.get(col).includes(board[row][col])){
                    return false
                }
                if(rowMap.get(row).includes(board[row][col])){
                    return false
                }
                if(squareMap.get(squareKey) && squareMap.get(squareKey).has(board[row][col])){
                    return false
                }
                if(!squareMap.has(squareKey)){
                    squareMap.set(squareKey, new Set())
                }
                if(board[row][col] !== '.'){
                      columnMap.get(col).push(board[row][col])
                      rowMap.get(row).push(board[row][col])
                      squareMap.get(squareKey).add(board[row][col])
                }
               
            }
        }
        console.log('columnMap is: ', columnMap)
        console.log('rowMap: ', rowMap)
        console.log('squareMap is: ', squareMap)
        return true;
    }
}
