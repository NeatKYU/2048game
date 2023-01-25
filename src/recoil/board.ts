import { atom } from 'recoil';
import { playBoard4, modeArr } from '@/assets/const';

export const boardState = atom({
    key: 'boardState',
    default: playBoard4,
})

export const modeState = atom({
    key: 'modeState',
    default: modeArr[0]
})