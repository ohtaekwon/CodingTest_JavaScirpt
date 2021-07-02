function solution(arr){/* 함수의 매개변수를 입력 */
    let answer, min=Number.MAX_SAFE_INTEGER;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min) min=arr[i];
    }
    answer=min;

    return answer;/* 답을 return */
}

let arr =[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));/*return받은 값을 출력*/      