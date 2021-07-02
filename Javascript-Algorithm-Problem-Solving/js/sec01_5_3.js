function solution(arr){/* 함수의 매개변수를 입력 */
    let answer = Math.min(3, 2, 7, 9, 1);
    return answer;/* 답을 return */
}
let arr =[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));/*return받은 값을 출력*/     


function solution(arr){/* 함수의 매개변수를 입력 */                
    let answer = Math.min(...arr);
                        /* ...(Spread & Rest 연산자) ->
                        arr[0], arr[1], arr[2], arr[3]... , arr[6] 인자로 펼쳐준다.
                        */
    console.log(Math.max(...arr));
    return answer;/* 답을 return */
}

let arr =[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));/*return받은 값을 출력*/      


function solution(arr){/* 함수의 매개변수를 입력 */                
    let answer = Math.min.apply(null, arr);

    return answer;/* 답을 return */
}

let arr =[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));/*return받은 값을 출력*/      