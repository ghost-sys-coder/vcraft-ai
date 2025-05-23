import React from 'react'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form'
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';

interface ColorPickerprops {
    name: string;
    label: string;
}

const ColorPickerComponent: React.FC<ColorPickerprops> = ({ name, label }) => {
    const { control } = useFormContext();
  return (
    <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='my-8'>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            type="color"
                            value={field.value}
                            onChange={field.onChange}
                            className='h-10 w-14 p-0 border-none cursor-pointer'
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
  )
}

export default ColorPickerComponent