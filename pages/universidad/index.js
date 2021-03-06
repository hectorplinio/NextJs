import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'
import Link from "next/link"
import Head from 'next/head'
export default function useEffectPage() {

    const [resourceType, setResourceType] = useState('Spain');
    const [items, setItems] = useState([]);

    // UseEffect executes function every change of array arguments:
    // useEffect(function, array_arguments (optional, can be empty array))
    // If no second argument is passed, only execute once
    // Excecutes return content when component willUnmount or 
    // before argument change.
    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    return (
        <>
        <Head>
            <title>Universidad 🚀</title>
            <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="central">
            <div className="cabecera">
                <h1 className="tituloHola">Esta es la página de Universidades</h1>
            </div>
            <div className="botones">
                <button className="boton">
                    <Link href="/"><a className="botonPrincipal">Volver!</a></Link>
                </button>
            </div>      
        </main>
            <div className="banderas">
                <button
                    className="bandera"
                    onClick={() => setResourceType('Spain')}><img 
                    src="https://www.banderas-mundo.es/data/flags/w1160/es.png"></img>
                    
                </button>
                
                <button
                    className="bandera"
                    onClick={() => setResourceType('United States')}><img 
                    src="https://m.media-amazon.com/images/I/6148TmzUrTL._AC_SX425_.jpg"></img>
                </button>
                <button
                    className="bandera"
                    onClick={() => setResourceType('Canada')}>
                    <img 
                    src="https://www.banderas-mundo.es/data/flags/w1600/ca.png"></img>
                    
                </button>
                <button
                    className="bandera"
                    onClick={() => setResourceType('Germany')}>
                    <img 
                    src="https://www.banderas-mundo.es/data/flags/w1160/de.png"></img>
                    
                </button>
                <button
                    className="bandera"
                    onClick={() => setResourceType('Australia')}>
                    <img 
                    src="https://www.banderas-mundo.es/data/flags/w1160/au.png"></img>
                    
                </button>
                <button
                    className="bandera"
                    onClick={() => setResourceType('Argentina')}>
                    <img 
                    src="https://www.banderas-mundo.es/data/flags/w1160/ar.png"></img>
                    
                </button>
                <button
                    className="bandera"
                    onClick={() => setResourceType('Brazil')}>
                    <img 
                    src="https://www.banderas-mundo.es/data/flags/w1160/br.png"></img>
                    
                </button>
                <button
                    className="bandera"
                    onClick={() => setResourceType('Italy')}>
                    <img 
                    src="https://www.banderas-mundo.es/data/flags/w1160/it.png"></img>
                    
                </button>
            </div>
            <h1 className="nombrePais">{resourceType}</h1>
            <ul className="cuadros">
                {items.map((item, index) => {
                    return (<ul key={index}>
                    <li  className="cuadro">
                    Pais: {JSON.stringify(item['country'])}
                    <br></br>Name: {JSON.stringify(item['name'])}
                    <br></br>Web Page: <a href={item['web_pages']}>{item['web_pages']}</a>
                    <br></br>Alpha 2 code: {JSON.stringify(item['alpha_two_code'])}
                    <br></br>Dominio: {JSON.stringify(item['domains'])} </li>
                    </ul>
                )
                })}
            </ul>
        </>

    )

}