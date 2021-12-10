import "./StoreHeader.css";

import { FaRegUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";

const StoreHeader = (props) => {
  return (
    <header className="store--header">
      <div className="store--header_bar">
        <p>
          Enjoy <span className="free-shipping">free shipping</span> on all
          orders over $50!
        </p>
      </div>
      <div className="horizontal-break"></div>
      <div className="store--header_icon-wrapper">
        <div className="store--header_menu-icon">
          <FiMenu className="icons" />
        </div>
        <div className="store--header_icons">
          <HiOutlineSearch className="icons" onClick={props.searchIconClick} />
          <FaRegUser className="icons" />
          <MdOutlineShoppingCart
            className="icons"
            onClick={props.cartIconClick}
          />
        </div>
      </div>
    </header>
  );
};

export default StoreHeader;
