import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Packages = () => {
    const url = ('pack.json')
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    },[])
    console.log(user)
    return (
        <div className="text-center grid grid-cols-3 bg-gray-200">
            {
                user.map(aUser => <Link key={aUser.id}>
               <div className="card w-72 bg-base-100 shadow-xl mx-auto mt-6">
  <figure className="px-10 pt-10">
    <img src={aUser.image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{aUser.place_name}</h2>
    <p>{aUser.best_thing}</p>
   
  </div>
</div>
                </Link>)
            }
        </div>
    );
};

export default Packages;