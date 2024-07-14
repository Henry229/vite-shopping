import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/thunkFunctions';

interface FormData {
  email: string;
  password: string;
  name: string;
}

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: 'onChange' });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = ({ email, password, name }) => {
    const body = {
      email,
      password,
      name,
      image: `https://via.placeholder.com/600x400?text=no+user+image`,
    };

    dispatch(registerUser(body));

    reset();
  };

  const userEmail = {
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Invalid email',
    },
  };

  const userPassword = {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must have at least 6 characters',
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        'Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character',
    },
  };

  const userName = {
    required: 'Name is required',
    minLength: {
      value: 3,
      message: 'Name must have at least 3 characters',
    },
  };

  return (
    <div>
      <section className='flex flex-col justify-center mt-20 max-w-[400px] m-auto'>
        <div className='p-6 bg-white rounded-md shadow-md'>
          <h1 className='text-3xl font-semibold text-center'>Register</h1>
          <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-2'>
              <label
                htmlFor='email'
                className='text-sm font-semibold text-gray-800'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
                {...register('email', userEmail)}
              />
              {errors?.email && (
                <div>
                  <span className='text-xs text-red-500'>
                    {errors.email.message}
                  </span>
                </div>
              )}
            </div>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
                {...register('name', userName)}
              />
              {errors?.name && (
                <div>
                  <span className='text-xs text-red-500'>
                    {errors.name.message}
                  </span>
                </div>
              )}
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
                {...register('password', userPassword)}
              />
              {errors?.password && (
                <div>
                  <span className='text-xs text-red-500'>
                    {errors.password.message}
                  </span>
                </div>
              )}
            </div>

            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-4 py-2 text-white duration-200 bg-black rounded-md hover:bg-gray-700'
              >
                Register
              </button>

              <p className='mt-8 text-xs font-light text-center text-gray-700'>
                Already have an account?{' '}
                <a href='/login' className='font-medium hover:underline'>
                  login
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
