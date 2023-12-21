import {useNavigate} from "react-router-dom";

import avatar from "../../assets/Avatar.jpg";


export default function HomePage(){
  const navigate = useNavigate()

  return (
    <div className="flex justify-center gap-[64px] p-[80px] min-h-full">
      {/*Avatar*/}
      <div className="flex flex-col">
        {/*Image*/}
        <div className="rounded-full overflow-hidden w-[500px] z-10">
          <img src = {avatar} />
        </div>
      </div>

      <div className='flex flex-col content-start items-start justify-center gap-[48px]'>
        {/*Texts*/}
        <div className="flex flex-col items-center gap-[16px]">
          {/*Title*/}
          <p className="font-extrabold text-6xl max-w-[600px] text-start text-black">
            Привет! Я Ульяна, и я 1С и фронтенд разработчик, а так же дизайнер
          </p>

          {/*Description*/}
          <p className="font-medium text-xl max-w-[600px] text-start text-black/70">
            Я занимаюсь 1с и фронтенд (веб и десктоп) разработкой уже 4 года. Имею большой опыт в создании 1С макетов. Кроме этого профессионально занмаюсь дизайном.
          </p>
        </div>

        {/*Button*/}
        <button className="
        text-black
        py-[12px] px-[48px]
        border-[1px] border-[#D9D9D9]
        font-medium text-xl rounded
        shadow-md hover:shadow-xl
      "
                onClick={() => navigate('/about')}
        >
          Мои навыки
        </button>
      </div>
    </div>
  )
}