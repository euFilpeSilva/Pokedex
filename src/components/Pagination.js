import React from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'

const Pagination =(props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props

    return(
        <div className='pagination-container'>
            <button onClick={onLeftClick}>
                <div >
                    <ArrowCircleLeft className='paination-container-left' size={20} color="black" weight="fill" />
                </div>
            </button>
                <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div>
                    <ArrowCircleRight className='paination-container-right' size={20} color="black" weight="fill" />
                </div>
            </button>
        </div>
    )
}

export default Pagination;