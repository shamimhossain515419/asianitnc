import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const layout = ({ children }: any) => {
    return (
        <RootLayout>
            {children}
        </RootLayout>
    );
};

export default layout;