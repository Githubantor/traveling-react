
import photo1 from '../../assets/Images/Group 13 (1) (1).png'

const Bannar = () => {
    return (
        <div className="hero min-h-screen mb-15">
            <img src={photo1} alt="" />
  <div className="hero-content text-center text-neutral-content">
    <div>
      <h1 className="mb-5 text-5xl font-bold">Explore Our Travel</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div>
      <button className="btn btn-primary btn-sm mr-3 ">Get start</button>
      <select className='btn btn-sm mr-3' name="When" id="When">
        <option value="Bandarban">Bandarban</option>
        <option value="CoxsBazar">CoxsBazar</option>
        <option value="Shylet">Shylet</option>
        <option value="Shundarban">Shundarban</option>
      </select>
      <select className='btn btn-sm mr-3' name="package" id="When">
        <option value="Long tour">Long tour</option>
        <option value="Honey Moon">Honey Moon</option>
        <option value="Cheap Tour">Cheap Tour</option>
        <option value="Luxury Tour">Luxury Tour</option>
      </select>
      <button className='btn btn-sm bg-orange-500 text-white border-orange-500'>Find Now</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Bannar;