import { ReactElement } from 'react'
import SVG404 from '../assets/images/SVG404.svg'
import Navbar from '../Components/Navbar'

function Page404(): ReactElement {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center self-center">
                <img className="" src={SVG404} alt="Page not found" />
            </div>
        </>
    )
}

export default Page404
