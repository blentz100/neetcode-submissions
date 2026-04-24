class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // iterate through strs
        // sort each str
        // use that as the key for a map
        // return the map as an array

        let myMap = new Map();

        for(let str of strs){
            let strKey = str.split("").sort().join("")
            if(!myMap.has(strKey)){
                myMap.set(strKey, new Array(str))
            }
            else{
                myMap.set(strKey, [...myMap.get(strKey), str])
            }
        }
        return myMap.values().toArray()
    }
}
