import React, { useCallback, useReducer } from "react";
import { act } from "react-dom/test-utils";
import { giamTienCuoc, refesh, themTienCuoc, xocDia } from "./Type";

export const storeContext = React.createContext()
const tienDat = 100;


const initialState = {

    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 }
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
        { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png' },
        { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' }
    ]
};


let GameBauCuaReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case giamTienCuoc: {

            let index = state.danhSachCuoc.findIndex(item => item.ma === action.maQuanCuoc.ma);
            if (state.danhSachCuoc[index].diemCuoc > 0) {
                state.danhSachCuoc[index].diemCuoc -= tienDat
                state.tongDiem += tienDat
            }
            return { ...state };
        }
        case themTienCuoc: {
            const tempState = { ...state }
            let index = tempState.danhSachCuoc.findIndex(item => item.ma === action.maQuanCuoc.ma);
            if (state.tongDiem > 0) {
                tempState.tongDiem -= tienDat
                tempState.danhSachCuoc[index].diemCuoc += tienDat
                state = { ...tempState }
            }
            return { ...state }
        }
        case xocDia: {
            const mangXucSacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                mangXucSacNgauNhien.push(state.danhSachCuoc[Math.floor(Math.random() * 6)])
            }
            const tempDanhSachCuoc = [...state.danhSachCuoc]
            for (let item of tempDanhSachCuoc) {
                let count = 0
                mangXucSacNgauNhien.forEach((xucXac, index) => {
                    if (xucXac.ma === item.ma && item.diemCuoc > 0) {
                        count++
                    }

                })
                if (count > 0) {
                    state.tongDiem += item.diemCuoc * (count + 1)
                    item.diemCuoc = 0
                } else {
                    item.diemCuoc = 0

                }
            }
            return { ...state, mangXucXac: mangXucSacNgauNhien, danhSachCuoc: tempDanhSachCuoc }
        }

        case refesh: {
            state.tongDiem = 1000

            return { ...state }
        }
        default: return { ...state };
    }
}
export default function Context(props) {
    let [GameReducer, dispatch] = useReducer(GameBauCuaReducer, initialState);


    const store = {
        GameBauCua: [GameReducer, dispatch],

    }
    return (
        <storeContext.Provider value={[GameReducer, dispatch]}>

            {props.children}
        </storeContext.Provider>
    )
}

