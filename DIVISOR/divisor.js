const N = 180;
let i = 1;
let count = 0;
while (i <= N) {
  if(N % i == 0) {
    console.log(i);
    count++;
    if (i == N) {
      console.log(`${N}의 약수는 총 ${count}개입니다.`);
    }
    }
    
  i++;
}