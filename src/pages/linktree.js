import React from 'react';
import {
    faTwitter,
    faInstagram,
    faSpotify,
    faYoutube,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
    faShareNodes
} from "@fortawesome/free-solid-svg-icons";
import {
    logoITERA,
    logoKM
} from '../img/index'
import { AccordionList, BtnList, InstallPWA } from '../components/index';
import '../App.css';
import '../index.css';

const listed = [
    {
        "link": "https://twitter.com/km_itera",
        "icon": faTwitter,
        "tittle": "Twitter",
        "share": faShareNodes
    },
    {
        "link": "https://instagram.com/km_itera",
        "icon": faInstagram,
        "tittle": "Instagram",
        "share": faShareNodes
    },
    {
        "link": "https://youtube.com/@KMITERA",
        "icon": faYoutube,
        "tittle": "Youtube",
        "share": faShareNodes
    },
    {
        "link": "https://spotify.link/HBLxo56aUyb",
        "icon": faSpotify,
        "tittle": "Spotify",
        "share": faShareNodes
    },
    {
        "link": "https://wa.me/6281286216233",
        "icon": faWhatsapp,
        "tittle": "Advokesma (Sabrina)",
        "share": faShareNodes
    },
    {
        "link": "https://wa.me/6287818874228",
        "icon": faWhatsapp,
        "tittle": "Narahubung (Moza)",
        "share": faShareNodes
    },
];
const items = [
    {
        "judul": "PPLK ITERA",
        "tanggal": "CLOSED...",
        "details1":"",
        "details2": "",
        "daftar": "",
        "syarat": "",
        "status": "text-gray-400"
    },
    {
        "judul": "LKMM-TD",
        "tanggal": "CLOSED...",
        "details1":"",
        "details2": "",
        "daftar": "",
        "syarat": "",
        "status": "text-gray-400"
    },
    {
        "judul": "ITERA Open", 
        "tanggal": "CLOSED...", 
        "details1": "",
        "details2": "",
        "daftar": "",
        "syarat": "",
        "status": "text-gray-400"
    },
    {
        "judul": "Liga Ilmiah ITERA (LITERA)",
        "tanggal": "CLOSED...",
        "details1":"",
        "details2": "",
        "daftar": "",
        "syarat": "",
        "status": "text-gray-400"
    },
    {
        "judul": "Riuh Wisuda Terpusat",
        "tanggal": "CLOSED...",
        "details1":"",
        "details2": "",
        "daftar": "",
        "syarat": "",
        "status": "text-gray-400"
    },
    {
        "judul": "ITERA Mengajar",
        "tanggal": "CLOSED...",
        "details1":"",
        "details2": "",
        "daftar": "",
        "syarat": "",
        "status": "text-gray-400"
    },
    {
        "judul": "Duta ITERA",
        "tanggal": "CLOSED...",
        "details1":"",
        "details2": "",
        "daftar": "",
        "syarat": "",
        "status": "text-gray-400"
    },
];

export default function Linktree() {
    return (
    <div className="App flex items-center flex-col bg-slate-800 bg-no-repeat bg-fixed bg-cover" id='container'>
            <InstallPWA/>
        <div className='flex items-center flex-col py-5 w-full min-h-full bg-glass drop-shadow-[0_8px_32px_0_rgba(255, 255, 255, 0.37)] backdrop-blur-sm'>

        <div className="w-full relative flex justify-between px-10 min-[800px]:px-28 items-center py-4">
            <a href="http://itera.ac.id " target="_blank" rel="noreferrer">
                <img src={logoITERA} className="w-12 min-[800px]:w-20 rounded-full shadow shadow-goldish hover:animate-pulse" alt='logoITERA' draggable="false"/>
            </a>
            <p className="text-goldish text-lg min-[800px]:text-2xl text-center font-bold">Kabinet Wangsabatih</p>
            <a href="http://km.itera.ac.id" target="_blank" rel="noreferrer">
                <img src={logoKM} className="w-12 min-[800px]:w-20 rounded-full shadow shadow-goldish hover:animate-pulse" alt='logoKM' draggable="false"/>
            </a>
        </div>

        {/* <!-- Link --> */}
        <section className='w-full justify-center flex flex-col items-center'>
            {listed.map((list, index) => (
                <BtnList key={index} list={list} />
            ))}
        </section>
        {/* <!-- End Link --> */}

        {/* <!-- Accordion --> */}
        <section className='w-full justify-center flex py-3' >
            <main className="grid divide-y divide-goldish mt-8 w-4/5 min-[450px]:w-2/4" data-active-classes="bg-goldish text-gray-900" data-inactive-classes="text-goldish">
                <div>
                    {items.map((item, index) => (
                        <AccordionList key={index} item={item} />
                        ))}
                </div>
	        </main>
        </section>
        {/* <!-- End Accordion --> */}

        </div>
    </div>

    );
}
