import SkillCard from "./SkillCard";

import pythonIllustration from './../../assets/Python.png'
import OneCIllustration from './../../assets/1С.png'
import frontendIllustration from './../../assets/Frontend.png'
import ThreeDModeling from './../../assets/3dModeling.png'
import GraphicDesign from './../../assets/GrpahicDesign.png'
import Illustrator from './../../assets/Illustrator.png'


export default function AboutPage(){
  return(
    <div className='p-[80px] flex flex-col gap-[64px]'>
      {/*Software skills*/}
      <div className='flex flex-col gap-[24px]'>
        {/*Title*/}
        <p className='text-black text-4xl font-bold'>
          Навыки в разработке
        </p>

        <div className='grid grid-cols-3 gap-4'>
          <SkillCard color = 'bg-background-1' skillName='Pyhton' experience='2 года' shotDescription='Занималась разработкой баз данныз и графических приложений с помощью Pyhton. Имею опыт работы с Tkinter и SQLite' illustration={pythonIllustration}/>
          <SkillCard color = 'bg-background-2' skillName='1C' experience='3 года' shotDescription='Продолжительное время занимаюсь 1С разработкой. Есть опыт работы с 1С предприятие и 1С Колледж. Создавала макеты и работала с базами данных.' illustration={OneCIllustration}/>
          <SkillCard color = 'bg-background-3' skillName='Фронтенд Разработка' experience='1 год' shotDescription='Имею опыт работы с фронтенд фреймворками на базе JavaScript (React.JS) а также с классическими HTML и CSS' illustration={frontendIllustration}/>
        </div>
      </div>

      {/*Design skills*/}
      <div className='flex flex-col gap-[24px]'>
        {/*Title*/}
        <p className='text-black text-4xl font-bold'>
          Мои навыки в дизайне
        </p>

        <div className='grid grid-cols-3 gap-4'>
          <SkillCard color = 'bg-background-6' skillName='3Д Дизайн' experience='2 года' shotDescription='Занимаюсь созданием 3Д моделей, готовых сцен с проработкой освещения и последующей визуализацией' illustration={ThreeDModeling}/>
          <SkillCard color = 'bg-background-4' skillName='Графический Дизайн' experience='5 лет' shotDescription='Создаю красивые постеры, открытки и булкеты для нужнд моих клиентов' illustration={GraphicDesign}/>
          <SkillCard color = 'bg-background-5' skillName='Иллюстратор' experience='8 лет' shotDescription='Уже 8 лет занимаюсь профессиональным рисованием разнообразных композиций. Работаю с разными стилями от классики до абстракции' illustration={Illustrator}/>
        </div>
      </div>

      {/*Контакты*/}
      <div className='
        border-t-[1px] border-black/40
        pt-[32px]
        gap-[24px]
        flex flex-col
        content-center items-center justify-center
      '>

        <p className='text-black font-bold text-3xl'>Мои контакты</p>

        <div className='flex flex-col gap-[12px]'>
          <div>
            <p className='text-black text-bold text-xl'>Whatsapp: +7-914-419-26-43</p>
          </div>

          <div>
            <p className='text-black text-bold text-xl'>Моя почта: Kuznetsovaus.18@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  )
}