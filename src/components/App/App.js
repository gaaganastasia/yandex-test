import React from "react";
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Screencast from '../Screencast/Screencast';
import Story from '../Story/Story';
import './App.css';
import { Navigate, Route, Routes, redirect } from "react-router-dom";
import emailjs from "@emailjs/browser";
import api from "../../utils/api";


function App() {
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(2);
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => emailjs.init("NvEjO3KwQ7jMvEdpK"), []);
  React.useEffect(() => tokenCheck(), [loggedIn]);
  
  const handleSendFeedback = async (data, resetForm) => {
    const serviceId = "service_687oykj";
    const templateId = "template_chmq3s2";
    try {
      setLoading(true);
      setIsSuccess(2);
      await emailjs.send(serviceId, templateId, {
       message: data
      });
      setIsSuccess(1)
      
    } catch (error) {
      setIsSuccess(0)
      console.log(error)
    } finally {
      setLoading(false);
      resetForm();
    }
  };

  function tokenCheck() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      api
        .checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => {
          return err;
        });
    }
  }

  function handleLogin(email, password, resetForm) {
    setIsError(false);
    setLoading(true);

    api.authorize(email, password)
      .then((res) => {
        if (res.message) {
          setError(res.message);
          setIsError(true);
        } else {
          setLoggedIn(true);
          setIsError(false);
          return redirect("/nice-to-meet-you");
        }
      })
      .catch((err) => {
        setError(err);
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
        resetForm();
      })
  }

  function handleSignUp(email, password, resetForm) {
    setIsError(false);
    setLoading(true);

    api.register(email, password)
      .then((res) => {
        if (res.message) {
          setError(res.message);
          setIsError(true);
        } else {
          handleLogin(email, password, resetForm);
        }
      })
      .catch((err) => {
        setError(err);
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
        resetForm();
      });
  }

  function handleLogOut() {
    localStorage.removeItem('jwt')
    setLoggedIn(false);
    return redirect("/");
  }

  return (
    <div className="page">
      <Routes>
        {/* <Route path="/" element={loggedIn ? <Navigate to="/nice-to-meet-you" replace={true} /> : <><Header handleLogOut={handleLogOut} /><Main /> <Story /></>} />
        <Route path="/nice-to-meet-you" element={loggedIn ? <><Header handleLogOut={handleLogOut} /><Screencast /><Feedback loading={loading} isSuccess={isSuccess} handleSendFeedback={handleSendFeedback} /></> : <Navigate to="/" replace={true} />} />
        <Route path="/login" element={loggedIn ? <Navigate to="/nice-to-meet-you" replace={true} /> : <Login loading={loading} isError={isError} error={error} handleLogin={handleLogin} handleSignUp={handleSignUp} />} /> */}
        <Route path="/" element={<><Header /><Main /> <Story /></>} />
        <Route path="/nice-to-meet-you" element={<><Header /><Screencast /><Feedback loading={loading} isSuccess={isSuccess} handleSendFeedback={handleSendFeedback} /></>} />
        <Route path="/login" element={<Login loading={loading} isError={isError} error={error} handleLogin={handleLogin} handleSignUp={handleSignUp} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
