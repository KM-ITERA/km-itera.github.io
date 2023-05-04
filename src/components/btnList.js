import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BtnList({list}){
    return(
        <div className="py-2 w-4/5 justify-center flex">
            <a href={list.link} target="_blank" className="w-3/5 max-[450px]:w-full justify-center flex" rel="noreferrer">
                <button className="w-full transition-all bg-transparent hover:bg-goldish hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-goldish font-semibold hover:text-slate-900 py-2 px-4 border border-goldish hover:border-transparent rounded">
                    <FontAwesomeIcon icon={list.icon} className='px-2'/>
                    {list.tittle}
                </button>
            </a>
                <button
                    onClick={() => {
                        window.open(`whatsapp://send?text=${list.share}`, "_blank");
                    }}
                    className="transition-all bg-transparent hover:bg-goldish hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-goldish font-semibold hover:text-slate-900 py-2 px-4 mx-1 border border-goldish hover:border-transparent rounded">
                    <FontAwesomeIcon icon={list.share} className='px-2'/>
                </button>
        </div>
)}; 
export default BtnList;