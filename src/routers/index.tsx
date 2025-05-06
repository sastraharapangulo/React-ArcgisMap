import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Components/Layout/RootLayout";
import Home from "../Pages/Home/Home";
import BinaMarga from "../Pages/BinaMarga/BinaMarga";
import Galery from "../Pages/Galery/Galery";
import TataRuang from "../Pages/TataRuang/TataRuang";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/bina-marga",
          element: <BinaMarga />,
        },
        {
          path: "/tata-ruang",
          element: <TataRuang />,
        },
        {
          path: "/galeri",
          element: <Galery />,
        },
        {
          path: "*",
          element: <h1 className="text-center">No Pages Found</h1>,
        },
      ],
    },
  ],
  { basename: "/" }
);
