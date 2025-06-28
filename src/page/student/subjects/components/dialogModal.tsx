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

export function DialogCloseButton() {

    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/user')
    }
    return (
        <Dialog>
            <DialogTrigger asChild className="">
                <Button className="w-full"
                    size={'lg'}>Boshlash</Button>
            </DialogTrigger>
            <DialogContent className=" min-h-[200px] sm:max-w- bg-[var(--muted-foreground)]">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Rostdan ham boshlaoqchimisiz
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="w-full items-center justify-between sm:justify-start">
                    <DialogClose>
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
