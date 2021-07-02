/* 첫 번째 풀이 */

function solution(n){/* 함수의 매개변수를 입력 */
    let answer = 0;
    for(let i=1; i<=n; i++){
        answer=answer+i;
        /*  1 = 0 + 1 
            3 = 1 + 2
            6 = 3 + 3
                
        */
        
    }
    return answer;/* 답을 return */
}
console.log(solution(6));/*return받은 값을 출력*/

/* 두 번째 풀이 */
function solution(n){
    let answer = 0;
    for(let i=1; i<=n; i++){
        answer=answer+i;
    }

    return answer;
}
console.log(solution(6));
