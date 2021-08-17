import { useLocaleContext } from '../contexts/LocaleContext';
import { useProductsContext } from '../contexts/ProductsContext';

export default function Header() {
    const [ products ] = useProductsContext();
    const [locale, setLocale] =  useLocaleContext()

    const localeOptions = [
    {locale : "en-us", currency: "$"},
    {locale: "en-gb", currency: "£"},
    {locale: "de-de", currency: "€"}
]

    function handleChange(e) {
        setLocale(e.target.value)
        
    }

    return (
        <header>
            <h1>Product manager</h1>
            <p>Now with {products.length} products</p>
            <p>Select currency</p>
            <select value={locale} onChange={handleChange}>
                {localeOptions.map((option) => (
              <option value={option.locale}>{option.locale}</option>
            ))}
            </select>
        </header>
    )
}