// KAKAO 2019 개발자 겨울 인턴십 1. 크레인 인형뽑기 게임

function solution(board, moves) {
  let tempArr = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let target = board[j][moves[i] - 1];
      if (target === 0) {
        continue;
      }
      tempArr.push(target);
      board[j][moves[i] - 1] = 0;
      break;
    }
  }

  const finish = (tempArr) => {
    for (let i = 0; i < tempArr.length - 1; i++) {
      if (tempArr[i] === tempArr[i + 1]) {
        tempArr.splice(i, 2);
        finish(tempArr);
      }
    }
    return tempArr;
  };
  let len = tempArr.length;
  let answer = len - finish(tempArr).length;
  return answer;
}

// Input

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];
const moves = [1, 2, 3, 4, 5, 1];
console.log(solution(board, moves));
