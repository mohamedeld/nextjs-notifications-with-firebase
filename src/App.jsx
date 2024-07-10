
import BackgroundHeading from './components/BackgroundHeading'
import Footer from './components/Footer'
import Header from './components/Header'
import ItemList from './components/ItemList'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
     <BackgroundHeading/>
     <main>
      <Header/>
      <Sidebar/>
      <ItemList/>
     </main>
     <Footer/>
    </>
  )
}

export default App
