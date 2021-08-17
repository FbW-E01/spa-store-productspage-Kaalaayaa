import { useLocaleContext } from '../contexts/LocaleContext';
import { useProductsContext } from '../contexts/ProductsContext';


export default function Products() {
    const [ products,setProducts ] = useProductsContext();
    const [ locale] = useLocaleContext()

    function deleteProduct(id){
        const newProducts = products.filter((item) => { return item.id !== id });

        setProducts(newProducts)
    }

    let currency = "€"

    if(locale === "en-us"){
        currency = "$"
    } else if(locale ==="en-gb"){
        currency = "£"
    }

    return (
        <div className="Products">
            {products.map(prod => <div key={prod.id}>{prod.name}: {prod.price}{currency}<button onClick={() => deleteProduct(prod.id)}>delete</button></div>)}
            {/* {locale.map(options => <div>{options.locale}</div>)} */}
        </div>
    )
}