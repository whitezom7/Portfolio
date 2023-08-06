import Image from "next/image";

export default function MDW(){
    return(
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative" > <a href="https://fivem-mdw.vercel.app/" target="none">
                <Image alt="A photo of a command line interface with different commands on it." className="absolute inset-0 w-full h-full object-cover object-center"  src="/projects/mdw.png" width="600" height="300"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-white mb-3">Police MDW Project</h1>
                    <p className="leading-relaxed">Work in progress project using NextJS and Typescript, aiming to be a fully fledged functional (Mobile data terminal) dashboard for use in a <a
                        href="https://fivem.net/">FiveM</a>  server. Will interact with a database (MariaDB) once the front end is complete! </p>
                </div>
            </a>
            </div>
        </div>
    )
}