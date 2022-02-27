import React, { memo } from 'react'
import QuanCuoc from './QuanCuoc'
export default function DanhSachCuoc({ danhSachCuoc, dispatch }) {

    return (
        <div className='row'>

            {danhSachCuoc.map((quanCuoc, index) => {

                return <div className='col-4' key={index}>

                    <QuanCuoc quanCuoc={quanCuoc} dispatch={dispatch}></QuanCuoc>
                </div>
            })}

        </div>
    )
}
// export default memo(DanhSachCuoc)