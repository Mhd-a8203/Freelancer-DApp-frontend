import {Navbar, Welcome, Transactions, About, Footer} from "./components"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 ...">
      <div>
        <Navbar />
        <Welcome />
      </div>
      <Transactions/>
      <About/>
      <Footer/>
    </div>
  )
}
export default App
