function BalanceCard() {
  return (
    <div className="flex flex-col col-span-full md:col-span-6 p-8 lg:col-span-4 rounded-3xl bg-purple-500">
      {/* first row */}
      <div className=" flex justify-between ">
        <div>
          <div className="text-white">My Balance</div>
          <div className="text-white text-2xl">$123,456,789</div>
        </div>
        <div className="flex flex-row relative">
          <div className="rounded-full bg-gray-100 h-8 w-8 absolute right-6"></div>
          <div className="rounded-full bg-gray-100 h-8 w-8"></div>
        </div>
      </div>
      {/* second row */}
      <div className="mt-6">
        <div className="flex flex-row justify-end items-center">
          {Array.from(Array(12).keys()).map((index) => {
            return (
              <div
                className={`h-2 w-2 bg-white rounded-full ${
                  (index + 1) % 4 === 0 ? "mr-1" : "mr-0"
                }`}
              />
            );
          })}
          <div className="text-white">1234 </div>
        </div>
      </div>
      {/* third row */}
      <div className="mt-4 flex flex-row">
        <div className="inline-flex flex-col space-y-2">
          <span className="text-white text-base">Card Holder</span>
          <span className="text-white text-l font-bold">Gurman</span>
        </div>
        <div className="inline-flex flex-col space-y-2 ml-3">
          <span className="text-white text-base">Valid Thru</span>
          <span className="text-white text-l font-bold">03/21</span>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
