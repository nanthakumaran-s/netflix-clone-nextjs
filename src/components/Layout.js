import Head from 'next/head'

export default function Layout({ children }) {
    return (
    <div>
        <Head>
            <title>Netflix using nextJs</title>
            <link rel="icon" href='/favicon.ico'/>
        </Head>
        <main>
        {children}
        </main>
    </div>
    )
}
