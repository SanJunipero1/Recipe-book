import React from "react";
import ElementCategory from "./ElementCategory";


export default function Category(){
    const imageVor = "https://images.ctfassets.net/bdt0zj1w66uy/3qDt1gCkVj3oAyd3Sf1VSQ/091b71ad81a79f231972d1861fb89aff/7e9d2fcc42ca87980d3bcaf532dbcf3d_4_153784.jpeg?h=250"
    const imageHaupt = "https://images.ctfassets.net/bdt0zj1w66uy/3OFF29a5l1ov3qZtHFlTV4/8140190f64f820937dd41294abb5f50f/braten-t.jpg?h=250"
    const imageNach = "https://images.ctfassets.net/bdt0zj1w66uy/1NvJhrIeVWsAGCLSaEcCpz/78ecfd3fc2f51783b5db357fc3f86d95/panna-cotta-t.jpg?h=250"
    
    const categoryVor = "Vorspeisen"
    const categoryHaupt = "Hauptgerichte"
    const categoryNach = "Nachspeisen"
    
    const descVor = "Fuer den kleinen Hunger, den ersten Hunger, oder einfach nur weils lecker ist"
    const descHaupt = "Von ganzen Herzen das Beste vom Besten aus aller Welt fuer unsere Gaeste"
    const descNach = "Süßes fuer den Hunger danach -aka Hueftgold"
    

    
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