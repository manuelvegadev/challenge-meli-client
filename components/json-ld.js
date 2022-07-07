export default function JsonLd ({structuredData}) {
    
    return (

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}>
        </script>
        
    );
    
}