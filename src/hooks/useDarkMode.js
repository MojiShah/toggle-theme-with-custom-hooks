import { useEffect } from "react";
import { useState } from "react";


const useDarkMode = () => {
    const [theme , setTheme] = useState('light');

    const toggleTheme = ()=>{
        if(theme === 'light'){
            window.localStorage.setItem('theme','dark');
            setTheme('dark')
        }else{
            window.localStorage.setItem('theme','light');
            setTheme('light');
        }
    }

    useEffect(()=>{
        const lastTheme = window.localStorage.getItem('theme');
        setTheme(lastTheme);
    },[]);

    return [theme , toggleTheme];
}

export default useDarkMode;