import styles from '../styles/ItemDetails.module.scss'

export default function ItemDetails ({item}) {
    
    let condition = item['condition'];

    switch (item['condition']) {

        case 'new':
            condition = 'Nuevo';
            break;
        case 'used':
            condition = 'Usado';
            break;

    }

    const numberFormat = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: item['price']['currency']
    });
    
    return (<>

        <article className={styles.itemDetails}>
            
            <div className="row">
                <div className="col col-sm-12 col-md-8">
                    <picture>
                        <img src={item['picture']} alt={'Imagen de ' + item['title']}/>
                    </picture>
                </div>
                <div className="col col-sm-12 col-md-4 d-flex flex-column">
                    <span className={styles.condition}>
                        {condition}
                        {item['sold_quantity'] > 0 && ' - ' + item['sold_quantity'] + ' vendidos'}
                    </span>
                    <h1 className={styles.title}>
                        {item['title']}
                    </h1>
                    <span className={styles.price}>
                        {numberFormat.format(item['price']['amount'])}
                    </span>
                    <button type={'button'} className={styles.shopButton}>Comprar</button>
                </div>
            </div>
            
            <div className="col col-sm-12 col-md-8">
                <h2 className={styles.titleDescription}>Descripción del producto</h2>
                <p className={styles.contentDescription}>{item['description']}</p>
            </div>
            
        </article>
    
    </>);
    
}