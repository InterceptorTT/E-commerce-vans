import Header from './components/header';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <main className=''>
      <Header />
      <div className='grid grid-cols-2 md:grid-cols-4 h-full text-center'>
        <Dashboard />
        <div className='center col-span-2'>
          <Outlet />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </main>
  )
}

export default App
