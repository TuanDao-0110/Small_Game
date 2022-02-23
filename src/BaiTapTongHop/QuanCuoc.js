import React, { useContext } from 'react'
import { giamTienCuoc, themTienCuoc } from '../Provider/Type'

export default function QuanCuoc({ quanCuoc, dispatch }) {

    const cuoc = (a, maQuanCuoc) => {
        if (a === '-') {
            let action = {
                type: giamTienCuoc,
                maQuanCuoc
            }
            return dispatch(action)

        } else if (a === '+') {

            let action = {
                type: themTienCuoc,
                maQuanCuoc
            }
            return dispatch(action)
        }
    }
    return (
        <div >
            <img src={quanCuoc.hinhAnh} style={{ width: 'auto' }} src={quanCuoc.hinhAnh}></img>
            <div className='bg-success text-center' style={{ borderRadius: '5px' }}>

                <button className=' mt-2 mb-2 btn-danger' value='+' style={{}} onClick={(e) => {
                    cuoc(e.target.value, quanCuoc)

                }}>+</button>
                <span style={{ color: 'yellow', fontSize: 30 }}>{quanCuoc.diemCuoc}</span>
                <button className=' mt-2 mb-2 btn-danger' value='-' style={{}} onClick={(e) => {
                    cuoc(e.target.value, quanCuoc)
                }}>-</button>
            </div>


        </div>
    )
}
