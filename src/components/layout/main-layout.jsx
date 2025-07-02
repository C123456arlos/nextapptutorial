import React from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'
export const MainLayout = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}

export default MainLayout


// import React from 'react';
// import { Footer } from '../footer/footer';
// import { Header } from '../header/header';

// const MainLayout = ({ children }) => {
//     return (
//         <>
//             <Header />
//             <main>{children}</main>
//             <Footer />
//         </>
//     );
// };

// export default MainLayout;