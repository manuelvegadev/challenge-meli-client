import Head      from 'next/head';
import SearchBox from '../components/search-box';
import '../styles/globals.scss';

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="description" content="Tienda online"/>

                <meta property="og:title" content="Mercado Libre Challenge" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://challenge-meli.manuelvega.dev/" />
                <meta property="og:image" content="https://challenge-meli.manuelvega.dev/images/Logo_ML@2x.png.png" />
            </Head>
            <SearchBox/>
            <Component {...pageProps}/>
        </>
    );
}

export default MyApp;
