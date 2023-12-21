import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner/undraw_All_the_data_re_hh4w-removebg.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto my-2">
            <section className="flex-row lg:flex justify-around items-center gap-5">
                <div className='flex-1' data-aos="flip-up">
                <img src={bannerImg} alt="banner" />
                </div>
                <div className='flex-1 space-y-7 p-3' data-aos="flip-down">
                <h1 className='text-5xl font-semibold'>Organize Your <br /> Life Better With <br /> Zen Tasker </h1>
                <p className='font-medium'>Welcome to Zen Tasker, your go-to destination for simplified and efficient task management. Our platform empowers you to enhance productivity with an intuitive interface for creating and prioritizing tasks effortlessly. Foster collaboration seamlessly through collaborative workspaces, ensuring real-time updates on task progress for streamlined teamwork.</p>
               <div>
               <Link to="/login"><button className='bg-purple-500 px-5 py-2 rounded-md font-medium text-lg'>Let’s Explore</button></Link>
               </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;