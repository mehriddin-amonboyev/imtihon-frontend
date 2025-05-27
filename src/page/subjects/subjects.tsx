import { Link } from "react-router-dom";
import { useSubject } from "./services/query/useSubject"

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
            <div className="flex pt-6 pl-20 gap-3">
                <h1 className="font-primary italic  font-extralight text-xl leading-[130%] text-black">Testlar</h1>
                <div className="w-px h-6 border"></div>
            </div>
            <div className="px-55 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data?.map((items: Subject) => (
                    <div
                        key={items.id}
                        className="flex flex-col items-center py-2 rounded-[10px] shadow border"
                    >
                        <p className="font-secondary font-medium text-[15px] leading-[130%] text-black pb-1">{items.name}</p>
                        <div className="w-full border border-solid border-[rgba(0,0,0,0.5)]"></div>
                        <div className="w-full px-4.5 py-3">
                            <div className=" rounded-[3px] bg-[rgba(217,217,217,0.3)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" >
                                {items?.topics?.map((item) => (
                                    <div key={item.id} className="">
                                        <Link
                                            to={`/app/topic/${item.id}`}
                                            className="py-1.5 px-2 font-secondary font-medium text-[15px] leading-[130%] text-black cursor-pointer"
                                        >
                                            {item.title}
                                        </Link>
                                        <div className="w-full border border-solid border-[rgba(0,0,0,0.5)]"></div>

                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}