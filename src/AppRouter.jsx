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


function Home() {
    return (
        <div className="page">
            <h2>Home</h2>
            <p>Welcome to the Home page.</p>
        </div>
    );
}

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
                <div className="brand">My App</div>
                <nav className="tabs">
                    {tabs.map(tab => (
                        <NavLink to={tab.path} end className={({ isActive }) => (isActive ? "tab active" : "tab")}>{tab.name}</NavLink>
                    ))}
                </nav>
            </header>


            <main className="content">
                <Outlet />
            </main>
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