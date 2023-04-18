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
import './App.css';
import './index.css';

export default function App() {
    return (
    <div className="App flex items-center flex-col my-5">

        <div className="w-full relative flex justify-between px-10 min-[800px]:px-28 items-center py-4">
            <a href="http://itera.ac.id " target="_blank" rel="noreferrer">
                <img src={logoITERA} className="w-12 min-[800px]:w-20 rounded-full shadow shadow-goldish hover:animate-pulse" alt='logoITERA'/>
            </a>
            <p className="text-goldish text-lg min-[800px]:text-2xl text-center">Kabinet Wangsabatih</p>
            <a href="http://km.itera.ac.id" target="_blank" rel="noreferrer">
                <img src={logoKM} className="w-12 min-[800px]:w-20 rounded-full shadow shadow-goldish hover:animate-pulse" alt='logoKM'/>
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
        <div className="w-full justify-center flex py-3">
        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-goldish text-gray-900" data-inactive-classes="text-goldish" className="w-4/5 min-[450px]:w-2/4">
            <h2 id="accordion-flush-heading-1">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-goldish border-b border-goldish" data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
                    <span className="px-3">
                        Open Recruitment Ketua Pelaksana PPLK 2023 <p className="text-goldish">14 - 18 April 2023</p>
                    </span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                <div className="py-5 border-b border-goldish text-start">
                    <p className="mb-2 text-gray-300 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                    PPLK atau Program Pengenalan Lingkungan Kampus adalah program yang dilaksanakan untuk para mahasiswa baru yang merupakan wadah pengenalan awal bagi mahasiswa baru terhadap berbagai aspek kehidupan di perguruan tinggi meliputi sarana dan prasarana, fasilitas kampus, teman baru, dan sebagainya. 
                    </p>
                    <p className="mb-2 text-gray-300 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                    Dengan ini, PPLK ITERA bertujuan sebagai penentu arah gerak perkembangan karakter bagi setiap mahasiswa baru dan sebagai tempat mahasiswa baru untuk dapat mengenali potensi diri, memberikan motivasi dan semangat, serta menanamkan perilaku positif kepada mahasiswa baru.
                    </p>
                    <p className="mb-2 text-gray-300 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                        Lakukan pendaftaran pada link berikut    
                    </p>
                    <span className="text-gray-300 flex flex-row items-center">
                        <a href="https://bit.ly/OpenRecruitmentKetuaPelaksanaPPLK2023" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button className="w-full max-sm:text-sm bg-transparent hover:bg-goldish text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Daftar
                            </button>
                        </a> 
                        <a href="https://bit.ly/SyaratdanKetentuanKetuaPelaksanaPPLK2023" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button className="w-full max-sm:text-sm bg-transparent hover:bg-goldish text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Syarat
                            </button>
                        </a> 
                    </span>
                </div>
            </div>

            <h2 id="accordion-flush-heading-2">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-goldish border-b border-goldish" data-inactive-classes="text-gray-600" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                    <span className="px-3">
                        Open Recruitment Ketua Pelaksana LKMM-TD 2023 <p className="text-goldish">14 - 18 April 2023</p>
                    </span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                <div className="py-5 border-b border-goldish text-start">
                    <p className="mb-2 text-gray-300 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                    LKMM-TD (Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar) merupakan suatu wadah bagi para mahasiswa untuk melatih pengetahuan akan manajemen suatu kegiatan dengan terstruktur dan sistematis. Didalamnya terdapat sebanyak 14 kegiatan dan materi yang akan diberikan bagi para peserta. 
                    </p>
                    <p className="mb-2 text-gray-300 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">                        
                    Setiap materi pula akan dibimbing oleh seorang pemandu yang telah mengalami proses pelatihan terlebih dahulu dan juga oleh seorang penceramah baik dari mahasiswa ITERA, dosen ITERA ataupun tamu undangan dari luar kampus. Setiap peserta yang telah lulus LKMM-TD akan menerima sertifikat kelulusan dan dapat lanjut mengikuti LKMM-TM (Tingkat Menengah).
                    </p>
                    <p className="mb-2 text-gray-300 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                        Lakukan pendaftaran pada link berikut    
                    </p>
                    <span className="text-gray-300 flex flex-row items-center">
                        <a href="https://bit.ly/PendaftaranCalonKetuaPelaksanaLKMMTD3Itera2023" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button className="w-full max-sm:text-sm bg-transparent hover:bg-goldish text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Daftar
                            </button>
                        </a> 
                        <a href="https://bit.ly/SyaratKetentuanKetuaPelaksanaLKMMTD3Itera2023" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button className="w-full max-sm:text-sm bg-transparent hover:bg-goldish text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Syarat
                            </button>
                        </a> 
                    </span>
                </div>
            </div>

            <h2 id="accordion-flush-heading-3">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-400 border-b border-goldish" data-inactive-classes="text-gray-600" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                    <span className="px-3">
                        Open Recruitment Ketua Pelaksana Liga Ilmiah Itera (LITERA) 2023 <p className="text-goldish">COMING SOON...</p>
                    </span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                <div className="py-5 border-b border-goldish text-start">
                    <p className="mb-2 text-gray-400 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                        Stay Tune Sobat KM....
                    </p>
                    {/* <p className="mb-2 text-gray-400 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                        Lakukan pendaftaran pada link berikut    
                    </p> */}
                    <span className="text-gray-400 flex flex-row items-center">
                        <a href="https://km-itera.github.io/linktree" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button disabled className="w-full max-sm:text-sm bg-transparent disabled:opacity-40 text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Daftar
                            </button>
                        </a> 
                        <a href="https://km-itera.github.io/linktree" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button disabled className="w-full max-sm:text-sm bg-transparent disabled:opacity-40 text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Syarat
                            </button>
                        </a> 
                    </span>
                </div>
            </div>

            <h2 id="accordion-flush-heading-4">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-400 border-b border-goldish" data-inactive-classes="text-gray-600" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                    <span className="px-3">
                        Open Recruitment Ketua Pelaksana Itera Open 2023 <p className="text-goldish">COMING SOON...</p>
                    </span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                <div className="py-5 border-b border-goldish text-start">
                    <p className="mb-2 text-gray-400 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                        Stay Tune Sobat KM....
                    </p>
                    {/* <p className="mb-2 text-gray-400 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                        Lakukan pendaftaran pada link berikut    
                    </p> */}
                    <span className="text-gray-400 flex flex-row items-center">
                        <a href="https://km-itera.github.io/linktree" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button disabled className="w-full max-sm:text-sm bg-transparent disabled:opacity-40 text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Daftar
                            </button>
                        </a> 
                        <a href="https://km-itera.github.io/linktree" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button disabled className="w-full max-sm:text-sm bg-transparent disabled:opacity-40 text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Syarat
                            </button>
                        </a> 
                    </span>
                </div>
            </div>

            <h2 id="accordion-flush-heading-5">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-400 border-b border-goldish" data-inactive-classes="text-gray-600" data-accordion-target="#accordion-flush-body-5" aria-expanded="false" aria-controls="accordion-flush-body-5">
                    <span className="px-3">
                        Open Recruitment Ketua Pelaksana Duta Itera 2023 <p className="text-goldish">COMING SOON...</p>
                    </span>
                    <svg data-accordion-icon className="w-6 h-6 shrink-0 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-5" className="hidden" aria-labelledby="accordion-flush-heading-5">
                <div className="py-5 border-b border-goldish text-start">
                    <p className="mb-2 text-gray-400 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                        Stay Tune Sobat KM....
                    </p>
                    {/* <p className="mb-2 text-gray-400 selection:bg-goldish selection:text-gray-900 max-sm:text-sm">
                        Lakukan pendaftaran pada link berikut    
                    </p> */}
                    <span className="text-gray-400 flex flex-row items-center">
                        <a href="https://km-itera.github.io/linktree" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button disabled className="w-full max-sm:text-sm bg-transparent disabled:opacity-40 text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Daftar
                            </button>
                        </a> 
                        <a href="https://km-itera.github.io/linktree" className="text-blue-600 dark:text-blue-500 hover:underline w-3/12 mx-1">
                            <button disabled className="w-full max-sm:text-sm bg-transparent disabled:opacity-40 text-goldish font-semibold hover:text-slate-900 mt-2 py-2 px-4 max-sm:px-1 border border-goldish hover:border-transparent rounded">
                                Syarat
                            </button>
                        </a> 
                    </span>
                </div>
            </div>

        </div>
        </div>
        {/* <!-- End Accordion --> */}
    </div>

    );
}
