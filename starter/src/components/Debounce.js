import { useEffect, useState } from 'react'

const Debounce = (val, delay) => {
    const [debounce, setDebounce] = useState(val); 

    useEffect(()=> {
        const handleDebounce = setTimeout(()=> {
            setDebounce(val);
        }, delay);

        return () => {
            clearTimeout(handleDebounce);
        };
    }, [val, delay]);

  return debounce; 
}

export default Debounce
