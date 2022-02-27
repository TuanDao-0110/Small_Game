import React, { useContext } from 'react'
import { refesh } from '../Provider/Type'
export default function DiemCuoc({ diem, dispatch }) {
    const choiLai = () => {
        let action = {
            type: refesh
        }
        return dispatch(action)
    }
    return (
        <div className='text-center display-4'>
            <h2 style={{ color: 'blue' }}>bau cua cyberlearn</h2>
            <div className='text-center'>
                <span style={{ fontSize: 20, borderRadius: '5%' }} className='p-3 text-white bg-danger'>tien thuong:<span style={{ color: 'yellow' }}>{diem.toLocaleString()}$</span></span>
            </div>
            <div className='text-center'>
                <button onClick={() => {
                    choiLai()
                }} style={{ fontSize: 10, borderRadius: '5%', border: 'none' }} className='btn btn-success'>choi lai</button>
            </div>
        </div>
    )
}
