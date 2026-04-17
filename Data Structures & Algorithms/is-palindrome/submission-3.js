class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanString = s.replaceAll(/[^a-zA-Z0-9]+/g, "").toLowerCase();
        let i = 0
        let j = cleanString.length - 1
        while( i < j) {
            if(cleanString[i] !== cleanString[j]) return false
            i++
            j--
        }
        return true
    }
}
