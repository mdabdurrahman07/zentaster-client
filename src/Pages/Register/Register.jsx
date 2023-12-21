import { useForm } from "react-hook-form";
import './register.css'
const Register = () => {
    const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {console.log(data)}
    return (
        <div className="register">
            <section className='my-40  w-[380px] mx-auto rounded-md'>
                <div className='bg-black p-2'>
                    <h1 className='text-center font-medium text-xl'>Sign Up Here</h1>
                    <div className="divider"></div>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-2">
             <label className="form-control w-full max-w-xs mx-auto">
            <div className="label">
                <span className="text-lg font-medium">Type Your Name!</span>
            </div>
            <input {...register("name")} required type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs mx-auto">
            <div className="label">
                <span className="text-lg font-medium">Type Your Email!</span>
            </div>
            <input {...register("email")} required type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs mx-auto">
            <div className="label">
                <span className="text-lg font-medium">Your Img Link!</span>
            </div>
            <input {...register("img")} required type="text" placeholder="http//:" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs mx-auto">
            <div className="label">
                <span className="text-lg font-medium">Type Your Password!</span>
            </div>
            <input {...register("pass")} required type="password" placeholder="*********" className="input input-bordered w-full max-w-xs" />
            </label>
                    
                 <div className="flex justify-center">
                 <button type="submit" className="px-6 py-2 bg-green-700 font-medium text-lg rounded-md">Sign Up</button>  
                 </div>
                    </form>
                 
                </div>
                
            </section>
        </div>
    );
};

export default Register;
