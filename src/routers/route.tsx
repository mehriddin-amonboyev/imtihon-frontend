import { STUDENT_ROUTES } from "@/utils/path";

export const studentRoutes = [
    {
        path: STUDENT_ROUTES.dashboard, //   /student/
        comp: () => import("@/page/student/home/studentDashboard").then(m => ({ default: m.StudentHome })),
    },
    {
        path: STUDENT_ROUTES.olympiads, //   /student/olympiads
        comp: () => import("@/page/student/olympiads/olympiads").then(m => ({ default: m.Olympiads })),
    },
    {
        path:STUDENT_ROUTES.subjects, //   /student/subjects
        comp: () => import("@/page/student/subjects/subjects").then(m => ({ default: m.Subjects })),
    },
    {
        path: STUDENT_ROUTES.subjectsId, //   /student/subjects/:id
        comp: () => import("@/page/student/subjects/subjectDetail").then(m => ({ default: m.SubjectDetail })),
    }
    // {
    //     path: '/topic/:id',
    //     comp: Topics,
    // },
    // {
    //     path:"/test/:topicId",
    //     comp: Tests
    // }
]