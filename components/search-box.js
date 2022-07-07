import {useState}  from 'react';
import Image       from 'next/image';
import Link        from 'next/link';
import {useRouter} from 'next/router';

import Logo_ML   from '../public/images/Logo_ML.png';
import ic_search from '../public/images/ic_Search.png';
import styles    from '../styles/SearchBox.module.scss';

export default function SearchBox() {

    const router = useRouter();
    const {search: initialQuery} = router.query;
    
    const [query, setQuery] = useState(initialQuery);

    function search(event) {

        event.preventDefault();

        if (query.trim()) {
            
            router.push('/items?search=' + query);

        }

    }

    return (<>

        <header className={styles.searchBox}>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 offset-md-1 col-md-10 d-flex align-items-center">
                        <Link href={'/'}>
                            <a>
                                <Image
                                    src={Logo_ML}
                                    alt="Logo de Mercado Libre"
                                />
                            </a>
                        </Link>
                        <form className="d-flex" onSubmit={search}>
                            <input
                                type="search"
                                placeholder="Nunca dejes de buscar"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                            />
                            <button
                                type="submit"
                                className="flex-shrink-0"
                            >
                                <Image src={ic_search}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>

    </>);

}