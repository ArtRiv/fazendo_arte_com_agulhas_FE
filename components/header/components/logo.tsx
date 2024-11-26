import Image from "next/image"

export const Logo = () => {
    return (
        <div className="w-1/3 flex justify-center items-center">
            <Image className="self-center" src={"/logo-title-nobg.png"} alt="Main logo image" width={280} height={82.388}/>
        </div>
    )
}