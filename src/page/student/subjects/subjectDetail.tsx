import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components";
import { DialogCloseButton } from "./components/dialogModal";


// interface SubjectIdProps {
//     data: {
//         id: string;
//     };
// }
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
            <Card className="mt-20 w-full h-full">
                <CardHeader className="flex justify-between items-center">
                    <CardTitle>
                        {data?.name} fanidan test topshiriqlari
                    </CardTitle>

                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-none">
                                <TableHead className="w-[35%] ">Mavzular</TableHead>
                                <TableHead className="w-[15%] text-center">Testlar soni </TableHead>
                                <TableHead className="w-[5%] text-center">Darajasi</TableHead>
                                <TableHead className="w-[10%] text-center">Holati</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data?.topics.map((topic: any) => (
                                <TableRow key={topic.id}>
                                    <TableCell className="font-medium">{topic.title}</TableCell>
                                    <TableCell className="text-center">{topic.count}0</TableCell>
                                    <TableCell className="text-center">Qiyin</TableCell>
                                    <TableCell className="w-[10%]"><DialogCloseButton /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>

            </Card>

        </>
    )
}