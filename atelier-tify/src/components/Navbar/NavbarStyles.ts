import { Styles } from '../../styles/types'

export const styles: Styles = {
    logo: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "white",
        zIndex: 2,
        marginLeft: "2rem",
    },
    
    navbar: {
        width: "100%",
        height: 100,
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
        marginRight: "2rem",
        "&:hover": {
            backgroundColor: '#FFF',
            border: 'none',
            color: '#E5977D',
        },
    },
};