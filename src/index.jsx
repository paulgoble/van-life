import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import './index.css'
import '../mocks/server'

import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import Dashboard from './pages/Host/Dashboard'
import Details from './pages/Host/Vans/Details';
import Pricing from './pages/Host/Vans/Pricing';
import Photos from './pages/Host/Vans/Photos';
import NotFound from './pages/NotFound';
import Error from './components/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<VanDetail />} errorElement={<Error />} />
    
    <Route path="host" element={<HostLayout />} errorElement={<Error />} >
      <Route index element={<Dashboard/>} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="vans" element={<HostVans />} />
      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<Details />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="photos" element={<Photos />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
));

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
