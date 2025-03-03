import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapDemo from "./components/MapDemo";
import University from "./components/University";
import UseStateDemo from "./components/UseStateDemo";
import Loading from "./components/Loading";
import UseStateDemo1 from "./components/UseStateDemo1";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import NetflixHome from "./components/Netflix/NetflixHome";
import NetflixMovies from "./components/Netflix/NetflixMovies";
import NetflixSeries from "./components/Netflix/NetflixSeries";
import NetflixPlayMovies from "./components/Netflix/NetflixPlayMovies";
import NetflixPlaySeries from "./components/Netflix/NetflixPlaySeries";
import FormDemo1 from "./components/Forms/FormDemo1";
import MiniNavbar from "./components/MiniNavbar";
import StudentForm from "./components/Forms/StudentForm";
import AddQuestion from "./components/Forms/AddQuestion";
import SpinnerTest from "./components/SpinnerTest";
import ValidationFormDemo from "./components/Forms/ValidationFormDemo";
import ValidationForm from "./components/Forms/ValidationForm";
import HobbieTask from "./components/Forms/Tasks/HobbieTask";
import RegexTask from "./components/Forms/Tasks/RegexTask";
import PasswordHandler from "./components/Forms/Tasks/PasswordHandler";
import ApiDemo from "./components/Api Calling/ApiDemo";
import ApiPost from "./components/Api Calling/ApiPost";
import UseEffectDemo from "./components/Api Calling/UseEffectDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import FindBomb from "./components/FindBomb";
function App() {
    var name = "Sumit";
    var age = 22;
    var isMarried = false;

    var student = {
        name: "Riddh",
        age: 22,
    };

    return (
        <div className="App">
            {/* <h1>HELLO WORLD</h1>

      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Is Married : {isMarried ? "Yes" : "No"}</p>

      <h2>Student Details</h2>
      <p>Name : {student.name}</p>
      <p>Age : {student.age}</p> */}
            {/* <Header></Header>
      <UseStateDemo></UseStateDemo>
      <Loading></Loading>
      <UseStateDemo1></UseStateDemo1> */}
            {/* <MapDemo></MapDemo>
      <University></University> */}
            {/* <Home></Home>
      <Footer></Footer> */}

            <Navbar></Navbar>

            <MiniNavbar></MiniNavbar>

            <div className="flex items-center justify-center h-full">
                <Routes>

                    <Route path="/" element={<NetflixHome></NetflixHome>}></Route>

                    <Route path="/netflixmovies" element={<NetflixMovies></NetflixMovies>}></Route>

                    <Route path="/netflixseries" element={<NetflixSeries></NetflixSeries>}></Route>

                    <Route path="/netflixmovies/play/:id/:name" element={<NetflixPlayMovies></NetflixPlayMovies>}></Route>

                    <Route path="/netflixseries/play/:id/:name" element={<NetflixPlaySeries />}></Route>

                    <Route path="/formdemo1" element={<FormDemo1></FormDemo1>}></Route>

                    <Route path="/studentform" element={<StudentForm></StudentForm>}></Route>

                    <Route path="/qaform" element={<AddQuestion></AddQuestion>}></Route>

                    <Route path="/vali0dationformdemo" element={<ValidationFormDemo></ValidationFormDemo>}></Route>

                    <Route path="/validationform" element={<ValidationForm></ValidationForm>}></Route>

                    <Route path="/hobbietask" element={<HobbieTask></HobbieTask>}></Route>

                    <Route path="/regextask" element={<RegexTask></RegexTask>}></Route>

                    <Route path="/passwordhandlertask" element={<PasswordHandler></PasswordHandler>}></Route>

                    <Route path="/apicallingget" element={<ApiDemo></ApiDemo>}></Route>

                    <Route path="/apicallingpost" element={<ApiPost></ApiPost>}></Route>

                    <Route path="/useeffectdemo" element={<UseEffectDemo></UseEffectDemo>}></Route>

                    <Route path="/usememodemo" element={<UseMemoDemo></UseMemoDemo>}></Route>
                    
                    <Route path="/findbomb" element={<FindBomb></FindBomb>}></Route>

                    <Route path="/spinner" element={<SpinnerTest></SpinnerTest>}></Route>

                </Routes>
            </div>
        </div>
    );
}

export default App;
