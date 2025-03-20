import { Route, Routes } from "react-router-dom";

// componets
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from "../components/Headers/HeaderStats";
import FooterAdmin from "../components/Footers/FooterAdmin";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Dashboard from "../views/admin/Dashboard";

// views
import Colors from "../views/admin/docs/Colors";
import List from "../views/admin/docs/List";
import Activity from "../views/admin/docs/Activity";
import Notifications from "../views/admin/docs/Notifications";
import Avatar from "../views/admin/docs/Avatar";
import Badge from "../views/admin/docs/Badge";
import NavigationTabs from "../views/admin/docs/NavigationTabs";
import Buttons from "../views/admin/docs/Buttons";
import Cards from "../views/admin/docs/Cards";
import Slider from "../views/admin/docs/Slider";
import Charts from "../views/admin/docs/Charts";
import Forms from "../views/admin/docs/Forms";
import Icons from "../views/admin/docs/Icons";
import Modal from "../views/admin/docs/Modal";
import Board from "../views/admin/docs/Board";
import Progress from "../views/admin/docs/Progress";
import Spinner from "../views/admin/docs/Spinner";
import Toast from "../views/admin/docs/Toast";
import Tooltip from "../views/admin/docs/Tooltip";

// Theme 관련 라우트 컴포넌트 분리
const AdminRoutes = () => {

    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <HeaderStats />

                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/docs/colors" element={<Colors />} />
                        <Route path="/docs/list" element={<List />} />
                        <Route path="/docs/activity" element={<Activity />} />
                        <Route path="/docs/notifications" element={<Notifications />} />
                        <Route path="/docs/avatar" element={<Avatar />} />
                        <Route path="/docs/badge" element={<Badge />} />
                        <Route path="/docs/buttons" element={<Buttons />} />
                        <Route path="/docs/cards" element={<Cards />} />
                        <Route path="/docs/slider" element={<Slider />} />
                        <Route path="/docs/charts" element={<Charts />} />
                        <Route path="/docs/forms" element={<Forms />} />
                        <Route path="/docs/icons" element={<Icons />} />
                        <Route path="/docs/modal" element={<Modal />} />
                        <Route path="/docs/navigation-tabs" element={<NavigationTabs />} />
                        <Route path="/docs/board" element={<Board />} />
                        <Route path="/docs/progress" element={<Progress />} />
                        <Route path="/docs/spinner" element={<Spinner />} />
                        <Route path="/docs/toast" element={<Toast />} />
                        <Route path="/docs/tooltip" element={<Tooltip />} />
                    </Routes>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}

export default AdminRoutes;