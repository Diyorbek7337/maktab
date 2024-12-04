import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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


const Main = lazy(() => import("../src/components/main/Main"));
const News = lazy(() => import("./components/news/News"));
const About = lazy(() => import("./components/about/About"));
const Leader = lazy(() => import("./components/leadership/Leadership"));
const Teacher = lazy(() => import("./components/teachers/Teacher"));
const Contact = lazy(() => import("./components/contact/Contact"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
    errorElement: <Errorpage />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        )
      },
      {
        path: "news",
        element: (
          <Suspense fallback={<Loading />}>
            <News />
          </Suspense>
        )
      },
      {
        path: "leader",
        element: (
          <Suspense fallback={<Loading />}>
            <Leader />
          </Suspense>
        )
      },
      {
        path: "teacher",
        element: (
          <Suspense fallback={<Loading />}>
            <Teacher />
          </Suspense>
        )
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        )
      }
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
    react: {
      useSuspense: true // Suspense qo‘llab-quvvatlanishini ta'minlash
    } 
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

