import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneClient } from '../utils'

const User = () => {
    const { userId } = useParams()

    const [data, setData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        age: 0,
        esperanzaVida: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getOneClientFromServer = async () => {
            const response = await getOneClient(userId as string);
            console.log(response)
            setIsLoading(false)
            setData(response)
        }
        getOneClientFromServer()
    }, [userId])


    return (
        <section className='container mx-auto p-6'>
            <Link to='/' className='flex items-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
                <span>Volver</span>
            </Link>
            {isLoading ? <p>Cargando...</p> : (
                <div className='w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg p-6 rounded-md'>
                    <div className=' flex items-center justify-center'>
                        <img src={`https://avatars.dicebear.com/api/avataaars/${data.firstName}.svg`} alt="" className='w-40 h-40 rounded-full' />
                    </div>
                    <div className=''>
                        <h1 className='text-2xl font-bold text-white'>Datos del usuario</h1>

                        <div className=''>
                            <p className='text-lg font-semibold'>Nombre: {data.firstName}</p>
                            <p className='text-lg font-semibold'>Apellido: {data.lastName}</p>
                            <p className='text-lg font-semibold'>Fecha de nacimiento: {data.birthDate}</p>
                            <p className='text-lg font-semibold'>Edad: {data.age}</p>
                            <p className='text-lg font-semibold'>Esperanza de vida: {data.esperanzaVida}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default User