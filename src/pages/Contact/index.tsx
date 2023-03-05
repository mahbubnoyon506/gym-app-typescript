import GlobalBtn from '../../shared/GlobalBtn';
import React from 'react';
import { useForm } from "react-hook-form";
import contactImage from '../../assets/ContactUsPageGraphic.png'
import evolveTex from '../../assets/EvolveText.png'

type FormValue = {
    name: string,
    email: string,
    message: string
}

const Contact = () => {
    const inputStyles = ` w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;

    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>();

    const onSubmit = async (data: FormValue) => {
        // e.preventDefault();
        console.log(data)
    };
    return (
        <section>
            <div className='px-5 md:px-10 lg:px-20 py-6 md:py-12 lg:py-28'>
                <div className='relative'>
                    <div className='pb-2 md:pb-4'>
                        <h3 className='text-lg md:text-xl lg:text-3xl font-extrabold'><span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE</h3>
                        <p className="my-5">
                            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                        </p>
                    </div>
                    <div className='md:flex justify-between items-start z-50'>
                        <form className='md:w-7/12 mb-5 md:mb-0' onSubmit={handleSubmit(onSubmit)}>
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
                        <div className=''>
                            <div>
                                <img src={contactImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='invisible md:visible absolute -right-10 -bottom-16 -z-10'>
                        <img src={evolveTex} alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;