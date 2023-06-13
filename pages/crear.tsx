import { Formulario } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

const IndicadorPage = () => {
  return (
    <>
      <div className='grid justify-items-center mb-5 pt-5'>
        <Link href='/' className='cursor-pointer flex items-center my-4'>
          <Image
            src='/solutoria.png'
            alt='Solutoria'
            width={100}
            height={100}
          />
          <h2
            className=' 
        text-2xl sm:text-5xl  font-bold text-center text-blue-400 
        '>
            Solutoria Test{' '}
          </h2>
        </Link>
      </div>
      <Formulario />
    </>
  )
}

export default IndicadorPage
