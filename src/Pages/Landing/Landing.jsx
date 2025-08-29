import { motion } from 'framer-motion';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import HeroSection from '../../Components/Hero/HeroSection.jsx';
import FeatureCards from '../../Components/Featured/FeaturedCard.jsx';
import Testimonials from '../../Components/Testimonials/Testimonials.jsx';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <HeroSection />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="container mx-auto px-4 py-16"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Powerful QR Code Generation
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Create customized QR codes for your organization with advanced features and analytics.
                    </p>
                </div>

                <FeatureCards />

                <div className="text-center mt-20">
                    <Button
                        type="primary"
                        size="large"
                        className="bg-indigo-600 hover:bg-indigo-700"
                        href="/generate"
                    >
                        Generate QR Code Now <ArrowRightOutlined />
                    </Button>
                </div>
            </motion.div>

            <Testimonials />
        </div>
    );
};

export default Home;