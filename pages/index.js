import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import Footer from '../components/Footer.js';
import LoginForm from '../components/LoginForm';
import CookieStandAdmin from '../components/StandAdmin';
import { useAuth } from '../contexts/auth';



export default function Home() {

  const { user, login } = useAuth();

  return (
    <>
        <Head>
              <title>Cookie Stand Admin</title>
              </Head>
            {user ?
                <CookieStandAdmin />
                :
                <LoginForm onLogin={login} />
            }
    </>
  )
}
