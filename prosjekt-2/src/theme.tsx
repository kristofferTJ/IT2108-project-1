import React from "react";

interface IThemes{

    Header: {
        color: string;
        background: string;
    };

    button: {
        color: string;
        background: string;
    };

    body: {
        background: string;
    };
}

type IThemeContext = {
    theme: IThemes;
    setTheme: (value:IThemes) => void;
};

export const themes = {
    blue: {
        Header: {
            color: "beige",
            background: "#282c34",
        },

        button: {
            color: "white",
            background: "#00B0FF",
        },

        body: {
            background: "aliceblue",
        },
    },

    pink: {
        Header: {
            color: "beige",
            background: "#7A2828",
        },

        button: {
            color: "white",
            background: "##f4511e",
        },

        body:{
            background: "#ffb7b7",
            
        },
    },

    green: {
        Header: {
            color: "beige",
            background: "#044D29",
        },
        
        button: {
            color: "white",
            background: "#45BF55",
        },

        body: {
            background: "#b2efa7",
        }
    }
}

export const ThemeContext = React.createContext<IThemeContext | undefined> (undefined);

export function getCurrentTheme() {
    const prevTheme = localStorage.getItem("theme");
    // console.log(prevTheme);
    switch (prevTheme){
        case "blue":
            return themes.blue;
        case "pink":
            return themes.pink;
        case "green":
            return themes.green;
        default:
            return themes.blue;
    }
}

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider = ({children} : Props) => {
    const [theme, setTheme] = React.useState(getCurrentTheme);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeProvider;

