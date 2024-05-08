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
import { useState, useEffect } from "react";
import "./App.css";
import { ORANGE } from './helpers/colors';
import { getAllContacts, getAllGroups, createContact } from './services/contactServices';



const App = () => {
  const [loading, setLoading] = useState(false)
  const [getContacts, setContacts] = useState([])
  const [getGroups, setGroups] = useState([])
  const [getContact, setContact] = useState({ fullnaem: "", mobile: "", email: "", group: "", job: "" })
  const [forceRender, setForceRender] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();

        setContacts(contactsData);
        setGroups(groupsData);
        setLoading(false);

      } catch (err) {
        setLoading(false);
        console.log(err.message)
      }
    };
    fetchData();
  }, []);

  const setContactInfo = (event) => {

    setContact({
      ...getContact, [event.target.name]: [event.target.value]
    });
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        setContacts(contactsData);
        setLoading(false);

      } catch (err) {
        setLoading(false);
        console.log(err.message)
      }
    };
    fetchData();
  }, [forceRender])

  const createContactForm = async event => {
    event.preventDefault();
    try {
      const { status } = await createContact(getContact);
      if (status === 201) {
        setContact({});
        navigate("/contacts");
        setForceRender(!forceRender)
      }

    } catch (err) {
      console.log(err.message)
    }
  }


  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path='/' element={<Navigate to='/' />}></Route>

        <Route path='/contacts/' element={<Contacts contacts={getContacts} loading={loading} />}></Route>
        <Route path='/contacts/add/' element={<AddContact loading={loading} setContactInfo={setContactInfo} contact={getContact} groups={getGroups} createContactForm={createContactForm} />}></Route>
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
