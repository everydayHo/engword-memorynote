import React from 'react';
import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList></DayList>}></Route>
          <Route path="/day/:day" element={<Day></Day>}></Route>
          <Route
            path="/create_word"
            element={<CreateWord></CreateWord>}
          ></Route>
          <Route path="/create_day" element={<CreateDay></CreateDay>}></Route>
          <Route path="/*" element={<EmptyPage></EmptyPage>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
