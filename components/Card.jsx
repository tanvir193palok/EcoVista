const Card = ({ children }) => {
  return (
    <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div class="card">{children}</div>
    </div>
  );
};

export default Card;
