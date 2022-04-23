import { useLocation, useMatch, useResolvedPath } from "react-router-dom"


const Footer = () => {
    return (
        <div className="flex flex-col w-full py-6 first-letter:m-0 bg-gray-600">
            <p className="mx-auto text-xl text-white font-bold">Cryptohub</p>
            <p className="mx-auto text-xl text-white font-bold">2022</p>
            {/* possibility to add links that dynamically excludes the current link */}
        </div>
    )
}

export default Footer