import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='w-10/12 max-w-4xl mx-auto mb-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
