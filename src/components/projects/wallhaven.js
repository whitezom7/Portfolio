import {Project} from "src/components/projects/project";


export default function Wallhaven(){
    return (
        // <div className="lg:w-1/3 sm:w-1/2 p-4">
        //     <div className="flex relative"> <a href="https://github.com/whitezom7/WallpaperChanger" target="none">
        //         <img alt="The logo of WallHaven." className="absolute inset-0 w-full h-full object-cover object-center" src="https://store-images.s-microsoft.com/image/apps.36321.13510798883117760.7055dba2-b836-47b3-b71e-e3f3b53a869a.14392c40-8a7b-48a1-8afa-4f98f11609f7"/>
        //         <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        //             <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">WallpaperChanger</h2>
        //             <h1 className="title-font text-lg font-medium text-white mb-3">WallpaperChanger using the WallHaven API</h1>
        //             <p className="leading-relaxed">Python program that allows you to automatically change your desktop wallpaper using random images from the WallHaven API. </p>
        //         </div>
        //     </a>
        //     </div>
        // </div>

        <Project
            picture={"/projects/wallhaven.jpg"}
            title={"WallpaperChanger"}
            url={"https://github.com/whitezom7/WallpaperChanger"}
            description={
                `Python program that allows you to automatically 
                change your desktop wallpaper using 
                random images from the WallHaven API.
            `}
        />
    )
}