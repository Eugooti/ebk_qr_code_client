import React, { useState, useRef } from 'react';
import {
    Button,
    QRCode,
    Space,
    Input,
    Slider,
    ColorPicker,
    Select,
    Card,
    Divider,
    Form,
    message
} from 'antd';
import {
    DownloadOutlined,
    CopyOutlined,
    QrcodeOutlined
} from '@ant-design/icons';
import logo from '../../assets/LOGO.svg';

const { Option } = Select;

const AntDQRGenerator = () => {
    const [content, setContent] = useState('');
    const [size, setSize] = useState(200);
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [errorLevel, setErrorLevel] = useState('H');
    const [includeMargin, setIncludeMargin] = useState(true);
    const [renderType, setRenderType] = useState('canvas');
    const qrCodeRef = useRef(null);
    const [form] = Form.useForm();

    const handleDownload = () => {
        if (!content) {
            message.error('Please enter content first');
            return;
        }

        if (renderType === 'canvas') {
            downloadCanvasQRCode();
        } else {
            downloadSvgQRCode();
        }
    };

    const downloadCanvasQRCode = () => {
        const canvas = qrCodeRef.current?.querySelector('canvas');
        if (!canvas) {
            message.error('Canvas QR code not found');
            return;
        }

        const url = canvas.toDataURL('image/png');
        doDownload(url, `qr-code-${content.substring(0, 10)}.png`);
    };

    const downloadSvgQRCode = () => {
        const svg = qrCodeRef.current?.querySelector('svg');
        if (!svg) {
            message.error('SVG QR code not found');
            return;
        }

        const svgData = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        doDownload(url, `qr-code-${content.substring(0, 10)}.svg`);
    };

    const doDownload = (url, fileName) => {
        const a = document.createElement('a');
        a.download = fileName.replace(/[^a-z0-9]/gi, '_');
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        message.success('Download started!');
    };

    const copyToClipboard = async () => {
        if (!content) {
            message.error('Please enter content first');
            return;
        }

        try {
            if (renderType === 'canvas') {
                const canvas = qrCodeRef.current?.querySelector('canvas');
                if (!canvas) throw new Error('Canvas not found');

                const blob = await new Promise((resolve) => {
                    canvas.toBlob(resolve);
                });
                await navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ]);
            } else {
                const svg = qrCodeRef.current?.querySelector('svg');
                if (!svg) throw new Error('SVG not found');

                const svgData = new XMLSerializer().serializeToString(svg);
                await navigator.clipboard.writeText(svgData);
            }
            message.success('QR Code copied to clipboard!');
        } catch (error) {
            console.error('Copy failed:', error);
            message.error('Failed to copy QR code');
        }
    };

    const onFormSubmit = (values) => {
        setContent(values.content);
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
                    className="shadow-lg rounded-xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Configuration Panel */}
                        <div>
                            <Form form={form} onFinish={onFormSubmit} layout="vertical">
                                <Form.Item
                                    label="Content (text, number, URL, etc.)"
                                    name="content"
                                    rules={[{ required: true, message: 'Please input content' }]}
                                    initialValue={content}
                                >
                                    <Input
                                        size="large"
                                        autoFocus
                                        autoComplete="off"
                                        allowClear
                                        className="w-full"
                                        placeholder="Enter any text, number or URL"
                                    />
                                </Form.Item>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <Form.Item label="Output Format">
                                        <Select
                                            value={renderType}
                                            onChange={setRenderType}
                                            className="w-full"
                                        >
                                            <Option value="canvas">PNG (Canvas)</Option>
                                            <Option value="svg">SVG (Vector)</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item label="Error Correction">
                                        <Select
                                            value={errorLevel}
                                            onChange={setErrorLevel}
                                            className="w-full"
                                        >
                                            <Option value="L">Low (7%)</Option>
                                            <Option value="M">Medium (15%)</Option>
                                            <Option value="Q">Quartile (25%)</Option>
                                            <Option value="H">High (30%)</Option>
                                        </Select>
                                    </Form.Item>
                                </div>

                                <Form.Item label={`Size: ${size}px`}>
                                    <Slider
                                        min={100}
                                        max={500}
                                        value={size}
                                        onChange={setSize}
                                    />
                                </Form.Item>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <Form.Item label="QR Color">
                                        <ColorPicker
                                            value={fgColor}
                                            onChange={(color) => setFgColor(color.toHexString())}
                                            showText
                                        />
                                    </Form.Item>

                                    <Form.Item label="Background">
                                        <ColorPicker
                                            value={bgColor}
                                            onChange={(color) => setBgColor(color.toHexString())}
                                            showText
                                        />
                                    </Form.Item>
                                </div>

                                <Form.Item label="Include Margin">
                                    <Select
                                        value={includeMargin}
                                        onChange={setIncludeMargin}
                                        className="w-full"
                                    >
                                        <Option value={true}>Yes</Option>
                                        <Option value={false}>No</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="w-full"
                                        size="large"
                                    >
                                        Generate QR Code
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>

                        {/* QR Code Preview */}
                        <div className="flex flex-col items-center justify-center">
                            <div
                                ref={qrCodeRef}
                                className="p-6 bg-white rounded-lg shadow-inner mb-6 flex items-center justify-center"
                                style={{
                                    minHeight: size + 24,
                                    minWidth: size + 24,
                                    backgroundColor: bgColor
                                }}
                            >
                                {content ? (
                                    <QRCode
                                        type={renderType}
                                        value={content}
                                        size={size}
                                        color={fgColor}
                                        bgColor={bgColor}
                                        errorLevel={errorLevel}
                                        bordered={includeMargin}
                                        status="active"
                                        style={{
                                            border: '1px solid #f0f0f0',
                                            padding: '8px',
                                            backgroundColor: bgColor
                                        }}
                                        icon={logo}
                                    />
                                ) : (
                                    <div className="text-gray-400 text-center p-4">
                                        <QrcodeOutlined className="text-4xl mb-2" />
                                        <p>Enter content to generate QR code</p>
                                    </div>
                                )}
                            </div>

                            <Space>
                                <Button
                                    type="primary"
                                    icon={<DownloadOutlined />}
                                    size="large"
                                    onClick={handleDownload}
                                    disabled={!content}
                                >
                                    Download {renderType === 'canvas' ? 'PNG' : 'SVG'}
                                </Button>
                                <Button
                                    icon={<CopyOutlined />}
                                    size="large"
                                    onClick={copyToClipboard}
                                    disabled={!content}
                                >
                                    Copy
                                </Button>
                            </Space>
                        </div>
                    </div>

                    <Divider />

                    <div className="text-center text-gray-600">
                        <p>Generate QR codes for any text content - URLs, contact info, Wi-Fi credentials, product codes, and more!</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AntDQRGenerator;