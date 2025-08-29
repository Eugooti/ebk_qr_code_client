import { Card, Avatar } from 'antd';
// import { QuoteOutlined } from '@ant-design/icons';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechCorp",
        content: "This QR generator has transformed our marketing campaigns. The analytics help us measure engagement like never before.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Chen",
        role: "Operations Manager",
        company: "Global Logistics",
        content: "The team collaboration features save us hours every week. Now our entire department can generate and track QR codes.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Emma Rodriguez",
        role: "Event Coordinator",
        company: "Summit Events",
        content: "Dynamic QR codes are a game-changer for our events. We can update information without reprinting materials.",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
];

const Testimonials = () => {
    return (
        <div className="bg-indigo-700 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Trusted by Organizations Worldwide
                    </h2>
                    <div className="w-20 h-1 bg-indigo-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-0 rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="p-6">
                                {/*<QuoteOutlined className="text-3xl text-indigo-200 mb-4" />*/}
                                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                                <div className="flex items-center">
                                    <Avatar src={testimonial.avatar} size="large" />
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;