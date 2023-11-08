import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalContextProvider } from "./contexts/globalContext";
import Profile from "./pages/Studentdashboard/components/Profile";
import Userdetail from "./pages/DashboardPage/components/Userdetail";
import Auth from "./pages/Auth/Auth";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Jobform from "./pages/DashboardPage/components/Jobform";
import Jobdetail from "./pages/DashboardPage/components/Jobdetail";
import Projectform from "./pages/Studentdashboard/components/Projectform";
import Studentdashboard from "./pages/Studentdashboard/Studentdashboard";
import { CacheContextProvider } from "./contexts/cacheContext";
import useModal from "./hooks/useModal";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userdetail" element={<Userdetail />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/jobform" element={<Jobform />} />
        <Route path="/jobdetail" element={<Jobdetail />} />
        <Route path="/studentdashboard" element={<Studentdashboard />} />
        <Route path="/projectform" element={<Projectform />} />
      </Route>
    )
  );

  return (
    <GlobalContextProvider>
      <CacheContextProvider>
        <RouterProvider router={router} />
      </CacheContextProvider>
    </GlobalContextProvider>
  );
}

function Root() {
  const modal = useModal();

  return (
    <main className="relative">
      <div
        className={`fixed z-[999] top-0 left-0 w-full h-full flex justify-center items-center bg-black backdrop-blur-sm pointer-events-none 
      bg-opacity-20 opacity-0 duration-500 ${
        modal.element && "pointer-events-auto opacity-100"
      }`}
      >
        <div
          className={`duration-500 ${
            !modal.element && "translate-y-[100vh] scale-50"
          }`}
        >
          {modal.element}
        </div>
      </div>

      <Outlet />
    </main>
  );
}
