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
import { useContext } from "react";
import { UserContext } from './context/UserContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />
      <main style={{paddingInline: "12rem"}}>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/items-wanted" element={<ItemsWanted />} />
          <Route path="/items-for-sale" element={<ItemsForSale />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newpost" element={<NewPost />} />
        </Routes>


        {user && <Compose />}

      </main>
    </BrowserRouter>
  )
}

export default App
