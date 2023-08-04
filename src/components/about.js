
import Image from "next/image"

const imageStyle = {
    borderRadius: '25%',
    border: '1px solid #fff',
  }


const aboutMe = "I'm an avid IT professional specializing in System Administration and Web Development.\n" +
    "                        With a solid programming foundation and expertise in Web Development, I aspire to inspire and engage fellow enthusiasts through my website.\n" +
    "                        Let's embark on this journey, sharing insights, and crafting innovative solutions to drive the ever-evolving tech landscape forward.\n" +
    "                        Join me to collaboratively shape the future of IT."

export default function About() {
    return(
            <section className="text-gray-600 body-font bg-indigo-950 ">
            <div className="container px-5 py-24 mx-auto flex flex-col ">
                <div className="lg:w-4/6 mx-auto">
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className=" rounded-full inline-flex items-center justify-center bg-gray-200 text-black">
                    <Image width={115} height={140} style={imageStyle} src="https://avatars.githubusercontent.com/u/72764274?s=400&u=ab7c2922b9b0a6462f8939123dce237c0254073a&v=4" alt="image description"/>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-white text-lg">Taylor Whitewood</h2>
                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                        <p className="text-base text-white">Versatile IT professional interested in Web Development, Cyber Security, System Administrating and Game Development.</p>
                    </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-lg mb-4 fw font-light text-white"> {aboutMe} </p>
                    <a href="/projects" className="text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}