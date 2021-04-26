import dynamic from 'next/dynamic';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'site-settings/site-theme/default';
import { AppProvider } from 'contexts/app/app.provider';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { LanguageProvider } from 'contexts/language/language.provider';
import { CartProvider } from 'contexts/cart/use-cart';
import { useApollo } from 'utils/apollo';
import { useMedia } from 'utils/use-media';
import '../../styles/globals.css';
// External CSS import here
import 'rc-drawer/assets/index.css';
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'components/multi-carousel/multi-carousel.style.css';
import 'react-spring-modal/dist/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'components/scrollbar/scrollbar.css';
import '@redq/reuse-modal/lib/index.css';
import 'swiper/swiper-bundle.min.css';
import { GlobalStyle } from 'assets/styles/global.style';

// Language translation messages
import { messages } from 'site-settings/site-translation/messages';
import 'typeface-lato';
import 'typeface-poppins';

const AppLayout = dynamic(() => import('layouts/app-layout'));

export default function ExtendedApp({ Component, pageProps }, props) {
    const mobile = useMedia('(max-width: 580px)');
    const tablet = useMedia('(max-width: 991px)');
    const desktop = useMedia('(min-width: 992px)');
    const apolloClient = useApollo(pageProps.initialApolloState);

    console.log('page props : ', props);

    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <LanguageProvider messages={messages}>
                    <CartProvider>
                        <AppProvider>
                            <AuthProvider>
                                <AppLayout>
                                    <Component
                                        {...pageProps}
                                        deviceType={{ mobile, tablet, desktop }}
                                    />
                                </AppLayout>
                            </AuthProvider>
                        </AppProvider>
                    </CartProvider>
                </LanguageProvider>
            </ThemeProvider>
        </ApolloProvider>
    );
}

// export async function getServerSideProps(context) {

//     console.log('run');

//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//     const data = await res.json()

//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: { data }, // will be passed to the page component as props
//     }
// }