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
let numberArray = [1,2,3,4,5,6,7,8,9];
let answerNum = [];
let count = 0;

//strike와 ball의 갯수를 보여주는 힌트를 화면에 출력해준다.
function displayHint(num){

  let strikes = 0;
  let balls = 0;
  
  for(let i = 0; i < answerNum.length; i++){
    for(let j = 0; j < num.length; j++){
      if((answerNum[i] == num[j]) && (i == j)){
        strikes++;
      } 
      else if((answerNum[i] == num[j]) && (i != j)){
        balls++;
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

//  input 창의 입력값이 3자리가 아니면 알림창을 띄워주고 
//  3자리라면 displayInput을 실행한다.
//  Play 버튼을 누르기 전이라면 누르고 게임이 진행될 수 있도록 알림창을 띄워준다.
//  총 기회는 10번.
function handleSubmit(event){  
  let inputValue = inputNumber.value;
  //input창 초기화
  inputNumber.value = "";
  event.preventDefault();
  
  while(count < 10){
    if( inputValue.length !== 3 ){
      alert('3자리 숫자를 입력하세요');
      count++;
      displayInput(inputValue);
      countAttempt.textContent = `총 ${count}번 시도하셨습니다.`;
    } 
    else if (Array.isArray(answerNum) && answerNum.length === 0){
      alert('play 버튼을 먼저 눌러주세요!')
      inputValue = "";
    } 
    else {
      count ++;
      displayInput(inputValue);
      countAttempt.textContent = `총 ${count}번 시도하셨습니다.`;
    } break;
  }

  if (count >= 10){
    countAttempt.textContent = `😭기회를 모두 사용했습니다😭 정답은 ${answerNum.join('')}`;
    submitContent.textContent = `REPLAY 버튼을 눌러주세요`;
    submitContent.style.color = "red";
  }
}

//  중복 숫자가 발생하지 않도록  splice를 이용해 랜덤한 3자리 숫자를 뽑고
//  answerNum 에 넣어준다.
function makeRandomNum(){  
  for(let i = 0; i < 3; i++) {
    let numbers = numberArray.splice(Math.floor(Math.random() * (9-i)),1)[0];
    answerNum.push(numbers);
  }

  alert('랜덤숫자가 생성되었습니다⚾ 맞춰보세요!');
  console.log(answerNum);
}

/*
// start 버튼을 누르면 랜덤으로 3자리 숫자를 만들어준다.
function makeRandomNum() {
  for(let num = 0; num < 3; num++){
  answerNum.push(Math.floor(Math.random() * 10));
  }
  alert('랜덤숫자가 생성되었습니다⚾ 맞춰보세요!');
  console.log(answerNum);
}
*/

function init() {
  startBtn.addEventListener('click',makeRandomNum,{once:true});
  input.addEventListener('submit',handleSubmit);
  replaytBtn.addEventListener('click',function(){
    window.location.reload();
  })
}

init();