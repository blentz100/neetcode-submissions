class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

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
        return true;
    }
}
