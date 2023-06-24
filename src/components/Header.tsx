import * as Dialog from '@radix-ui/react-dialog';
import './styles.css'
import Form from './Form';
import { FormDataProps } from '../types';

const Header = ({ formData, handleOnChange, handleOnSubmit, isLoading, isOpen, setIsOpen }: FormDataProps) => {

    return (
        <header className='flex items-center justify-between'>
            <div>
                <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Clientes</h1>
                <h5 className='text-gray-500 text-sm'>Observa toda la información de tus clientes</h5>
            </div>
            <Dialog.Root open={isOpen}>
                <Dialog.Trigger asChild>
                    <button className="flex items-center justify-center border bg bg-[#6126c7] text-white px-4 py-1.5 rounded-md hover:bg-[#381574] transition duration-100 ease-in gap-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-sm w-4 h-4"><line x1="12" x2="12" y1="5" y2="19" /><line x1="5" x2="19" y1="12" y2="12" /></svg>
                        <span className='hidden md:block'>Agregar</span>
                    </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                        <Dialog.Title className="DialogTitle">Agregar Cliente</Dialog.Title>
                        <Dialog.Description className="DialogDescription">
                            Agrega un nuevo cliente a tu lista. Completa los campos y luego presiona el botón de guardar cambios.
                        </Dialog.Description>
                        <Form
                            formData={formData}
                            handleOnChange={handleOnChange}
                            handleOnSubmit={handleOnSubmit}
                            isLoading={isLoading}
                        />
                        <Dialog.Close asChild>
                            <button className="IconButton cursor-pointer" aria-label="Close"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-4 h-4 text-gray-500"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </header>
    )
}

export default Header