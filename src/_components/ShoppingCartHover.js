import "./ShoppingCartHover.css";
const ShoppingCartHover = (props) => {
  return (
    <aside
      className="shopping-cart-menu"
      style={props.shoppingCartMenu}
    ></aside>
  );
};

export default ShoppingCartHover;
