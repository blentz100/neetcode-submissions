class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let solution = "";
        strs.map(token => {
            solution += `${token.length}©${token}`
        })
        console.log('about to return solution: ', solution)
        return solution
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let solution = [];
        let tokenLengthString = ""
        let tokenLengthNumber = 0;
        let currentToken = ""
        let i = 0;
        while( i < str.length){
            console.log('top of the loop, str[i] is: ', str[i])
            tokenLengthNumber = Number(str.slice(i,str.indexOf('©', i)))
            console.log('tokenLengthString is: ', tokenLengthString)
            console.log('tokenLengthNumber is: ', tokenLengthNumber)
            i = str.indexOf('©', i) + 1
            for(let j = i; j < tokenLengthNumber + i; j++){
                currentToken = currentToken + str[j]
            }
            i = i + tokenLengthNumber - 1
            console.log('about to push currentToken: ', currentToken)
            solution.push(currentToken)
            i++
            // reset currentToken and tokenLengthString
            currentToken = ""
            tokenLengthString = ""
        }
        console.log('about to return solution: ', solution)
        return solution
    }
}