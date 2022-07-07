import styles     from '../styles/Breadcrumb.module.scss';
import Head       from 'next/head';
import JsonLd     from './json-ld';
import {Fragment} from 'react';

export default function Breadcrumb({items}) {

    return (<>

        <Head>
            <JsonLd
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    'itemListElement': items.map((item, i) => ({
                        '@type': 'ListItem',
                        'position': i + 1,
                        'name': item
                    }))
                }}/>
        </Head>

        <div className={styles.breadcrumb}>

            {items.map((item, i) => (

                <Fragment key={i}>

                    <span className="">{item}</span>

                    {i < items.length - 1 && '>'}

                </Fragment>

            ))}

        </div>

    </>);

}