import { CoursesLogo, DashboardLogo, OlympiadsLogo, ParametersLogo, RaytingsLogo, SignOutLogo } from "@/assets/svg/studentDashboardLogos";
import { STUDENT_ROUTES } from "@/utils/path";

export const sidebarRoutes = [
    {
        path: STUDENT_ROUTES.dashboard,
        label: 'Dashboard',
        icon: 'i-heroicons-chart-bar-20-solid',
        logo: DashboardLogo
    },
    {
        path: STUDENT_ROUTES.olympiads,
        label: 'Musobaqalar',
        icon: 'i-heroicons-chart-bar-20-solid',
        logo: OlympiadsLogo
    },
    {
        path: STUDENT_ROUTES.subjects,
        label: 'Fanlar',
        icon: 'i-heroicons-chart-bar-20-solid',
        logo: CoursesLogo
    },
    // {
    //     path: '/student/courses',
    //     label: 'Kusrlar',
    //     icon: 'i-heroicons-chart-bar-20-solid',
    //     logo: CoursesLogo
    // },
    // {
    //     path: '/student/blogs',
    //     label: 'Bloglar',
    //     icon: 'i-heroicons-chart-bar-20-solid',
    //     logo: CoursesLogo
    // },
    // {
    //     path: '/student/library',
    //     label: 'Kutubxona',
    //     icon: 'i-heroicons-chart-bar-20-solid',
    //     logo: CoursesLogo
    // },
    // {
    //     path: '/student/ratings',
    //     label: 'Reyting',
    //     icon: 'i-heroicons-chart-bar-20-solid',
    //     logo: RaytingsLogo
    // },
    // {
    //     path: '/student/profile',
    //     label: 'Profile',
    //     icon: 'i-heroicons-chart-bar-20-solid',
    //     logo: DashboardLogo
    // },
    // {
    //     path: '/student/parameters',
    //     label: 'Sozlamalar',
    //     icon: 'i-heroicons-chart-bar-20-solid',
    //     logo: ParametersLogo
    // },
    // {
    //     path: '/student/exits',
    //     label: 'chiqish',
    //     icon: 'i-heroicons-chart-bar-20-solid',
    //     logo: SignOutLogo
    // }
]