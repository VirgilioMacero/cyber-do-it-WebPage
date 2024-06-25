import ItemGallery from "./ItemGallery"

export default function Gallery() {
    return (
        <div className="grid grid-cols-3 gap-4 p-10">
            {/* Column 1 */}
            <div className="flex flex-col space-y-4">
                <ItemGallery
                    classContainer="bg-gray-300 rounded-lg p-4 h-full"
                    buttonInside={true}
                    textButton="Learn more"
                />
            </div>

            {/* Column 2 (Center) */}
            <ItemGallery 
                classContainer="col-span-1 bg-gray-300 rounded-lg p-4 flex justify-center items-center h-full"
                buttonInside={true}
                textButton="Video"
                />

            {/* Column 3 */}
            <div className="flex flex-col space-y-4">
                <ItemGallery buttonInside={true} classContainer="bg-gray-300 rounded-lg p-4 h-80 flex justify-end items-start" textButton="Shop now"/>
                <ItemGallery classContainer="bg-gray-300 rounded-lg p-4 h-64 flex items-end" buttonInside={true} textButton="Learn more" />
            </div>
            <ItemGallery buttonInside={true} classContainer="col-span-3 h-32 bg-gray-300 p-4 rounded-lg" textButton="Ahpa"/>
            
        </div>
    )
}