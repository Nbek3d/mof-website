import React from 'react';
import { Navbar, MainMenu, News, About, Scientific,Links, Student, Teacher, Map ,TopBtn,Footer} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


class App extends React.Component {
  render() {

    return (
      <BrowserRouter>

        <Routes>
          {/* Home page */}
          <Route path='/' exact element={
            <>
              <Navbar />
              <MainMenu />
              <Links/>
              
              
            </>
          } />

          {/* News page */}
          <Route path='/news' element={
            <>
              <Navbar />
              <News />
              <Links/>
              
            </>
          } />

          {/* About page */}
          <Route path='/aboutMOF' element={
            <>
              <Navbar />
              <About />
              
            </>
          } />

          {/* Scientific page */}
          <Route path='/scientific' element={
            <>
              <Navbar />
              <Scientific />
            </>
          } />

          {/* Student page */}
          <Route path='/students' element={
            <>
              <Navbar />
              <Student />
            </>
          } />

          {/* Teacher page */}
          <Route path='/teacher' element={
            <>
              <Navbar />
              <Teacher />
            </>
          } />

          {/* Address page */}
          <Route path='/map' element={
            <>
              <Navbar />
              <Map />
            </>
          } />
        </Routes>
        <TopBtn />



      </BrowserRouter>
    );
  }
}

export default App;
