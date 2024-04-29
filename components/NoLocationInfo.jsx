import Card from "./Card";

const NoLocationInfo = ({ location }) => {
  return (
    <Card>
      <p className="text-2xl font-bold text-cyan-200">Sorry!!</p>
      <p className="text-md py-3">
        Currently we do not have any information about
        <span className="text-xl font-semibold text-teal-400 px-3">
          "{location}"
        </span>
      </p>
    </Card>
  );
};

export default NoLocationInfo;
