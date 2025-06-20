import { useSubject } from "./services/queries/useSubject";
import math from "@/assets/img/math.png";

interface Subject {
    id: string;
    name: string;
    topics: Array<{
        id: string;
        title: string;
    }>;
}

export const Subjects = () => {
    const { data } = useSubject();

    return (
        <>
            <div className="flex pt-20 pl-20 gap-3">
                <h1 className="font-primary italic font-extralight text-xl leading-[130%] text-black">
                    Barcha fanlar ro'yxati
                </h1>
            </div>
            <div className="pt-7 px-25 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 min-h-screen pb-10">
                {data?.map((items: Subject) => (
                    <div
                        key={items.id}
                        className="flex flex-col items-center py-2 rounded-[10px] shadow border cursor-pointer hover:bg-gray-200"
                    >
                        <img
                            src={math}
                            alt="math"
                            className="w-[100px] h-[100px] object-cover mb-2"
                        />
                        <p className="font-secondary font-medium text-[15px] leading-[130%] text-black pb-1">{items.name}</p>
                        <div className="w-full border border-solid border-[rgba(0,0,0,0.5)]"></div>
                        <div className="w-full px-4.5 py-3">
                            <div className=" rounded-[3px] bg-[rgba(217,217,217,0.3)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" >
        
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}