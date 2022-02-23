/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react'

export default function XucSac({ xucXac }) {


    return (
        <Fragment>
            <div className='scene'>
                <div className='cube'>
                    <div className='cube__face font'>

                        <img style={{ width: 50 }} src={xucXac.hinhAnh}></img>
                    </div>
                    <div className='cube__face back'>

                        <img style={{ width: 50 }} src='./img/BaiTapGameBauCua/cua.png'></img>
                    </div>
                    <div className='cube__face top'>

                        <img style={{ width: 50 }} src='./img/BaiTapGameBauCua/nai.png'></img>
                    </div>
                    <div className='cube__face left'>

                        <img style={{ width: 50 }} src='./img/BaiTapGameBauCua/ca.png'></img>
                    </div>
                    <div className='cube__face right'>

                        <img style={{ width: 50 }} src='./img/BaiTapGameBauCua/ga.png'></img>
                    </div>
                    <div className='cube__face bottom'>

                        <img style={{ width: 50 }} src='./img/BaiTapGameBauCua/tom.png'></img>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
