import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import AuthProviders from './Providers/AuthProviders'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(

     <AuthProviders>
     <RouterProvider router={router} />
     <Toaster/>
     </AuthProviders>

)
