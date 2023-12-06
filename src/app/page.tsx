'use client'

import { Select, type SelectOption } from '@/components/Select'
import { useState } from 'react'


const options = [
  {label: "first", value: 1},
  {label: "second", value: 2},
  {label: "third", value: 3},
  {label: "forth", value: 4},
  {label: "fifth", value: 5},
]

export default function Home() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  return (
  <>
    <Select multiple  options={options} value={value1} onChange={o => setValue1(o)}/>
    <Select  options={options} value={value2} onChange={o => setValue2(o)}/>
  
  </>
  )
}
