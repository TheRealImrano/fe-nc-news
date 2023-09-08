import Dropdown from "./Dropdown";
import NavBase from "./NavBase";
import SortSlider from "./SortSlider";

const HomeNav = (props) => {

    const handleSortChange = (ascending) => {
        props.setSortAscending(ascending)
        console.log(props.sortAscending);
      };
    return (
        <section className="component-outline">
            <NavBase />
            <Dropdown />
            <SortSlider onSortChange={handleSortChange} />
            <button>Create Post!</button>
        </section>
    )
}

export default HomeNav;