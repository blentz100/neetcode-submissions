class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // use left and right pointers (sliding window)
        // maintain a frequencyMap as we go
        // each time check for a valid substring
        // a substring is valid if: windowLength - countof most frequent <= K
        // if the substring is valid, then update result to it's length
        // if the substring is valid, move right pointer
        // else move left pointer

        let frequencyMap = new Map();
        let l = 0;
        let r = 0;
        let res = 0;
        let mostFrequentCount = 0;

        while(l < s.length - 1 && r < s.length){
            let currentChar = s[r];
            console.log('currentChar is: ', currentChar)
            console.log('l: ',s[l], ' r: ', s[r])
            let windowLength = (r - l) + 1;
            if(frequencyMap.has(currentChar)){
                frequencyMap.set(currentChar, frequencyMap.get(currentChar) + 1)
            }
            else{
                frequencyMap.set(currentChar,1)
            }
            if(frequencyMap.get(currentChar) > mostFrequentCount){
                mostFrequentCount = frequencyMap.get(currentChar)
            }
            console.log('mostFrequentCount: ', mostFrequentCount)

            //check to see if it's a valid substring
            if(windowLength - mostFrequentCount <= k){
                res = Math.max(res, windowLength)
                r++
                console.log('in if')
            }
            else{
                //here we need to decrement the map to reflect what just dropped
                //out of the window
                console.log('in else')
                frequencyMap.set(s[l], (frequencyMap.get(s[l]) - 1)) 
                // then advance the pointer
                l++
                r++
            }

            console.log('mostFrequentCount: ', mostFrequentCount)
            console.log('frequencyMap is: ', frequencyMap)
            console.log('res is: ', res)
            console.log(' ')
        }  
        return res;
}}
