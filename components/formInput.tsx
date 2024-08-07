interface IFormInput {
  type: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  name: string;
}

const FormInput = ({
  type,
  placeholder,
  required,
  errors = [],
  name,
}: IFormInput) => {
  return (
    <div className='flex flex-col gap-2'>
      <input
        className='bg-white w-full h-10 focus:outline-none ring-1 transition-shadow ring-black focus:ring-green-500 border-none placeholder:text-pink-400'
        type={type}
        placeholder={placeholder}
        required={required}
        name={name}
      />
      {errors.map((item, idx) => {
        return (
          <span key={idx} className='text-pink-400 text-2xl'>
            {item}
          </span>
        );
      })}
    </div>
  );
};
export default FormInput;
