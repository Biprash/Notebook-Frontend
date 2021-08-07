import { ReactElement } from 'react'
import {Link} from 'react-router-dom';
import HomeImg1 from '../assets/images/img1.png'
import HomeImg2 from '../assets/images/img2.png'
import Footer from '../Components/Footer'

function Homepage(): ReactElement {
    return (
        <>
            <div className="w-auto max-w-screen-2xl bg-white-900">
            <section className="grid grid-cols-1 mt-14 md:grid-cols-2" id="hero-section">
            <div className="flex flex-col items-center justify-center row-start-1 m-5 md:items-start">
                <h1 className="text-4xl font-medium leading-7 tracking-tighter md:text-6xl">Easy Note For all</h1>
                <p className="pt-10 mb-8 text-lg font-medium leading-8 text-gray-600 md:text-2xl">Make it share it and learn it</p>
                <Link to="/note" className="flex flex-row items-center justify-around px-4 py-2 ml-4 text-base text-indigo-100 bg-indigo-600 hover:bg-indigo-500 border border-blue-500 border-solid rounded md:text-lg">Get Started <i className="pl-2 fas fa-arrow-right animate-bounce"></i></Link>
            </div>
          
            <div className="self-center w-7/12 max-w-xl row-start-2 ml-10 md:w-11/12 justify-self-center md:row-end-1">
                <img className="w-full h-full" src={HomeImg1} alt="iamges"/>
            </div>

            <div className="self-center w-7/12 max-w-xl row-start-4 md:w-11/12 justify-self-center md:row-start-2 ">
                <img src={HomeImg2} alt="secondimage"/>
            </div>

            <div className="flex flex-col items-center justify-center row-start-3 mx-auto my-16 md:mx-0 w-8/12 md:items-start md:row-end-2">
                <h1 className="text-4xl font-medium leading-7 tracking-tighter md:text-6xl"> Sharing is Caring</h1>
                <p className="text-center text-lg font-medium leading-8 text-gray-600 md:text-2xl"> Prepare the note and pass it to the other people in more efficient manner and let everyone be
                 educated</p>
            </div>
            </section>  

            <Footer/>
            </div> 
        </>
    )
}

export default Homepage
