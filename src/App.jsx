import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css'
import Greeting from './components/Greeting/Greeting';
import Header from './components/Header/Header';
import Form from './components/Form/Form'

function App() {
  return (
    <>
      <Header />
      <section>
        <Outlet />

        <Routes>
          <Route path='/' element={Form()} />
          <Route path='hello' element={Greeting()} />
        </Routes>
      </section>
    </>
  );
}

export default App
