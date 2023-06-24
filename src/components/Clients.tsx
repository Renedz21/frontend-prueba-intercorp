import { Link } from "react-router-dom";

const headers = [
    {
        name: 'Nombre',
        key: 'name'
    },
    {
        name: 'Fecha de Nacimiento',
        key: 'birthDate'
    },
    {
        name: 'Edad',
        key: 'age'
    },
    {
        name: 'Esperanza de Vida',
        key: 'esperanzaVida'
    }
]

const Clients = ({ clients }: { clients: any[] }) => {

    const generateRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };

    const renderComponents = (firstName: any, lastName: any) => {
        const componentCount = 1; // Cantidad de componentes que deseas renderizar
        const components = [];

        for (let i = 0; i < componentCount; i++) {
            const backgroundColor = generateRandomColor();

            const component = (
                <span
                    key={i}
                    className={`rounded-xl px-1 py-2 text-xs w-1/6 md:w-1/12 md:leading-3 text-center saturate-100`}
                    style={{ color: backgroundColor, border: `1px solid ${backgroundColor}`, backgroundColor: `${backgroundColor}33` }}
                >
                    {firstName[0].slice(0, 1)}{lastName[0].slice(0, 1)}
                </span>
            );

            components.push(component);
        }

        return components;
    };

    return (
        <>
            <div className="hidden md:block">
                <table className='w-full h-auto'>
                    <thead className="text-left">
                        <tr>
                            {
                                headers.map((header) => (
                                    <th key={header.key} className="font-semibold text-left py-3.5 px-4 whitespace-nowrap sticky top-0 text-gray-500">
                                        {header.name}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="align-top overflow-x-auto">
                        {clients.map((client) => (
                            <tr key={client.firstName} className="font-semibold">
                                <Link to={`/user/${client.id}`} className='flex items-center justify-start gap-2 align-middle whitespace-nowrap tabular-nums text-left p-4'>
                                    {renderComponents(client.firstName, client.lastName)}
                                    <span className=''>
                                        {client.firstName} {client.lastName}
                                    </span>
                                </Link>
                                <td className="align-middle whitespace-nowrap tabular-nums text-left p-4">
                                    {client.birthDate.split('-').reverse().join('-')}
                                </td>
                                <td className="align-middle whitespace-nowrap tabular-nums text-left p-4">
                                    {client.age} años
                                </td>
                                <td className="align-middle whitespace-nowrap tabular-nums text-left p-4">
                                    {client.esperanzaVida} años
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden">
                <div className="grid grid-cols-1 gap-6 ">
                    {
                        clients.map((client) => (
                            <div className="bg-white-600 h-auto w-full shadow-2xl rounded-md ">
                                <div className="flex items-start flex-col flex-1 gap-5 px-4 py-2">
                                    <Link to={`/user/${client.id}`} className="text-2xl mt-4">{client.firstName} {client.lastName}</Link>
                                    <div className="flex items-start flex-col justify-between gap-2 w-full flex-1">
                                        <div className="">
                                            <span>Edad </span>
                                            <span>{client.age} años</span>
                                        </div>
                                        <div>
                                            <span>Fecha de Nacimiento </span>
                                            <span>{client.birthDate.split('-').reverse().join('-')}</span>
                                        </div>
                                        <div className="w-full">
                                            <span>Esperanza de Vida</span>
                                            <div className="flex items-center gap-4 w-full">
                                                <div className='bg-gray-200 rounded-full overflow-hidden h-1.5 w-full'>
                                                    <div className={`bg-indigo-800 h-1.5 w-[${client.esperanzaVida}%]`}></div>
                                                </div>
                                                <span className="text-sm">{client.esperanzaVida} años</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Clients