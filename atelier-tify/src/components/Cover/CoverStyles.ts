import { Styles } from '../../styles/types'

export const styles: Styles = {
    cover: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url("cover-bts.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        position: "absolute",
        top: 0,
        left: 0,
    },
    
    navbar: {
        width: '100%',
        height: 100,
        backgroundColor: '#E5977D',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    loginButton: { 
        width: 130,
        height: 56,
        textTransform: "none",
        color: "white",
        fontFamily: "Poppins",
        fontSize: "1rem",
        border: ".5px solid #FFF9",
        borderRadius: "3rem",
        marginLeft: "2rem",
        "&:hover": {
            backgroundColor: '#FFF',
            border: 'none',
            color: '#E5977D',
        },
    },
};