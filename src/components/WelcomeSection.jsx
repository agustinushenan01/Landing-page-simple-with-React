import '../index.css';
import './assets/css/WelcomeSection.css'

export default function WelcomeSection() {
    return (
        <>
            <div className="flex justify-center items-center w-full h-dvh Bg-Welcome flex-col text-white text-center">
                <h1 className="text-lg sm:text-4xl font-bold">Welcome To Our Website</h1>
                <p className="sm:text-lg">Lorem ipsum dolor sit ame consectetur.</p>
            </div>
        </>
    )
}