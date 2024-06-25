import LinkButton from "../../Shared/LinkButton";

export default function NavProducts(){
    return (
        <div>
            <div className="bg-black text-white py-8">
                <h2 className="text-3xl font-bold mb-6 text-left">OUR PRODUCTS</h2>
                <div className="flex justify-center space-x-4">
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-6 px-8 rounded-full shadow-md text-3xl">
                        SOCIAL MEDIA
                    </button>

                <LinkButton 
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-6 px-8 rounded-full shadow-md text-3xl"
                    name="DESING"
                    />

                    <button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-md">
                        DESIGN
                    </button>
                    <button className="bg-gradient-to-r from-blue-500 to-gray-600 hover:from-blue-600 hover:to-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
                        IT SERVICES
                    </button>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
                        CDI PACKAGES
                    </button>
                </div>
            </div>
        </div>
    );
}