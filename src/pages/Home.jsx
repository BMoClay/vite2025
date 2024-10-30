import { Link } from 'react-router-dom';
import logo1 from "../assets/logosSmall/Fiery_Color_008 copy 2.png";
import logo2 from "../assets/logosSmall/Fiery_Color_010_ok copy 2.png";
// import logo3 from "../assets/logosSmall/Fiery_Color_011 copy 2.png";
import logo4 from "../assets/logosSmall/Fiery_Color_012 copy 2.png";
import logo5 from "../assets/logosSmall/Fiery_Color_013 copy 2.png";
import logo6 from "../assets/logosSmall/Fiery_Color_014 copy 2.png";
// import logo7 from "../assets/logosSmall/Fiery_Color_015 copy 2.png";
// import logo8 from "../assets/logosSmall/Fiery_Color_016 copy 2.png";
// import logo9 from "../assets/logosSmall/Fiery_Color_017 copy 2.png";
// import logo10 from "../assets/logosSmall/Fiery_Color_018 copy 2.png";
// import logo11 from "../assets/logosSmall/Fiery_Color_019 copy 2.png";
// import logo12 from "../assets/logosSmall/Fiery_Color_020 copy 2.png";

const Home = () => {
  return (
    <div>
      <Link to="/vaclavebs"> 
            <div className="flex pb-[0.5px] items-baseline">
              <img src={logo1} className="w-10"></img>
            </div>
      </Link>
      <Link to="/cornarolaws"> 
            <div className="flex pb-[0.5px] items-baseline">
              <img src={logo2} className="w-10"></img>
            </div>
       </Link>
       <Link to="/cornaroedition"> 
            <div className="flex pb-[0.5px] items-baseline">
              {/* <img src={logo3} className="w-10"></img> */}
              <span className="px-7">*</span>
            </div>
       </Link>
       <Link to="/pulitzerno"> 
            <div className="flex pb-[0.5px] items-baseline">
              <img src={logo4} className="w-10"></img>
            </div>
       </Link>
       <div className="flex pb-[0.5px] items-baseline">
              <img src={logo5} className="w-10"></img>
            </div>
            <div className="flex pb-[0.5px] items-baseline">
              <img src={logo6} className="w-10"></img>
            </div>
     

    </div>
  );
};

export default Home;