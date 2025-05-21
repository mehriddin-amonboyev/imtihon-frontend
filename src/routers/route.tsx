// import Auth from "../page/auth/auth";
import { Subjects } from "../page/subjects/subjects";
import { Topics } from "../page/topics/topic";

export default [
    {
        path: "/app/subjects",
        comp: Subjects,
    },
    // {
    //     path: "app/login",
    //     comp: Auth,
    // },
    {
        path: '/app/topic/:id',
        comp: Topics,
    }
]