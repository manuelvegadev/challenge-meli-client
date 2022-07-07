import Head        from 'next/head';
import Breadcrumb  from '../../components/breadcrumb';
import Results     from '../../components/results';

export default function Items({searchResults}) {
    
    return (<>
            
        <Head>
            <title>Search results - Mercado Libre Challenge</title>
        </Head>
            
        <div className="container">

            <div className="row">
                <div className="col col-sm-12 col-md-10 offset-md-1">
                    <Breadcrumb items={searchResults['categories']}/>
                </div>
            </div>
            
            <div className="row">
                <div className="col col-sm-12 col-md-10 offset-md-1">
                    <Results items={searchResults['items']}/>
                </div>
            </div>
            
        </div>
            
    </>);

}

export async function getServerSideProps({query}) {

    console.log('searching...');

    const {search} = query;
    
    const searchResponse = await fetch(process.env.API_URL + 'api/items?q=' + search);
    const searchResults = await searchResponse.json();
    
    console.log('find!');

    return {props: {searchResults}}

}