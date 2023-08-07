import Image from "next/image";

export const Project = ({picture, description, title, url}) => {
    return (
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <a href={url} target="none">
                    <Image
                        alt="A photo of a command line interface with different commands on it."
                        className="absolute inset-0 w-full h-full  object-center"
                        src={picture}
                        width="800"
                        height="300"
                    />
                    <div
                        className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h1 className="title-font text-lg font-medium text-white mb-3">{title}</h1>
                        <p className="leading-relaxed overflow-hidden h-28">{description}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}