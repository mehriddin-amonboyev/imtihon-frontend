export const HOME_ROUTES = {
    home: '/'
};

export const AUTH_ROUTES = {
    login: '/login',
    register: '/register',
    forgot_password: '/forgot-password',
    reset_password: '/reset-password'
};

export const STUDENT_ROUTES = {
    dashboard: '/student',
    olympiads: '/student/olympiads',
    subjects: '/student/subjects',
    topics: '/student/topics',
    topic: '/student/topic/:id',
    tests: '/student/tests',
    courses: '/student/courses',
    blogs: '/student/blogs',
    LIBRARY: '/student/library',
    RATINGS: '/student/ratings',
    PROFILE: '/student/profile',
    PARAMETERS: '/student/parameters',
    EXITS: '/student/exits'
};

export const TEACHER_ROUTES = {
    DASHBOARD: '/teacher/dashboard',
    COURSES: '/teacher/courses',
    STUDENTS: '/teacher/students',
    PROFILE: '/teacher/profile',
    SETTINGS: '/teacher/settings'
};