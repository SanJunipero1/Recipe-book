import React from "react";
import ElementCategory from "./ElementCategory";

export default function Category(){
    const imageVor = "https://images.ctfassets.net/bdt0zj1w66uy/5HybtBr1ToTLyYxZ49NwdA/df3c3d1a88f83b25b5c958edb4646e75/serghei-savchiuc-Ic0E0y6Zo20-unsplash.jpg"
    const imageHaupt = "https://images.ctfassets.net/bdt0zj1w66uy/5HybtBr1ToTLyYxZ49NwdA/df3c3d1a88f83b25b5c958edb4646e75/serghei-savchiuc-Ic0E0y6Zo20-unsplash.jpg"
    const imageNach = "https://images.ctfassets.net/bdt0zj1w66uy/5HybtBr1ToTLyYxZ49NwdA/df3c3d1a88f83b25b5c958edb4646e75/serghei-savchiuc-Ic0E0y6Zo20-unsplash.jpg"
    
    const categoryVor = "Vorspeisen"
    const categoryHaupt = "Hauptgerichte"
    const categoryNach = "Nachspeisen"
    
    const descVor = "Für den kleinen Hunger, den ersten Hunger, oder einfach nur weils lecker ist"
    const descHaupt = "Von ganzen Herzen das Beste vom Besten aus aller Welt für unsere Gäste"
    const descNach = "Süßes für den Hunger danach - aka Hüftgold"
    

    
    const linkH = "/category/Hauptgerichte"
    const linkV =  "/category/Vorspeisen"
    const linkN =   "/category/Desserts"

    




    return(
        <>
        <ElementCategory image={imageVor} category={categoryVor} description={descVor} link={linkV}/>
        <ElementCategory image={imageHaupt} category={categoryHaupt} description={descHaupt} link={linkH}/>
        <ElementCategory image={imageNach} category={categoryNach} description={descNach} link={linkN}/>
        </>
    )
}