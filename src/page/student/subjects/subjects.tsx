import { Button } from "@/components/ui/button";
import { useSubject } from "./services/queries/useSubject";
import math from "@/assets/img/math.png";
import { useNavigate } from "react-router-dom";

interface Subject {
    id: string;
    name: string;
    topics: Array<{
        id: string;
        title: string;
    }>;
}

export const Subjects = () => {
    const { data, error, isLoading } = useSubject();
    const navigate = useNavigate();

    

    return (
        <>
            <div className="flex pt-13 pl-20 gap-3">
                <h1 className="font-primary italic font-extralight text-xl leading-[130%] text-black">
                    Barcha fanlar ro'yxati
                </h1>
            </div>
            <div className="pt-7 px-25 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 pb-10">
                {isLoading ? (
                    <div className="flex justify-center items-center h-40 col-span-full">
                        <p className="text-gray-500">Loading...</p>
                    </div>
                ) : error ? (
                    <div className="flex justify-center items-center h-40 col-span-full">
                        <p className="text-red-500">Xatolik: {error.message}</p>
                    </div>
                ) : (
                    data?.map((items: Subject) => (
                        <div
                            key={items.id}
                            className="max-w-[298px] w-full flex flex-col items-center py-8 px-6 rounded-[10px] bg-[var(--primary)] shadow border cursor-pointer hover:bg-gray-200 transition"
                        >
                            <img
                                src={math}
                                alt="math"
                                className="max-w-[201px] max-h-[152px] object-cover mb-2 rounded-[6px]"
                            />
                            <p className="font-secondary font-medium text-[15px] leading-[130%] text-black pb-1 text-center truncate w-full">
                                {items.name}
                            </p>
                            <div className="w-full border border-solid border-[rgba(0,0,0,0.5)] my-2"></div>
                            <div className="w-full px-4 py-3">
                                <div className="rounded-[3px] bg-[rgba(217,217,217,0.3)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-center">
                                    <p className="font-secondary font-normal text-[13px] leading-[130%] text-black">
                                        {items.topics.length} ta test mavzular
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="primary"
                                size={"sm"}
                                className="mt-3 ml-auto"
                                onClick={() => {
                                    navigate(`/student/subjects/${items.id}`, {state: items});
                                }}
                            >
                            <span>
                                Kirish
                            </span>
                        </Button>
                        </div>
            ))
                )}
        </div >
        </>
    );
};