import "@/app/style/plan.css";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

function Priceplan(){
    return(
        <main className="plan-container">
             <div className="plan-container2">
                 {/* top div */}
              <div className="plan-header-box">
                <h1 className="plan-title">Price Plan</h1>
                <p className="plan-des">Select a Plan that Aligns with your Needs and Budget. Whether it&apos;s a Basic Website or a Complex Solution, Each Package Guarantee High Quality Results and Dependable Support.</p>
              </div>
              {/* boxes div */}
              <div className="plan-box-container">
                    <div className="plan-box group">
                        <span className="plan-name">Silver</span>
                       <p><span className="price-pan">$30.00</span><span>/hour</span></p>
                       <p className="plan-detail">For most businesses that want to optimize web queries</p>
                       
                       <ul className="plan-list">
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>UI Design</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>Web Development</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>Logo Design</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>Seo Optimization</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>WordPress Integration</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>5 Websites</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>Unlimited User</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>20 GB Bandwith</li>
                       </ul>
                       <button className="order-btn">ORDER NOW</button>
                       <button className="most-popular">Affordable Option</button>
                    </div>
                    <div className="plan-box group">
                        <span className="plan-name">Gold</span>
                       <p><span className="price-pan">$50.00</span><span>/hour</span></p>
                       <p className="plan-detail">For most businesses that want to optimize web queries</p>
                       
                       <ul className="plan-list">
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>UI Design</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>Web Development</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>Logo Design</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>Seo Optimization</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>WordPress Integration</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>5 Websites</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>Unlimited User</li>
                        <li className="plan-icon hiden"><AiOutlineClose className="plan-icon-no"/>20 GB Bandwith</li>
                       </ul>
                       <button className="order-btn ">ORDER NOW</button>
                       <button className="most-popular">Premium Choice</button>
                    </div>
                    <div className="plan-box group">
                        <span className="plan-name">Dimond</span>
                       <p><span className="price-pan">$80.00</span><span>/hour</span></p>
                       <p className="plan-detail">For most businesses that want to optimize web queries</p>
                       
                       <ul className="plan-list">
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>UI Design</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>Web Development</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>Logo Design</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>Seo Optimization</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>WordPress Integration</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>5 Websites</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>Unlimited User</li>
                        <li className="plan-icon show"><FaCheck className="plan-icon-yes"/>20 GB Bandwith</li>
                       </ul>
                       <button className="order-btn">ORDER NOW</button>
                       <button className="most-popular">Most Popular</button>
                    </div>
                
                    
              </div>

             </div>
        </main>
    )
}
export default Priceplan