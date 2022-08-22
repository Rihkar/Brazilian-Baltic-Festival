/* eslint-disable max-len */
import './Styles/reset.scss';
import './App.scss';
import {
  BrowserRouter as Router, Routes, NavLink, Route, Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import MainPage from './Pages/MainPage';
import YearEighteen from './Pages/2018';
import YearNineteen from './Pages/2019';

const App = () => (
  <Router>
    <div className="top-menu">
      <div className="language-box">
        <div className="language">LV</div>
        <div className="language">BR</div>
        <div className="language">ENG</div>
      </div>
    </div>
    <div className="container">
      <div className="title">
        Brazilian Baltic Festival
      </div>
      <div className="years-box">
        <NavLink to="/" className="year">par festivālu</NavLink>
        <NavLink to="/2018" className="year">2018</NavLink>
        <NavLink to="/2019" className="year">2021</NavLink>
        <NavLink to="/2020" className="year">2022</NavLink>
        <NavLink to="/2020" className="year">partneri</NavLink>
        <NavLink to="/2020" className="year">kontakti</NavLink>

      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/2018" element={<YearEighteen />} />
        <Route path="/2019" element={<YearNineteen />} />

      </Routes>

    </div>
    <div className="footer">
      <img className="facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1200px-Facebook_icon_%28black%29.svg.png" alt="fb" />
      <img className="insta" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcFncjSRYjJWiHjU_2ksLkcSNdh4gG9lnUA&usqp=CAU" alt="intsta" />
      <a href="https://www.youtube.com/channel/UCkgOmjq3eimPGZKbFEBcn-A/videos">
        <img className="yt" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8dea8d27-a9ef-4484-9c20-51f212ebe10f/dd65tbb-545c4f6d-1c6a-4b6f-a19e-499d41142d7d.png/v1/fill/w_894,h_894,q_70,strp/youtube_logo_black_by_revydubz_dd65tbb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzhkZWE4ZDI3LWE5ZWYtNDQ4NC05YzIwLTUxZjIxMmViZTEwZlwvZGQ2NXRiYi01NDVjNGY2ZC0xYzZhLTRiNmYtYTE5ZS00OTlkNDExNDJkN2QucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.s8hGNAjaDb77znDop-F-G22liMVttQDeOOXZi1lcxsM" alt="" />
      </a>

    </div>
  </Router>

);
export default App;
