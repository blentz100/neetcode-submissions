class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanString = s.replaceAll(/[^a-zA-Z0-9]+/g, "").toLowerCase();
        let i = 0
        let j = cleanString.length - 1
        console.log('cleanString: ', cleanString)
        while( i < j) {
            console.log('i is: ', i)
            console.log('j is: ', j)
            console.log('cleanString[i]: ', cleanString[i], 'cleanString[j]: ', cleanString[j])
            if(cleanString[i] !== cleanString[j]) return false
            i++
            j--
        }
        return true
    }
}
