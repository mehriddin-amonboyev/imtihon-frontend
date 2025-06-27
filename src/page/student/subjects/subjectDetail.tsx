import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { TestStartModal } from "@/components/modal/testStartModal";


interface SubjectIdProps {
    data: {
        id: string;
    };
}
export const SubjectDetail = () => {

    const [showModal, setShowModal] = useState(false);

    // useNavigate hook to navigate to different pages
    const navigate = useNavigate();
    const param = useParams<{ id: string }>();
    const location = useLocation();
    const data = location.state
    console.log("SubjectId component rendered with data:", data);

    const handleStartTest = () => { setShowModal(true); }
    const closeModal = () => { setShowModal(false); }

    const confirmStartTest = () => {
        setShowModal(false);
        navigate(`/app/test/${param.id}`);
    }
    // const column = 
    return (
        <>
            <div>
                <h1>{data}</h1>
            </div>
            <TestStartModal
                isOpen={showModal}
                onConfirm={confirmStartTest}
                onClose={closeModal}
            // topicTitle={data?.title}
            />
        </>
    )
}