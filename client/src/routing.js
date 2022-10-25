
import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { BrowserRouter } from 'react-router-dom'
import LocaleContext from "./utils/LocaleContext"
import Navbar from './components/Navbar'

const Home = React.lazy(() => import('./pages/Home'))

const Routing = () => {
    const { i18n } = useTranslation()
    const [locale, setLocale] = useState(i18n.language);
    i18n.on('languageChanged', (lng) => setLocale(i18n.language));

    return (
        <>
        <LocaleContext.Provider value={{locale, setLocale}}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </LocaleContext.Provider>
        </>
    )
}
export default Routing;