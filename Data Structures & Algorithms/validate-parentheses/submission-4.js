class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(let i = 0; i < s.length; i++){
            if(s[i] === '[' || s[i] === '{' || s[i] === '('){
                stack.push(s[i])
                console.log('in the if stack is: ', stack);
            }
            
            else{
                console.log('in the else')
                switch(s[i]){
                    case ']':
                        if (stack.at('-1') === '['){
                            stack.pop()
                        }
                        else {
                            return false;
                        }
                        break;
                    case '}':
                        if (stack.at('-1') === '{'){
                            stack.pop()
                        }
                       else {
                            return false;
                        }
                        break;
                    case ')':
                        if (stack.at('-1') === '('){
                            stack.pop()
                        }
                        else {
                            return false;
                        }
                        break;
                }
            }
            console.log('stack is: ', stack);
        }
        return stack.length === 0 ? true : false
    }
}
