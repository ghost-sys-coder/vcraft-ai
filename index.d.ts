declare interface FormData {
    email: string;
    password: string;
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
}

declare interface FormInputProps {
    name: string;
    placeholder: string;
    label: string;
    description?: string;
}

declare interface TextareaComponentProps extends FormInputProps {
    rows?: number;
    cols?: number;
}

interface Option {
    label: string;
    value: string;
}

declare interface SelectProps extends FormInputProps {
    options: Option[]
}