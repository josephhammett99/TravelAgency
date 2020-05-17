import React, { useState, useEffect } from 'react';

const Resorts = () => {
    const [packaged, setPackages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3020/api/resorts`)
            .then(respose => respose.json())
            .then(data => {
                setPackages(data.map(name => (
                    <div className="bg-header body">
                        <div key={name.id} className="col-sm-12 col-md-6 col-lg-6 temp white-box">
                            <div><p className="purple">name:</p> <p>{name.name}</p></div>
                            <div><p className="purple">location:</p> <p>{name.location}</p></div>
                            <div><p className="purple">price:</p> <p>{name.price}</p></div>
                            <div><p className="purple">persons:</p> <p>{name.persons}</p></div>
                            <div><p className="purple">days:</p> <p>{name.days}</p></div>
                            <div><p className="purple">type:</p> <p>{name.type}</p></div>
                        </div>
                    </div>
                )));
            });
    }, []);
    return (
        <div className="bg-header">
            <div className="container body">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="intro">Resorts</h1>
                        <div>{packaged}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resorts;