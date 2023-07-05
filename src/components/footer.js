export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24 ">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8 bg-black-500">
          <a></a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-white-600 lg:justify-start"></div>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a className="text-white transition hover:text-indigo-500" href="/">
                About
              </a>
            </li>

            {/* <li>
          <a className="text-white transition hover:text-indigo-500" href="/">
            Services
          </a>
        </li> */}

            <li>
              <a
                className="text-white transition hover:text-indigo-500"
                href="/projects"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-white transition hover:text-indigo-500"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-white transition hover:text-indigo-500"
                href="/contact"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-white lg:text-right">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
