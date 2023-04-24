import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'))
const CardsPage = lazy(() => import("../pages/Cards"));

export const App = () => {
    const dispatch = useDispatch();

    return (
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/cards" element={<CardsPage />} />
            </Route>   
        </Routes>
      </>
    )
}

