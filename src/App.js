import { Route, Routes } from 'react-router-dom'
import {
  Navbar,
  Contacts,
  Books,
  About,
  Book
} from "./components";
import { useState } from "react";
import "./App.css";
import { ORANGE } from './helpers/colors';


const App = () => {
  const [loading, setLoading] = useState(false)
  const [getContacts, setContacts] = useState([])
  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/books' element={<Books />}>

          <Route index element={
            <div className="text-center py-5 px-5">
              <p className="h3" style={{ color: ORANGE }}> کتاب خود را انتخاب کنید</p>
            </div>
          } />

          <Route path=':bookId' element={<Book />} />

        </Route>
        <Route path='*' element={
          <div className="text-center py-5 px-5">
            <p className="h3" style={{ color: ORANGE }}> صفحه مورد نظر موجود نیست</p>
          </div>
        } >
        </Route>
      </Routes>

    </div>
  );
};

export default App;
