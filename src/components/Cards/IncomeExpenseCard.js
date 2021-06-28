const IncomeExpenseCard = ({ logo, isIncome }) => {
  return (
    <div className=" col-span-full md:col-span-8 p-8 lg:col-span-4 rounded-3xl bg-white">
      {/* first row */}
      <div className="flex justify-between">
        <div className="flex items-center ">
          <img src={logo} alt="logo" className="h-12 w-12 mr-3" />
          <div>
            <div className="">Income</div>
            <div className="text-black text-3xl">$45,741</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-4 h-2 rounded-sm overflow-hidden inline-block">
            <div
              className={`h-3 w-3 ${
                isIncome
                  ? "bg-green-500 rotate-45 transform origin-bottom-left"
                  : "bg-red-500 -rotate-45 transform origin-top-left"
              } `}
            />
          </div>
          <h3 className={`${isIncome ? "text-green-500" : "text-red-500"} `}>
            +0.5%
          </h3>
          <h3 className="text-sm">Last Month</h3>
        </div>
      </div>
      {/* second row */}
    </div>
  );
};

export default IncomeExpenseCard;
