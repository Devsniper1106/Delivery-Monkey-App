import { useNavigate } from "react-router-dom";

const FooterButton = (props) => {
  const navigate = useNavigate();
  const link = () => {
    props.setPage(props.type.toLowerCase());
    navigate("/" + props.type.toLowerCase());
  };
  return (
    <>
      <div
        className="flex flex-col z-30 mb-7  items-center w-8 h-8 first:ml-4 last:mr-4"
        onClick={link}
      >
        <img src={props.src} className="w-auto h-auto" alt="noImg" />
        {props.page != props.type.toLowerCase() ? (
          <p className="text-xs text-slate-400">{props.type}</p>
        ) : (
          <p className="text-xs text-red-600">{props.type}</p>
        )}
      </div>
    </>
  );
};

export default FooterButton;
