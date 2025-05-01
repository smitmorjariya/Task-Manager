import React from 'react'
import UI_IMG from '../../assets/images/img.png'
const AuthLayout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
                <h2 className="text-3xl font-bold text-black"> Task Manager </h2>
                {children}
            </div>

            <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-[url('/bg-pattern.png')] bg-cover bg-no-repeat overflow-hidden ">
                <img src={UI_IMG} className="w-64 lg:w-[90%]" />
            </div>
        </div>
    )
}

export default AuthLayout;