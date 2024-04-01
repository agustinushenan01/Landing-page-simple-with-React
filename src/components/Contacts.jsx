import './assets/css/Contacts.css'

export default function Contacts() {
    return (
        <>
            <div id='Contacts' className="flex items-center sm:items-baseline flex-col justify-center sm:flex-row w-full py-8 Bg-Contacts">
                <div className="flex flex-col sm:w-1/2 lg:w-3/5 px-4 sm:px-6 mb-6 sm:mb-0 sm:mr-3">
                    <h2 className="text-xl sm:text-3xl font-bold text-center sm:text-left">Contact Us</h2>
                    <p className="sm:text-lg">Bingung?   Jangan ragu untuk bertanya! Hubungi kami lewat formulir <span className="after:content-['⬇️'] sm:after:content-['➡️']"></span> atau email tim terkait. Kami siap membantu!  ✨</p>
                </div>
                <div className="flex flex-col sm:w-1/2 lg:w-2/5 w-[80%]">
                    <form action="" className="flex flex-col justify-center items-center w-full">
                        <div className="flex flex-col sm:flex-row w-full sm:justify-center sm:items-center mb-2">
                            <div className="flex flex-col mb-2 sm:mb-0">
                                <label htmlFor="firstname" className="after:content-['*'] after:text-red-600">First Name</label>
                                <input className="border-2 border-[#7b98a0] rounded-lg w-full px-1 sm:w-40 lg:w-48 sm:mr-1 lg:mr-1 focus:outline-none focus:ring focus:ring-violet-500 focus:border-none" type="text" name="firstname" id="firstname" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="lastname" className="after:content-['*'] after:text-red-600">Last Name</label>
                                <input className="border-2 border-[#7b98a0] rounded-lg w-full px-1 sm:w-40 lg:w-48 focus:outline-none focus:ring focus:ring-violet-500 focus:border-none" type="text" name="lastname" id="lastname" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:justify-center sm:items-center mb-2">
                            <div className="flex flex-col sm:justify-center ">
                                <label htmlFor="email" className="after:content-['*'] after:text-red-600">Email</label>
                                <input className="border-2 border-[#7b98a0] rounded-lg w-full px-1 sm:w-80 lg:w-96 focus:outline-none focus:ring focus:ring-violet-500 focus:border-none" type="email" name="email" id="email" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:justify-center sm:items-center mb-2">
                            <div className="flex flex-col sm:justify-center ">
                                <label htmlFor="description">What can we help you with?</label>
                                <textarea className="border-2 border-[#7b98a0] rounded-lg px-1 py-1 w-full sm:w-80 lg:w-96 focus:outline-none focus:ring focus:ring-violet-500 focus:border-none" name="description" id="description" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="flex w-full justify-center items-center">
                            <button type="button" className="bg-[#7b98a0] text-white mt-2 px-8 py-2 rounded-full w-full sm:w-80 lg:w-96 focus:outline-none focus:ring focus:ring-violet-500 focus:border-none justify-center">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}