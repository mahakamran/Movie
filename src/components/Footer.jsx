import React from 'react';

const Footer = () => {
    return (
    <>
    
      <br />  
    <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between pt-5">
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 px-4">
                        <h1 className="text-5xl font-extrabold"><span className="text-yellow-500">Movie</span>Website</h1>
                        <p className="mt-6 text-gray-400 text-xl">
                            Your premium destination for the latest and greatest movies. Enjoy a seamless and immersive experience.
                        </p>
                        <div className="mt-6">
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 mr-4"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 mr-4"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 mr-4"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 px-4 lg:px-12">
                        <h2 className="text-3xl font-semibold">Quick Links</h2>
                        <ul className="mt-6 text-lg space-y-3">
                            <li><a href="#" className="text-white hover:text-yellow-500 transition-colors duration-300">Home</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-500 transition-colors duration-300">About</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-500 transition-colors duration-300">Services</a></li>
                            <li><a href="#" className="text-white hover:text-yellow-500 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                        <h2 className="text-3xl font-semibold">Contact Us</h2>
                        <ul className="mt-6 text-gray-400 text-lg space-y-3">
                            <li className="flex items-center"><i className="fas fa-phone mr-3"></i> +1 234 567 890</li>
                            <li className="flex items-center"><i className="fas fa-envelope mr-3"></i> info@moviewebsite.com</li>
                            <li className="flex items-center"><i className="fas fa-map-marker-alt mr-3"></i> 123 Movie St, Film City, CA</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-center py-6 mt-12 text-lg">
                &copy; 2025 MovieWebsite | Designed by Maha Kamran
            </div>
        </footer></>
    );
};

export default Footer;