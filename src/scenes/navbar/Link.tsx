import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string;
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) =>void ;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
    //since lowerCasePage and SelectedPage s are gonna be identical we can use as in here .
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href=""
            onClick={ ()=> setSelectedPage(lowerCasePage) }
        >
            {page}
        </AnchorLink>
    )
}

export default Link