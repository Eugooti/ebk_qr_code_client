import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Logo from '../../assets/LOGO.svg';

const Footer = () => {
    return (
        <footer className=" text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <img className='w-20 h-20' src={Logo} alt="Company Logo" />
                            {/*<span className="ml-3 text-xl font-bold">QRGen</span>*/}
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Empowering EBK with advanced QR code solutions and analytics.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-5">
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                                <FacebookOutlined className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                                <TwitterOutlined className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                                <LinkedinOutlined className="text-2xl" />
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="pt-4 space-y-2">
                            <div className="flex items-center text-gray-400">
                                <MailOutlined className="mr-3" />
                                <span>info@ebk.go.ke</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <PhoneOutlined className="mr-3" />
                                <span>+254-735-330744</span>
                            </div>
                        </div>
                    </div>

                    {/* Features Column */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-6 pb-2 border-b border-gray-700">Features</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Dynamic QR Codes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Real-time Analytics</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Team Management</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">API Integration</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Custom Branding</a></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-6 pb-2 border-b border-gray-700">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Developer Docs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">API Reference</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Tutorial Videos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Community Forum</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-6 pb-2 border-b border-gray-700">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Our Team</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Press Kit</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Contact Sales</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-12"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8">
                    <div className="text-gray-500 mb-4 md:mb-0">
                        © {new Date().getFullYear()} QRGen Technologies. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;