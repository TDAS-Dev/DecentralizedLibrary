import uploadIcon from "../../Images/uploadIcon.png"
import Button from "../Utility/Button";

function UploadIcon(props){
       
    return(
        <div className="flex flex-col items-center">
            <img src={uploadIcon} alt="" className="w-[50%] h-auto mb-16"/>
            <div className="flex border-6 border-solid border-black
                lg:justify-center lg:items-center lg:space-x-10">
                <Button className="" name="Add a File"/>
                <Button className="" name="Add Multiple Files"/>
            </div>
        </div>
    )
}

export default UploadIcon;

