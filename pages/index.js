// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import TopHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '@/components/CreateForm';
import ReportTable from '../components/ReportTable';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [newLocations, setNewLocations] = useState([]);

  function locationUpdateHandler(event) {
    event.preventDefault();


    // build an object representing the question and reply
    const newLocation = {
        hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
        location: event.target.location.value,
        minCustomers: event.target.min.value,
        maxCustomers: event.target.max.value,
        avgCustomers: event.target.avg.value,
    };

    setNewLocations([...newLocations, newLocation]);
  }



  return (
    <>
      <TopHead />
      
      <Header />

      <main>

        <CreateForm locationUpdateHandler={locationUpdateHandler} />

        {/* <table className='w-1/2 mx-auto my-4'>
            <thead>
                <tr>
                    <th className='border border-gray-700'>Location</th>
                    <th className='border border-gray-700'>minCustomers</th>
                    <th className='border border-gray-700'>maxCustomers</th>
                    <th className='border border-gray-700'>avgCookies</th>
                </tr>
            </thead>
            <tbody>
                {
                    newLocations.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td className="pl-2 border border-gray-700">{item.location}</td>
                            <td className="pl-2 border border-gray-700">{item.min}</td>
                            <td className="pl-2 border border-gray-700">{item.max}</td>
                            <td className="pl-2 border border-gray-700">{item.avg}</td>
                      </tr>
                        );
                    })
                }
            </tbody>
        </table> */}
        <ReportTable setNewLocations={setNewLocations} newLocations={newLocations} />

      </main>

      <Footer />
    </>
  )
}


