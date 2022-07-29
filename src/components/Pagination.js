import React from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'

const Pagination =(props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props

    return(
        <div className='pagination-container'>
            <button onClick={onLeftClick}>
                <div>
                    <ArrowCircleLeft size={20} color="#ffffff" weight="fill" />
                </div>
            </button>
                <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div>
            <       ArrowCircleRight size={20} color="#ffffff" weight="fill" />
                </div>
            </button>
        </div>
    )
}

export default Pagination;