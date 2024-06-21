import '../tailwind.css'
import image from '../config/images'

export default function Header() {
    return (
        <div className='relative z-10'>
            <img src={image.footer} />
        </div>
    );
}