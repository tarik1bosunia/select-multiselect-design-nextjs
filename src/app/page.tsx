'use client'

import { Select } from '@/components/Select'
import { useState } from 'react'


const options = [
  {label: "first", value: 1},
  {label: "second", value: 2},
  {label: "third", value: 3},
  {label: "forth", value: 4},
  {label: "fifth", value: 5},
]

export default function Home() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])
  return (
  <>
    <Select options={options} value={value} onChange={o => setValue(o)}/>
  
  </>
  )
}
