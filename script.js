const paragraph = document.getElementById('paragraph');
const imgRival = document.getElementById('imgRival');
const imgGu = document.getElementById('imgGu');
const imgChoki = document.getElementById('imgChoki');
const imgPa = document.getElementById('imgPa');
const reStartButton = document.getElementById('reStart');
const scoreButton = document.getElementById('score');
const resultText = document.getElementById('result');
const gameArea = document.getElementById('gameArea');


let endFlag = false;
let win = 0;
let lose = 0;
let draw = 0;
let player = [];
let rival = [];
let result = [];
let handArray = ['グー','チョキ','パー'];//じゃんけんの手の配列
let winOrLose = ['勝ち','負け','あいこ'];//勝敗の配列

function game(num){
//勝負後クリックの無効
  if(endFlag){
    return;
  }
  endFlag=true;

  paragraph.innerText = 'ポン！';

  player.push(num);

//自分の選択肢を隠す
if(num === 0){
  imgChoki.classList.add('hide');
  imgPa.classList.add('hide');
}else if(num === 1){
  imgGu.classList.add('hide');
  imgPa.classList.add('hide');
}else{
  imgChoki.classList.add('hide');
  imgGu.classList.add('hide');
}

  const randomNum = Math.floor(Math.random()*3);
  rival.push(randomNum);
  
  //相手の選択肢を見せる
  if(randomNum === 0){
    imgRival.src = 'https://github.com/akiba-miho/rock-paper-scissors-game/blob/main/imgGu.png?raw=true'
  }else if(randomNum === 1){
    imgRival.src = 'https://github.com/akiba-miho/rock-paper-scissors-game/blob/main/imgChoki.png?raw=true'
  }else if(randomNum === 2){
    imgRival.src = 'https://github.com/akiba-miho/rock-paper-scissors-game/blob/main/imgPa.png?raw=true'
  }

  //勝敗
  if(num === randomNum){
    resultText.innerText = 'あいこです'
    draw++;
    result.push(2);
  }else if(num === 0 && randomNum === 1){
    resultText.innerText = 'あなたの勝ちです'
    win++;
    result.push(0);
  }else if(num === 1 && randomNum === 2){
    resultText.innerText = 'あなたの勝ちです';
    win++;
    result.push(0);
  }else if(num === 2 && randomNum === 0){
    resultText.innerText = 'あなたの勝ちです';
    win++;
    result.push(0);
  }else{
    resultText.innerText = 'あなたの負けです'
    lose++;
    result.push(1);
  }

  reStartButton.classList.remove('hide');
  scoreButton.classList.remove('hide');

}

reStartButton.onclick = () => {
  paragraph.innerText = 'せーのっ！じゃんけん・・・';

  gameArea.classList.remove('hide');

  imgRival.src = 'https://github.com/akiba-miho/rock-paper-scissors-game/blob/main/%E3%81%97%E3%82%99%E3%82%83%E3%82%93%E3%81%91%E3%82%93%E3%81%AE%E6%95%B5.png?raw=true';
  imgGu.classList.remove('hide');
  imgChoki.classList.remove('hide');
  imgPa.classList.remove('hide');

  resultText.innerText = '';

  reStartButton.classList.add('hide');
  scoreButton.classList.add('hide');

  endFlag = false;

}
//最終結果
scoreButton.onclick = () => {
let text = (win + lose + draw)+ '戦：';
text += win + '勝' + lose + '敗' + draw + '分\n\n';

for(let i = 0; i < result.length; i++){
  text += i+1 + '戦目' + winOrLose[result[i]];
  text += '[あなたの手：' + handArray[player[i]];
  text += '、相手の手：' + handArray[rival[i]] + ']\n';
}
paragraph.innerText = text;

  gameArea.classList.add('hide');
  scoreButton.classList.add('hide');
}
