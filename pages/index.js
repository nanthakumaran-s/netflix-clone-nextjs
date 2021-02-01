import { requests } from '../src/config'
import Row from '../src/components/Row'
import Banner from '../src/components/Bannar'
import styles from '../styles/Index.module.css'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'
import Layout from '../src/components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className={styles.app}>
      <Nav />
      <Banner fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Orginals" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      {/* <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/> */}
      {/* <Row title="Documantry Movies" fetchURL={requests.fetchDocumentaryMovies}/> */}
      <Footer />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    revalidate: 900,
    props: {}
  }
}
