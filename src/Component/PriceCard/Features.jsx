import { IoMdCheckmarkCircle } from "react-icons/io";

const Features = ({feature}) => {
    // console.log(feature)

    return (
        <div>
            <ul>
                <li className="flex items-center"><IoMdCheckmarkCircle className="mr-2 text-white"/>{feature}</li>
            </ul>
        </div>
    );
};

export default Features;