import { useParams } from "react-router-dom";
import { useGetTopic } from "../topics/service/query/useGetTopic";

export const Tests = () => {
    const param = useParams<{ topicId: string }>();
    const {data} = useGetTopic(param.topicId as string);
    console.log(data?.questions);
    
    return (
        <div>
            <h1>{data?.questions?.text}</h1>
            <p>Test page</p>
        </div>
    );
}
