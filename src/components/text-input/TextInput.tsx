import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

/**
 * Interface of TextInput Component 
 */
export interface ITextInputProps {
    /**
     * The width of textInput consume all space if true
     */
    fullWidth: boolean,
    /**
     * If the parent form is submitted
     */
    submited : boolean,
    /**
     * The label of input
     */
    label: string,
    /**
     * The margin of input
     */
    margin?: "none" | "dense" | "normal",
    /**
     * The input is mandatory for form
     */
    required?: boolean,
    /**
     * The value of input
     */
    value: string,
    /**
     * The helpMessage to complete input or the errorMessage if value of input don't match with patternValidator
     */
    message?: { info?: string, error?: string },
    /**
     * The pattern to limit the content of input
     */
    limitorPattern?: RegExp,
    /**
     * The pattern to test if value of input is valid
     */
    validatorPattern?: RegExp,
    /**
     * function to format the value of input when it change
     */
    onChangeMutation?: Function,
    /**
     * Function to upload value to the parent form
     */
    onChange : Function
}

/**
 * The compoenent TextInput is a TextField with work
 * @param props 
 */
export default function TextInput(props: ITextInputProps) {
    const [state, setState] = useState(props.value);
    /**
     * Funtion to accept change of Input
     * @param value The value of input
     */
    const onChange = (value: string) => {
        let nValue: string = value;
        if (props.onChangeMutation) {
            nValue = props.onChangeMutation(value);
        }
        if (!props.limitorPattern || nValue.length === 0 || isValidChangeInputContent(nValue)) {
            setState(nValue);
            props.onChange(nValue);
        }
    };

    /**
     * Function to check validity of inputs content to submit value
     */
    const isValidSubmitInputContent = () => {
        return !props.validatorPattern || props.validatorPattern.test(state);
    }

    /**
     * Function to check validity of input content before change value of state
     * @param value The value of input
     */
    const isValidChangeInputContent = (value: string) => {
        return !props.limitorPattern || props.limitorPattern.test(value);
    }

    return (
        <TextField 
            fullWidth={props.fullWidth}
            margin={props.margin}
            label={props.label}
            required={props.required}
            helperText={props.message ? props.submited && !isValidSubmitInputContent() ? props.message.error || props.message.info || '' : props.message.info || '' : undefined}
            value={state}
            error={props.submited && !isValidSubmitInputContent()}
            onChange={(event) => { onChange(event.target.value) }}
        />
    );
}
