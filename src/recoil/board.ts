import { atom } from 'recoil';

export const boardState = atom({
    key: 'boardState',
    default: [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
})