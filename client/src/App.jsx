import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ItemsWanted from "./Pages/ItemsWanted";
import Home from "./Pages/Home";
import ItemsForSale from "./Pages/ItemsForSale";
import Services from "./Pages/Services";
import Navbar from "./components/navbar/Navbar";
import Compose from "./components/Compose";
import LogIn from './Pages/user/LogIn';
import SignUp from './Pages/user/SignUp';
import NewPost from './Pages/adPost/NewPost';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/items-wanted" element={<ItemsWanted />} />
          <Route path="/items-for-sale" element={<ItemsForSale />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>
        <Compose />
      </main>
    </BrowserRouter>
  )
}

export default App
