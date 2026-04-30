// import {AppContext, AppContextInterface} from 'providers/application';
// import {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'screens';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../../screens/home/Home'));
const About = lazy(() => import('../../screens/about/About'));
const Contact = lazy(() => import('../../screens/contact/Contact'));
const Projects = lazy(() => import('../../screens/projects/Projects'));
const Technologies = lazy(() => import('../../screens/technologies/Technologies'));

export const RouterProvider = () => {
  // const {pdfPreviewerOpen} = useContext(AppContext) as AppContextInterface;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={<div>Loading...</div>}><Projects /></Suspense>} />
        <Route path="/technologies" element={<Suspense fallback={<div>Loading...</div>}><Technologies /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
