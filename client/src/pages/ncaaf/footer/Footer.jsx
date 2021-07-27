import React from 'react';
import './fot.css';
import footerlogo from '../img/footerlogo.png';

function Footer() {
    return (
        <footer class="footer-distributed">
 
 <div class="footer-left">
 
 <img src={footerlogo} alt="footerlogo" className="footerlogo" />
 

 
 <br/>
 <br/>
 <p class="footer-company-name">1140 Forrest 5t.</p>
 <br/>
 <p class="footer-company-name">Suite 200 Conshohhocken, PA 19428 </p>
 <div>
<br/>
 <p><a href="mailto:support@company.com">+01 123345 67890</a></p>
 </div>
 <br/>
 <p class="footer-company-name">cerberusfootballfantasy @example.com</p>
 
 </div>
 
 <div class="footer-center">
 
<p className="api">API SOLUTIONS</p>
 <ul>
 <li>Sports</li>
 <li>Data</li>
 <li> NFL API </li>
 <li> MLB API </li>
 <li> NBA API </li>
 <li> NHL API </li>
 <li> NCAA Football API </li>
 <li> NCAA Basketball API </li>
 <li> PGA Golf API </li>
</ul>
  <div >
  <h6 className="copyright">	&copy; Copyright 2020 Cerberus Football Fantasy</h6>
  </div>
 
 
 </div>
 
 <div class="footer-right" style={{marginTop:'12px'}}>
 <p className="api">QUICK LINKS</p>
 <ul>
 <li>Privacy</li>
 <li>DO Not Sell</li>
 <li> Terms </li>
 <li> Blog </li>
 <li> Contect </li>
 <li> Help </li>
 <li> Register </li>
 <li> Login </li>

</ul>
 
 </div>
 
 </footer>
    )
}

export default Footer
