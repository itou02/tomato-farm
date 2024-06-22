import '../tailwind.css'
import image from '../config/images'
import { useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation()
    const isActiveRoute = (path) => {
        return location.pathname === path;
    };

    return (
        <div className='flex flex-col h-[25%] gap-2'>
            <div className='py-2 h-[80%]'>
                <a href='/tomato-farm' >
                    <img src={image.logo} className='h-full mx-auto' />
                </a>

            </div>
            <div className='w-[60%] h-[20%] mx-auto'>
                <div className='flex h-full align-middle'>
                    {isActiveRoute('/tomato-farm')
                        ?
                        <div className='flex mx-auto gap-6'>
                            <img src={image.pressedL} className='' />
                            <div className='flex gap-16'>
                                <a
                                    href="/tomato-farm/farm-story"
                                    className='h-full'
                                >
                                    <img src={image.story} className='h-full' />
                                </a>
                                <a
                                    href="/tomato-farm/products"
                                    className='h-full'
                                >
                                    <img src={image.prod} className='h-full' />
                                </a>
                                <a
                                    href="/tomato-farm/questions"
                                    className='h-full'
                                >
                                    <img src={image.question} className='h-full' />
                                </a>
                                <a
                                    href="/tomato-farm/goods"
                                    className='h-full'
                                >
                                    <img src={image.good} className='h-full' />
                                </a>
                                <a
                                    href="/tomato-farm/contact-us"
                                    className='h-full'
                                >
                                    <img src={image.us} className='h-full' />
                                </a>
                            </div>
                            <img src={image.pressed} className='' />
                        </div>
                        :
                        (isActiveRoute('/tomato-farm/farm-story')
                            ?
                            <div className='flex mx-auto gap-6'>
                                <div className='flex gap-16'>
                                    <div className='flex gap-4'>
                                        <img src={image.pressedL} className='' />
                                        <a
                                            href="/tomato-farm/farm-story"
                                            className='h-full'
                                        >
                                            <img src={image.story} className='h-full' />
                                        </a>
                                        <img src={image.pressed} className='' />
                                    </div>
                                    <a
                                        href="/tomato-farm/products"
                                        className='h-full'
                                    >
                                        <img src={image.prod2} className='h-full' />
                                    </a>
                                    <a
                                        href="/tomato-farm/questions"
                                        className='h-full'
                                    >
                                        <img src={image.question2} className='h-full' />
                                    </a>
                                    <a
                                        href="/tomato-farm/goods"
                                        className='h-full'
                                    >
                                        <img src={image.good2} className='h-full' />
                                    </a>
                                    <a
                                        href="/tomato-farm/contact-us"
                                        className='h-full'
                                    >
                                        <img src={image.us2} className='h-full' />
                                    </a>
                                </div>
                            </div>
                            :
                            (isActiveRoute('/tomato-farm/products')
                                ?
                                <div className='flex mx-auto gap-6'>
                                    <div className='flex gap-16'>
                                        <a
                                            href="/tomato-farm/farm-story"
                                            className='h-full'
                                        >
                                            <img src={image.story2} className='h-full' />
                                        </a>
                                        <div className='flex gap-4'>
                                            <img src={image.pressedL} className='' />
                                            <a
                                                href="/tomato-farm/products"
                                                className='h-full'
                                            >
                                                <img src={image.prod} className='h-full' />
                                            </a>
                                            <img src={image.pressed} className='' />
                                        </div>
                                        <a
                                            href="/tomato-farm/questions"
                                            className='h-full'
                                        >
                                            <img src={image.question2} className='h-full' />
                                        </a>
                                        <a
                                            href="/tomato-farm/goods"
                                            className='h-full'
                                        >
                                            <img src={image.good2} className='h-full' />
                                        </a>
                                        <a
                                            href="/tomato-farm/contact-us"
                                            className='h-full'
                                        >
                                            <img src={image.us2} className='h-full' />
                                        </a>
                                    </div>
                                </div>
                                :
                                (isActiveRoute('/tomato-farm/questions')
                                    ?
                                    <div className='flex mx-auto gap-6'>
                                        <div className='flex gap-16'>
                                            <a
                                                href="/tomato-farm/farm-story"
                                                className='h-full'
                                            >
                                                <img src={image.story2} className='h-full' />
                                            </a>
                                            <a
                                                href="/tomato-farm/products"
                                                className='h-full'
                                            >
                                                <img src={image.prod2} className='h-full' />
                                            </a>
                                            <div className='flex gap-4'>
                                                <img src={image.pressedL} className='' />
                                                <a
                                                    href="/tomato-farm/questions"
                                                    className='h-full'
                                                >
                                                    <img src={image.question} className='h-full' />
                                                </a>
                                                <img src={image.pressed} className='' />
                                            </div>
                                            <a
                                                href="/tomato-farm/goods"
                                                className='h-full'
                                            >
                                                <img src={image.good2} className='h-full' />
                                            </a>
                                            <a
                                                href="/tomato-farm/contact-us"
                                                className='h-full'
                                            >
                                                <img src={image.us2} className='h-full' />
                                            </a>
                                        </div>
                                    </div>
                                    :
                                    (isActiveRoute('/order')
                                        ?
                                        <div className='flex mx-auto gap-6'>
                                            <div className='flex gap-16'>
                                                <a
                                                    href="/tomato-farm/farm-story"
                                                    className='h-full'
                                                >
                                                    <img src={image.story2} className='h-full' />
                                                </a>
                                                <div className='flex gap-4'>
                                                    <img src={image.pressedL} className='' />
                                                    <a
                                                        href="/tomato-farm/products"
                                                        className='h-full'
                                                    >
                                                        <img src={image.prod} className='h-full' />
                                                    </a>
                                                    <img src={image.pressed} className='' />
                                                </div>
                                                <a
                                                    href="/tomato-farm/questions"
                                                    className='h-full'
                                                >
                                                    <img src={image.question2} className='h-full' />
                                                </a>
                                                <a
                                                    href="/tomato-farm/goods"
                                                    className='h-full'
                                                >
                                                    <img src={image.good2} className='h-full' />
                                                </a>
                                                <a
                                                    href="/tomato-farm/contact-us"
                                                    className='h-full'
                                                >
                                                    <img src={image.us2} className='h-full' />
                                                </a>
                                            </div>
                                        </div>
                                        :
                                        (isActiveRoute('/order-detail')
                                            ?
                                            <div className='flex mx-auto gap-6'>
                                                <div className='flex gap-16'>
                                                    <a
                                                        href="/tomato-farm/farm-story"
                                                        className='h-full'
                                                    >
                                                        <img src={image.story2} className='h-full' />
                                                    </a>
                                                    <div className='flex gap-4'>
                                                        <img src={image.pressedL} className='' />
                                                        <a
                                                            href="/tomato-farm/products"
                                                            className='h-full'
                                                        >
                                                            <img src={image.prod} className='h-full' />
                                                        </a>
                                                        <img src={image.pressed} className='' />
                                                    </div>
                                                    <a
                                                        href="/tomato-farm/questions"
                                                        className='h-full'
                                                    >
                                                        <img src={image.question2} className='h-full' />
                                                    </a>
                                                    <a
                                                        href="/tomato-farm/goods"
                                                        className='h-full'
                                                    >
                                                        <img src={image.good2} className='h-full' />
                                                    </a>
                                                    <a
                                                        href="/tomato-farm/contact-us"
                                                        className='h-full'
                                                    >
                                                        <img src={image.us2} className='h-full' />
                                                    </a>
                                                </div>
                                            </div>
                                            :
                                            (isActiveRoute('/tomato-farm/goods')
                                                ?
                                                <div className='flex mx-auto gap-6'>
                                                    <div className='flex gap-16'>
                                                        <a
                                                            href="/tomato-farm/farm-story"
                                                            className='h-full'
                                                        >
                                                            <img src={image.story2} className='h-full' />
                                                        </a>
                                                        <a
                                                            href="/tomato-farm/products"
                                                            className='h-full'
                                                        >
                                                            <img src={image.prod2} className='h-full' />
                                                        </a>
                                                        <a
                                                            href="/tomato-farm/questions"
                                                            className='h-full'
                                                        >
                                                            <img src={image.question2} className='h-full' />
                                                        </a>
                                                        <div className='flex gap-4'>
                                                            <img src={image.pressedL} className='' />
                                                            <a
                                                                href="/tomato-farm/goods"
                                                                className='h-full'
                                                            >
                                                                <img src={image.good} className='h-full' />
                                                            </a>
                                                            <img src={image.pressed} className='' />
                                                        </div>
                                                        <a
                                                            href="/tomato-farm/contact-us"
                                                            className='h-full'
                                                        >
                                                            <img src={image.us2} className='h-full' />
                                                        </a>
                                                    </div>
                                                </div>
                                                :
                                                (isActiveRoute('/tomato-farm/contact-us')
                                                    ?
                                                    <div className='flex mx-auto gap-6'>
                                                        <div className='flex gap-16'>
                                                            <a
                                                                href="/tomato-farm/farm-story"
                                                                className='h-full'
                                                            >
                                                                <img src={image.story2} className='h-full' />
                                                            </a>
                                                            <a
                                                                href="/tomato-farm/products"
                                                                className='h-full'
                                                            >
                                                                <img src={image.prod2} className='h-full' />
                                                            </a>
                                                            <a
                                                                href="/tomato-farm/questions"
                                                                className='h-full'
                                                            >
                                                                <img src={image.question2} className='h-full' />
                                                            </a>
                                                            <a
                                                                href="/tomato-farm/goods"
                                                                className='h-full'
                                                            >
                                                                <img src={image.good2} className='h-full' />
                                                            </a>
                                                            <div className='flex gap-4'>
                                                                <img src={image.pressedL} className='' />
                                                                <a
                                                                    href="/tomato-farm/contact-us"
                                                                    className='h-full'
                                                                >
                                                                    <img src={image.us} className='h-full' />
                                                                </a>
                                                                <img src={image.pressed} className='' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className='flex mx-auto gap-6'>
                                                        <img src={image.pressedL} className='' />
                                                        <div className='flex gap-16'>
                                                            <a
                                                                href="/tomato-farm/farm-story"
                                                                className='h-full'
                                                            >
                                                                <img src={image.story} className='h-full' />
                                                            </a>
                                                            <a
                                                                href="/tomato-farm/products"
                                                                className='h-full'
                                                            >
                                                                <img src={image.prod} className='h-full' />
                                                            </a>
                                                            <a
                                                                href="/tomato-farm/questions"
                                                                className='h-full'
                                                            >
                                                                <img src={image.question} className='h-full' />
                                                            </a>
                                                            <a
                                                                href="/tomato-farm/goods"
                                                                className='h-full'
                                                            >
                                                                <img src={image.good} className='h-full' />
                                                            </a>
                                                            <a
                                                                href="/tomato-farm/contact-us"
                                                                className='h-full'
                                                            >
                                                                <img src={image.us} className='h-full' />
                                                            </a>
                                                        </div>
                                                        <img src={image.pressed} className='' />
                                                    </div>
                                                )
                                            )
                                        )
                                    )
                                )
                            )

                        )
                    }
                </div>

            </div>
        </div >
    )
}