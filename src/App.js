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
} from './img/index'
import { AccordionList, BtnList } from './components/index';
import './App.css';
import './index.css';

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
        "judul": "Duta ITERA",
        "tanggal": "1 - 6 Mei 2023(Extended)",
        "details1":"Duta ITERA merupakan ajang pemilihan mahasiswa dan mahasiswi terbaik yang ada di ITERA yang dimana bertujuan untuk mencari mahasiswa/i dari ITERA yang mampu mengenalkan ITERA ke masyarakat luas serta menjadi FACE OF ITERA itu sendiri dan role model bagi mahasiswa/i lainnya dengan kriteria yang sudah ditentukan",
        "details2": "",
        "daftar": "https://bit.ly/FormPendaftaranKetuaPelaksanaDUTA-ITERA2023",
        "syarat": "https://bit.ly/SyaratDanKetentuanKetuaPelaksanaDuta-ITERA2023",
        "status": "text-goldish"
    },
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
];

export default function App() {
    return (
    <div className="App flex items-center flex-col bg-slate-800 bg-no-repeat bg-fixed bg-cover" id='container'>
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
        {listed.map((list, index) => (
            <BtnList key={index} list={list} />
        ))}
        {/* <!-- End Link --> */}

        {/* <!-- Accordion --> */}
        <div className='w-full justify-center flex py-3' >
            <div className="grid divide-y divide-goldish mt-8 w-4/5 min-[450px]:w-2/4" data-active-classes="bg-goldish text-gray-900" data-inactive-classes="text-goldish">
                <div>
                    {items.map((item, index) => (
                        <AccordionList key={index} item={item} />
                        ))}
                </div>
	        </div>
        </div>
        {/* <!-- End Accordion --> */}

        </div>
    </div>

    );
}
