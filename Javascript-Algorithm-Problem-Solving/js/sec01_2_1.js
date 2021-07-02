function solution(a, b, c){/* 1. a,b,c 세 막대 */
    let answer="YES", max; /* 2. 가장 긴 막대의 길이를 구해야 한다. max*/
    let sum = a+b+c; /*7.전체 합하면서  */

    if(a>b) max=a; /* 3. a가 b보다 크다면 가장 긴 막대는 a */
    else max=b; /* 4. 그렇지 않으면 b */

    if(c>max) max=c; /* 5. c가 max보다 크다면, max에 c */
    /* 6. 가장 큰 값이 max에 저장이 된 상태 */

    if(sum-max<=max) answer="NO"; /*8.sum-max는 가장 긴 막대를 제외한 "나머지 짧은 두 막대의 합" */
    /*9. 나머지 짧은 두 막대의 합이 가장 긴 막대보다 작거나 같으면, 삼각형이 될 수 없다. 'NO'*/

    return answer;
}

console.log(solution(6, 7, 11));