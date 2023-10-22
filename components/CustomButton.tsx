"use client"
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = (
  { title, containerStyle, handleClick, btnType
    , textStyle, rightIcon }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt='Right icon' fill className="object-contain" />
        </div>
      )}
    </button>


  )
}

export default CustomButton