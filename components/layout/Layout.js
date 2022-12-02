import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen">
    
      <header>
        <Navbar />
      </header>

      <main className="h-5/6 w-100 flex justify-center">
        {children}
      </main>
    </div>
  )
}
