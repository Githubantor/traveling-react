import { FaArrowAltCircleLeft, FaMobile } from "react-icons/fa";
import { FaMessage, FaRegMessage } from "react-icons/fa6";
import Footer from "../Footer/Footer";

const Contact = () => {
  const handleMessege = e => {
    e.preventDefault();
    const firstName = e.traget.name.value;
    const lastName = e.target.lastname.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const messege = e.target.messege.value;
    const user = {
      firstName, lastName, email, number, messege
    }
    console.log(user)
  }
    return (
       <div>
         <div className="">
        <div className="hero-content mx-36">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Get it Touch</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-2xl font-extrabold pt-6 text-orange-500 text-center">Send a Message</h1>
            <hr className=" w-1/2 mx-auto mt-3"/>
            <form onSubmit={handleMessege} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="name" name="name" placeholder="First-name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="namelast" name="lastname" placeholder="Last-name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number</span>
                </label>
                <input type="text" name="number" placeholder="number" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Messega</span>
                </label>
                <input type="text" name="messege" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send a Message <FaArrowAltCircleLeft></FaArrowAltCircleLeft></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mb-8 text-center mt-6">
      <h1 className="text-4xl font-extrabold">
                Contact Us
            </h1>
            <hr className="bg-black w-1/2 mx-auto mt-3" />
      </div>
        <div className="flex mt-14 gap-6 mx-32">
            
        <div className="card w-96 bg-base-100 shadow-xl border-t-8 border-teal-300">
  <div className="card-body">
    <FaMessage></FaMessage>
    <h2 className="card-title">Hero Travels</h2>
    <p>Chat With Us</p>
    <h2>Get Your Best Experiance</h2>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl border-t-8 border-orange-500">
  <div className="card-body">
    <FaMobile></FaMobile>
    <h2 className="card-title">01951250125</h2>
    <p>Call Us</p>
    <h2>Get Your Best Experiance</h2>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl border-t-8 border-green-600">
  <div className="card-body">
    <FaRegMessage></FaRegMessage>
    <h2 className="card-title">antorahmed313@gmail.com</h2>
    <p>Mail Us</p>
    <h2>Get Your Best Experiance</h2>
  </div>
</div>
        </div>
        <div className="mt-10">
        <Footer></Footer>
        </div>
       </div>
      
    );
};

export default Contact;

