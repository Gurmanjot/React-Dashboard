export default function listItem({ Icon, text }) {
  return (
    <div className="flex flex-row my-6 py-2 group items-center justify-center">
      <div className="group-hover:bg-purple-500 rounded-full h-12 w-12">
        <Icon className="text-brand-text group-hover:text-white h-8 w-8  ml-2 mt-2" />
      </div>
      <h3 className=" text-brand-text group-hover:text-black pt-1 ml-4">
        {text}
      </h3>
    </div>
  );
}
