import Image from "next/image";
import privacyImage from "../../../public/images/about/privacyandpolicy.png"

const page = () => {

    return (
        <>
            <Image className=" w-full" src={privacyImage} alt="privacy-policy"></Image>
        </>
    );
};

export default page;