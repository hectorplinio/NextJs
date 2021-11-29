import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import Link from "next/link"
import React, { useEffect, useState } from 'react';
// Important disable SSR
import dynamic from 'next/dynamic'

const ComponentUE = dynamic(() => import('../../components/dinamic/useEffectComp'), {
    ssr: false,
  });

export default function useEffectAdvancedPage() {    

    return (
       <ComponentUE/>
    )
}