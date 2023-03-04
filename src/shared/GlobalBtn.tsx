import React from 'react'

type Props = {
    children: React.ReactNode
}

const GlobalBtn = ({ children }: Props) => {
    return (
        <div>
            <button className=' uppercase text-center px-5 py-2 font-semibold rounded cursor-pointer shadow-xl transition-all ease-in-out duration-500 bg-secondary-500 hover:bg-primary-500'>{children}</button>
        </div>
    )
}
export default GlobalBtn