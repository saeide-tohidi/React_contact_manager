import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import {
  Navbar,
  Contacts,
  EditContact,
  ViewContact,
  AddContact,
  Books,
  About,
  Book,
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

      <Routes>

        <Route path='/' element={<Navigate to='/' />}></Route>

        <Route path='/contacts/' element={<Contacts contacts={getContacts} loading={loading} />}></Route>
        <Route path='/contacts/add/' element={<AddContact />}></Route>
        <Route path='/contacts/:contactId/' element={<ViewContact />}></Route>
        <Route path='/contacts/edit/:contactId/' element={<EditContact />}></Route>


        <Route path='/about/' element={<About />}></Route>


        <Route path='/books/' element={<Books />}>

          <Route index element={
            <div className="text-center py-5 px-5">
              <p className="h3" style={{ color: ORANGE }}> کتاب خود را انتخاب کنید</p>
            </div>
          } />

          <Route path=':bookId/' element={<Book />} />

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
