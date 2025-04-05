import React from 'react'

export const HeaderItem = ({ Icon, name }) => {
    return (
        <div className='flex gap-2 align-center items-center hover:underline cursor-pointer
            underline-offset-8 mb-2'>
            <Icon />
            <h2>{name}</h2>
        </div>
    )
}
