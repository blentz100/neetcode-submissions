// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
         const stack = [];
         let operandOne;
         let operandTwo;

         for(let i = 0; i < tokens.length; i++){
             console.log('stack is: ', stack)
            switch(tokens[i]){
                case '+':
                    operandOne = stack.pop();
                    operandTwo = stack.pop();
                    stack.push(operandOne + operandTwo)
                    break;
                case '-':
                    operandOne = stack.pop();
                    operandTwo = stack.pop();
                    stack.push(operandTwo - operandOne)
                    break;
                case '*': 
                    operandOne = stack.pop();
                    operandTwo = stack.pop();
                    stack.push(operandOne * operandTwo)
                    break;
                case '/':
                    operandOne = stack.pop();
                    operandTwo = stack.pop();
                    let answer = operandTwo / operandOne;
                    if (answer > 0){
                        stack.push(Math.floor(answer))
                    }
                    else{
                        stack.push(Math.ceil(answer))
                    }
                    
                    break;
                default:
                    stack.push(parseInt(tokens[i]))
                    break;
            }
        }
        return stack[0]
        
    }
}
