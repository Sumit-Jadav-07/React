import React from 'react'
import { Link } from 'react-router-dom'

const MiniNavbar = () => {
    return (
        <div>
            <nav className="bg-[#4d4d4d] p-3">
                <div className="container flex items-center justify-between mx-auto">
                    <ul className="flex space-x-6 overflow-x-auto">
                        <li>
                            <Link to="/formdemo1" className="text-white transition-colors hover:text-gray-300">
                                BasicForm
                            </Link>
                        </li>
                        <li>
                            <Link to="/studentform" className="text-white transition-colors hover:text-gray-300">
                                StudentForm
                            </Link>
                        </li>
                        <li>
                            <Link to="/qaform" className="text-white transition-colors hover:text-gray-300">
                                AddQuestion
                            </Link>
                        </li>
                        <li>
                            <Link to="/validationformdemo" className="text-white transition-colors hover:text-gray-300">
                                ValidationFormDemo
                            </Link>
                        </li>
                        <li>
                            <Link to="/validationform" className="text-white transition-colors hover:text-gray-300">
                                ValidationForm
                            </Link>
                        </li>
                        <li>
                            <Link to="/hobbietask" className="text-white transition-colors hover:text-gray-300">
                                HobbieTask
                            </Link>
                        </li>
                        <li>
                            <Link to="/regextask" className="text-white transition-colors hover:text-gray-300">
                                RegexTask
                            </Link>
                        </li>
                        <li>
                            <Link to="/passwordhandlertask" className="text-white transition-colors hover:text-gray-300">
                                Password Handler
                            </Link>
                        </li>
                        <li>
                            <Link to="/apicallingget" className="text-white transition-colors hover:text-gray-300">
                                Api Calling Get
                            </Link>
                        </li>
                        <li>
                            <Link to="/apicallingpost" className="text-white transition-colors hover:text-gray-300">
                                Api Calling Post
                            </Link>
                        </li>
                        <li>
                            <Link to="/useeffectdemo" className="text-white transition-colors hover:text-gray-300">
                                UseEffectDemo
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MiniNavbar
