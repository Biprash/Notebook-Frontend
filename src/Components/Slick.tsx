import React, { ReactElement } from 'react'
import Book from '../assets/images/books.jpg'

interface Props {
    
}

function Slick({}: Props): ReactElement {
    return (
        <div>
            <h1 className="text-4xl font-bold my-6">Top Books</h1>
            <div className="flex flex-wrap justify-between">
                <div className="bg-white rounded w-64">
                    <img src={Book} alt="" className="rounded-t bg-cover bg-no-repeat" />
                    <div className="flex flex-col px-4 py-3">
                        <h2 className="font-semibold text-lg py-1 ">Python Tutorial</h2>
                        <p className="py-2">Description about the deatil.</p>
                        <button className="w-2/4 bg-blue-500 text-white mx-auto my-2 py-1 hover:bg-blue-600">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slick
