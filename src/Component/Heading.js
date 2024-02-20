import "./Heading.css";
import IISC from './IISC.jpg'; 
import NewLogo from './NewLogo.jpg';
import HeadingNew from './HeadingNew.jpg';

function Heading(){
 return(
    <>
    <div class="heading">
     <h3> Infinity Tech School of Computer Engineering (ITSC)</h3>
    <h4> Accrecited by NAAC with A Grade in 2023 </h4>
    <h5>Established in 1994</h5> 
    </div>
     <div>
    <img class="chennailogo" src={IISC} alt="logo" width="200" />
    </div>

    <div>
    <img class="cdaclogo" src={NewLogo} alt="logo" width="200" />
    </div>
    
    </>
 )
}

export default Heading;