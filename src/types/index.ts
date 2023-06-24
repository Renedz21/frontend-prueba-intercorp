export interface FormProps {
    firstName: string;
    lastName: string;
    age: number;
    birthDate: string;
}

export interface FormDataProps {
    formData: any;
    isLoading?: boolean;
    isOpen?: any;
    setIsOpen?: any;
    handleOnChange: (e: any) => void;
    handleOnSubmit: (e: any) => void;
}

export type DataProps = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    birthDate: string;
    lifeExpectancy: number;
}