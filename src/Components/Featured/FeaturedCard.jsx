import { motion } from 'framer-motion';
import { Card } from 'antd';
import {
    QrcodeOutlined,
    DashboardOutlined,
    TeamOutlined,
    LockOutlined
} from '@ant-design/icons';

const features = [
    {
        icon: <QrcodeOutlined className="text-4xl text-indigo-600" />,
        title: "Dynamic QR Codes",
        description: "Generate QR codes that can be updated without changing the physical code."
    },
    {
        icon: <DashboardOutlined className="text-4xl text-indigo-600" />,
        title: "Advanced Analytics",
        description: "Track scans, locations, and devices to understand your audience better."
    },
    {
        icon: <TeamOutlined className="text-4xl text-indigo-600" />,
        title: "Team Collaboration",
        description: "Share and manage QR codes with your entire organization."
    },
    {
        icon: <LockOutlined className="text-4xl text-indigo-600" />,
        title: "Secure Access",
        description: "Control who can generate and manage your organization's QR codes."
    }
];

const FeatureCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                >
                    <Card
                        hoverable
                        className="h-full text-center p-6 border-0 shadow-lg rounded-xl bg-white"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default FeatureCards;