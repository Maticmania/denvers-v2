import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
  };
const FormInput = (props:FormInputProps) => {
    const { name, defaultValue, type, label, placeholder } = props;
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default FormInput
