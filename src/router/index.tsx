import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import Header from '../components/layouts/Header';
import MainNavbar from '../components/layouts/MainNavbar';
import Footer from '../components/layouts/Footer';

const mainLayout = (component: React.Component | React.ReactElement) => (
	<>
		<Header />
		<MainNavbar />
		<div>{component as React.ReactNode}</div>
		<Footer />
	</>
);

const AppRouter: React.FC = () => {
	const pathToComponentMap = useMemo(() => {
		return routes.reduce(
			(a, x) => {
				a[x.path] = x.component;
				return a;
			},
			{} as Record<string, React.FC>,
		);
	}, []);

	return (
		<Routes>
			{Object.entries(pathToComponentMap).map(([path, Component]) => (
				<Route key={path} path={path} element={mainLayout(<Component />)} />
			))}
		</Routes>
	);
};

export default AppRouter;
