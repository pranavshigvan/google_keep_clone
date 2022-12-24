import { useState,createContext } from 'react';
import Header from './componenets/header/Header';
import Main from './componenets/Main';
import { useDispatch ,useSelector} from 'react-redux';
import { toggleMenu } from './store/redux-store';
export const screenContext = createContext(window.innerWidth)

function App() {
  const dispatch = useDispatch()
  let isOpen = useSelector(state=>state.menu.isOpen)
  const [menuActive, setMenuActive] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  window.onresize =()=>{
    setWidth(window.innerWidth)
    if (window.innerWidth<700&&isOpen) {
      dispatch(toggleMenu())
    }
  }
  return (
    <screenContext.Provider value={[width,setWidth]}>
      <Header setActive={setMenuActive}/>
      <Main isActive={menuActive}/>
    </screenContext.Provider>                                                                                                                                                                    
  );
}

export default App;
