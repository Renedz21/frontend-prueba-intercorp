import { useState, useEffect } from 'react'
import { FormProps } from '../types'
import { createClient, getClients, getEstandartDesviation } from '../utils'
import Header from '../components/Header'
import Clients from '../components/Clients'
import { Toaster, toast } from 'react-hot-toast'

const Home = () => {

    const [clients, setClients] = useState<any[]>([])
    const [formData, setFormData] = useState<FormProps>({
        firstName: '',
        lastName: '',
        age: 0,
        birthDate: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [standartDesviation, setStandartDesviation] = useState({
        desviacionEstandar: 0,
        promedioEdad: 0
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            if (typeof formData.age === 'string') {
                formData.age = parseInt(formData.age)
            } else {
                formData.age;
            }
            // const result = await axios.post('http://localhost:3000', formData);
            const result = await createClient(formData);
            const data = result.data;
            if (data) {
                setIsLoading(false)
                getAllClients();
                getStandart();
                setFormData({
                    firstName: '',
                    lastName: '',
                    age: 0,
                    birthDate: '',
                })
                setTimeout(() => {
                    setIsOpen(false)
                }, 1500)
                toast.success(data.message)
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    const getAllClients = async () => {
        const result = await getClients();
        setClients(result)
    }

    const getStandart = async () => {
        const result = await getEstandartDesviation();
        setStandartDesviation(result)
    }

    useEffect(() => {
        getAllClients()
        getStandart()
    }, [])

    return (
        <main className='h-full md:h-screen w-full container mx-auto p-4 md:py-4'>
            <Header
                formData={formData}
                handleOnChange={handleChange}
                handleOnSubmit={handleSubmit}
                isLoading={isLoading}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <div className='w-auto'>
                <Clients clients={clients} />
            </div>

            <article className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-16 text-white'>
                <div className='bg bg-indigo-500 rounded-md p-5'>
                    <h2 className='text-2xl font-bold text-center'>Desviación Estandar</h2>
                    <p className='text-center text-lg font-semibold'>{standartDesviation.desviacionEstandar}</p>
                </div>
                <div className='bg bg-indigo-500 rounded-md p-5'>
                    <h2 className='text-2xl font-bold text-center'>Promedio de Edad</h2>
                    <p className='text-center text-lg font-semibold'>{standartDesviation.promedioEdad}</p>
                </div>
            </article>
            <Toaster position='top-center' />
        </main>
    )
}

export default Home