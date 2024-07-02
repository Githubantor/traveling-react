import photo1 from '../../assets/Images/Group 40089.png'

const Hero2 = () => {
    return (
        <div className="hero mt-7">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={photo1} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold mt-4"> A Simple Perfect Place To Get Los</h1>
      <p className="py-6 mt-4">Amet consectetur. Vulputate commodo felis molestie risus ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis.</p>
      <ul>
        <li>Adipiscing ornare pellentesque mauris volutpat tortor vitae platea porta lacus. Lectus suspendisse nullam</li>
        <li>Adipiscing ornare pellentesque mauris volutpat tortor vitae platea porta lacus. Lectus suspendisse nullam.</li>
      </ul>
      <button className='btn btn-md bg-orange-500 text-white mt-6'>See More</button>
    </div>
  </div>
</div>
    );
};

export default Hero2;