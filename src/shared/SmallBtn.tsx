import React from 'react'

type Props = {
    children: React.ReactNode
}

const SmallBtn = ({ children }: Props) => {
    return (
        <div>
            <button className=' uppercase text-xs text-center px-3 py-1 font-semibold rounded cursor-pointer shadow-xl transition-all ease-in-out duration-500 bg-secondary-500 hover:bg-primary-500'>{children}</button>
        </div>
    )
}
export default SmallBtn