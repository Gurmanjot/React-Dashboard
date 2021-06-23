import "./App.css";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="bg-blue-500 flex-1"></div>
    </div>
  );
}

export default App;
