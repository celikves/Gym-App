import Navbar from '@/scenes/navbar/index.tsx';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Home from '@/scenes/home/index.tsx';


function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY===0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !==0){
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scrol", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  },[]);

  return (
    <div className='app bg-gray-20'>
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}  />
      {/* <Home selectedPage={selectedPage}/> */}
    </div>
  )
}

export default App
