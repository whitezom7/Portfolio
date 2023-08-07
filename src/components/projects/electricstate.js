import Image from "next/image"
import {Project} from "src/components/projects/project";

export default function ElectricState() {
    return (
        // <div className="lg:w-1/3 sm:w-1/2 p-4">
        //     <div className="flex relative"> <a href="https://electricstate-whitezom7.vercel.app/" target="none" >
        //         <img alt="A website with a group of people sitting around a campfire, the setting is a post apocalyptic forest." className="absolute inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/dm6tf3fjz/image/upload/v1691139324/Electric_State_xdq4sb.png" />
        //         <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        //             <h1 className="title-font text-lg font-medium text-white mb-3">Electric State Website</h1>
        //             <p className="leading-relaxed ">A website i made in nextJS using Typescript for a friends DayZ server. <br/>
        //                 The site uses an API to gather server details, regarding Server Uptime, players online etc. </p>
        //         </div>
        //     </a>
        //     </div>
        // </div>

        <Project
            picture={"/projects/ElectricState.png"}
            title={"Electric State Website"}
            url={"https://electricstate-whitezom7.vercel.app/"}
            description={
                `A website I made in nextJS using TypeScript for a friend's DayZ server.
                 The site uses an API to gather server details, regarding Server Uptime, players online etc.
            `}
        />
    )
}