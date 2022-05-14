import UploadIcon from "./UploadIcon";
import UploadForm from "./UploadForm";
function Upload(props){
       
    return(
        <div className="flex items-center justify-center space-x-40 my-32">
            <UploadIcon/>
            <UploadForm/>
        </div>
    )
}

export default Upload;

