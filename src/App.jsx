import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
    <div className="app-grid">
      <div className="header-area">
        <Header/>
      </div>
      <div className="sidebar-area">
        <Sidebar/>
      </div>
      <div className="body-area">
        <Body/>
      </div>
      <div className="footer-area">
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App