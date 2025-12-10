'use client';

import { useRouter } from "next/navigation";

export default function NavigationButton() {
    const router = useRouter();

    function goToDashboard() {
        router.push('/dashboard');
    }

    return (
        <div className="p-4">
            <button
                onClick={goToDashboard}
                className="rounded bg-blue-500 px-4 py-2 text-white"
            >
                Gehe zum Dashboard
            </button>
        </div>
    );
}