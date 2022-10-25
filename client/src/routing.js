
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

const Home = React.lazy(() => import('./pages/Home'))

const Routing = () => {
    const { i18n } = useTranslation()

    const onChangeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <>
            <BrowserRouter>
            <Navbar onChangeLanguage={onChangeLanguage}/>
            <Suspense fallback={<div>Loading...</div>}>

                <Routes>
                    {/* <Route element={<Navbar onChangeLanguage={onChangeLanguage}/>} /> */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
            </BrowserRouter>
        </>
    )
}
export default Routing;