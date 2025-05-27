// import Auth from "../page/auth/auth";
import { Subjects } from "../page/subjects/subjects";
import { Tests } from "../page/tests/tests";
import { Topics } from "../page/topics/topic";

export default [
    {
        path: "/app/subjects",
        comp: Subjects,
    },
    {
        path: '/app/topic/:id',
        comp: Topics,
    },
    {
        path:"/app/test/:topicId",
        comp: Tests
    }
]