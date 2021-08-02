import { ReactElement } from 'react'
import SVG404 from '../assets/images/SVG404.svg'

function Page404(): ReactElement {
    return (
        <div className="flex items-center justify-center self-center">
            <img className="" src={SVG404} alt="Page not found" />
        </div>
    )
}

export default Page404
