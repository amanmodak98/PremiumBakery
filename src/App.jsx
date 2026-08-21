import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import CursorEffect from './components/CursorEffect'
import ParticleBackground from './components/ParticleBackground'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { useState } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'menu', element: <MenuPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <>
          <ParticleBackground />
          <CursorEffect />
          <ScrollProgress />
          <RouterProvider router={router} />
        </>
      )}
    </div>
  )
}
