import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu/NavMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Instructors from './components/Instructors/Instructors';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import InstructorDetails from './components/InstructorDetails/InstructorDetails';

function App() {
  
  const [courses,setCourses] = useState([]);
  useEffect(()=>{
      fetch('./courses.json')
      .then(res=>res.json())
      .then(data=>setCourses(data));
  },[]);
  return (
    <div className="">
      <Router>
      <NavMenu/>
        <Switch>
          {/* Default */}
          <Route exact path ="/">
            <Home key={courses.key} coueses={courses}/>
          </Route>

          {/* Home */}
          <Route exact path ="/home">
            <Home key={courses.key} coueses={courses}/>
          </Route>

          {/* Courses */}
          <Route exact path ="/courses">
            <Courses/>
          </Route>
          

          {/* Instructors */}
          <Route exact path ="/instructors">
            <Instructors/>
          </Route>

          <Route exact path = "/instructor/:id">
            <InstructorDetails></InstructorDetails>
          </Route>

          
          {/* About Us */}
          <Route exact path ="/aboutus">
            <AboutUs/>
          </Route>

          {/* Not Found */}
          <Route path ="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
