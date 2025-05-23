import React from 'react'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { useFormContext } from 'react-hook-form'



const TextareaComponent: React.FC<TextareaComponentProps> = ({name, label, placeholder, rows}) => {
    const { control } = useFormContext();

  return (
    <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='mb-5'>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Textarea placeholder={placeholder} {...field} rows={rows} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
  )
}

export default TextareaComponent