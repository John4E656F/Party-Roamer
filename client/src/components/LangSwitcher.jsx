import { useState, useRef, } from 'react';
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

export default function LangSwitcher() {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)
    // const [selectedIndex, setSelectedIndex] = useState(1)
    // const lang = useSelector((state) => state.i18n.lang);
    // const supportedLangs = useSelector((state) => state.i18n.supportedLangs);
    const x = useSelector((state) => state)
    const { lang, supportedLangs, setLang } = useTranslation();

    const dispatch = useDispatch()

    // console.log(x)
    // console.log(lang)
    // console.log(supportedLangs)
    const handleClick = () => {
        // console.info(`You clicked ${supportedLangs[selectedIndex]}`);
      };
    
      const handleMenuItemClick = (event, index) => {
        // setSelectedIndex(index);
        setOpen(false);
      };
    
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
            <Button onClick={handleClick} onChange={(newLang) => setLang(newLang)}>{lang}</Button>
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
                    {Object.entries(supportedLangs).map(([code, name]) => (
                      <MenuItem
                        key={name}
                        // value={code}
                        onClick={(code) => dispatch(setLang(code))}
                        // disabled={index === 2}
                        // selected={index === selectedIndex}
                        // onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {name}
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