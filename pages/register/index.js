import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'
import Link from "next/link"
import Head from 'next/head'
import dynamic from 'next/dynamic'; 
 
const ComponentUE = dynamic(() => import('../../components/dinamic/dinamicform'), { 
    ssr: false, 
  }); 
 
export default function useEffectAdvancedPage() {     
 
    return ( 
       <ComponentUE/> 
    ) 
}

