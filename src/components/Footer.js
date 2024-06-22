import '../tailwind.css'
import image from '../config/images'

export default function Header() {
    return (
        <div className='absolute z-99'>
            <img src={image.footer} />
        </div>
    );
}