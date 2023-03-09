import { FaGoogle, FaLinkedin, FaApple, FaFacebook } from "react-icons/fa";

const METHODS = [
  {
    name: "Google",
    onClick: () => console.log("test"),
    icon: <FaGoogle />,
  },
  {
    name: "Facebook",
    onClick: () => console.log("test"),
    icon: <FaFacebook />,
  },
  {
    name: "LinkedIn",
    onClick: () => console.log("test"),
    icon: <FaLinkedin />,
  },
  {
    name: "Apple",
    onClick: () => console.log("test"),
    icon: <FaApple />,
  },
];

const Footer = ({ children }) => {
  return (
    <div className="d-flex align-items-center flex-column">
      <div>
        <p className="fs-5">Other login methods:&nbsp;</p>
      </div>
      <div>
        {METHODS.map(({ name, icon, onClick }) => (
          <button className="icon-button" onClick={onClick} name={name}>
            {icon}
          </button>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Footer;
