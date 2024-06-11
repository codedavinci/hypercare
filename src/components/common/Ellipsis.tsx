type EllipsisProps = {
  text: string;
};

const Ellipsis = ({ text }: EllipsisProps) => {
  return <div className="line-clamp-3">{text}</div>;
};

Ellipsis.displayName = "Ellipsis";

export default Ellipsis;
