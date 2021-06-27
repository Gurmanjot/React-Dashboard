export default function listItem({ Icon, text }) {
  return (
    <div className="flex flex-row my-6 py-2 group items-center">
      <div className="group-hover:bg-purple-500 rounded-full ml-6 h-12 w-12 flex items-center justify-center">
        <Icon className="text-brand-text group-hover:text-white h-8 w-8" />
      </div>
      <h1 className="text-brand-text group-hover:text-black text-xl ml-4">
        {text}
      </h1>
    </div>
  );
}
