import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAsid from '../components/homelayout/LeftAsid';
import RightAsid from '../components/homelayout/RightAsid';
import Loading from '../pages/Loading';


const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-8'>
                <aside className='col-span-3 sticky top-2 h-fit hidden md:block'>
                    <LeftAsid></LeftAsid>
                </aside>
                <section className='w-[440px]  md:w-full col-span-6 '>
                   {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} 
                </section>
                <aside className='col-span-3 sticky top-2 h-fit hidden md:block'>
                    <RightAsid></RightAsid>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;