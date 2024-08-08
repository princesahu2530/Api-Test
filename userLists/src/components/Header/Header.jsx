import { useEffect, useState } from "react";

const Header = ({ category }) => {
    const [article, setArticle] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(true); // Set loading to true when starting fetch
        let url = `https://reqres.in/api/users?page=2`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticle(data.data);
                console.log(data.data);
                setloading(false); // Set loading to false when fetch completes
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setloading(false); // Set loading to false if there is an error
            });
    }, []);
    

    return (
        <div>
            <h2 className='text-center text-3xl'>User <span className='bg-red-600 rounded-md'>Lists</span></h2>
            <div className="flex flex-wrap justify-around">
                {
                    loading ? <p>loading......</p> :
                    article.map((data, index) => (
                        <div
                            key={index}
                            className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 "
                            style={{ maxWidth: "345px" }}
                        >
                            <img
                                src={data.avatar}
                                style={{ height: "200px", width: "325px" }}
                                className=""
                                alt="..."
                            />
                            <div className="">
                                <h2 className="text-xl">{data.email.slice(0, 50)}</h2>
                                <p className="">
                                    {data.first_name}
                                        
                                </p>
                                <p className="">
                                    {data.last_name}
                                        
                                </p>
                                <a href={data.last_name}>
                                    <button className="bg-red-300 rounded-md text-xl">Read More</button>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Header;
