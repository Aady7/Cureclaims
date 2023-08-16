function Footer() {
    return (
      <section className="static">
        <div className=" bg-red-50 mt-6 hover:bg-red-100 flex  shadow-[0_0px_25px_rgba(240,_46,_170,_0.7)]">
          <div className="w-1/3 p-6">
            <h1 className="text-xl font-extrabold mb-2">About Us</h1>
            <p className="text-gray-600 text-left">
              We are a team of passionate individuals working to provide...
            </p>
          </div>
          <div className="w-1/3 p-6">
            <h1 className="text-xl font-extrabold mb-2">Contact</h1>
            <p className="text-gray-600 text-left ">
              If you have any questions or inquiries, feel free to contact us:
            </p>
            <ul className="mt-2 text-left">
              <li>Email: contact@example.com</li>
              <li>Phone: +123-456-7890</li>
            </ul>
          </div>
          <div className="w-1/3 p-6">
            <h1 className="text-xl font-extrabold mb-2">Follow Us</h1>
            <p className="text-gray-600 text-left ">Stay connected with us on social media:</p>
            <ul className="mt-2   text-left">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Footer;
  