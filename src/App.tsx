import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'

import { useAppSelector } from './app/hooks'
import { HomePage, MakeupBagPage } from './components'
import {
    LoginPage,
    PersistLogin,
    RegisterPage,
    RequireAuth,
} from './features/auth'
import { ProductGalleryPage } from './features/products'
import { AddProductPage } from './features/products/pages/AddProductPage'
import { EditProductPage } from './features/products/pages/EditProductPage'
import { ProductPage } from './features/products/pages/ProductPage'
import { selectDarkMode } from './features/theme'

const App = () => {
    const darkMode = useAppSelector(selectDarkMode)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        }
    }, [darkMode])

    return (
        <div>
            <Toaster
                toastOptions={{
                    duration: 5000,
                    style: {
                        backgroundColor: darkMode ? '#171717' : '#fafafa',
                        color: darkMode ? '#e5e5e5' : '#000',
                    },
                }}
            />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<PersistLogin />}>
                    <Route path="/" element={<HomePage />} />

                    <Route element={<RequireAuth />}>
                        <Route path="/makeup_bag" element={<MakeupBagPage />} />
                        <Route
                            path="/product_gallery"
                            element={<ProductGalleryPage />}
                        />
                        <Route
                            path="/product_gallery/:id"
                            element={<ProductPage />}
                        />
                        <Route
                            path="/product_gallery/add"
                            element={<AddProductPage />}
                        />
                        <Route
                            path="/product_gallery/edit/:id"
                            element={<EditProductPage />}
                        />
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
