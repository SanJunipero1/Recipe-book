import Header from "./Header/Index"
import Footer from "./Footer/Index"
import Search from "./Search/Search"
import Breadcrumbs from "./Breadcrumbs/Index"

export default function Layout ({children,setSearchValue}){

    return(
        <>
        <Header/>
        <Search setSearchValue={setSearchValue}/>
        <Breadcrumbs/>
        {children}
        <Footer/>
        </>
    )
}