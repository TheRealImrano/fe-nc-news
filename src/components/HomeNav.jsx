import Dropdown from "./Dropdown";
import NavBase from "./NavBase";

const HomeNav = () => {
    return (
        <section className="component-outline">
            <NavBase />
            <Dropdown />
            <button>Create Post!</button>
        </section>
    )
}

export default HomeNav;