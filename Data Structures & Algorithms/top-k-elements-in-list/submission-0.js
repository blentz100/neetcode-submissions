class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    //Step 1: Create a Map with Frequency of each num
    const numbersMap = new Map();
    nums.forEach(num => {
        numbersMap.set(num, (numbersMap.get(num) || 0) + 1)
    })

    //Step 2: Convert Map to Array with BucketSort
    //The indices are now the frequencies
    const numbersArray = []
    for(const [key,value] of numbersMap){
        numbersArray[value] = (numbersArray[value] || new Set()).add(key)
    }

    //Step 3: create the answser by going through the array backwards
    const answerArr = []
    for(let i = numbersArray.length -1; i >= 0; i--){
        if(numbersArray[i]) answerArr.push(...numbersArray[i])
        if(answerArr.length === k){
            return answerArr;
        }
    }    


    }
}
