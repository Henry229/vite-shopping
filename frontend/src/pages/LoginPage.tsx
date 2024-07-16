import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
  name: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = (data: FormData) => {
    const body = data;
    dispatchEvent(loginUser(body));
    reset();
  };

  return (
    <section className='flex flex-col justify-center mt-20 max-w-[400px] m-auto'>
      <div className='p-6 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl font-semibold text-center'>Login</h1>
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
                <span className='text-red-500'>{errors.email.message}</span>
              </div>
            )}
          </div>

          <div className='mb-2'>
            <label
              htmlFor='password'
              className='text-sm font-semibold text-gray-800'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
              {...register('password', userPassword)}
            />
            {errors?.password && (
              <div>
                <span className='text-red-500'>{errors.password.message}</span>
              </div>
            )}
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='w-full px-4 py-2 text-white duration-200 bg-black rounded-md hover:bg-gray-700'
            >
              로그인
            </button>
          </div>

          <p className='mt-8 text-xs font-light text-center text-gray-700'>
            아이디가 없다면?{' '}
            <a href='/register' className='font-medium hover:underline'>
              회원가입
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
