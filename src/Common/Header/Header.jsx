import {useLocation} from 'react-router-dom'

import HeaderElement from "./HeaderEllement";

export default function Header(){
  const location = useLocation()

  return (
    <header className="
      flex justify-end gap-[16px]
      bg-white/40 backdrop-blur
      border-b-[1px] border-black/20 pt-[24px] pl-[24px] pb-[24px] pr-[80px]
      sticky top-0 z-50
    ">
      <HeaderElement path = '/' name = 'Главная' currentLocation={location.pathname}/>
      <HeaderElement path = '/about' name = 'Обо мне' currentLocation={location.pathname}/>
    </header>
  )
}