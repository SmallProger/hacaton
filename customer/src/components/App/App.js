import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import { AuthPage } from '../AuthPage/AuthPage';
import './App.css';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { AccountPage } from '../AccountPage/AccountPage';

function App() {
  let [executorId, setExecutorId] = useState('');

  return (
    <div className='app'>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path='/' element={<AuthPage setExecutorId={setExecutorId} />} />
            <Route path='/myaccount/*' element={<AccountPage id={1} />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  )
}

export { App }