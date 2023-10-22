import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
    title: string
    containerStyle: string
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
    textStyle?: string
    rightIcon?: string
    isDisabled?: boolean
}

export interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}
export interface CarProps {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}
export interface FilterProps {
    make: string
    limit: number
    fuel: string
    model: string
    year: number
}

export interface HomeProps {
    searchParams: FilterProps
  }

export interface OptionProps{
    title: string
    value:string
}

export interface CustomFilterProps {
    title: string
    options: OptionProps[]
  }

export interface ShowMoreProps {
    pageNumber: number
    isNext: boolean
  }