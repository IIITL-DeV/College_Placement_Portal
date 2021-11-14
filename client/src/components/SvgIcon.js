const SvgIcon = (props) => (
  <img
    src={`/images/${props.src}`}
    alt={props.alt || "IIIT Lucknow Placement Portal by RDT and team."}
    className={props.classname || "svg-icon"}
  />
);

export default SvgIcon;
