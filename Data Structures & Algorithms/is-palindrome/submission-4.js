class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

    // First lowercase everything
    // Second strip out all characters except a-z, 0-9
    // The run iterate through it to check for palindrome

    const cleanString = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '')
    console.log('cleanString is: ', cleanString)
    let i = 0;
    let j = cleanString.length -1
    while(i<j){
        if(cleanString[i] !== cleanString[j]) return false
        i++
        j--
    }
    return true
    }
}
