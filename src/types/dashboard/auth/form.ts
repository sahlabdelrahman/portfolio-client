import { RegisterOptions } from "react-hook-form";

export type ValidationRule = {
    value: boolean | number | RegExp;
    message: string;
};

export type ValidateFn = (value: string) => true | string;

export type FieldType = "text" | "email" | "password";

export type FormField = {
    id: string;
    name: string;
    type?: FieldType;
    label?: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    validation?: RegisterOptions;
    value?: string;
    multiline?: boolean;
    numberOfLines?: number;
    onlyNumbers?: boolean;
};

export type FormAddon = {
    path: string;
    title: string;
};

export type FormConfig = {
    page: string;
    api: string;
    title: string;
    description: string;
    submitText: string;
    fields: FormField[];
    addons?: Record<string, FormAddon>;
    success?: {
        redirectPath: string;
    };
};
