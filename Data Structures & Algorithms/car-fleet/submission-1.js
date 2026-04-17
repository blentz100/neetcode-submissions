class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        
        const data = [];
        const answer = [];

        // sort the cars in descending order

        for(let i = 0; i < position.length; i++){
            data.push([position[i], speed[i]])
        }

        const sortedData = data.sort( (b,a) => a[0] - b[0])

        console.log(data[0][0])


        console.log(data)
        console.log(sortedData)

        // Compute the time for each car to reach the desination
        // And check if it can reach the car in front of it.
        // If it can, it joins that fleet, so do nothing,
        // otherwise push that new time onto the stack.

        let timeToTarget;
        for(let i = 0; i < sortedData.length; i++){
            timeToTarget = (target - sortedData[i][0]) / sortedData[i][1]
            console.log('timeToTarget is: ', timeToTarget)
            if(timeToTarget <= answer.at(-1)){
                // do nothing, because it merges with that fleet
            }
            else{
                // we have a new fleet, push it's time onto the stack
                answer.push(timeToTarget)
            }
        }

        console.log('answer is: ', answer)

        return answer.length;
        

    }
}
