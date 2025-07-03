import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useNavigate } from "react-router-dom"
type Topic = {
    topicId: string;
}
export function DialogCloseButton(topic: Topic) {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate(`/subject/test/${topic.topicId}`)
    }
    return (
        <Dialog>
            <DialogTrigger asChild className="">
                <Button className="w-full"
                    size={'lg'}>Boshlash</Button>
            </DialogTrigger>
            <DialogContent className="min-h-[200px] sm:max-w- bg-[var(--onyx)]">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Rostdan ham boshlamoqchimisiz
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="w-full items-center justify-between sm:justify-start">
                    <DialogClose asChild>
                        <Button size={'lg'}>
                            Orqaga
                        </Button>
                    </DialogClose>
                    <Button size={'lg'} onClick={handleSubmit}>
                        Boshlash
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
