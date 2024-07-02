import { FaHotel } from "react-icons/fa6";

const CardFes = () => {
    return (
        <div className="mt-8">
            <h2 className="text-3xl font-extrabold text-center">Why CHoose US</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos quos commodi eligendi soluta ipsa nobis eius veritatis veniam quasi</p>
            <div className="grid grid-cols-2 mt-8 gap-6">
                <div className=" bg-orange-100 rounded-xl p-8">
                    <FaHotel className="mt-2 ml-9 "></FaHotel>
                    <h3 className="text-xl font-bold mt-2 ml-9">Handpicked Hotels</h3>
                    <p className="font-semibold ml-9 w-4/5">Amet consectetur. Vulputate commodo felis molestie risus ornare nulla amet <br />et.Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet.</p>
                </div>
                <div className=" bg-orange-100 rounded-xl p-8 ">
                    <FaHotel className="mt-2 ml-9"></FaHotel>
                    <h3 className="text-xl font-bold ml-9">Handpicked Hotels</h3>
                    <p className="font-semibold ml-9 w-4/5">Amet consectetur. Vulputate commodo felis molestie risus ornare nulla amet <br />et.Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet.</p>
                </div>
            </div>
            <div className=" bg-orange-100 rounded-xl mx-auto mt-6 w-1/2 p-8">
                    <FaHotel className="mt-2 ml-9"></FaHotel>
                    <h3 className="text-xl font-bold mt-2 ml-9">Handpicked Hotels</h3>
                    <p className="font-semibold ml-9 w-4/5">Amet consectetur. Vulputate commodo felis molestie risus ornare nulla amet <br />et.Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet.</p>
                </div>
            </div>
    );
};

export default CardFes;