import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import CalcComponent from "./pages/CalcComponent";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<CalcComponent />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
