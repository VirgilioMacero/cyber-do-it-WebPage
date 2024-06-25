export default function ItemGallery({
    classContainer="",
    buttonInside = false,
    textButton = "Test",
}:{
    classContainer: string;
    buttonInside?: boolean;
    textButton?: string;
}){
    const renderButton = () => {
        if (buttonInside) {
            return (
                <button className="bg-white rounded-full px-4 py-2 shadow-md mb-4 ml-4">{textButton}</button>
            )
        }
    };
    return (
        <div className={`${classContainer}`}>
            {renderButton()}
        </div>
        
    );
}