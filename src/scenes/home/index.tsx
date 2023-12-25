import useMediaQuery from "@/hooks/useMediaQueries";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedbull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";


type Props = {
    setSelectedpage:(value:SelectedPage) => void ;
}

const Home = ({setSelectedpage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* image and the main header*/}
      <div>
        {/* Main header */}
        <div>
          {/*headings */}
          <div>
            <div>
              <div>
                <img alt="home-page-text" src={HomePageText}/>
              </div>
            </div>
          </div>
        </div>
        {/*image */}
        <div>

        </div>
      </div>

    </section>
  )
}

export default Home