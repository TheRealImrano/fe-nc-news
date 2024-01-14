import Dropdown from "./Dropdown";
import NavBase from "./NavBase";
import SortSlider from "./SortSlider";

const HomeNav = (props) => {

    const handleSortChange = (ascending) => {
        props.setSortAscending(ascending)
      };
    return (
        <section className="component-outline">
            <NavBase />
            <Dropdown setSortBy={props.setSortBy} />
            <SortSlider onSortChange={handleSortChange} />
            <button className="component-outline">Create Post!</button>
        </section>
    )
}

export default HomeNav;