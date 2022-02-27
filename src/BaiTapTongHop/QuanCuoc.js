import React, { useContext } from 'react'
import { giamTienCuoc, themTienCuoc } from '../Provider/Type'
import { useSpring, animated } from 'react-spring'
export default function QuanCuoc({ quanCuoc, dispatch }) {

    const [propsUseSpringRight, apiRight] = useSpring(() => ({ scale: 1.2, from: { scale: 0.9 }, config: { duration: 100 }, reset: true }))
    const [propsUseSpringLeft, apiLeft] = useSpring(() => ({ scale: 1.2, from: { scale: 0.9 }, config: { duration: 100 }, reset: true }))

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

                <animated.button style={{ transform: propsUseSpringRight.scale.to(scale => `scale(${scale})`) }} className=' mt-2 mr-2  mb-2 btn-danger' value='+' onClick={(e) => {
                    apiRight.start({ scale: 1.2, from: { scale: 0.9 }, reset: true })
                    cuoc(e.target.value, quanCuoc)

                }}>+</animated.button>
                <span style={{ color: 'yellow', fontSize: 30, }}>{quanCuoc.diemCuoc}</span>
                <animated.button className=' mt-2 mb-2 ml-2 btn-danger' value='-' style={{ transform: propsUseSpringLeft.scale.to(scale => `scale(${scale})`) }} onClick={(e) => {
                    apiLeft.start({ scale: 1.2, from: { scale: 0.9 } })
                    cuoc(e.target.value, quanCuoc)
                }}>-</animated.button>
            </div>


        </div>
    )
}
