import "./index.css";
import {Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider
  } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleJobPage from "./pages/SingleJobPage";
import AddJobPage from "./pages/AddJobPage";

const App = () => {
const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<SingleJobPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
  );

  return <RouterProvider router={ router } />;
};

export default App