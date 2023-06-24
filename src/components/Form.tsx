import { FormDataProps } from "../types"

const Form = ({
    handleOnChange,
    handleOnSubmit,
    formData,
    isLoading
}: FormDataProps) => {


    return (
        <form className="w-full" onSubmit={handleOnSubmit}>
            <div className="grid grid-cols-1 gap-4 mt-4 ">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="firstName">Nombre</label>
                    <input id="firstName" type="text" className="mt-2 text-gray-700 border border-indigo-500 rounded-md p-0 box-border pl-3 Input"
                        value={formData.firstName}
                        onChange={handleOnChange}
                        required
                    />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="lastName">Apellido</label>
                    <input id="lastName" type="text" className="mt-2 text-gray-700 border border-indigo-500 rounded-md p-0 box-border pl-3 Input"
                        value={formData.lastName}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="age">Edad</label>
                    <input id="age" type="number" className="mt-2 text-gray-700 border border-indigo-500 rounded-md p-0 box-border pl-3 Input"
                        value={formData.age}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="birthDate">Fecha de Nacimiento</label>
                    <input id="birthDate" type="date" className="mt-2 text-gray-700 border border-indigo-500 rounded-md p-0 box-border pl-3 Input"
                        value={formData.birthDate}
                        onChange={handleOnChange}
                        required
                    />
                </div>
            </div>


            <div className="flex justify-end mt-6">
                <button type='submit'
                    className={`px-8 py-2.5 leading-5 text-white text-center w-full transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}>
                    {isLoading ? 'Guardando...' : 'Guardar Cambios'}
                </button>
            </div>
        </form>
    )
}

export default Form