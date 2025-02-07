import { Label } from '@/components/ui/label';
import { categories } from '@/utils/categories';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const CategoriesInput = ({defaultValue}:{defaultValue?:string}) => {
    const name = 'category';
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Categories
      </Label>
      <Select defaultValue={defaultValue || categories[0].label} name={name} required>
        <SelectTrigger id={name}>
            <SelectValue />
        </SelectTrigger>
        <SelectContent>
            {categories.map((item)=>(
                 <SelectItem key={item.label} value={item.label}>
                    <span className='flex items-center gap-2 capitalize'>
                    <item.icon className='text-rose-500' />
                     {item.label}
                    </span>
                </SelectItem>
            ))}
        </SelectContent>

      </Select>
    </div>
  )
}

export default CategoriesInput
