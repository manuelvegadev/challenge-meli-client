import ResultItem from './result-item';
import {Fragment} from 'react';

export default function Results ({items}) {
    
    return (<>

        {items.map((item, i) => (
            
            <Fragment key={i}>

                <ResultItem item={item}/>

            </Fragment>
            
        ))}
    
    </>);
    
}