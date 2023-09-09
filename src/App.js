import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Layout from "./layout";
import Loading from "./components/loading/loading";

const Home = lazy(() => import("./pages/homePage")); ;
const Business = lazy(() => import("./pages/businessPage")) ;
const General = lazy(() => import("./pages/generalPage")) ;
const Health = lazy(() => import("./pages/healthPage")) ;
const Science = lazy(() => import("./pages/sciencePage")) ;
const Sports = lazy(() => import("./pages/sportsPage")) ;
const Technology = lazy(() => import("./pages/technologyPage")) ;
const EntertainmentPage = lazy(() => import("./pages/EntertainmentPage")) ;
const NotFound = lazy(() => import("./components/notfound/notFound")) ;

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Business" element={<Business />} />
            <Route path="EntertainmentPage" element={<EntertainmentPage />} />
            <Route path="General" element={<General />} />
            <Route path="Health" element={<Health />} />
            <Route path="Science" element={<Science />} />
            <Route path="Sports" element={<Sports />} />
            <Route path="Technology" element={<Technology />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
