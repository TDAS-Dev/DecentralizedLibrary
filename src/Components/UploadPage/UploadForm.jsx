import Button from "../Utility/Button";

function UploadForm(props){
    return(
        <div className="">
            <h1 className={h1UploadStyle}>Upload A File</h1>
            <form action="" className="my-14">
                <div className="">
                    <label htmlFor="">File Name</label>
                    <input type="text" placeholder="Your file name" />
                </div>
                <div className="">
                    <label htmlFor="">File Description</label>
                    <textarea type="text" placeholder="Type description of file" className=""/>
                </div>
                <div className="">
                    <label htmlFor="">Online Location</label>
                    <select name="location" id="">
                        <option value="IPFS">Ipfs</option>
                        <option value="Infura">Infura</option>
                    </select>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Category</label>
                        <select name="category" id="">
                            <option value="Academic">Academic</option>
                            <option value="Novel">Novel</option>
                            <option value="Fantansy">Fantansy</option>
                            <option value="Thesis">Thesis</option>
                            <option value="Children">Children</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Status</label>
                        <select name="Status" id="">
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                        </select>
                    </div>
                </div>
            </form>
            <Button className="" name="Upload"/>
        </div>
    )
}
const h1UploadStyle = `text-black lg:font-bold sm:font-semibold lg:text-2xl md:text-1xl sm:text-1xl text-center lg:my-6 md:my-4 sm:mt-2 sm:mb-3 font-lato tracking-wider`

export default UploadForm;

