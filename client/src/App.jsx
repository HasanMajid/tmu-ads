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
import Chatbox from './components/chat/ChatBox';//?
import SearcResults from './Pages/adPost/SearchResults';
import Settings from './Pages/user/Settings';
import { ChakraProvider } from '@chakra-ui/react';//?
import { useContext } from "react";
import { UserContext } from './context/UserContext';
import Messages from './Pages/user/Messages';

function App() {
  const { user } = useContext(UserContext);

  return (
    <ChakraProvider>
    <BrowserRouter>
      <Navbar />
      <main>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/items-wanted" element={<ItemsWanted />} />
          <Route path="/items-for-sale" element={<ItemsForSale />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/searchresults" element={<SearcResults />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

        {user && <Compose />}
      </main>
    </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
