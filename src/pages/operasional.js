import React from 'react';
import {
  faPenToSquare,
  faNewspaper,
  faListAlt,
  faShareFromSquare
} from "@fortawesome/free-regular-svg-icons";
import { OpBtn } from '../components';

const operasional = [
  {
    "link": "https://bit.ly/DataKetersediaanRuangandanAlatKMITERA",
    "tittle": "Fasilitas",
    "icon": faListAlt
  },
  {
    "link": "https://bit.ly/SuratIzinRuanganKMITERA",
    "tittle": "Surat Izin",
    "icon": faNewspaper
  },
  {
    "link": "https://bit.ly/PeminjamanRuangandanAlatKM-ITERA",
    "tittle": "Form Peminjaman",
    "icon": faPenToSquare
  },
  {
    "link": "https://bit.ly/PengembalianRuangandanAlatKM-ITERA",
    "tittle": "Form Pengembalian",
    "icon": faShareFromSquare
  },
]

export default function Operasional() {
    return (
      <div className="App flex items-center flex-col bg-slate-800 bg-no-repeat bg-fixed bg-cover justify-center h-screen" id='container'>
        <div className='flex items-center justify-center flex-col py-5 w-full min-h-full bg-glass drop-shadow-[0_8px_32px_0_rgba(255, 255, 255, 0.37)] backdrop-blur-sm'>
            <h1 className="text-4xl min-[800px]:text-6xl text-gray-300 max-[290px]:text-xl">Operasional</h1>
            <h2 className="text-2xl text-gray-400 max-[290px]:text-sm">Kabinet KM ITERA 2023</h2>
          <div className='grid grid-cols-4 gap-4 max-md:grid-cols-2 pt-40 px-2'>
            {operasional.map((list, index) => (
                <OpBtn key={index} list={list} />
            ))}
          </div>
        </div>
      </div>
    );
}