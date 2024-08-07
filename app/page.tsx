'use client';

import FormBtn from '@/components/formBtn';
import FormInput from '@/components/formInput';
import { handleForm } from './action';
import { useFormState } from 'react-dom';

export default function Home() {
  const [state, action] = useFormState(handleForm, null);
  console.log(state);
  return (
    <div className='flex flex-col min-h-screen gap-10 py-8 px-6 bg-white items-center justify-center'>
      <h2 className='text-6xl'>✴︎✴︎✴︎✴︎✴︎✴︎✴︎✴︎</h2>
      <form className='flex flex-col gap-4 w-full' action={action}>
        <FormInput
          errors={state?.fieldErrors?.email}
          name='email'
          type='email'
          placeholder='Email'
          required
        />
        <FormInput
          errors={state?.fieldErrors?.username}
          name='username'
          type='text'
          placeholder='Username'
          required
        />
        <FormInput
          name='password'
          type='password'
          placeholder='Password'
          required
          errors={state?.fieldErrors?.password}
        />
        <FormBtn text='로그인' />
      </form>
      <h2 className='text-6xl'>{state?.message}</h2>
    </div>
  );
}
