import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className=" flex marker:w-full max-w-xs  border border-gray-700 rounded-lg shadow bg-gray-800 mx-2 flex-col justify-between">
      {children}
    </div>
  );
};
const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold text-white tracking-tight">
          {title}
        </h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">Rp {price.toLocaleString('id-ID', {styles: 'currency', currency:'IDR'})}</span>
      <Button classname="bg-blue-600 text-white w-cover" onClick={() =>handleAddToCart(id)}>Add to cart</Button>
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
