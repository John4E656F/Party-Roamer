import { useState, useRef, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    Button,
    ButtonGroup,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';
import LocaleContext from "../utils/LocaleContext"

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Francais' },
  nl: { nativeName: 'Nederland' },
}

export default function LangSwitcher() {

    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState('en')
    const { locale } = useContext(LocaleContext);

    // const handleMenuItemClick = (lng) => {
    //   setLang
    //   i18n.changeLanguage(lng)
    //   setOpen(false);
    // };

    function changeLocale (l) {
      console.log(l)
      if (locale !== l) {
        i18n.changeLanguage(l);
        setLang(i18n.language)
        // window.location.replace(`/${l}`)
        // localStorage.setItem("i18nextLng", lang)
      }
    }
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };

    return (
      <>
        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
            <Button >{lang}</Button>
            <Button
              size="small"
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {Object.keys(lngs).map((lng) => (
                      <MenuItem
                        key={lng}
                        onClick={() => changeLocale(lng)}
                      >
                        {lngs[lng].nativeName}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
    )
}