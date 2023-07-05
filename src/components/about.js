
export default function About() {
    return(
            <section className="text-gray-600 body-font bg-indigo-950 ">
            <div className="container px-5 py-24 mx-auto flex flex-col ">
                <div className="lg:w-4/6 mx-auto">
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-black">
                    <img className="rounded-full w-30 h-35" src="https://avatars.githubusercontent.com/u/72764274?s=400&u=ab7c2922b9b0a6462f8939123dce237c0254073a&v=4" alt="image description"/>

                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-white text-lg">Taylor Whitewood</h2>
                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                        <p className="text-base text-white">Versatile IT professional proficient in Unix systems, software development, hardware troubleshooting, server management.</p>
                    </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-lg mb-4 fw font-light text-white"> I am a passionate software developer with a strong foundation in programming and problem-solving. With experience in web development, databases, and Software Development, I aim to inspire and connect with fellow software enthusiasts through my personal website. <br/> Join me on this journey as we explore the exciting world of software development together. Through sharing my knowledge and experiences, I hope to make a positive impact and contribute to the ever-evolving field of technology. <br/> Lets collaborate, learn, and create innovative solutions that shape the future of software development. </p>
                    <a href="/blog" className="text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
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