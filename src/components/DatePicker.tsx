import React, { ChangeEvent } from "react";

export interface DatePickerProp {
    maxDate: string;
    idInput: string;
    className?: string;
    setState: (value: string) => void;
    state: string;
}

const DatePicker = (
    { maxDate, idInput, className, setState, state }: DatePickerProp,
) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState(value);
    }
    return (
        <>
            <input
                type="date"
                max={maxDate}
                onChange={handleChange}
                value={state}
                id={idInput}
                className={className} />
        </>
    )
}
export default DatePicker