import "./App.css";
// import "./Component/blogStyles.css"
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { Context } from "./Component/Context";
import { Header } from "./Component/Header"; // name expo component needs{}// className="App-header"
import { Home } from "./Component/Home"
import { Bollywood } from "./Component/Category";
// import { Technology } from "./Component/Technology";
// import { Fitness } from "./Component/Fitness";
// import { Hollywood } from "./Component/Hollywood";
// import { Food } from "./Component/Food";
import { PageNotFound } from "./Component/PageNotFound";
import { ShowContent } from "./Component/ShowContent";

function App() {// header is not route component//
  return (
      <Router>
      <Context>
      <Header /> 
        <Routes> 
          <Route path ='/' element ={<Navigate to ='/home'/>}/>
          <Route path ='/home' element={<Home/>}/>
          <Route path ='title/:category' element={<Bollywood/>}/>
          {/* <Route path ='/technology' element={<Technology/>}/>
          <Route path ='/hollywood' element={<Hollywood/>}/>
          <Route path ='/fitness' element={<Fitness/>}/>
          <Route path ='/food' element={<Food/>}/> */}
          <Route path ='/:show/:id' element={<ShowContent/>}/>
          <Route path ='/*' element={<PageNotFound/>}/>
        </Routes>
      </Context>
      </Router>
  );
}

export default App;
