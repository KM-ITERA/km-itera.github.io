import React from 'react';

function AccordionList({ item }) {
    return (
        <div className="py-5 w-full">
        <details className="group w-full border-b border-goldish pb-3">
            <summary className={`flex items-center justify-between w-full cursor-pointer font-medium text-left ${item.status}`}>
                <span>
                Open Recruitment Ketua Pelaksana {item.judul} 2023 <p className="text-goldish">{item.tanggal}</p>
                </span>
                <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                <div className="py-5 text-start">
                    <p className="mb-2 text-gray-300 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                    {item.details1}
                    </p>
                    <p className="mb-2 text-gray-300 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                    {item.details2}
                    </p>
                    <p className="mb-2 text-gray-300 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                        Lakukan pendaftaran pada link berikut    
                    </p>
                    <span className="text-gray-300 flex flex-row items-center">
                        <a href={item.daftar} target='_blank' rel='noreferrer' className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button className="w-full max-sm:text-sm bg-transparent hover:bg-goldish text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Daftar
                            </button>
                        </a> 
                        <a href={item.syarat} target='_blank' rel='noreferrer' className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button className="w-full max-sm:text-sm bg-transparent hover:bg-goldish text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Syarat
                            </button>
                        </a> 
                    </span>
                </div>
            </div>
        </details>
    </div>
    );
}

export default AccordionList;