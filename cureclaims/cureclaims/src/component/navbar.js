function Navbar(){
    return(
      <nav class="bg-red-50 hover:bg-red-100 py-8  relative  shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between">
          <a href="#" class="text-black text-3xl font-bold ml-10 mr-10 ">CURECLAIMS</a>
          <ul class="flex space-x-6 mr-10 ml">
            <li><a href="#" class="text-black font-semibold hover:underline">Home</a></li>
            <li><a href="#" class="text-black font-semibold hover:underline">About</a></li>
            <li><a href="#" class="text-black font-semibold hover:underline">Services</a></li>
            <li><a href="#" class="text-black font-semibold hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>)

}
export default Navbar