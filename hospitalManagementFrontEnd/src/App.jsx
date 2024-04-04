
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import DoctorComponent from './components/DoctorComponent';
import PatientComponent from './components/PatientComponent';
import HomeComponent from './components/HomeComponent';
import AdminComponent from './components/AdminComponent';
import AddDoctor from './components/AddDoctor';
import UpdateDoctor from './components/UpdateDoctor';
import Doctor from './components/DoctorDashboard';
import PatientDashboard from './components/PatientDashboard';
import BookingNow from './components/BookingNow';
import AddAppointment from './components/AddAppointment';
import ViewAppointment from './components/ViewAppointment';
import ViewPrescriptions from './components/ViewPrescriptions';
import DoctorDashboard from './components/DoctorDashboard';
import PatientDoctorList from './components/PatientDoctorList';
import PrescriptionAdd from './components/PrescriptionAdd';
import PrescriptionList from './components/PrescriptionList';
import ViewGuidelines from './components/ViewGuidelines';
import LoginComponenet from './components/LoginComponent';
import Register from './components/Register';
import UpdatePatient from './components/UpdatePatient';


function App() {
  

  return (
    <>
    <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="/admin" element={<AdminComponent />} />
          <Route path="/listPatient" element={<PatientComponent />} />
          <Route path="/" element={<HomeComponent />} />
          <Route path="/logout" element={<HomeComponent />}></Route>
          <Route path="/addDoctor" element={<AddDoctor />}></Route>
          <Route path="/doctor" element={<DoctorDashboard />}></Route>
          <Route path="/listDoctor" element={<DoctorComponent />}></Route>
          <Route path="/update-doctor/:id" element={<UpdateDoctor />}></Route>
          <Route path="/update-patient/:id" element={<UpdatePatient />}></Route>
          <Route path="/patient" element={<PatientDashboard />}></Route>
          <Route path="/bookNow" element={<BookingNow />}></Route>
          <Route path="/addAppointment/:id" element={<AddAppointment />}></Route>
          <Route path="/viewAppointment" element={<ViewAppointment />}></Route>
          <Route path="/viewPrescription" element={<ViewPrescriptions />}></Route>
          <Route path="/listDoctorPatient" element={<PatientDoctorList />}></Route>
          <Route path="/addPrescription/:id" element={<PrescriptionAdd />}></Route>
          <Route path="/prescriptionList/:patientName" element={<PrescriptionList />}></Route>
          <Route path="/viewGuidelines" element={<ViewGuidelines />}></Route>
          <Route path="/login" element={<LoginComponenet />}></Route>
          <Route path="/register" element={<Register />}></Route>
          
        </Routes>

        <FooterComponent />
      </BrowserRouter>
     
    </>
  )
}

export default App
