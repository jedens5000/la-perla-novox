import React, { useState } from "react";
import HomePage from "./Home";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import WineList from "./WineList";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import ContactPage from "./Contact";
import Error404 from "./Error404";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
// import { useSpeechRecognition } from "react-speech-kit";
import NavbarComponent from "./NavBar";
import Footer from "./Footer";
import { VoiceNav } from "./VoiceNav";

function App() {
  // const [redirectUrl, setRedirectUrl] = useState("");
  // const [navigate, setNavigate] = useState(null);

  const commands = [
    {
      command: [
        "Go to * page",
        "Go to *",
        "Go to * list",
        "Open * page",
        "Open *",
        // "Show me the * page",
        // "Show me the *",
        // "Show me the * list",
        // "Show me *",
        // "Take me to the * page",
        // "Take me to the *",
        // "Take me to the * list",
        // "Take me to *",
        // "Take me *",
      ],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
      // callback: useCallback((redirectPage) => setRedirectUrl(redirectPage), []),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = [
    // const pages = useMemo(() => [
    "home",
    "homepage",
    "the homepage",
    "to the homepage",
    "home page",
    "the home page",
    "about us",
    "the about us",
    "the about us page",
    "menu",
    "the menu",
    "the menu page",
    "wine",
    "wine list",
    "the wine list",
    "reviews",
    "the reviews",
    "the reviews page",
    "gallery",
    "the gallery",
    "the gallery page",
    "contact",
    "contact page",
    "the contact page",
  ];
  //   ],
  //   []
  // );
  const urls = {
    // const urls = useMemo(() => ({
    home: "/",
    homepage: "/",
    "home page": "/",
    "the homepage": "/",
    "the home page": "/",
    "to the homepage": "/",
    aboutus: "/aboutus",
    "about us": "/aboutus",
    "the about us": "/aboutus",
    "the about us page": "/aboutus",
    menu: "/menu",
    // "the menu": "/menu",
    // "the menu page": "/menu",
    wine: "/winelist",
    "wine list": "/winelist",
    "the wine list": "/winelist",
    reviews: "/reviews",
    "the reviews": "/reviews",
    "the reviews page": "/reviews",
    gallery: "/gallery",
    "the gallery": "/gallery",
    "the gallery page": "/gallery",
    contact: "/contact",
    "contact page": "/contact",
    "the contact page": "/contact",
    "to the contact page": "/contact",
  };
  ////////////////////////////////////////////////////////////////////////////
  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null;
  }

  let redirect = "";
  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
    console.log(redirectUrl);
  }

  return (
    <div className="App">
      <NavbarComponent />
      {/* <VoiceNav /> */}
      {/* <p id="transcript">Click the button to use Voice Navigation:</p> */}

      {/* <button onClick={SpeechRecognition.startListening}>Click to Speak</button>
      <p id="transcript">Transcript: {transcript}</p> */}
      {/* <button onClick={SpeechRecognition.startListening}>Click to Speak</button> */}
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
      {/* <p>
        Click the button and use your voice to navigate our site.
        <br />
        Try saying "Go to Gallery", "Open the Contact page", or "Show me the
        Wine List".
      </p> */}

      {/* <div id="links" className="nav">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/winelist">Wine List</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact">Contact</Link>
      </div> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} exact />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/winelist" element={<WineList />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      {/* </Routes> */}
      {/* <Switch> */}
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/winelist" component={WineList} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={ContactPage} />
        {/* <Route path="*" component={Error404} /> */}
        {/* </Switch> */}
        {redirect}
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

////////////////////////////////////////////////////////////////////////////
// useEffect(() => {
//   if (redirectUrl) {
//     if (pages.includes(redirectUrl)) {
//       setNavigate(<Navigate to={urls[redirectUrl]} replace={false} />);
//     } else {
//       setNavigate(<p>Could not find page: {redirectUrl}</p>);
//     }
//     setRedirectUrl("");
//   }
// }, [redirectUrl, pages, urls]);

// useEffect(() => {
//   const transcriptWords = transcript.toLowerCase().split(" ");

//   const redirectPage = pages.find((page) =>
//     transcriptWords.includes(page.toLowerCase())
//   );

//   if (redirectPage) {
//     setRedirectUrl(redirectPage);
//   }
// }, [transcript, pages]);
////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useSpeechRecognition } from "react-speech-kit";
// import { Navigate } from "react-router-dom";

// function App() {
//   const [redirectUrl, setRedirectUrl] = useState("");
//   const [navigate, setNavigate] = useState(null);

//   const commands = [
//     {
//       command: [
//         "Go to * page",
//         "Go to *",
//         "Go to * list",
//         "Open * page",
//         "Open *",
//         "Show me the * page",
//         "Show me the *",
//         "Show me the * list",
//         "Show me *",
//         "Take me to the * page",
//         "Take me to the *",
//         "Take me to the * list",
//         "Take me to *",
//         "Take me *",
//       ],
//       callback: useCallback((redirectPage) => setRedirectUrl(redirectPage), []),
//     },
//   ];
//   const { transcript } = useSpeechRecognition({ commands });
//   const pages = useMemo(
//     () => [
//       "home",
//       "homepage",
//       "the homepage",
//       "to the homepage",
//       "home page",
//       "the home page",
//       "about us",
//       "the about us",
//       "the about us page",
//       "menu",
//       "the menu",
//       "the menu page",
//       "wine",
//       "wine list",
//       "the wine list",
//       "reviews",
//       "the reviews",
//       "the reviews page",
//       "gallery",
//       "the gallery",
//       "the gallery page",
//       "contact",
//       "contact page",
//       "the contact page",
//     ],
//     []
//   );
//   const urls = useMemo(
//     () => ({
//       home: "/",
//       homepage: "/",
//       "home page": "/",
//       "the homepage": "/",
//       "the home page": "/",
//       "to the homepage": "/",
//       aboutus: "/aboutus",
//       "about us": "/aboutus",
//       "the about us": "/aboutus",
//       "the about us page": "/aboutus",
//       menu: "/menu",
//       "the menu": "/menu",
//       "the menu page": "/menu",
//       wine: "/winelist",
//       "wine list": "/winelist",
//       "the wine list": "/winelist",
//       reviews: "/reviews",
//       "the reviews": "/reviews",
//       "the reviews page": "/reviews",
//       gallery: "/gallery",
//       "the gallery": "/gallery",
//       "the gallery page": "/gallery",
//       contact: "/contact",
//       "contact page": "/contact",
//       "the contact page": "/contact",
//       "to the contact page": "/contact",
//     }),
//     []
//   );

//   useEffect(() => {
//     if (redirectUrl) {
//       if (pages.includes(redirectUrl)) {
//         setNavigate(<Navigate to={urls[redirectUrl]} replace={false} />);
//       } else {
//         setNavigate(<p>Could not find page: {redirectUrl}</p>);
//       }
//       setRedirectUrl("");
//     }
//   }, [redirectUrl, pages, urls]);

//   useEffect(() => {
//     const transcriptWords = transcript.toLowerCase().split(" ");

//     const redirectPage = pages.find((page) =>
//       transcriptWords.includes(page.toLowerCase())
//     );

//     if (redirectPage) {
//       setRedirectUrl(redirectPage);
//     }
//   }, [transcript, pages]);

////////////////////////////////////////////////////////////////////////////
// function Redirector({ redirectUrl }) {
//   const pages = [
//     "home",
//     "homepage",
//     "the homepage",
//     "to the homepage",
//     "home page",
//     "the home page",
//     "about us",
//     "the about us",
//     "the about us page",
//     "menu",
//     "the menu",
//     "the menu page",
//     "wine",
//     "wine list",
//     "the wine list",
//     "reviews",
//     "the reviews",
//     "the reviews page",
//     "gallery",
//     "the gallery",
//     "the gallery page",
//     "contact",
//     "contact page",
//     "the contact page",
//   ];

//   const urls = {
//     home: "/",
//     homepage: "/",
//     "home page": "/",
//     "the homepage": "/",
//     "the home page": "/",
//     "to the homepage": "/",
//     aboutus: "/aboutus",
//     "about us": "/aboutus",
//     "the about us": "/aboutus",
//     "the about us page": "/aboutus",
//     menu: "/menu",
//     "the menu": "/menu",
//     "the menu page": "/menu",
//     wine: "/winelist",
//     "wine list": "/winelist",
//     "the wine list": "/winelist",
//     reviews: "/reviews",
//     "the reviews": "/reviews",
//     "the reviews page": "/reviews",
//     gallery: "/gallery",
//     "the gallery": "/gallery",
//     "the gallery page": "/gallery",
//     contact: "/contact",
//     "contact page": "/contact",
//     "the contact page": "/contact",
//     "to the contact page": "/contact",
//   };

//   const navigateTo = urls[redirectUrl];
//   const isValidPage = pages.includes(redirectUrl);

//   if (isValidPage) {
//     return <Navigate to={navigateTo} replace={false} />;
//   } else {
//     return <p>Could not find page: {redirectUrl}</p>;
//   }
// }

// function App() {
//   const [redirectUrl, setRedirectUrl] = useState("");
//   const { transcript } = useSpeechRecognition({ commands });

//   useEffect(() => {
//     const transcriptWords = transcript.toLowerCase().split(" ");

//     const redirectPage = pages.find((page) =>
//       transcriptWords.includes(page.toLowerCase())
//     );

//     if (redirectPage) {
//       setRedirectUrl(redirectPage);
//     }
//   }, [transcript]);

////////////////////////////////////////////////////////////////////////////
// function App() {
//   const [redirectUrl, setRedirectUrl] = useState("");
//   const [navigate, setNavigate] = useState(null);

//   const commands = [
//     {
//       command: [
//         "Go to * page",
//         "Go to *",
//         "Go to * list",
//         "Open * page",
//         "Open *",
//         "Show me the * page",
//         "Show me the *",
//         "Show me the * list",
//         "Show me *",
//         "Take me to the * page",
//         "Take me to the *",
//         "Take me to the * list",
//         "Take me to *",
//         "Take me *",
//       ],
//       callback: useCallback((redirectPage) => setRedirectUrl(redirectPage), []),
//     },
//   ];

//   const pages = useMemo(
//     () => [
//       "home",
//       "homepage",
//       "the homepage",
//       "to the homepage",
//       "home page",
//       "the home page",
//       "about us",
//       "the about us",
//       "the about us page",
//       "menu",
//       "the menu",
//       "the menu page",
//       "wine",
//       "wine list",
//       "the wine list",
//       "reviews",
//       "the reviews",
//       "the reviews page",
//       "gallery",
//       "the gallery",
//       "the gallery page",
//       "contact",
//       "contact page",
//       "the contact page",
//     ],
//     []
//   );

//   const urls = useMemo(
//     () => ({
//       home: "/",
//       homepage: "/",
//       "home page": "/",
//       "the homepage": "/",
//       "the home page": "/",
//       "to the homepage": "/",
//       aboutus: "/aboutus",
//       "about us": "/aboutus",
//       "the about us": "/aboutus",
//       "the about us page": "/aboutus",
//       menu: "/menu",
//       "the menu": "/menu",
//       "the menu page": "/menu",
//       wine: "/winelist",
//       "wine list": "/winelist",
//       "the wine list": "/winelist",
//       reviews: "/reviews",
//       "the reviews": "/reviews",
//       "the reviews page": "/reviews",
//       gallery: "/gallery",
//       "the gallery": "/gallery",
//       "the gallery page": "/gallery",
//       contact: "/contact",
//       "contact page": "/contact",
//       "the contact page": "/contact",
//       "to the contact page": "/contact",
//     }),
//     []
//   );

//   useEffect(() => {
//     if (redirectUrl) {
//       if (pages.includes(redirectUrl)) {
//         setNavigate(<Navigate to={urls[redirectUrl]} replace={false} />);
//       } else {
//         setNavigate(<p>Could not find page: {redirectUrl}</p>);
//       }
//       setRedirectUrl("");
//     }
//   }, [redirectUrl, pages, urls]);

//   const { transcript } = useSpeechRecognition({ commands });

//   useEffect(() => {
//     const transcriptWords = transcript.toLowerCase().split(" ");

//     const redirectPage = pages.find((page) =>
//       transcriptWords.includes(page.toLowerCase())
//     );

//     if (redirectPage) {
//       setRedirectUrl(redirectPage);
//     }
//   }, [transcript, pages]);

////////////////////////////////////////////////////////////////////////////
//   import React, { useState, useEffect, useMemo, useCallback } from "react";
// import { Navigate } from "react-router-dom";
// import { useSpeechRecognition } from "react-speech-recognition";

// function App() {
//   const [redirectUrl, setRedirectUrl] = useState("");
//   const [navigate, setNavigate] = useState(null);

//   const commands = [
//     {
//       command: [
//         "Go to * page",
//         "Go to *",
//         "Go to * list",
//         "Open * page",
//         "Open *",
//         "Show me the * page",
//         "Show me the *",
//         "Show me the * list",
//         "Show me *",
//         "Take me to the * page",
//         "Take me to the *",
//         "Take me to the * list",
//         "Take me to *",
//         "Take me *",
//       ],
//       callback: useCallback((redirectPage) => setRedirectUrl(redirectPage), []),
//     },
//   ];
//   const { transcript } = useSpeechRecognition({ commands });
//   const pages = useMemo(
//     () => [
//       "home",
//       "homepage",
//       "the homepage",
//       "to the homepage",
//       "home page",
//       "the home page",
//       "about us",
//       "the about us",
//       "the about us page",
//       "menu",
//       "the menu",
//       "the menu page",
//       "wine",
//       "wine list",
//       "the wine list",
//       "reviews",
//       "the reviews",
//       "the reviews page",
//       "gallery",
//       "the gallery",
//       "the gallery page",
//       "contact",
//       "contact page",
//       "the contact page",
//     ],
//     []
//   );
//   const urls = useMemo(
//     () => ({
//       home: "/",
//       homepage: "/",
//       "home page": "/",
//       "the homepage": "/",
//       "the home page": "/",
//       "to the homepage": "/",
//       aboutus: "/aboutus",
//       "about us": "/aboutus",
//       "the about us": "/aboutus",
//       "the about us page": "/aboutus",
//       menu: "/menu",
//       "the menu": "/menu",
//       "the menu page": "/menu",
//       wine: "/winelist",
//       "wine list": "/winelist",
//       "the wine list": "/winelist",
//       reviews: "/reviews",
//       "the reviews": "/reviews",
//       "the reviews page": "/reviews",
//       gallery: "/gallery",
//       "the gallery": "/gallery",
//       "the gallery page": "/gallery",
//       contact: "/contact",
//       "contact page": "/contact",
//       "the contact page": "/contact",
//       "to the contact page": "/contact",
//     }),
//     []
//   );

//   useEffect(() => {
//     if (redirectUrl) {
//       if (pages.includes(redirectUrl)) {
//         setNavigate(<Navigate to={urls[redirectUrl]} replace={false} />);
//       } else {
//         setNavigate(<p>Could not find page: {redirectUrl}</p>);
//       }
//       setRedirectUrl("");
//     }
//   }, [redirectUrl, pages, urls]);

//   useEffect(() => {
//     const transcriptWords = transcript.toLowerCase().split(" ");

//     const redirectPage = pages.find((page) =>
//       transcriptWords.includes(page.toLowerCase())
//     );

//     if (redirectPage) {
//       setRedirectUrl(redirectPage);
//     }
//   }, [transcript, pages]);

////////////////////////////////////////////////////////////////////////////
