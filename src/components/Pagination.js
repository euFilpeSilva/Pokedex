import React from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'

const Pagination =(props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props

    return(
        <div className='pagination-container'>
            <button onClick={onLeftClick}>
                <div >
                    <ArrowCircleLeft className='paination-container-left' size={30} color="black" weight="fill" />
                </div>
            </button>
                <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div>
                    <ArrowCircleRight className='paination-container-right' size={30} color="black" weight="fill" />
                </div>
            </button>
        </div>
    )
}

export default Pagination;