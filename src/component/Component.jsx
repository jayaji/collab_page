import React from "react";
import './component.css'

export default function Component() {

  return (
    <>
      <div className="animated active">
            <div>
                <h2 className="header">AI + RPA is what we do</h2>
                </div>
            <div className="content">
                <div className="para">
                  <p>Future-Proof your business. Drive efficiency, profitability 
                    and deliver on customer experience</p>
                </div>
                <div className="image">
                    <img src='image1.jpg' alt="pic1" />
                </div>
            </div>
            <div className="link">
                <a href="/">AI + RPA Automation <img src="arrow-right-solid.svg" alt="icon" /></a>
            </div>
        </div>

      <div className="animated active">
            <div><h2 className="header">Make Bolder Choices</h2></div>
            <div className="content">
                <div className="para"><p>Digital focused strategies to realize market-changing ideas</p></div>
                <div className="image"><img src="image2.png" alt="" /></div>
            </div>
            <div className="link"><a href="/">Build Better Apps <img src="arrow-right-solid.svg" alt="icon" /></a></div>
        </div>

      <div className="animated active">
            <div><h2 className="header">Innovate with Speed</h2></div>
            <div className="content">
                <div className="para">
                  <p>Create higher quality software, deliver on customer expectations and business goals</p>
                </div>
                <div className="image"><img src="image3.jpg" alt="pic3" /></div>
            </div>
            <div className="link"><a href="/">DevOps<img src="arrow-right-solid.svg" alt="icon" /></a></div>
        </div>

      <div className="animated active">
            <div>
                <h2 className="header">Embrace Cloud</h2>
            </div>
            <div className="content">
                <div className="para">
                  <p>With Cloud-First accelerate innovation and optimize performance</p>
                </div>
                <div className="image"><img src="image4.jpg" alt="pic4" /></div>
            </div>
            <div className="link"><a href="/">Cloud Services <img src="arrow-right-solid.svg" alt="icon" />
            </a></div>
        </div>
    </>
  );
}
