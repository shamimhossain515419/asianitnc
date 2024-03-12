import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const layout = ({ children }: any) => {
    return (
        <div>
            <RootLayout>
                {children}
            </RootLayout>

        </div>
    );
};

export default layout;