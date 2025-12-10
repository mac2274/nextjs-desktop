'use client';
import { useEffect } from 'react';

// export default function Page() {
//     return <h1>Test Page</h1>
// }

export default function Effect() {
    useEffect(() => {
        console.log('Seite geladen!');
    }, []);

    return;
}