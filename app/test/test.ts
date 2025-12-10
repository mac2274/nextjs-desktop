'use client';
import { useEffect } from 'react';

export default function Effect() {
    useEffect(() => {
        console.log('Seite geladen!');
     }, []);

    return; 
}