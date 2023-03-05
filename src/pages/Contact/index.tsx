import GlobalBtn from '../../shared/GlobalBtn';
import React from 'react';
import { useForm } from "react-hook-form";

type FormValue = {
    name: string,
    email: string,
    message: string
}

const Contact = () => {
    const inputStyles = ` w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;

    const {register,handleSubmit,formState: { errors }} = useForm<FormValue>();

    const onSubmit = async (data: FormValue) => {
            // e.preventDefault();
           console.log(data)
    };
    return (
        <section>
            <div className='px-5 md:px-10 lg:px-20 pt-6 md:pt-12 lg:pt-28'>
                <div>
                    <h3 className='text-lg md:text-xl lg:text-3xl font-extrabold'><span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE</h3>
                    <p className="my-5">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" &&
                                        "Max length is 100 char."}
                                </p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" &&
                                        "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}
                        </div>

                        <div className='mb-4'>
                            <textarea
                                className={inputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" &&
                                        "This field is required."}
                                    {errors.message.type === "maxLength" &&
                                        "Max length is 2000 char."}
                                </p>
                            )}
                        </div>

                        <button type="submit">
                            <GlobalBtn>SUBMIT</GlobalBtn>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;