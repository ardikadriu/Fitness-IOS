import Imagesselect from "../2nd-components/Imagesselect";
import Profile from "../2nd-components/Profile";
import Topbar from "../2nd-components/Topbar";
import Footer from "../2nd-components/Footer";

const page = () => {
  return (
    <div className="max-w-[375px] flex flex-col items-center">
      <Topbar />
      <Profile />
      <Imagesselect />
      <Footer />
    </div>
  );
};

export default page;
