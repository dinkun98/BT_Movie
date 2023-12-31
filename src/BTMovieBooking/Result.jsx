import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btMovieBookingActions } from '../store/BTMovieBooking/slice'

export const Result = () => {
    const { number, chairsBooking } = useSelector((state) => state.btMovieBooking)

    console.log('number: ', number)

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Kết quả đặt vé</h2>
            <div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair gheDuocChon"></div>
                    <span >Ghế đã đặt</span>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair gheDangChon"></div>
                    <span>Ghế đang đặt</span>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair ghe"></div>
                    <span>Ghế chưa đặt</span>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {chairsBooking.map((ghe) => {
                        return (
                            <tr>
                                <td>{ghe.soGhe}</td>
                                <td>{ghe.gia}</td>
                                <td style={{cursor:'pointer'}} className="text-danger" onClick={()=>{
                                    dispatch(btMovieBookingActions.setHuyGhe(ghe))
                                }}>X</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Tổng</td>
                        <td>
                            {chairsBooking.reduce((total, value) => {
                                return (total += value.gia)
                            }, 0)}
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button
                className="btn btn-success mt-5"
                onClick={() => {
                    dispatch(btMovieBookingActions.setChairsBooked())
                }}
            >
                Thanh toán
            </button>

            {/* <button
                className="btn btn-success"
                onClick={() => {
                    // dispatch({
                    //     type: 'CHANGE_NUMBER',
                    //     payload: 2,
                    // })
                    dispatch(btMovieBookingActions.inCreaseNumber(2))
                }}
            >
                + Number
            </button> */}
        </div>
    )
}
