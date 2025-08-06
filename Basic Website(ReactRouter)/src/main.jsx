import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/about.jsx'
import Footer from './components/Footer/footer.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'





// --------------METHOD 1------------------//

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children :[{
//       path : "",
//       element : <Home/>
//     },
//      {
//       path : "about",
//       element: <About/>
//      },
//      {
//       path : "contact",
//       element: <Contact />
//      },
//     {
//       path : "",
//       element : <Footer />
//     }]
// }
// ])


// --------------METHOD 2------------------//
const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path ="" element = {<Home/>}/>
      <Route path ="/About" element = {<About/>}/>
      <Route path ="/Contact" element = {<Contact/>}/>
      <Route path ="/Contact" element = {<Contact/>}/>
      <Route path ="github" element = {<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
