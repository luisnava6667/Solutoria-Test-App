import { useState, useEffect, useContext } from 'react'
import { Formulario, IndicadorList, NavBar } from '@/components'
import { BsPlus } from 'react-icons/bs'
import { IndicadorContext } from '@/context/indicador'
import { IndicadorProps } from '@/interfaces'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
export default function Home() {
  const { indicadores, getAllIndicadores } = useContext(IndicadorContext)
  const [filtro, setFiltro] = useState([] as IndicadorProps[] | [])
  const [cargando, setCargando] = useState(true)
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      setCargando(false)
    }, 4000)
    getAllIndicadores()
  }, [setFiltro])

  const handleNuevoIndicador = () => {
    router.push('/indicador')
  }

  return (
    <div className={`flex min-h-screen flex-col items-center`}>
      <Head>
        
        <title>Solutotia Test App</title>
      </Head>
      <div className=' flex items-center my-4'>
        <Image src='/solutoria.png' alt='Solutoria' width={100} height={100} />
        <h2
          className='
        text-2xl sm:text-5xl  font-bold text-center text-blue-400 
        '
          onClick={router.reload}>
          Solutoria Test{' '}
        </h2>
      </div>

      <button
        className='rounded-lg flex p-1 md:p-2 bg-blue-600 items-center text-white cursor-pointer fixed top-10  right-5 hover:bg-blue-900 transtion duration-700'
        onClick={handleNuevoIndicador}>
        <BsPlus size={30} />
        <p className='hidden md:flex'>Nuevo indicador</p>
      </button>

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
