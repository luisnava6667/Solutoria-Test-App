import { useState, useEffect, useContext } from 'react'
import { Formulario, IndicadorList, NavBar } from '@/components'
import { BsPlus } from 'react-icons/bs'
import { IndicadorContext } from '@/context/indicador'
import { IndicadorProps } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Home() {
  const { indicadores, getAllIndicadores } = useContext(IndicadorContext)
  const [filtro, setFiltro] = useState([] as IndicadorProps[] | [])
  const [cargando, setCargando] = useState(true)
  const router = useRouter()

  const handleRefresh = () => {
    window.location.reload()
  }
  useEffect(() => {
    getAllIndicadores()
    setTimeout(() => {
      setCargando(false)
    }, 4000)
  }, [])
  return (
    <div className={`flex min-h-screen flex-col items-center`}>
      <Link
        href='/'
        className='cursor-pointer flex items-center my-4'
        onClick={handleRefresh}>
        <Image src='/solutoria.png' alt='Solutoria' width={100} height={100} />
        <h2
          className=' 
        text-2xl sm:text-5xl  font-bold text-center text-blue-400 
        '>
          Solutoria Test{' '}
        </h2>
      </Link>

      <Link
        href='/crear'
        className='rounded-lg flex p-1 md:p-2 bg-blue-600 items-center text-white cursor-pointer fixed top-10  right-5 hover:bg-blue-900 transtion duration-700'>
        <BsPlus size={30} />
        <p className='hidden md:flex'>Nuevo indicador</p>
      </Link>

      <div className='grid w-full'>
        <NavBar
          indicadores={indicadores}
          setFiltro={setFiltro}
          filtro={filtro}
        />
      </div>
      <IndicadorList cargando={cargando} indicadores={filtro} />
    </div>
  )
}
