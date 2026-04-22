class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        return (s.split('').sort((a,b) => a.localeCompare(b)).join('') === 
        t.split('').sort((a,b) => a.localeCompare(b)).join(''))

        
    }
}
