import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark');

    useEffect(()=>{
        const body = document.querySelector('body');

        if(darkMode){
            body.add('dark-mode');
        }else{
            body.remove('dark-mode');
        }

    },[darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;