class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(let i = 0; i < s.length; i++){
            // if(s[i] === '[' || s[i] === '{' || s[i] === '('){
            if(s[i].match(/[\[{(]/)){
                stack.push(s[i])
            }
            
            else{
                switch(s[i]){
                    case ']':
                        if (stack.at('-1') === '['){
                            stack.pop()
                        }
                        else return false;
                        break;
                    case '}':
                        if (stack.at('-1') === '{'){
                            stack.pop()
                        }
                       else return false;
                       break;
                    case ')':
                        if (stack.at('-1') === '('){
                            stack.pop()
                        }
                        else return false;
                        break;
                }
            }
        }
        return stack.length === 0 ? true : false
    }
}
