export default function SkillCard({experience, skillName, shotDescription, illustration, color}){
  return (
    <div className={`
      ${color}
      flex flex-col
      min-w-[300px] p-[16px]      
      rounded-xl
      min-h-[250px]
      hover:shadow-2xl
    `}>
      {/*Top part*/}
      <div className='flex justify-between'>
        <p className='font-medium text-[16px] text-black/40]]'>{experience}</p>
        <img className='max-w-[64px] max-h-[64px]' src={illustration}></img>
      </div>

      {/*Bottom part*/}
      <div>
        <p className='font-bold text-[24px] text-black]'>{skillName}</p>
        <p className='font-medium text-[16px] text-black/40]'>{shotDescription}</p>
      </div>
    </div>
  )
}