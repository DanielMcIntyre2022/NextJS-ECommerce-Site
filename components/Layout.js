import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react';
import { Store } from '../utils/Store'
import { useState, useEffect } from 'react';

const Layout = ({title, children}) => {

    const { state } = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount ] = useState(0);
    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a,c) => a + c.quanity, 0))
    },[cart.cartItems]);

    return (
    <>
     <Head>
        <title>{title? title + '-E-Commerce': 'E-Commerce'}</title>
        <meta name="description" content="E-Commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='flex min-h-screen flex-col justify-between'>
            <header>
                <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
                    <Link href="/">
                        <a className='text-lg font-bold'>E-Commerce</a>
                    </Link>
                    <div>
                        <Link href="/cart"><a className='p-2'>Cart
                        {cartItemsCount > 0 && (
                            <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white '>{cartItemsCount}</span>
                        )} 
                        </a></Link>
                        <Link href="/login"><a className='p-2'>Login</a></Link>
                    </div>
                </nav>
            </header>

            <main className='container m-auto mt-4 px-4'>
                {children}
            </main>

            <footer className='flex h-10 justify-center items-center shadow-inner'>
                Copyright © Daniel McIntyre
            </footer>
        </div>
     </>
    )
}

export default Layout; 