import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";
import { giamTienCuoc, themTienCuoc, xocDia } from "./Type";

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
    number: 0,
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
        { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png' },
        { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' }
    ]
};


let GameBauCuaReducer = (state, action) => {
    switch (action.type) {
        case giamTienCuoc: {

            let index = state.danhSachCuoc.findIndex(item => item.ma === action.maQuanCuoc);
            if (state.danhSachCuoc[index].diemCuoc > 0) {
                state.danhSachCuoc[index].diemCuoc -= tienDat
                state.tongDiem += tienDat
            }
            return { ...state };
        }
        case themTienCuoc: {

            let index = state.danhSachCuoc.findIndex(item => item.ma === action.maQuanCuoc.ma);
            const danhSachCuocUpdate = [...state.danhSachCuoc];
            if (state.tongDiem > 0) {

                danhSachCuocUpdate[index].diemCuoc += 100;
                state.tongDiem -= tienDat;
                state.danhSachCuoc = danhSachCuocUpdate;
                console.log(state.danhSachCuoc)
            }
            return { ...state, }
        }



        case xocDia: {
            // let thucHienXucXac = () => {
            //     return new Promise((res, err) => {
            //         let tempDanhSachCuoc = [...state.danhSachCuoc];
            //         let tempDanhSachXucXac = [...state.mangXucXac]

            //         tempDanhSachXucXac.map((item, index) => {
            //             item.hinhAnh = tempDanhSachCuoc[Math.floor(Math.random() * 6)].hinhAnh
            //             state = { ...state, mangXucXac: tempDanhSachCuoc }

            //             res([...state.mangXucXac])
            //         })
            //     }).then(res => console.log(res))
            // }
            // thucHienXucXac()
            const mangXucSacNgauNhien = [];
            for (let i = 0; i < 3; i++) {

                mangXucSacNgauNhien.push(state.danhSachCuoc[Math.floor(Math.random() * 6)])
            }

            const tempDanhSachCuoc = [...state.danhSachCuoc]
            for (let item of tempDanhSachCuoc) {
                for (let xucXac of mangXucSacNgauNhien) {
                    if (item.ma === xucXac.ma) {
                        console.log(item.ma)
                        console.log('them diem')
                        state.tongDiem += item.diemCuoc * 2
                    }
                }
                item.diemCuoc = 0
            }

            return { ...state, mangXucXac: mangXucSacNgauNhien, danhSachCuoc: tempDanhSachCuoc }
        }
        case 'add': {

            return { ...state, number: state.number++ }
        }
        default: return { ...state }
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

