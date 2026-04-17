class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const myMap = new Map();
        strs.forEach((str, index) => {
            let strArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            for(const char of str){
                strArr[char.charCodeAt() - 96 ] = strArr[char.charCodeAt() - 96] + 1
            }
            if(myMap.has(JSON.stringify(strArr))){
                 myMap.set(JSON.stringify(strArr), [ strs[index], ...myMap.get(JSON.stringify(strArr)) ] );
            }
            else{
                myMap.set(JSON.stringify(strArr), [strs[index]] )
            }
           
            console.log('strArr is: ', strArr)
    })
    console.log('myMap is: ', myMap)
    const answer = []
    console.log(myMap.values().forEach(item => answer.push(item)));
    console.log('answer is: ', answer)
    return answer;
    }
}
