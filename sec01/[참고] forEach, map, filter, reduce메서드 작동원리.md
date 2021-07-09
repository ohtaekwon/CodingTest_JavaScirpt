# [참고] forEach, map, filter, reduce메서드 작동원리

## 1.1 대문자로 통일

***문제) 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.***



## 1.2 알아두기 ✋ 



## 1.3 입출력 설명



> **15.3.1 입력설명**

첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.



> **15.3.2 출력설명**

첫 줄에 가운데 문자를 출력합니다.

----



> **15.3.3 입력예제 1**

- `study`



> **15.3.4 출력 예제 1** 

- `u`

---

> **15.3.5 입력예제 2**

- `good`



> **15.3.6 출력 예제 2** 

- `oo`



## 1.4 문제풀이

### 1.4.1 예제1

**1.1) 입력코드 입력 1** ✍

```javascript
            function solution(s){/* 함수의 매개변수를 입력 */
                let answer, max=Number.MIN_SAFE_INTEGER; // 정수형으로 가장 작은 숫자.
                for(let x of s){//x라는 것은 문자열(str)에 있는 단어를 의미한다. ex) teacher, time, student ...
                    if(x.length>max){
                        max=x.length;
                        answer=x;
                    }
                }
                return answer;/* 답을 return */
            }
            let str = ["teacher", "time", "student", "beautiful", "good"];
            console.log(solution(str));/*return받은 값을 출력*/
```



**2) 출력결과**👉



## ※ 참고자료

