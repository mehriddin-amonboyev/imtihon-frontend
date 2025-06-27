import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import math from "@/assets/img/math.png";

type Subject = {
    id: string;
    name: string;
    topics: Array<{
        id: string;
        title: string;
    }>;
}

export const SubjectCard = ( subject : Subject ) => {

    const navigate = useNavigate();
    return (
        <div
            key={subject.id}
            className="max-w-[298px] w-full flex flex-col items-center py-8 px-6 rounded-[10px] bg-[var(--primary)] shadow border cursor-pointer hover:bg-gray-200 transition"
        >
            <img
                src={math}
                alt="math"
                className="max-w-[201px] max-h-[152px] object-cover mb-2 rounded-[6px]"
            />
            <p className="font-secondary font-medium text-[15px] leading-[130%] text-black pb-1 text-center truncate w-full">
                {subject.name}
            </p>
            <div className="w-full border border-solid border-[rgba(0,0,0,0.5)] my-2"></div>
            <div className="w-full px-4 py-3">
                <div className="rounded-[3px] bg-[rgba(217,217,217,0.3)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-center">
                    <p className="font-secondary font-normal text-[13px] leading-[130%] text-black">
                        {subject.topics.length} ta test mavzular
                    </p>
                </div>
            </div>
            <Button
                variant="primary"
                size={"sm"}
                className="mt-3 ml-auto"
                onClick={() => {
                    navigate(`/student/subjects/${subject.id}`);
                }}
            >
                <span>
                    Kirish
                </span>
            </Button>
        </div>
    )
}