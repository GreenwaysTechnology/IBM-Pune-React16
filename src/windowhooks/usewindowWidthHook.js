import {
      useState,
      useEffect
} from 'react';

//custom hooks
const useWindowWidth = () => {
      const [width, setWidth] = useState(window.innerWidth);
      useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => {
                  window.removeEventListener('resize', handleResize);
            };
      });
      //must return state
      return width;
}
export {
      useWindowWidth
};