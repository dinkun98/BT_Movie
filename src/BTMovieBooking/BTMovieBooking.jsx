import React from 'react'
import data from './data.json'
import { ChairList } from './ChairList'
import { Result } from './Result'
import './BaiTapBookingTicket.css'

export const BTMovieBooking = () => {
    console.log({ data })
    return (
        <div  className='container mt-3'>
            
            <div className="row">

                <div className="col-8">
                <div className='text-danger display-4 text-center'>Đặt vé xem phim</div>
                    <div className="p-3 text-white text-center bg-dark fw-bold mb-5">SCREEN</div>
                    <ChairList data={data} />
                </div>
                <div className="col-4">
                    <Result />
                </div>
            </div>
        </div>
    )
}
