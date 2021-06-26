import "./App.css";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className=" flex-1">
        <Header />
      </div>
    </div>
  );
}

export default App;
