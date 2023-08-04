import Image from "next/image"



export default function ProjectCards(){
    return(
        <section className="text-gray-400  bg-indigo-950 body-font">
        <div className="container  px-5 py-24 mx-auto">
            <div className="flex  flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Projects!</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here you will find my open-sourced projects that are available on github, projects will be added continuously as completed. <br/> You will find my most used Languages here such as: <br/> C#, JavaScript, Python .</p>
            </div>
            <div className="flex flex-wrap -m-4">
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
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative"> <a href="https://github.com/whitezom7/WallpaperChanger" target="none">
                <img alt="The logo of WallHaven." className="absolute inset-0 w-full h-full object-cover object-center" src="https://store-images.s-microsoft.com/image/apps.36321.13510798883117760.7055dba2-b836-47b3-b71e-e3f3b53a869a.14392c40-8a7b-48a1-8afa-4f98f11609f7"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">WallpaperChanger</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">WallpaperChanger using the WallHaven API</h1>
                    <p className="leading-relaxed">Python program that allows you to automatically change your desktop wallpaper using random images from the WallHaven API. </p>
                </div>
                </a>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative"> <a href="https://electricstate-whitezom7.vercel.app/" target="none" >
                <img alt="A website with a group of people sitting around a campfire, the setting is a post apocalyptic forest." className="absolute inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/dm6tf3fjz/image/upload/v1691139324/Electric_State_xdq4sb.png" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-white mb-3">Electric State Website</h1>
                    <p className="leading-relaxed ">A website i made in nextJS using Typescript for a friends DayZ server. <br/>
                    The site uses an API to gather server details, regarding Server Uptime, players online etc. </p>
                </div>
                </a>
                </div>
            </div>
        </div>
    </div>    
    </section>
        
    )
}