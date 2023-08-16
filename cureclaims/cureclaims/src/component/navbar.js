function Navbar() {
  return (
    <section className="">
      <nav className="bg-red-50 hover:bg-red-100 py-8 static shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <a href="#" className="text-black text-3xl font-bold md:ml-10 md:mr-10 mb-4 md:mb-0">
              CURECLAIMS
            </a>
            <ul className="flex space-x-6 mb-4 md:mb-0">
              <li>
                <a href="#" className="text-black font-semibold hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-semibold hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-semibold hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-semibold hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
