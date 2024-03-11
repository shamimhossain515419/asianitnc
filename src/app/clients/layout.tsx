import RootLayout from "@/components/layout/RootLayout";


const layout = ({ children }: any) => {
    return (
        <RootLayout>
            {children}
        </RootLayout>
    );
};

export default layout;