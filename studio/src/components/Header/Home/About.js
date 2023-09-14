import React from 'react';
import SampleImage from '../../Header/Papa.jpg';
function About() {
    return (
        <div className="bg-gray-100 p-12">
            <div className="container mx-auto bg-gray-200">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="bg-gray-500 p-4 rounded-lg ">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
                        <p className=" font-medium text-white">
                            "I firmly believe in the value of hard work and am deeply delighted to have garnered four decades of enriching experience in the realm of wedding photography. Throughout my illustrious journey, I've had the privilege of working with a dedicated and passionate team that excels not only in the art of photography but also in filmmaking, creative design, and meticulous editing.
                            My company, 'The Kanchan Studio,' proudly situated in the heart of Ranchi, has consistently strived to push the boundaries of creativity and excellence. We have made it our mission to continually establish new benchmarks in both the fields of film and photography.
                            As Binod Gupta, I've invested my heart and soul in every project, drawing upon the wealth of experience I've gained over the years. Each moment has been a testament to my unwavering commitment to delivering exceptional work. With boundless enthusiasm, my team and I look forward to many more years of capturing life's most beautiful moments."
             
                        </p>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex items-center">
                        <img
                            src={SampleImage}
                            alt="Our Mission"
                            className="w-72 h-72 rounded-full"
                        />
                        <div className="ml-4">
                            <h1 className="text-2xl font-semibold">NAME: BINOD GUPTA</h1>
                            <h2 className="text-xl font-medium">PROFESSION: PHOTOGRAPHY</h2>
                            <h2 className="text-xl font-medium">CONTACT: 9431353563</h2>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default About;
