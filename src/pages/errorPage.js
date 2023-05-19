import React from 'react';

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl text-gray-400">404</h1>
            <h2 className="text-2xl text-gray-400">Page Not Found</h2>
            <a href="/" className="pt-5 text-gray-400 text-xl hover:text-goldish">Back to Home</a>
        </div>
    );
}