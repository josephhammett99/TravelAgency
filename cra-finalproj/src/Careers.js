import React, { useState, useEffect } from 'react';

const Careers = () => {
    const [packaged, setPackages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3020/api/careers`)
            .then(respose => respose.json())
            .then(data => {
                setPackages(data.map(name => (
                    <div key={name.id} className="col-sm-12 col-md-12 col-lg-12 temp white-box">
                        <div><p className="purple">name:</p> <p>{name.name}</p></div>
                        <div><p className="purple">position:</p> <p>{name.position}</p></div>
                        <div><p className="purple">type:</p> <p>{name.type}</p></div>
                        <div><p className="purple">requirements:</p> <p>{name.requirements}</p></div>
                        <div><p className="purple">description:</p> <p>{name.description}</p></div>
                    </div>
                )));
            });
    }, []);

    return (
        <div className="bg-header">
            <div className="container body">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="intro">Careers</h1>
                        <div>{packaged}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Careers;