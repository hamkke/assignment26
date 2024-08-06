'use server';

export const handleForm = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return formData.get('password') === '12345'
    ? { error: '', message: '안녕하세요' }
    : { error: '땡', message: '' };
};
