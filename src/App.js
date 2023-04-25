import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faInstagram,
    faSpotify,
    faYoutube,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import {
    logoITERA,
    logoKM
} from './img/index'
import AccordionList from './components/accordionList';
import './App.css';
import './index.css';

const items = [
    {
        "judul": "ITERA Open", 
        "tanggal": "25 - 30 April 2023", 
        "details1": 'ITERA OPEN merupakan pesta olahraga yang diselenggarakan oleh Institut Teknologi Sumatera, dengan menargetkan mahasiswa dan mahasiswi dari perguruan tinggi yang ada di wilayah lampung dan sumatera, untuk turut serta berpartisipasi di dalam kompetisi. Kegiatan hadir sebagai salah satu upaya memperkenalkan kampus Institut Teknologi Sumatera sebagai kampus muda yang mendukung penuh keolahragaan.',
        "details2": 'Dengan ini, ITERA OPEN diharapkan dapat menjadi momentum dalam menjalin tali silaturahmi serta ajang kompetisi antarkampus, yang diharapkan dapat membawa nama baik dan citra kampus masing-masing dengan menjunjung tinggi nilai sportifitas dan profesionalitas selama berkompetisi.',
        "daftar": "https://bit.ly/pendaftaranketuplakITERAOPEN2023",
        "syarat": "https://bit.ly/SyaratdanKetentuanCalonKetuaPelaksanaITERAOPEN2023",
        "status": "text-goldish"
    },
    {
        "judul": "Liga Ilmiah ITERA (LITERA)",
        "tanggal": "28 - 30 April 2023",
        "details1":"LITERA atau Liga Ilmiah ITERA merupakan suatu ajang perlombaan ilmiah terbesar yang dilaksanakan oleh Kementerian Pendidikan, Riset, dan Teknologi Kabinet Wangsabatih KMITERA pada tahun ini. LITERA dilaksanakan sebagai kegiatan kompetisi keilmiahan di lingkungan kampus ITERA yang bertujuan dalam menumbuhkan rasa berpikir kritis serta jiwa kompetitif pada mahasiswa/i di ITERA dan yang diakhiri oleh acara puncak berupa Malam Apresiasi bagi seluruh peserta LITERA.",
        "details2": "LITERA tidak hanya bertujuan untuk menjadi tempat para mahasiswa/i ITERA dalam meningkatkan kemampuan kognitif namun juga dapat menjadi tempat silaturahmi serta mengembangkan menjalin rasa kekeluargaan bagi mahasiswa/i dari berbagai program studi di ITERA.",
        "daftar": "https://docs.google.com/forms/d/e/1FAIpQLSdZUiocZti98PYrYZ3dqNeCHGY9ch8nWAxco4PlGCt7KJGkw/formResponse",
        "syarat": "https://drive.google.com/drive/folders/1pEOCA_eEs6cmfIsxZkNQg8rT47QSS-wU",
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
        "judul": "LKMM-TD",
        "tanggal": "COMING SOON...",
        "details1":"",
        "details2": "",
        "daftar": "",
        "syarat": "",
        "status": "text-gray-400"
    },
];

export default function App() {
    return (
    <div className="App flex items-center flex-col py-5 bg-slate-800 bg-no-repeat bg-fixed bg-cover" id='container'>
        
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
        <div className="py-2 w-4/5 justify-center flex">
            <a href="https://twitter.com/km_itera" target="_blank" className="w-3/5 max-[450px]:w-full justify-center flex" rel="noreferrer">
                <button className="w-full transition-all bg-transparent hover:bg-goldish hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-goldish font-semibold hover:text-slate-900 py-2 px-4 border border-goldish hover:border-transparent rounded">
                    <FontAwesomeIcon icon={faTwitter} className='px-2'/>
                    Twitter
                </button>
            </a>
        </div>
        <div className="py-2 w-4/5 justify-center flex">
            <a href="https://instagram.com/km_itera" target="_blank" className="w-3/5 max-[450px]:w-full justify-center flex" rel="noreferrer">
                <button className="w-full transition-all bg-transparent hover:bg-goldish hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-goldish font-semibold hover:text-slate-900 py-2 px-4 border border-goldish hover:border-transparent rounded">
                    <FontAwesomeIcon icon={faInstagram} className="px-2"/>
                    Instagram
                </button>
            </a>
        </div>
        <div className="py-2 w-4/5 justify-center flex">
            <a href="https://youtube.com/@KMITERA" target="_blank" className="w-3/5 max-[450px]:w-full justify-center flex" rel="noreferrer">
                <button className="w-full transition-all bg-transparent hover:bg-goldish hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-goldish font-semibold hover:text-slate-900 py-2 px-4 border border-goldish hover:border-transparent rounded">
                    <FontAwesomeIcon icon={faYoutube} className="px-2"/>
                    Youtube
                </button>
            </a>
        </div>
        <div className="py-2 w-4/5 justify-center flex">
            <a href="https://spotify.link/HBLxo56aUyb" target="_blank" className="w-3/5 max-[450px]:w-full justify-center flex" rel="noreferrer">
                <button className="w-full transition-all bg-transparent hover:bg-goldish hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-goldish font-semibold hover:text-slate-900 py-2 px-4 border border-goldish hover:border-transparent rounded">
                    <FontAwesomeIcon icon={faSpotify} className="px-2"/>
                    Spotify
                </button>
            </a>
        </div>
        <div className="py-2 w-4/5 justify-center flex">
            <a href="https://wa.me/6281286216233" target="_blank" className="w-3/5 max-[450px]:w-full justify-center flex" rel="noreferrer">
                <button className="w-full transition-all bg-transparent hover:bg-goldish hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-goldish font-semibold hover:text-slate-900 py-2 px-4 border border-goldish hover:border-transparent rounded">
                    <FontAwesomeIcon icon={faWhatsapp} className="px-2"/>
                    Advokesma (Sabrina)
                </button>
            </a>
        </div>
        <div className="py-2 w-4/5 justify-center flex">
            <a href="https://wa.me/6287818874228" target="_blank" className="w-3/5 max-[450px]:w-full justify-center flex" rel="noreferrer">
                <button className="w-full transition-all bg-transparent hover:bg-goldish hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-goldish font-semibold hover:text-slate-900 py-2 px-4 border border-goldish hover:border-transparent rounded">
                    <FontAwesomeIcon icon={faWhatsapp} className="px-2"/>
                    Narahubung (Moza)
                </button>
            </a>
        </div>
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

    );
}
