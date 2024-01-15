import React from "react"
import Nav from '../components/Nav/page'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Nav />
            {children}
        </section>



    )
}