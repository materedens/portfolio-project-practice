import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>K HUB</h3>
                                    <p>Dennis Pritt Road</p>
                                    <p> Kileleshwa, Nairobi</p><br></br> 
                                    <p> <strong>Phone:</strong> +254 792 65 63 98 </p>
                                    <p> <strong>Email:</strong> info@gmail.com </p>
                            
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><Icon icon="bx:bxl-twitter" /></a>
                                    <a href="#" className="facebook"><Icon icon="bx:bxl-facebook" /></a>
                                    <a href="#" className="instagram"><Icon icon="bx:bxl-instagram" /></a>
                                    <a href="#" className="google-plus"><Icon icon="bx:bxl-skype" /></a>
                                    <a href="#" className="linkedin"><Icon icon="bx:bxl-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">Home</a></li>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">About us</a></li>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">Services</a></li>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">Terms of service</a></li>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">Web Design</a></li>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">Software Development</a></li>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">IT Support</a></li>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">IT Consultancy</a></li>
                               <li><Icon icon="bx:bx-chevron-right" /> <a href="#">Software Outsourcing</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                               <p>Signup to receive our newsletters</p>
                               <form action="" method="post" >
                               <input type="email" name="email" /><input type="submit" value="Subscribe" />
                               </form>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container" align="center">
                <div class="copyright">
                   &copy; Copyright <strong><span>K HUB</span></strong>. All Rights Reserved
                </div>
            <div class="credits">
                        Designed by <a href="https://khub.com/">DENNIS MATERE</a>
            </div>
            </div>
        </footer>
        
    )
}

export default Footer
