import React, { useState, useEffect } from 'react';


const About = () => {
  const [page, setPage] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3020/api/pages/1`)
      .then(respose => respose.json())
      .then(data => {
        setPage(data.map(name => (
          <div key={page.id} className="">
            <div className="bg-header">
              <div className="centre white-box container body about">
                <div className="row">
                  <div className="col-lg-12">
                    <h1 className="pad purpleAlt">{name.title}</h1>
                    <p> {name.content}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="purpleAlt">What We Do</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris. Pellentesque sit amet porttitor eget dolor morbi non arcu. Aliquam ut porttitor leo a diam sollicitudin tempor. Sed tempus urna et pharetra pharetra massa. Eu scelerisque felis imperdiet proin. Adipiscing tristique risus nec feugiat in. Sed odio morbi quis commodo. Sed sed risus pretium quam vulputate dignissim. Ultrices gravida dictum fusce ut placerat orci. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Bibendum enim facilisis gravida neque convallis a. Arcu dictum varius duis at consectetur lorem donec massa sapien. Et magnis dis parturient montes nascetur. </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="purpleAlt">How We Do It</h2>
                    <p>Adipiscing commodo elit at imperdiet dui accumsan sit amet. Sed lectus vestibulum mattis ullamcorper velit sed. Tellus molestie nunc non blandit massa enim nec. Convallis a cras semper auctor neque vitae tempus quam. In dictum non consectetur a erat nam. At auctor urna nunc id. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Eu non diam phasellus vestibulum lorem. Adipiscing tristique risus nec feugiat in. Sed odio morbi quis commodo. Sed sed risus pretium quam vulputate dignissim. Ultrices gravida dictum fusce ut placerat orci. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Bibendum enim facilisis gravida neque convallis a. Arcu dictum varius duis at consectetur lorem donec massa sapien. Et magnis dis parturient montes nascetur. Id diam maecenas ultricies mi eget mauris. Pellentesque sit amet porttitor eget dolor morbi non arcu. Aliquam ut porttitor leo a diam sollicitudin tempor. Sed tempus urna et pharetra pharetra massa. Eu scelerisque felis imperdiet proin.</p>
                  </div>
                </div>
              </div>
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

            <h1 className="intro">About</h1>
            <div>{page}</div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default About;