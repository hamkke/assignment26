'use server';
import { z } from 'zod';
const passwordRegex = /\d/;
const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
const checkEmail = (email: string) => email.includes('@zod.com');
const checkHasKorean = (username: string) => !hasKorean.test(username);
const formSchema = z.object({
  username: z
    .string()
    .min(5, '너무 짧아요. 5자 이상 10자 이하로 부탁해요')
    .max(10, '너무 길어요.  5자 이상 10자 이하로 부탁해요')
    .refine(checkHasKorean, '영어로 부탁해요'),
  email: z.string().email().refine(checkEmail, '@zod.com로 부탁해요'),
  password: z
    .string()
    .min(10, '너무 짧아요. 10자 이상으로 부탁해요')
    .regex(passwordRegex, '비밀번호에 숫자 넣어주세요'),
});

export const handleForm = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return {
      fieldErrors: result.error.flatten().fieldErrors,
      message: '',
    };
  }
  return {
    fieldErrors: {},
    message: '안녕하세요',
  };
};
