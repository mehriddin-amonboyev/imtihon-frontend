import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-4">
                <div className="mx-auto text-center">
                    <p>&copy; Powered by AIA </p>
                    <p>Biz bilan bog'lanish <Link to={"https://t.me/mehriddin_amonboyev"}>Mehriddin Amonboyev</Link> </p>
                </div>
            </footer>
        </>
    )
}