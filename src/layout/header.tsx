import { Lang, Moonth } from "../assets/svg"

export const Header = () => {
    return (
        <div className="py-[10px] bg-[rgba(77,74,232,0.9)] flex justify-between items-center  px-[50px]">
            <div className="flex flex-col items-center">
                <Moonth />
                <button className="italic font-semibold text-sm leading-[130%] text-[#000] cursor-pointer">Kun</button>
            </div>
            <h1 className="font-medium text-[32px] leading-[100%] tracking-[-0.01em] text-[#141e0c]">
                AIA test markazi
            </h1>
            <div className="flex flex-col items-center cursor-pointer">
                <Lang />
                <button className="font-semibold text-sm leading-[130%] text-[#000]">uz</button>
            </div>
        </div>
    )
}