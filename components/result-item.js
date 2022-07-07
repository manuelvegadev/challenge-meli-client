import Image from 'next/image';
import Head  from 'next/head';

import ic_shipping from '../public/images/ic_shipping.png';
import Link        from 'next/link';

import styles from '../styles/ResultItem.module.scss';
import JsonLd from './json-ld';

export default function ResultItem({item}) {

    const numberFormat = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: item['price']['currency']
    });

    const detailsURL = '/items/' + item['id'];
    
    let schemaItemCondition;
    
    switch (item['condition']) {
        
        case 'new': schemaItemCondition = 'https://schema.org/NewCondition'; break;
        case 'used': schemaItemCondition = 'https://schema.org/UsedCondition'; break;

    }
    
    const today = new Date();

    return (<>

        <Head>
            <JsonLd
                structuredData={{
                    '@context': 'https://schema.org/',
                    '@type': 'Product',
                    'name': item['title'],
                    'image': [item['picture']],
                    'description': 'Descripción no disponible',
                    'sku': item['id'],
                    'offers': {
                        '@type': 'Offer',
                        'url': detailsURL,
                        'priceCurrency': item['price']['currency'],
                        'price': item['price']['amount'],
                        'priceValidUntil': today.toISOString().split('T')[0],
                        'itemCondition': schemaItemCondition,
                        'availability': 'https://schema.org/InStock'
                    }
                }}
            />
        </Head>

        <Link href={detailsURL.toString()}>
            <article className={styles.resultItem}>
                <picture>
                    <img src={item['picture']} alt={'Imagen de ' + item['title']}/>
                </picture>
                <div className={styles.info}>
                    <span className={styles.price}>
                        {numberFormat.format(item['price']['amount'])}
                        {item['free_shipping'] && <Image
                            src={ic_shipping}
                            alt="Aplica para envío gratis"
                            title="Envío gratis"
                        />}
                    </span>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.location}>Neiva</span>
                </div>
            </article>
        </Link>

    </>);

}