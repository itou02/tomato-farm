import '../tailwind.css'
import image from '../config/images'
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {

    const location = useLocation()
    const isActiveRoute = (path) => {
        return location.pathname === path;
    };

    return (
        <div className='flex flex-col h-[25%] gap-2'>
            <div className='py-2 h-[80%]'>
                <img src={image.logo} className='h-full mx-auto' />
            </div>
            <div className='w-[60%] h-[20%] mx-auto'>
                <div className='flex h-full align-middle'>
                    {isActiveRoute('/') ?
                        <div className='flex mx-auto gap-6'>
                            <img src={image.pressedL} className='' />
                            <div className='flex gap-16'>
                                <a
                                    href="/farm-story"
                                    className='h-full'
                                >
                                    <img src={image.story} className='h-full' />
                                </a>
                                <a
                                    href="/prodoct"
                                    className='h-full'
                                >
                                    <img src={image.prod} className='h-full' />
                                </a>
                                <a
                                    href="/questions"
                                    className='h-full'
                                >
                                    <img src={image.question} className='h-full' />
                                </a>
                                <a
                                    href="/goods"
                                    className='h-full'
                                >
                                    <img src={image.good} className='h-full' />
                                </a>
                                <a
                                    href="/contact-us"
                                    className='h-full'
                                >
                                    <img src={image.us} className='h-full' />
                                </a>
                            </div>
                            <img src={image.pressed} className='' />
                        </div>
                        :

                        <div className='flex mx-auto gap-6'>
                            <div className='flex gap-16'>
                                <div className='flex gap-4'>
                                    <img src={image.pressedL} className='' />
                                    <a
                                        href="/farm-story"
                                        className='h-full'
                                    >
                                        <img src={image.story} className='h-full' />
                                    </a>
                                    <img src={image.pressed} className='' />
                                </div>
                                <a
                                    href="/prodoct"
                                    className='h-full'
                                >
                                    <img src={image.prod2} className='h-full' />
                                </a>
                                <a
                                    href="/questions"
                                    className='h-full'
                                >
                                    <img src={image.question2} className='h-full' />
                                </a>
                                <a
                                    href="/goods"
                                    className='h-full'
                                >
                                    <img src={image.good2} className='h-full' />
                                </a>
                                <a
                                    href="/contact-us"
                                    className='h-full'
                                >
                                    <img src={image.us2} className='h-full' />
                                </a>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}