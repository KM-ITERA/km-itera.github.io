import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OpBtn({list}) {
    return (
        <a href={list.link}
            className="group flex flex-col rounded-lg border border-transparent px-5 py-4 max-[290px]:px-auto transition-colors bg-glass text-white hover:text-black hover:border-gray-300 hover:bg-goldish"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={list.icon} className='px-2 my-auto inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none text-xl'/>
            <p className='text-center items-center max-[350px]:text-xs pt-2 max-[290px]:truncate'>
                {list.tittle}{' '}
            </p>
        </a>
    );
}