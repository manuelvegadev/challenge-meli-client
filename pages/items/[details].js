import Head        from 'next/head';
import Breadcrumb  from '../../components/breadcrumb';
import ItemDetails from '../../components/item-details';

export default function Items({detailsResult}) {

    const {item} = detailsResult;

    console.log(item);

    return (<>

        <Head>
            <title>{item['title']} - Mercado Libre Challenge</title>
        </Head>
        
        <div className="container">
            <div className="row">
                <div className="col col-s-12 col-md-10 offset-md-1">
                    <Breadcrumb items={['Inicio', 'Detalles del producto']}/>
                    <ItemDetails item={item}/>
                </div>
            </div>
        </div>
        

    </>);

}

export async function getServerSideProps({params}) {

    const {details} = params;

    const detailsResponse = await fetch(process.env.API_URL + 'api/items/' + details);
    const detailsResult = await detailsResponse.json();

    return {props: {detailsResult}};

}