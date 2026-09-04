import React from 'react';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    NavLink,
    Outlet
} from 'react-router';
import './App.css';

import Teams from './Components/Teams.jsx';
import Moments from './Components/Moments.jsx';
import Rules from './Components/Rules.jsx';
import Home from './Components/Home.jsx';


const tabs = [
    {name: "Home", path: "/", element: <Home />},
    {name: "Teams", path: "/teams", element: <Teams />},
    {name: "Moments", path: "/moments", element: <Moments />},
    {name: "Rules", path: "/rules", element: <Rules />},
];


function Layout() {
    return (
        <div className="app-container">
            <header className="app-header">
                <nav className="tabs">
                    {tabs.map(tab => (
                        <NavLink to={tab.path} end className={({ isActive }) => (isActive ? "tab active" : "tab")}>{tab.name}</NavLink>
                    ))}
                </nav>
            </header>


            <main className="content">
                <Outlet />
            </main>

            <footer className="app-footer">
                Website made by Elan Goldman for OCP water assassin 2025 (updated by Sammy Cohen for 2026)

                <p> Website made possible by our generous donors:</p>
                <p className='gold'>Gold Sponsors: Daniel Kalimi</p>
                <p className='silver'>Silver Sponsors: Eliana Pasternak</p>
                <p className='honorable'>Honorable mentions: Rena</p>
                <p> Interested in donating? Contact Sammy: scohen27@sas.upenn.edu</p>
            </footer>
        </div>
    );
}


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            {tabs.map(tab => (
                <Route key={tab.name} path={tab.path} element={tab.element} />
            ))}
        </Route>
    )
);


export default function AppRouter() {
    return <RouterProvider router={router} />;
}