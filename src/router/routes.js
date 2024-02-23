import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/layout";
import HomePage from "../pages/Home";
import ErrorPage from "../components/common/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <HomePage />
            </Layout>
        ),
        errorElement: <ErrorPage />,
    },
]);
