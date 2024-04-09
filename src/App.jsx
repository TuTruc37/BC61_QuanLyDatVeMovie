import { useRoutes } from "react-router-dom";
import QuanLyDatVeMovie from "./QuanLyDatVeM/QuanLyDatVeMovie";
function App() {
  const route = useRoutes([
    {
      path: "/",
      element: <QuanLyDatVeMovie />,
    },
  ]);
  return route;
}

export default App;
