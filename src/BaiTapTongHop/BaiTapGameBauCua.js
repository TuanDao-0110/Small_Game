/* eslint-disable no-sequences */
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import Context, { storeContext } from '../Provider/Reducer'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachSucSac from './DanhSachSucSac'
import DiemCuoc from './DiemCuoc'
import './XucXacItem.css'
import '../Provider/Reducer'
export default function BaiTapGameBauCua(props) {
    const [GameReducer, dispatch] = useContext(storeContext)
    return (
        <div id='BaiTapGameBauCua'>

            <DiemCuoc diem={GameReducer.tongDiem} dispatch={dispatch} ></DiemCuoc>
            <div className='row'>
                <div className='col-8'>

                    <DanhSachCuoc danhSachCuoc={GameReducer.danhSachCuoc} dispatch={dispatch}></DanhSachCuoc>
                </div>
                <div className='col-4'>
                    <DanhSachSucSac mangXucXac={GameReducer.mangXucXac} dispatch={dispatch}></DanhSachSucSac>
                </div>
            </div>
        </div>

    )
}
