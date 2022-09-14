import Head from 'next/head'

const Layout = ({title, children}) => {
    return (
    <>
     <Head>
        <title>{title? title + '-E-Commerce': 'E-Commerce'}</title>
        <meta name="description" content="E-Commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
            <header>

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