import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

export interface ITextInputProps {
    fullWidth: boolean,
    submited : boolean,
    label: string,
    margin?: "none" | "dense" | "normal",
    required?: boolean,
    value: string,
    message?: { info?: string, error?: string },
    limitorPattern?: RegExp,
    validatorPattern?: RegExp,
    onChangeMutation?: Function,
    onChange : Function
}

export default function TextInput(props: ITextInputProps) {
    const [state, setState] = React.useState(props.value);
    /**
     * Funtion to accept change of Contact form
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
     * Function to check validity of inputs content before submit
     */
    const isValidSubmitInputContent = () => {
        return !props.validatorPattern || props.validatorPattern.test(state);
    }

    /**
     * Function to check validity of inputs content before change value of state
     * @param value 
     */
    const isValidChangeInputContent = (value: string) => {
        return !props.limitorPattern || props.limitorPattern.test(value);
    }

    return (
        <FormControl fullWidth={props.fullWidth} margin={props.margin}>
            <TextField label={props.label}
                required={props.required}
                value={state}
                error={props.submited && !isValidSubmitInputContent()}
                onChange={(event) => { onChange(event.target.value) }}
            />
            {props.message ?
                <FormHelperText id="email-helper-text" error={props.submited && !isValidSubmitInputContent()} >
                    {props.submited && !isValidSubmitInputContent() ? props.message.error || props.message.info || '' : props.message.info || ''}
                </FormHelperText> : null}
        </FormControl>
    );
}
