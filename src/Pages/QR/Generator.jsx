import { useState, useRef } from 'react';
import {
    Card,
    Input,
    Button,
    Select,
    Slider,
    ColorPicker,
    Divider,
    Space,
    message,
    Form
} from 'antd';
import {
    DownloadOutlined,
    CopyOutlined,
    QrcodeOutlined
} from '@ant-design/icons';
import { QRCodeCanvas } from 'qrcode.react';

const { Option } = Select;

const QRGenerator = () => {
    const [text, setText] = useState('');
    const [size, setSize] = useState(200);
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [level, setLevel] = useState('L');
    const [includeMargin, setIncludeMargin] = useState(false);
    const [form] = Form.useForm();
    const qrCodeRef = useRef(null);

    const downloadQR = () => {
        if (!text) {
            message.error('Please enter content to generate QR code');
            return;
        }

        const canvas = qrCodeRef.current?.querySelector('canvas');
        if (!canvas) {
            message.error('Failed to generate QR code for download');
            return;
        }

        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `qr-code-${text.substring(0, 15)}.png`.replace(/[^a-z0-9]/gi, '_');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const copyToClipboard = async () => {
        if (!text) {
            message.error('Please enter content to generate QR code');
            return;
        }

        try {
            const canvas = qrCodeRef.current?.querySelector('canvas');
            if (!canvas) {
                throw new Error('Canvas not found');
            }

            const blob = await new Promise((resolve, reject) => {
                canvas.toBlob((blob) => {
                    if (blob) {
                        resolve(blob);
                    } else {
                        reject(new Error('Canvas toBlob failed'));
                    }
                });
            });

            await navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob })
            ]);
            message.success('QR Code copied to clipboard!');
        } catch (error) {
            console.error('Copy failed:', error);
            message.error('Failed to copy QR code');
        }
    };

    const onFinish = (values) => {
        setText(values.content);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <Card
                    title={
                        <div className="flex items-center">
                            <QrcodeOutlined className="text-2xl mr-2 text-indigo-600" />
                            <span className="text-2xl font-semibold">QR Code Generator</span>
                        </div>
                    }
                    className="shadow-lg rounded-xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Content (text, URL, number, etc.)
                                </label>
                                <Form
                                    form={form}
                                    onFinish={onFinish}
                                    autoComplete="off"
                                >
                                    <div className='grid grid-cols-12 gap-3'>
                                        <Form.Item
                                            name="content"
                                            className='col-span-8'
                                            rules={[
                                                { required: true, message: 'Content is required' },
                                                { max: 500, message: 'Content too long (max 500 chars)' }
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter any text, URL, or number"
                                                size="large"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                size="large"
                                            >
                                                Generate QR Code
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Size (px)
                                </label>
                                <Slider
                                    min={100}
                                    max={500}
                                    value={size}
                                    onChange={setSize}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Foreground Color
                                    </label>
                                    <ColorPicker
                                        value={fgColor}
                                        onChange={(color) => setFgColor(color.toHexString())}
                                        showText
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Background Color
                                    </label>
                                    <ColorPicker
                                        value={bgColor}
                                        onChange={(color) => setBgColor(color.toHexString())}
                                        showText
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Error Correction
                                    </label>
                                    <Select
                                        value={level}
                                        onChange={setLevel}
                                        size="large"
                                        className="w-full"
                                    >
                                        <Option value="L">Low (7%)</Option>
                                        <Option value="M">Medium (15%)</Option>
                                        <Option value="Q">Quartile (25%)</Option>
                                        <Option value="H">High (30%)</Option>
                                    </Select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Include Margin
                                    </label>
                                    <Select
                                        value={includeMargin}
                                        onChange={setIncludeMargin}
                                        size="large"
                                        className="w-full"
                                    >
                                        <Option value={true}>Yes</Option>
                                        <Option value={false}>No</Option>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <div
                                className="p-6 bg-white rounded-lg shadow-inner mb-6"
                                ref={qrCodeRef}
                                style={{
                                    minWidth: size + 24,
                                    minHeight: size + 24,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                {text ? (
                                    <QRCodeCanvas
                                        value={text}
                                        size={size}
                                        fgColor={fgColor}
                                        bgColor={bgColor}
                                        level={level}
                                        includeMargin={includeMargin}
                                    />
                                ) : (
                                    <div style={{
                                        width: size,
                                        height: size,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '1px dashed #d9d9d9',
                                        color: '#999'
                                    }}>
                                        QR Code Preview
                                    </div>
                                )}
                            </div>

                            <Space>
                                <Button
                                    type="primary"
                                    icon={<DownloadOutlined />}
                                    size="large"
                                    onClick={downloadQR}
                                    className="bg-indigo-600 hover:bg-indigo-700"
                                    disabled={!text}
                                >
                                    Download
                                </Button>
                                <Button
                                    icon={<CopyOutlined />}
                                    size="large"
                                    onClick={copyToClipboard}
                                    disabled={!text}
                                >
                                    Copy
                                </Button>
                            </Space>
                        </div>
                    </div>

                    <Divider />

                    <div className="text-center">
                        <p className="text-gray-600">
                            Generate QR codes for any text - URLs, contact info, Wi-Fi credentials, product codes, and more!
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default QRGenerator;