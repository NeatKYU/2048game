export const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

export const upSideDownBoard = (procession: number[][]) => {

    let result = [];
    for (let i = 0; i < procession.length; i++) {
        const row = [];
        for (let j = 0; j < procession.length; j++) {
            row.push(procession[j][i]);
        }
        result.push(row);
    }
    return result;
}
/**
 * 보드 판의 값을 받아서 배열의 값을 합산하여 스코어로 반환
 * @param { number[][] } board 현재 진행중인 보드의 상태값 2차원 배열
 * @returns { number }최종 스코어를 반환
 */
export const calculateScore = (board: number[][]) => {
    let finalScore = 0;
    board.map((row) => {
        finalScore += row.reduce((prev, cur) => prev + cur, 0);
    });

    return finalScore;
}