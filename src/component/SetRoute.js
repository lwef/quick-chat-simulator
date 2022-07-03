import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../view/Main';
import InfoPage from '../view/InfoPage';
import HowToUsePage from '../view/HowToUsePage';

//Route 관리 파일
const SetRoute = () => {
  const path = window.location.pathname;
  
  return (
      <Routes>
        <Route exact path="/Main" element={<Main/>} />
        <Route exact path="/InfoPage" element={<InfoPage/>} />
        <Route exact path="/HowToUsePage" element={<HowToUsePage/>} />
        <Route
          path = "/*"
          element={ 
            <div>
                <h2>이 페이지는 존재하지 않습니다:</h2>
            </div>
          }
        />
      </Routes>
  );
};

export default SetRoute;