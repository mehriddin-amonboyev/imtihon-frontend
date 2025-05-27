import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetTopic } from "./service/query/useGetTopic";

export const Topics = () => {
    const [topic, setTopic] = useState({topicId: 1, title: "Loading...."});
    const param = useParams();
    const {data} = useGetTopic(param.id as string);

    useEffect(() => {
        if(data){
            setTopic(data);
        }
    },[data]);
    console.log("Topic Data:", topic);
    
    return (
        <>
            <div className="pt-3 pb-[13px] flex flex-col items-center rounded-[10px] bg-[rgba(106,129,255,0.8)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <h1 className="pt-5 font-primary italic font-extralight text-[35px] leading-[130%] text-[#fff]">
                    {topic.title}
                </h1>
                <button
                    className="mt-4.5 py-2 px-[11px] rounded-[15px] bg-[#6a81ff]"
                    onClick={() => {}}
                >
                    <span className="font-primary italic font-normal text-base leading-[100%] text-[#fff]">
                        Testni boshlash
                    </span>
                </button>
            </div>
        </>
    )
}