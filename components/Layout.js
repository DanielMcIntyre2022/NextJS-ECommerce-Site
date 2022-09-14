import Head from 'next/head'
import Link from 'next/link'

const Layout = ({title, children}) => {
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
                        <Link href="/cart"><a className='p-2'>Cart</a></Link>
                        <Link href="/login"><a className='p-2'>Login</a></Link>
                    </div>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>

            </footer>
        </div>
     </>
    )
}

export default Layout; 