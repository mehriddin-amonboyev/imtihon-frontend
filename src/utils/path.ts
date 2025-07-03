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
    dashboard: '/user',
    olympiads: '/user/olympiads',
    subjects: '/user/subjects',
    subjectId: '/user/subjects/:subjectId',
    // topics: '/user/topics',
    // topic: '/user/topic/:id',
    // tests: '/user/tests',
    // courses: '/user/courses',
    // blogs: '/user/blogs',
    // LIBRARY: '/user/library',
    // RATINGS: '/user/ratings',
    // PROFILE: '/user/profile',
    // PARAMETERS: '/user/parameters',
    // EXITS: '/user/exits'
};

export const TEACHER_ROUTES = {
    createTest: 'create-test'
};