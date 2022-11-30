import React, { useEffect } from 'react'

function Debounce (value, delay)  {
    const [debounced, setDebounced] = useState(value);
    useEffect (()=> {
      const handler = setTimeout(()=> {
        setDebounced(value);
      }, delay);
    
      return () => { 
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debounced;

}

export default Debounce

// const letsDebounce = (value, delay) => {
// };