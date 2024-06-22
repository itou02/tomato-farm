import '../tailwind.css'
import image from '../config/images'

export default function Header() {
    return (
        <div className='absolute z-0'>
            <img src={image.footer} />
        </div>
    );
}