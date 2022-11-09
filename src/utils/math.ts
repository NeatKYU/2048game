export const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

export const changeProcession = (procession: number[][]) => {

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