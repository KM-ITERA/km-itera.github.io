import React from 'react';
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
// import AccordionList from './components/accordionList';
import { AccordionList, BtnList } from './components/index';
import './App.css';
import './index.css';

const listed = [
    {
        "link": "https://twitter.com/km_itera",
        "icon": faTwitter,
        "tittle": "Twitter"
    },
    {
        "link": "https://instagram.com/km_itera",
        "icon": faInstagram,
        "tittle": "Instagram"
    },
    {
        "link": "https://youtube.com/@KMITERA",
        "icon": faYoutube,
        "tittle": "Youtube"
    },
    {
        "link": "https://spotify.link/HBLxo56aUyb",
        "icon": faSpotify,
        "tittle": "Spotify"
    },
    {
        "link": "https://wa.me/6281286216233",
        "icon": faWhatsapp,
        "tittle": "Advokesma (Sabrina)"
    },
    {
        "link": "https://wa.me/6287818874228",
        "icon": faWhatsapp,
        "tittle": "Narahubung (Moza)"
    },
];
const items = [
    {
        "judul": "Duta ITERA",
        "tanggal": "1 - 3 Mei 2023",
        "details1":"Duta ITERA merupakan ajang pemilihan mahasiswa dan mahasiswi terbaik yang ada di ITERA yang dimana bertujuan untuk mencari mahasiswa/i dari ITERA yang mampu mengenalkan ITERA ke masyarakat luas serta menjadi FACE OF ITERA itu sendiri dan role model bagi mahasiswa/i lainnya dengan kriteria yang sudah ditentukan",
        "details2": "",
        "daftar": "https://bit.ly/FormPendaftaranKetuaPelaksanaDUTA-ITERA2023",
        "syarat": "https://bit.ly/SyaratDanKetentuanKetuaPelaksanaDuta-ITERA2023",
        "status": "text-goldish"
    },
    {
        "judul": "ITERA Open", 
        "tanggal": "26 April - 2 Mei 2023", 
        "details1": 'ITERA OPEN merupakan pesta olahraga yang diselenggarakan oleh Institut Teknologi Sumatera, dengan menargetkan mahasiswa dan mahasiswi dari perguruan tinggi yang ada di wilayah lampung dan sumatera, untuk turut serta berpartisipasi di dalam kompetisi. Kegiatan hadir sebagai salah satu upaya memperkenalkan kampus Institut Teknologi Sumatera sebagai kampus muda yang mendukung penuh keolahragaan.',
        "details2": 'Dengan ini, ITERA OPEN diharapkan dapat menjadi momentum dalam menjalin tali silaturahmi serta ajang kompetisi antarkampus, yang diharapkan dapat membawa nama baik dan citra kampus masing-masing dengan menjunjung tinggi nilai sportifitas dan profesionalitas selama berkompetisi.',
        "daftar": "https://bit.ly/pendaftaranketuplakITERAOPEN2023",
        "syarat": "https://bit.ly/SyaratdanKetentuanCalonKetuaPelaksanaITERAOPEN2023",
        "status": "text-goldish"
    },
    {
        "judul": "Liga Ilmiah ITERA (LITERA)",
        "tanggal": "28 April - 2 Mei 2023",
        "details1":"LITERA atau Liga Ilmiah ITERA merupakan suatu ajang perlombaan ilmiah terbesar yang dilaksanakan oleh Kementerian Pendidikan, Riset, dan Teknologi Kabinet Wangsabatih KMITERA pada tahun ini. LITERA dilaksanakan sebagai kegiatan kompetisi keilmiahan di lingkungan kampus ITERA yang bertujuan dalam menumbuhkan rasa berpikir kritis serta jiwa kompetitif pada mahasiswa/i di ITERA dan yang diakhiri oleh acara puncak berupa Malam Apresiasi bagi seluruh peserta LITERA.",
        "details2": "LITERA tidak hanya bertujuan untuk menjadi tempat para mahasiswa/i ITERA dalam meningkatkan kemampuan kognitif namun juga dapat menjadi tempat silaturahmi serta mengembangkan menjalin rasa kekeluargaan bagi mahasiswa/i dari berbagai program studi di ITERA.",
        "daftar": "https://docs.google.com/forms/d/e/1FAIpQLSdZUiocZti98PYrYZ3dq-NeCHGY9ch8nWAxco4PlGCt7KJGkw/viewform?usp=sf_link",
        "syarat": "https://drive.google.com/drive/folders/1pEOCA_eEs6cmfIsxZkNQg8rT47QSS-wU",
        "status": "text-goldish"
    },
    {
        "judul": "Riuh Wisuda Terpusat",
        "tanggal": "29 April - 2 Mei 2023",
        "details1":"Kegiatan ini adalah kegiatan yang diadakan secara terpusat atau satu komando dalam satu kesatuan seluruh elemen organisasi mahasiswa yang ada di ITERA, sebagai arak-arakan wisuda yang dibuat dalam rangka mengapresiasi para wisudawan/wisudawati.",
        "details2": "",
        "daftar": "https://bit.ly/PendaftaranKetuplakRiuhWisudaTerpusat2023",
        "syarat": "https://bit.ly/SyaratdanKetentuanCaketuplakRiuhWisudaTerpusat2023",
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

    );
}
