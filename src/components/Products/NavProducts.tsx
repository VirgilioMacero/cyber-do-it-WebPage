import LinkButton from "../Shared/LinkButton";

export default function NavProducts(){
    return (
        <div>
            <div className="bg-black w-full text-white py-8">
                <h2 className="text-3xl font-bold mb-6 text-left">OUR PRODUCTS</h2>
                <div className="flex flex-wrap justify-center md:space-x-4 gap-y-3">
                    <LinkButton 
                    className="
                            bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600
                            text-white font-bold rounded-full shadow-md 
                            py-6 px-8
                            
                            text-3xl text-center
                            "
                    name="SOCIAL MEDIA"
                    />
                <LinkButton 
                    className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-6 px-8 rounded-full shadow-md text-3xl text-center"
                    name="SOCIAL MEDIA"
                    />
                    <LinkButton 
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-6 px-8 rounded-full shadow-md text-3xl text-center"
                    name="DESING"
                    />
                    
                    <LinkButton 
                    className="bg-gradient-to-r from-blue-500 to-gray-600 hover:from-blue-600 hover:to-gray-700 text-white font-bold py-6 px-8 rounded-full shadow-md text-3xl text-center"
                    name="IT SERVICES"
                    />                    
                    <LinkButton 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-6 px-8 rounded-full shadow-md text-3xl text-center"
                    name="CDI PACKAGES"
                    />
                </div>
            </div>
        </div>
    );
}