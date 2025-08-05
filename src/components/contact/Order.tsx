const Order = ({ className }: { className?: string }) => {
  return (
    <div className={className ?? ''}>
      <form>
        <input
          type="email"
          className="border-main-color rounded-md border px-1"
          placeholder="email"
        />
        <br />
        <input
          type="tel"
          className="border-main-color mt-1 rounded-md border px-1"
          placeholder="tel"
        />
      </form>
    </div>
  );
};

export default Order;
