import React from 'react';
import { Navbar, MainMenu, News, About, Scientific, Student, Teacher, Map ,TopBtn,Footer} from './components';
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
              <Footer/>
              
            </>
          } />

          {/* News page */}
          <Route path='/news' element={
            <>
              <Navbar />
              <News />
              <Footer/>
              
            </>
          } />

          {/* About page */}
          <Route path='/aboutMOF' element={
            <>
              <Navbar />
              <About />
              <Footer/>
              
            </>
          } />

          {/* Scientific page */}
          <Route path='/scientific' element={
            <>
              <Navbar />
              <Scientific />
              <Footer/>
            </>
          } />

          {/* Student page */}
          <Route path='/students' element={
            <>
              <Navbar />
              <Student />
              <Footer/>
            </>
          } />

          {/* Teacher page */}
          <Route path='/teacher' element={
            <>
              <Navbar />
              <Teacher />
              <Footer/>
            </>
          } />

          {/* Address page */}
          <Route path='/map' element={
            <>
              <Navbar />
              <Map />
              <Footer/>
            </>
          } />
        </Routes>
        <TopBtn />



      </BrowserRouter>
    );
  }
}

export default App;
