
import React from "react"

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className=" text-center">
                Get 20 % off
            </div>
            {children}
        </>
    )
}