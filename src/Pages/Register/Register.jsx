import { useForm } from "react-hook-form";
import './register.css'
import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth"
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const { register, handleSubmit, reset } = useForm()
    const {createUser} = UseAuth()
    const navigate = useNavigate()
  const onSubmit = (data) => {console.log(data)
        const name = data?.name
        const email = data?.email
        const img = data?.img
        const password = data?.pass

        if(password.length < 6){
            toast.error("The Password Must be at least 6 Characters")
            return
          }
          else if(!/[!@#$%^&*()_+{}]/.test(password)){
                   toast.error("The Password Must Contain One Special Characters")
                    return
          }
          else if(!/^(?=.*[A-Z]).*$/.test(password)){
                toast.error("The Password Must Contain One Capital Letter")
                return
          }

          createUser(email , password)
          .then(res =>{
            console.log(res)
            if(res){
                updateProfile(res.user, {
                    displayName: name , 
                    photoURL: img
                })
                .then(() =>{
                  
                    toast.success('User Created Successfully')
                    reset()
                    navigate('/dashboard')
                })
                .catch(error =>{
                    toast.error(error)
                })
            }
          })
          .catch(error =>{
            toast.error(error)
          })
        }
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
