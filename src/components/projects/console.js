import Image from "next/image";


export default function Console(){
    return(
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative" > <a href="https://github.com/whitezom7/ConsolePortfolio" target="none">
                <Image alt="A photo of a command line interface with different commands on it." className="absolute inset-0 w-full h-full object-cover object-center"  src="https://res.cloudinary.com/dm6tf3fjz/image/upload/v1688506402/Screenshot_2023-07-04_225526_1_qzdrdn.png" width="600" height="300"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Console Portfolio</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">Console Website Portfolio</h1>
                    <p className="leading-relaxed">Console/Terminal Style Website, made in HTML, CSS and JavaScript. This was my first actual JavaScript project</p>
                </div>
            </a>
            </div>
        </div>
    )
}