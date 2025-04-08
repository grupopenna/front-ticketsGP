import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';
import { EmailOutlined, LockOutlined, CancelOutlined, Visibility, VisibilityOff, Copyright } from '@mui/icons-material';
import { mechanic, route, rancher, trucker } from '../../assets';
import { useAuthContext } from '../../store/useAuthContext';

const Login = () => {
    const navigation = useNavigate();
    const { user, login } = useAuthContext()

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [userData, setUser] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        wrongCredentials: false,
    });

  const loginUser = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (!userData.email || !userData.password) {
        setErrors({
          ...errors,
          email: !userData.email,
          password: !userData.password,
        });
        return;
      }
      login(userData.email, userData.password);
    } catch (error:any) {
      alert('HOLA')
      console.error('Error de login:', error);
      toast.error(`Error al iniciar sesión. ${error.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setErrors(prev => ({
        ...prev,
        wrongCredentials: true
      }));
    } finally {
      if (user !== null)  navigation('/tasks');
      setIsLoading(false);
    }
  };

  return (
    <form
      className='flex min-h-screen justify-center items-center overflow-hidden'
      onSubmit={loginUser}
    >
      <video
        autoPlay
        loop
        muted
        className='hidden lg:flex lg:absolute inset-0 -z-20 object-cover w-full h-full'
      >
        <source src='https://penna-public.s3.amazonaws.com/gpenna-bg-login.mp4' type='video/mp4' />
        Your browser does not support the video.
      </video>
      <div className='flex flex-col rounded-lg bg-black/30 overflow-hidden'>
        <div className='relative flex flex-row w-full h-32'>
          <img src={mechanic} alt='combustible' className='w-full h-full object-cover scale-110' />
          <img src={route} alt='combustible' className='w-full h-full object-cover scale-110' />
          <img src={rancher} alt='combustible' className='w-full h-full object-cover scale-110' />
          <img src={trucker} alt='combustible' className='w-full h-full object-cover scale-110' />
          <p className='absolute -bottom-2 w-full px-auto pb-3 bg-black/50 text-center text-3xl font-roboto font-thin text-blue-400'>movemos <span className='text-[#92BB42]'>energía</span></p>
        </div>
        <div className='flex flex-col w-full z-10 bg-white/85 rounded-t-lg backdrop-blur-xl p-4'>
          <div className='flex flex-col pb-2 border-b border-black/25'>
            <p className="[font-family:'Nunito-Bold',Helvetica] font-semibold text-[#374151] text-[32px] text-center ">INGRESO</p>
            <p className='[font-family:"Nunito-Bold",Helvetica] text-center text-lg text-[#374151]'>Sistema de gestión integral</p>
          </div>
          <div className='flex flex-col gap-6 py-10'>
            <div className='flex flex-row min-w-[300px] items-center py-1 rounded-md border border-gray bg-white shadow-lg'>
              <div className='p-4'>
                <EmailOutlined className='text-[#374151]' />
              </div>
              <div className='relative flex flex-col w-full px-4 border-l border-gray'>
                <label className='[font-family:"Nunito-Bold",Helvetica] pt-1 text-xs text-[#374151]'>Ingrese su DNI</label>
                <input
                  className='w-full z-20 pt-2 mb-1 text-[#374151] outline-none bg-transparent'
                  type="text"
                  name='email'
                  placeholder='Ej: 12345678 (sin puntos)'
                  value={userData.email}
                  onChange={(e) => setUser({ ...userData, email: e.target.value })}
                  required
                />
                {userData.email && (
                  <button
                    type='button'
                    className='absolute top-5 right-5 z-20'
                    onClick={() => setUser(prevUser => ({
                      ...prevUser,
                      email: '',
                    }))}
                  >
                    <CancelOutlined className='text-danger' />
                  </button>
                )}
              </div>
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='flex flex-row min-w-[300px] items-center py-1 rounded-md border border-gray bg-white shadow-lg'>
              <div className='p-4'>
                <LockOutlined className='text-[#374151]' />
              </div>
              <div className='relative flex flex-col w-full px-4 border-l border-gray'>
                <label className='[font-family:"Nunito-Bold",Helvetica] pt-1 text-xs text-[#374151]'>Ingrese su contraseña</label>
                <input
                  className='w-full z-20 pt-2 mb-1 text-[#374151] outline-none'
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='Contraseña'
                  value={userData.password}
                  onChange={(e) => setUser({ ...userData, password: e.target.value })}
                  required
                />
                <button
                  type='button'
                  className='absolute top-5 right-5 z-20'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Visibility className='text-[#374151]' />
                  ) : (
                    <VisibilityOff className='text-[#374151]' />
                  )}
                </button>
              </div>
              {errors.password && <p>Complete la contraseña</p>}
              {errors.wrongCredentials && <p>Email o contraseña incorrectos.</p>}
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <button
              type='submit'
              className={`py-3.5 rounded-lg bg-[#0E4841] hover:bg-[#23645d] transition-all focus:outline-none`}
            >
              <p className='pt-0.5 text-xl text-white font-semibold'>
                {isLoading ? (
                  <CircularProgress size={20} />
                ) : (
                  'Ingresar'
                )}
              </p>
            </button>
          </div>
          <div className='flex pt-7 gap-2 justify-center'>
            <Copyright className='text-[#0E4841] ' />
            <p className='text-md text-[#0E4841]'>Grupo Penna</p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login;