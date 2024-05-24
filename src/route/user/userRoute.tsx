import UserDashboard from "../../pages/userDashboard/userDashboard";
import { routerType } from "../../types/routeType";

const UserRoute: routerType[] = [
    {
        path: '/userDashboard',
        element: <UserDashboard/>
    },
];

export default UserRoute
