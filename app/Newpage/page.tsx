import Imagesselect from "../2nd-components/Imagesselect";
import Profile from "../2nd-components/Profile";
import Topbar from "../2nd-components/Topbar";
import Footer from "../2nd-components/Footer";

const page = () => {
  return (
    <div className="w-[375px] max-sm:w-full max-sm:flex max-sm:h-[100vh]  flex max-sm:flex-col  max-sm:items-center flex-col items-center relative">
      <Topbar />
      <Profile />
      <Imagesselect />
      <Footer />
    </div>
  );
};

export default page;
