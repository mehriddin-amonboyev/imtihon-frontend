import { Button } from '@/components/ui/button';
import style from './home.module.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export const Home = () => {
    const [login, setLogin] = useState(false);
    if (!login) {
        return <Outlet />
    }
    return (
        <div className='flex'>
            <div className='pt-[150px] max-w-[786px] max-h-[592px]'>
                <h1 className={style.home__title}>
                    O’rganishning yangi yo’llari sari
                </h1>
                <p className={style.home__sub_title}>
                    AbuTolib platformasi - bu o’quvchilar uchun
                    online testlarni yaratish va sinovlardan o’tish
                    imkonini beradi. O’qish va o’rganishni
                    soddalashtiradi va samaradorligini oshiradi.
                </p>
                <Button
                    className='mt-6'
                >
                    <span className={style.home__button_span}>
                        Yangi Hisob
                    </span>
                </Button>
            </div>
            <div>

            </div>
        </div>
    )
}