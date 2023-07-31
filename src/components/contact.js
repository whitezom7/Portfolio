"use client"
import { Telegram, Github } from "../components/svgs/icons";

export default function Contact() {
    return (
      <section className="text-white body-font bg-indigo-950">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to write me an email.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form action="https://mailthis.to/contact@whitezom.dev" method="POST">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white  rounded border border-white focus:border-white focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      data-np-intersection-state="observed"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white  rounded border border-white focus:border-white focus:bg-white focus:ring-2 focus:ring-white text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      data-np-intersection-state="observed"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white  rounded border border-white focus:border-indigo-500   h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 "
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Send
                  </button>
                </div>
              </div>
            </form>
            <div className="p-2 w-full pt-8 mt-8 border-t border-white text-center">
              <a href="mailto:contact@whitezom.dev" className="text-indigo-500">
                contact@whitezom.dev
              </a>
              <p className="leading-normal my-5">
                The Netherlands
                <br />
                The Czech Republic
              </p>
              <span className="inline-flex">
                <a href="https://www.github.com/whitezom7" target="blank" className="text-white">
                <Github/>
                </a>
                <a href="https://t.me/Whitezom" target="blank" className="ml-4 text-white">
                <Telegram/>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  