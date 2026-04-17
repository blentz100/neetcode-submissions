class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let solution = "";
        strs.map(token => {
            solution += `${token.length}#${token}`
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
        for(let i = 0 ; i < str.length; i++){
            console.log('top of the loop, str[i] is: ', str[i])
            while(str[i] !== '#'){
                console.log('str[i] is: ', str[i])
                tokenLengthNumber = Number(tokenLengthString += str[i])
                i++
            }
            console.log('tokenLengthString is: ', tokenLengthString)
            console.log('tokenLengthNumber is: ', tokenLengthNumber)
            i++
            for(let j = i; j < tokenLengthNumber + i; j++){
                currentToken = currentToken + str[j]
            }
            i = i + tokenLengthNumber - 1
            console.log('about to push currentToken: ', currentToken)
            solution.push(currentToken)
            // reset currentToken and tokenLengthString
            currentToken = ""
            tokenLengthString = ""
        }
        console.log('about to return solution: ', solution)
        return solution
    }
}