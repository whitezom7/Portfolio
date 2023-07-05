import Image from "next/image"



export default function ProjectCards(){
    return(
        <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Projects!</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Here you will find my open-sourced projects that are availble on github, projects will be added continuously as completed. <br/> You'll find my most used Languages here such as: <br/> C#, JavaSscript, Python .</p>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative" > <a href="https://github.com/whitezom7/ConsolePortfolio" target="none">
                <Image alt="gry" class="absolute inset-0 w-full h-full object-cover object-center"  src="https://res.cloudinary.com/dm6tf3fjz/image/upload/v1688506402/Screenshot_2023-07-04_225526_1_qzdrdn.png" width="600" height="300"/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Console Portfolio</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Console Website Portfolio</h1>
                    <p class="leading-relaxed">Console/Terminal Style Website, made in HTML, CSS and JavaSscript. This was my first actual JavaSscript project</p>
                </div>
                </a>
                </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative"> <a href="https://github.com/whitezom7/WallpaperChanger" target="none">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://store-images.s-microsoft.com/image/apps.36321.13510798883117760.7055dba2-b836-47b3-b71e-e3f3b53a869a.14392c40-8a7b-48a1-8afa-4f98f11609f7"/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">WallpaperChanger</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">WallpaperChanger using the wallhaven API</h1>
                    <p class="leading-relaxed">Python program that allows you to automatically change your desktop wallpaper using random images from the Wallhaven API. </p>
                </div>
                </a>
                </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Placeholder</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Placeholder Placeholder Placeholder </h1>
                    <p class="leading-relaxed ">Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder.</p>
                </div>
                </div>
            </div>
        </div>
    </div>    
    </section>
        
    )
}