import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components';
import image from '@/assets/img/image.png'
import style from './home.module.css';
import { data } from '@/page/guest/data';

export const Home = () => {
    return (
        <>
            <div id='home' className='flex flex-col justify-between sm:flex-row' >
                <div className='pt-[10rem] pb-[5rem]'>
                    <h1 className={style.home__title}>
                        O’rganishning yangi yo’llari sari
                    </h1>
                    <p className={style.home__sub_title}>
                        AbuTolib platformasi - bu o’quvchilar uchun
                        online testlarni yaratish va sinovlardan o’tish
                        imkonini beradi. O’qish va o’rganishni
                        soddalashtiradi va samaradorligini oshiradi.
                    </p>
                    <Button className='mt-6'>
                        <span className={style.home__button_span}> Yangi hisob </span>
                    </Button>
                </div>
                <div className={style.home__rec}>

                    <img className={style.home__rec_img} src={image} alt="bratishka" />
                    <div className='-z-10 absolute bottom-0'>
                        <svg width="477" height="495" viewBox="0 0 477 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="238.5" cy="247.5" rx="238.5" ry="247.5" fill="#00AAFF" />
                        </svg>
                    </div>
                </div>
            </div>

            <Card id='courses' className='w-full min-h-[617px] mt-5 pt-20 flex flex-col'>
                <CardHeader>
                    <CardTitle className={style.courses__title}>
                        Popular Courses
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="all">
                        <TabsList className='mr-auto ml-auto'>
                            <TabsTrigger value="all">Barcha kurslar</TabsTrigger>
                            <TabsTrigger value="programmers">Dasturlash</TabsTrigger>
                            <TabsTrigger value="math">Matematika</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all" className='px-10 py-5'>
                            <Carousel className='pb-5'>
                                <CarouselContent >
                                    {data.map((item) => (
                                        <>
                                            <CarouselItem className="lg:basis-1/4 md:basis-1/2 sm:basis-1/2 mb-1">
                                                <Card className='w-[295px] px-4'>
                                                    <figure className='px-8'>
                                                        <img src={item.img} alt="" />
                                                    </figure>
                                                    <CardContent>
                                                        <span className={style.courses__corusel_span}>
                                                            {item.create}
                                                        </span>
                                                        <CardTitle className={style.courses__corusel_title}>
                                                            {item.title}
                                                        </CardTitle>
                                                        <CardDescription className={style.courses__corusel_describtion}>
                                                            {item.describtion}
                                                        </CardDescription>
                                                    </CardContent>
                                                    <CardFooter className='ml-auto'>
                                                        <Button>
                                                            Tashrif
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            </CarouselItem>
                                        </>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </TabsContent>
                        <TabsContent value="programmers">
                            Change your password here.
                            </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
            <Card>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fugiat culpa perferendis explicabo maxime neque et possimus soluta inventore saepe! Ullam, quod possimus? Minima perspiciatis assumenda eum commodi exercitationem? Ipsam cum ducimus ut reprehenderit excepturi? Praesentium fugit voluptates reiciendis, distinctio nulla amet obcaecati repellendus nam quaerat ullam cupiditate corporis illum corrupti odio aspernatur doloremque tenetur rem commodi iusto in non! Ipsam dolor accusamus blanditiis nihil odio repellat at? In voluptates iste magnam adipisci beatae veniam autem eveniet facere nobis enim, inventore minima vel expedita sint totam provident repellat! Debitis, nobis aspernatur ad rem beatae nesciunt eveniet itaque blanditiis a iure sapiente illum laudantium provident quidem esse maiores necessitatibus. Quam ipsum itaque culpa tenetur tempora debitis, ullam, delectus rerum sint hic illum temporibus id, fugit impedit corporis. Quam, itaque! Deserunt facere itaque repellendus ab facilis expedita deleniti molestias ullam nemo, iusto sapiente sed neque delectus? Ut voluptatum consequuntur fuga in recusandae assumenda velit molestiae perferendis quisquam necessitatibus, quibusdam qui nihil nobis non sed ipsa facere doloribus veritatis officia vitae et, animi veniam. Error, ullam provident animi pariatur quis sunt magnam ex repudiandae quos reiciendis, eum ut minima perspiciatis vitae ab ipsa. Ullam vero quia repellat nulla qui esse magnam officia, autem vel tenetur earum sint aperiam quas, in facilis, non nam quisquam ipsa rerum omnis voluptatem voluptatum veniam aspernatur. Id accusantium sapiente ad praesentium consequuntur quos ratione reiciendis sit culpa porro eveniet dolore cumque facilis, in cum architecto et. Soluta sapiente sed est, porro numquam odio fugit distinctio eum ut obcaecati commodi! Commodi maiores aut fugiat minus unde reprehenderit. Rem distinctio voluptate suscipit est, corporis corrupti quo commodi deleniti incidunt neque asperiores sed, at officiis ea omnis aspernatur totam consectetur, fuga sequi tenetur. Natus, quaerat molestias aut voluptas earum harum commodi debitis quidem veniam doloremque quia saepe. Consectetur fugiat recusandae exercitationem vero dicta, sint ex cum unde sequi assumenda architecto deserunt? Eos deserunt magni suscipit corporis iusto enim vitae rerum. Delectus velit ea voluptatum illum dignissimos placeat. A omnis perferendis dolorem voluptate eum enim, magni optio consectetur. Iusto voluptatum fugit pariatur? Rem accusantium est sint ea, dolores impedit eius alias laboriosam molestias, voluptas optio odit praesentium iure maiores voluptatibus aperiam dolor iste magnam obcaecati rerum assumenda! Possimus dicta ab iusto soluta, debitis similique, corrupti repellendus voluptatem eius voluptates sint, recusandae nam! Sunt natus at, nostrum aliquam itaque obcaecati sit placeat quo iure ducimus, magni ratione consequuntur laudantium voluptatem distinctio aliquid corrupti beatae esse officia. Id earum esse hic ducimus atque laudantium, tempora reprehenderit inventore repudiandae eligendi itaque ipsum odio ab accusantium magnam tempore nam a error praesentium magni vitae rerum consequatur recusandae quo! Iste dicta facilis quasi architecto earum repellat placeat debitis veniam harum maxime similique beatae, nesciunt mollitia commodi perspiciatis consequuntur amet quia suscipit sint exercitationem! Modi doloremque reiciendis tenetur incidunt alias beatae eius, quod magnam? Nemo suscipit natus, animi eos ab dolore velit eveniet sit quidem ad fuga error officia nostrum, cumque eaque, minima dolorem quis doloremque nulla quas non! Temporibus voluptates voluptatem laudantium. At pariatur facere mollitia sapiente.</p>
            </Card>
        </>
    )
}