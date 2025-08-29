import { createContext } from "react";
import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Headers/NavBar.jsx";
import FooterSection from "../Components/Footer/Footer.jsx";

const LandingContext = createContext(undefined);
const { Content, Footer } = Layout;

export const LandingProvider = () => {
    return (
        <LandingContext.Provider value={null}>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            headerBg: "transparent",
                            headerPadding: 0,
                            // bodyBg: "#ffffff",
                        },
                    },
                }}
            >
                <Layout className="min-h-screen">
                    {/* Navbar is fixed and outside the normal layout flow */}
                    <Navbar />
                    {/* Main content area with padding to account for fixed navbar */}
                    <Layout className="pt-18"> {/* Adjust this padding to match your navbar height */}
                        <Content className="mt-4">
                            <div className="min-h-[calc(80vh-160px)]"> {/* Adjust height calculation as needed */}
                                <Outlet />
                            </div>
                        </Content>

                        <Footer style={{ textAlign: 'center' }} className="bg-green-200 w-full">
                            <FooterSection/>
                        </Footer>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </LandingContext.Provider>
    );
};