'use strict';

const input = document.querySelector('.input-form');
const countAttempt = input.querySelector('span');
const inputNumber = input.querySelector('input');
const inputBtn = input.querySelector('button');
const startBtn = document.querySelector('.play');
const replaytBtn = document.querySelector('.replay');
const submitContent = document.querySelector('.information');
const submitStrikeBall = document.querySelector('.information span');

//랜덤하게 출력되는 숫자와 총 시도 횟수를 나타내는 변수.
let answerNum = [];
let count = 0;

//strike와 ball의 갯수를 보여주는 힌트를 화면에 출력해준다.
function displayHint(num){
  let strikes = 0;
  let balls = 0;
   for(let i = 0; i < answerNum.length; i++){
     for(let j = 0; j < num.length; j++){
       if(answerNum[i] == num[j]){
         if( i == j ){
           strikes++;
         }else{
           balls++;
         }
       }
     } submitStrikeBall.textContent = `${strikes} Strike ${balls} Ball`; 
   }
  if(strikes === 3) {
  const answer = answerNum.join('');
    alert(`정답은 ${answer} !!!!!!!! 홈런입니다👏👏👏`)
    window.location.reload();
  }
}

// input 입력값을 화면에 나타내주는 함수.
function displayInput(items) {
  const number = document.createElement("p");
  submitContent.appendChild(number);
  number.innerText = `⚾ ${items}`;
  const num = items.split('');
  displayHint(num);
}

// 총 10회로 기회를 제한함.
// input 창의 입력값이 3자리가 아니면 알림창을 띄워주고 3자리라면 displayInput을 실행한다.
function handleSubmit(event){
  const inputValue = inputNumber.value;
  //input창 초기화
  inputNumber.value = "";
  event.preventDefault();
  while(count < 10){
    count ++;
    if( inputValue.length !== 3 ){
      alert('3자리 숫자를 입력하세요');
      count++;
      countAttempt.textContent = `총 ${count}번 시도하셨습니다.`;
    } else{
      displayInput(inputValue);
      countAttempt.textContent = `총 ${count}번 시도하셨습니다.`;
    } break;
  }
  if (count >= 10){
    countAttempt.textContent = `😭기회를 모두 사용했습니다😭`;
    submitContent.textContent = `REPLAY 버튼을 눌러주세요`;
    submitContent.style.color = "red";
  }
}

// start 버튼을 누르면 랜덤으로 3자리 숫자를 만들어준다.
function makeRandomNum() {
  for(let num = 0; num < 3; num++){
  answerNum.push(Math.floor(Math.random() * 10));
  }
  alert('랜덤숫자가 생성되었습니다⚾ 맞춰보세요!');
  console.log(answerNum);
}

function init() {
  alert('PLAY 버튼을 눌러주세요😎');
  startBtn.addEventListener('click',makeRandomNum,{once:true});
  input.addEventListener('submit',handleSubmit);
  replaytBtn.addEventListener('click',function(){
    window.location.reload();
  })
}

init();