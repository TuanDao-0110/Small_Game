import React from 'react'
import { xocDia } from '../Provider/Type'
import XucSac from './XucSac'


export default function DanhSachSucSac({ mangXucXac, dispatch }) {
    // let xoc = () => {
    //     let action = {
    //         type: xocDia
    //     }
    //     return dispatch(action)
    // }
    const renderXucXac = () => {
        return mangXucXac.map((xucXac, index) => {

            return <div className={`${index === 0 ? 'col-12 text-center' : 'col-6'}`} key={index} style={{ marginLeft: index === 0 ? 90 : 0, }}>
                <XucSac xucXac={xucXac} ></XucSac>
            </div >
        })
    }
    return (
        <div className='ml-2 '  >
            <div className='bg-white' style={{ width: 300, height: 300, borderRadius: '50%' }}>
                <div className='row text-center'>
                    {renderXucXac()}
                </div>
            </div>
            <div className='' style={{ marginLeft: 120, marginTop: 20 }}>
                <button className='btn btn-success ' onClick={() => {
                    dispatch({
                        type: xocDia
                    })
                }} style={{ fontSize: 30 }}>xoc</button>
            </div>
        </div>
    )
}
