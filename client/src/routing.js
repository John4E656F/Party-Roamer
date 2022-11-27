
import React, { useState, Suspense } from "react";
import { Route, Routes, } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { BrowserRouter } from 'react-router-dom'
import LocaleContext from "./utils/LocaleContext"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = React.lazy(() => import('./views/Home'))
const Pricing = React.lazy(() => import('./views/Pricing'))

const Routing = () => {
    const { i18n } = useTranslation()
    const [locale, setLocale] = useState(i18n.language);
    i18n.on('languageChanged', (lng) => setLocale(i18n.language));
    const { t } = useTranslation()
    
    return (
        <>
        <LocaleContext.Provider value={{locale, setLocale}}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                    <Routes>
                        {/* <Route path="/home" element={<Home />} />
                        <Route path="/pricing" element={<Pricing />} /> */}

                        <Route default path={`/`} element={<Home />} />
                        <Route path={`${t('navigation.pricing')}`} element={<Pricing />} />
                    </Routes>
                <Footer />
                </Suspense>
            </BrowserRouter>
        </LocaleContext.Provider>
        </>
    )
}
export default Routing;