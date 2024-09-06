import HomeHeader from "../../components/home/homeHeader";
import { Outlet } from "react-router";

const HomeLayout = () => {

    return (
        <>
            <HomeHeader />
            <Outlet />
        </>
    )
}
export default HomeLayout;