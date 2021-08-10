import '../styles/globals.scss'
import HomeLayout from '../components/Layouts/home_layout'

function MyApp({ Component, pageProps }) {
  return (
    <HomeLayout>
      {console.log("Reload")}
      <Component {...pageProps} />
   </HomeLayout>
  )
}

export default MyApp
