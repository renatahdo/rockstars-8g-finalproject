import { FC } from 'react';
import { InputAdornment, Button, Box, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styles } from './NavbarStyles'
import NavbarProps from './NavbarTypes'

export const Navbar: FC<NavbarProps> = ({ type }) => {

    return (
        <>
            {type === "home" && (
                <Box sx={ styles.navbar }>
                    <Typography sx={styles.logo}>Tatify</Typography>
                    <Box>
                        <TextField
                            className="subvariant-hovered"
                            id="pseudo-variant"
                            label="Search"
                            InputLabelProps={{
                                style: { color: '#FFF', paddingLeft: 15},
                            }}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon sx={{ color: 'white', paddingRight: 2 }}/>
                                </InputAdornment>
                                ),
                            }}
                        />
                        <Button sx={ styles.loginButton }>
                            Log in
                        </Button>
                    </Box>
                </Box>)
            }
        </>
    )
}