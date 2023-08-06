import Image from "next/image"
import ElectricState from "src/components/projects/electricstate.js";
import Wallhaven from "src/components/projects/wallhaven";
import Console from "src/components/projects/console";
import MDW from "src/components/projects/mdw";



export default function ProjectCards(){
    return(
        <section className="text-gray-400  bg-indigo-950 body-font">
        <div className="container  px-5 py-24 mx-auto">
            <div className="flex  flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Projects!</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here you will find my (open-sourced) projects that are available on github, projects will be added continuously as completed. <br/> You will find my most used Languages here such as: <br/> C#, JavaScript/Typescript, Python. <br/> Hint: Try hovering over the cards</p>
            </div>
            <div className="flex flex-wrap -m-4">
            <Console/>
            <Wallhaven/>
            <ElectricState/>
            <MDW/>
        </div>
    </div>    
    </section>
        
    )
}