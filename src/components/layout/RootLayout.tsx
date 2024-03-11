import Footer from '@/share/footer/Footer';
import Header from '@/share/header/Header';
import React from 'react';

const RootLayout = ({ children }: any) => {
    return (
        <>

            <Header />
            <div className=" min-h-[28vh]">{children}</div>
            <Footer />

        </>
    );
};

export default RootLayout;