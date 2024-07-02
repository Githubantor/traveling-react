import photo1 from '../../assets/Images/Rectangle 5.png'
import photo2 from '../../assets/Images/Rectangle 6.png'
import photo3 from '../../assets/Images/Rectangle 7.png'
import photo4 from '../../assets/Images/Rectangle 8.png'
import photo5 from '../../assets/Images/Rectangle 9.png'
import photo6 from '../../assets/Images/Rectangle 10.png'
import photo7 from '../../assets/Images/Rectangle 11.png'
const Destination = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Your destination</h2>
                <p>Choose your destination for enjoy your life</p>
            </div>
           <div className='gap-8 mt-7'>
           <div className='grid grid-cols-2 gap-4'>
                <img className='' src={photo1} alt="" />
                <img className='' src={photo4} alt="" />
            </div>
            <div className='grid grid-cols-3 gap-7 ml-10 mt-4'>
                <img src={photo2} alt="" />
                <img className='mt-8' src={photo3} alt="" />
                <img src={photo5} alt="" />
            </div>
            <div className='grid grid-cols-2 mt-5 ml-40'>
                <img className='w-96' src={photo7} alt="" />
                <img className=' w-96' src={photo6} alt="" />
            </div>
           </div>

        </div>
    );
};

export default Destination;