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
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const { user, login } = useAuth();

  const [newLocations, setNewLocations] = useState([]);

  function locationUpdateHandler(event) {
    event.preventDefault();

  function loginHandler(username, password) {
    alert(username);
  }


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

      {user ?
        <CookieStandAdmin />
        :
        <LoginForm onLogin={LoginForm} />
      }



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
        {/* <ReportTable resource={resource} stands={stands} /> */}


      </main>

      <Footer />
    </>
  )
}



// function CookieStandAdmin() {

//   const { resources, deleteResource } = useResource();

//   return (
//       <>
//           <CreateForm />
//           <ReportTable newLocations={resources || []} deleteStand={deleteResource} />
//       </>
//   );
// }

// function CookieStandForm() {

//   const { user } = useAuth();
//   const { createResource } = useResource();

//   function handleSubmit(event) {
//       event.preventDefault();
//       const info = {
//           location: event.target.location.value,
//           minimum_customers_per_hour: parseInt(event.target.minimum.value),
//           maximum_customers_per_hour: parseInt(event.target.maximum.value),
//           average_cookies_per_sale: parseFloat(event.target.average.value),
//           owner: user.id,
//       };
//       createResource(info);

//   }

//   return (
//       <form onSubmit={handleSubmit}>
//           <fieldset>
//               <legend>Create Cookie Stand</legend>
//               <input placeholder='location' name='location' />
//               <input placeholder='minimum' name='minimum' />
//               <input placeholder='maximum' name='maximum' />
//               <input placeholder='average' name='average' />
//               <button>create</button>
//           </fieldset>
//       </form>
//   );
// }

// function CookieStandTable({ stands, deleteStand }) {

//   return (
//       <table className="my-8">
//           <thead>
//               <tr>
//                   <th>Location</th>
//                   <th>6 am</th>
//                   <th>7 am</th>
//                   <th>8 am</th>
//                   <th>9 am</th>
//                   <th>10 am</th>
//                   <th>11 am</th>
//                   <th>12 pm</th>
//                   <th>1 pm</th>
//                   <th>2 pm</th>
//                   <th>3 pm</th>
//                   <th>4 pm</th>
//                   <th>5 pm</th>
//                   <th>6 pm</th>
//                   <th>7 pm</th>
//                   <th>totals</th>
//               </tr>
//           </thead>
//           <tbody>
//               {stands.map(stand => (

//                   <CookieStandRow key={stand.id} info={stand} deleteStand={deleteStand} />
//               ))}
//           </tbody>
//       </table>
//   );
// }

// function CookieStandRow({ info, deleteStand }) {

//   function clickHandler() {
//       deleteStand(info.id);
//   }

//   if (info.hourly_sales.length == 0) {
//       // bunk data
//       info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//   }

//   return (
//       <tr>
//           <td>{info.location} <button onClick={clickHandler}>[x]</button></td>
//           {info.hourly_sales.map((slot,index) => <td key={index}>{slot}</td>)}
//           <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
//       </tr>
//   );
// }


function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
      event.preventDefault();
      onLogin(event.target.username.value, event.target.password.value);
  }

  return (
      <form onSubmit={handleSubmit}>
          <fieldset autoComplete='off'>
              <legend>Log In</legend>
              <label htmlFor="username">Username</label>
              <input name="username" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <button type='submit'>Log In</button>
          </fieldset>
      </form>
  );
}
