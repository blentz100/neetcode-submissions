class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        // Use a sliding window
        // Keep incrementing right while there are no dupes
        // check for dupes using a map?
        // if there is a dupe, then increment the left pointer

        // console.log('just before early return, s.length is: ', s.length)
        
        if(s.length === 0) return 0

        let left = 0;
        let right = 1;

        let substringMap = new Map();
        
        let currentLongest = 1;
        let maxLongest = 1;

        // console.log('just before while')

        while((left < s.length - 1) && (right < s.length)){
            substringMap.set(s[left])
            // console.log('top, map:', substringMap, 'next letter to inspect is: ', s[right])
            // console.log('top, left is: ', left, ' right is: ', right)
            if(!substringMap.has(s[right])){
                substringMap.set(s[right])
                right++
                currentLongest = Math.max(currentLongest, substringMap.size)
                // console.log('****substringMap', substringMap)
                // console.log('****currentLongest is: ', currentLongest);
            }
            else{
                // console.log('found a duplicate, resetting everything')
                left++
                right = left + 1;
                currentLongest = 0;
                substringMap.clear();
            }
            maxLongest = Math.max(currentLongest, maxLongest)
            // console.log('bottom of Loop, maxLongest is: ', maxLongest, 'currentLongest: ', currentLongest)
        }

        return maxLongest;
    }
}
