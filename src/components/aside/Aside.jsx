import Nav from "../nav/Nav";
import "./Aside.scss";
import { CONFIG } from "../../config";

const Aside = () => {
  return (
    <aside>
      <h2>Company Name</h2>
      <Nav data={CONFIG.navConfig} />
    </aside>
  );
};

export default Aside;
