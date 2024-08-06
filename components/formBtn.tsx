'use client';

import { useFormStatus } from 'react-dom';

interface IFormBtn {
  text: string;
}

const FormBtn = ({ text }: IFormBtn) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className=' w-full py-3 text-white bg-black disabled:cursor-not-allowed disabled:bg-pink-400 disabled:text-black font-bold text-xl hover:bg-pink-400 transition-colors'
    >
      {pending ? 'LOADING' : text}
    </button>
  );
};
export default FormBtn;
