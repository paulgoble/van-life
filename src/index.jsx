import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import './index.css'
// import '../mocks/server' // used mock/db.js instead due to issues with Miragejs

import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans, { loader as hostVansLoader} from './pages/Host/HostVans'
import HostVanDetail, { loader as hostVanDetailLoader} from './pages/Host/HostVanDetail'
import Dashboard from './pages/Host/Dashboard'
import Details from './pages/Host/Vans/Details';
import Pricing from './pages/Host/Vans/Pricing';
import Photos from './pages/Host/Vans/Photos';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login, {
  loader as loginLoader,
  action as loginAction
} from './pages/Login';

import { requireAuth } from './utils';

async function authLoader({ request }) {
  return await requireAuth(request);
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />} />
    
    <Route path="host" element={<HostLayout />} errorElement={<Error />} >
      <Route index element={<Dashboard/>} loader={authLoader} />
      <Route path="income" element={<Income />} loader={authLoader} />
      <Route path="reviews" element={<Reviews />} loader={authLoader} />
      <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
      <Route path="vans/:id" element={<HostVanDetail />} loader={hostVanDetailLoader} errorElement={<Error />} >
        <Route index element={<Details />} loader={authLoader} />
        <Route path="pricing" element={<Pricing />} loader={authLoader} />
        <Route path="photos" element={<Photos />} loader={authLoader} />
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
