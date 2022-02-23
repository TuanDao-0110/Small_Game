import React from 'react'
import QuanCuoc from './QuanCuoc'
export default function DanhSachCuoc({ danhSachCuoc, dispatch }) {
    const renderDanhSachCuoc = () => {
        return danhSachCuoc.map((quanCuoc, index) => {

            return <div className='col-4' key={index}>
               
                <QuanCuoc quanCuoc={quanCuoc} dispatch={dispatch}></QuanCuoc>
            </div>
        })
    }
    return (
        <div>
            <div className='row'>
                {renderDanhSachCuoc()}
            </div >
        </div>
    )
}
