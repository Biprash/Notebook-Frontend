import { ReactElement } from 'react'
import {Link} from 'react-router-dom';
import HomeImg1 from '../assets/images/img1.png'
import HomeImg2 from '../assets/images/img2.png'
import Footer from '../Components/Footer'

function Homepage(): ReactElement {
    return (
        <>
            <div className="w-full">
            <section className='grid grid-cols-1 md:grid-cols-2 mt-14  py-[100px]' id='hero-section'>
                    <div className=' py-[25px] flex justify-center items-center px-6'>
                        <div className='space-y-4 '>
                            <h1 className='text-[60px] leading-8 font-bold pb-2 text-gray-900 capitalize '>easy note for all</h1>
                            <p className=''>Make it share it and learn it</p>
                            <div>
                                <Link to="/note" className='inline-block px-6 py-4 text-white bg-indigo-500 rounded hover:bg-indigo-700'>Get Started <i className="pl-2 fas fa-arrow-right animate-bounce"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-baseline w-full '>
                        <img  src={HomeImg1} alt="iamges" />
                    </div>

                    <div className='flex justify-end'>
                        <img src={HomeImg2} alt="secondimage"/>
                    </div>
                    <div className="py-[25px] flex justify-center items-center px-6">
                        <div className='space-y-4'>
                            <h1 className="text-[60px] leading-8 font-bold pb-2 text-gray-900 capitalize "> Sharing is Caring</h1>
                            <p className="w-[500px]"> Prepare the note and pass it to the other people in more efficient manner and let everyone be
                            educated</p>
                        </div>
                     </div>
            </section>
            <Footer/>
            </div> 
        </>
    )
}

export default Homepage
