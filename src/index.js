import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "../src/components/main/Main"
import News from "./components/news/News"
import About from "./components/about/About";
import Leader from "./components/leadership/Leadership"
import Teacher from "./components/teachers/Teacher"
import Contact from "./components/contact/Contact"
import App from './App';
import Errorpage from './components/ErrorPage/Errorpage';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loading from './components/loading/Loading';
import FullNew from './components/fullNew/FullNew';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "",
        element: <Main/>
      },
      {
        path: "news",
        element: <News/>
      },
      {
        path: "leader",
        element: <Leader/>
      },
      {
        path: "teacher",
        element: <Teacher/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "fullnew/:id",
        element: <FullNew />
      },
    ]
  }
 
]);

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['Uz', 'Ru', 'En'],
    fallbackLng: "Uz",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },  
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
      </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

