import React from 'react'
import imageRecognizer from '../assets/portfolio/imageRecognizer.jpeg'
import moovZone from "../assets/portfolio/moovzone.jpeg"
import secureMessenger from "../assets/portfolio/securemessenger.webp"
import easyAttendance from "../assets/portfolio/easyAttendence.webp"
import lms from "../assets/portfolio/lms.jpeg"
import eta from "../assets/portfolio/eta.png"

function Projects() {
    const handleDemoUrl = (url) => {
        window.open(url, '_blank')
    }
    const portfolio = [
        {
            id: 1,
            src: imageRecognizer,
            url: "https://github.com/MiteshSahu/Image-Recognizer",
            codeurl: "https://github.com/MiteshSahu/Image-Recognizer",
            name: "Image-Recognizer",
        },
        {
            id: 2,
            src: moovZone,
            name: "Moov-Zone",
            url: "https://github.com/MiteshSahu/Moov-Zone",
            codeurl: "https://github.com/MiteshSahu/Moov-Zone"
        },
        {
            id: 3,
            src: secureMessenger,
            name: "Secure Messenger",
            url: "https://github.com/MiteshSahu/Secure-Messenger",
            codeurl: "https://github.com/MiteshSahu/Secure-Messenger"
        },
        {
            id: 4,
            src: easyAttendance,
            name: "Easy Attendence",
            url: "https://github.com/MiteshSahu/Easy-Attendance",
            codeurl: "https://github.com/MiteshSahu/Easy-Attendance"
        },
        {
            id: 5,
            src: lms,
            name: "Library Management System",
            url: "https://github.com/MiteshSahu/Library-Management-System",
            codeurl: "https://github.com/MiteshSahu/Library-Management-System"
        },
        {
            id: 5,
            src: eta,
            name: "Expense Tracker Application",
            url: "https://github.com/MiteshSahu/Expense-Tracker-Application/tree/main/expense",
            codeurl: "https://github.com/MiteshSahu/Expense-Tracker-Application/tree/main/expense"
        },
    ]

    return (
        <div name='projects'
             className='display flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 w-max-content mx-auto h-max-content text-white md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Projects
                    </p>
                    <p className='py-6'>Checkout some of my work right here</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolio.map(({id, src, url, codeurl,name}) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt=""
                                     className='rounded-md duration-200 hover:105'/>
                                <div className='flex items-center justify-center'>
                                    {/*<button onClick={() => handleDemoUrl(url)} className='w-1/2 px-6 py-3 mt-4 text-center text-white hover:scale-105 duration-200'>Demo</button>*/}
                                    <button onClick={() => handleDemoUrl(codeurl)}
                                            className='w-1/2 px-6 py-3 mt-4 text-center text-white hover:scale-105 duration-200'>{name}
                                    </button>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Projects
