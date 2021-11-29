import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'
import Link from "next/link"
import Head from 'next/head'


export default function useEffectAdvancedPage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [title, setTitle] = useState("Inicio");


    const handleResize = () => {
        console.log("aaa");
        setWindowWidth(window.innerWidth);
        setTitle(document.title="Cambio");
    }

    
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, []) // Only at window load, not every render

    return (
        <>
        <Head>
            <title>Formulario 🚀</title>
            <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="central">
            <div className="cabecera">
                <h1 className="tituloHola">Esta es la página de Window</h1>
            </div>
            <div className="botones">
                <button className="boton">
                    <Link href="/"><a className="botonPrincipal">Volver!</a></Link>
                </button>
            </div>      
        </main>
    
           <div className="caja2">
               <div className="formulario">
               <div className="text-3xl text-white-400 font-mono">
                    {windowWidth}
                </div>
                
                </div>
               
            </div>
            
        </>
        
    )
}