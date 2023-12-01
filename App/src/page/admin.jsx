import Sidebar from "../component/sidebar";
import Content from "../component/content";

export default function Admin() {
  return (
    <div className="w-full min-h-screen flex ">
      <Sidebar />
      <Content />
    </div>
  );
}
