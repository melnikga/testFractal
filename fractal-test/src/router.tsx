import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import StartPage from "./pages/StartPage";
import FormPage from "./pages/FormPage";



export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<StartPage />}/>
            <Route path="form-page" element={<FormPage />}/>
        </Route>
    )
);