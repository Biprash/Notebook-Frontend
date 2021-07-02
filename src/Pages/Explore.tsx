import React, { ReactElement } from 'react'
import Navbar from '../Components/Navbar'
import Slick from '../Components/Slick'

interface Props {

}

function Explore({ }: Props): ReactElement {
    return (
        <>
            <Navbar />
            <div className="container">
                <Slick />
            </div>
        </>
    )
}

export default Explore
