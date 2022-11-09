export const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

/**
 * 보드판의 숫자들을 원활하게 이동시키기 위해 배열의 값을 뒤집어서 반환하는 함수
 * @param board 현재 진행중인 보드의 상태값 2차원 배열
 * @returns 뒤집힌 보드의 2차원 배열값 반환
 */
export const upSideDownBoard = (board: number[][]) => {

    let result = [];
    for (let i = 0; i < board.length; i++) {
        const row = [];
        for (let j = 0; j < board.length; j++) {
            row.push(board[j][i]);
        }
        result.push(row);
    }
    return result;
}
/**
 * 보드 판의 값을 받아서 배열의 값을 합산하여 스코어로 반환
 * @param board 현재 진행중인 보드의 상태값 2차원 배열
 * @returns { number } 최종 스코어를 반환
 */
export const calculateScore = (board: number[][]) => {
    let finalScore = 0;
    board.map((row) => {
        finalScore += row.reduce((prev, cur) => prev + cur, 0);
    });

    return finalScore;
}