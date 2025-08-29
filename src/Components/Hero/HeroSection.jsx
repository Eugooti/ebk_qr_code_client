import { motion } from 'framer-motion';
import {Button, Carousel} from 'antd';
import { RocketOutlined } from '@ant-design/icons';

const HeroSection = () => {

    const carouselItems = [
        {
            image: "https://images.pexels.com/photos/21905/pexels-photo.jpg",
            title: "Streamlining Engineering Programme Accreditation in Kenya",
            description: "Accreditation Management System (AMS) by the Engineers Board of Kenya — a centralized platform for accreditation, compliance, and evaluation of engineering programmes."
        },
        {
            image: "https://images.pexels.com/photos/19982408/pexels-photo-19982408.jpeg",
            title: "Ensuring Quality Engineering Education",
            description: "Comprehensive evaluation system to maintain high standards in engineering education across Kenya."
        },
        {
            image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
            title: "Digital Transformation for Accreditation",
            description: "Modern digital platform streamlining the accreditation process for engineering institutions."
        }
    ];

    return (
        <div className="relative overflow-hidden bg-green-700">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                            >
                                <span className="block">EBK QR Code Solutions</span>
                                {/*<span className="block text-indigo-200">For Your Organization</span>*/}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                            >
                                Generate, customize, and track QR codes with our powerful platform designed specifically for organizational needs.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                            >
                                <div className="rounded-md shadow">
                                    <Button
                                        type="primary"
                                        size="large"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                        href="/generate"
                                    >
                                        <RocketOutlined className="mr-2" />
                                        Generate QR Code
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Carousel arrows infinite={true} autoplay={true} effect="fade" className="h-full" dotPosition="bottom">
                    {carouselItems.map((item, index) => (
                        <img
                            key={index}
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src={item.image}
                            alt="QR code technology"
                        />
                    ))}


                </Carousel>

            </div>
        </div>
    );
};

export default HeroSection;