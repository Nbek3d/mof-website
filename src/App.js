import React from 'react';
import { Navbar, MainMenu, News, About, Scientific, Student, Teacher, Map ,TopBtn} from './components';
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
              
            </>
          } />

          {/* News page */}
          <Route path='/news' element={
            <>
              <Navbar />
              <News />
              
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
