import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';
import { toast } from "react-toastify";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs
            .sendForm(
                "service_3anf0c6",
                "template_hcpg8g6",
                form.current,
                "lBzYxJOtqeh4fT9gu"
            )
            .then(
                (result) => {
                    if(result.text = "OK"){
                        toast.success('Your mail send')
                        e.target.user_name.value = ''
                        e.target.user_email.value = "";
                        e.target.message.value = "";
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section class="py-12">
            <h2 class="text-center text-5xl text-white py-12">Conatct me</h2>
            <form
                ref={form}
                onSubmit={sendEmail}
                class="container mx-auto w-full max-w-lg text-white"
            >
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name"
                        >
                            Full Name
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            name="user_name"
                            type="text"
                            placeholder="Jane"
                            required
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password"
                        >
                            E-mail
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="user_email"
                            type="email"
                            required
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            name=""
                        >
                            Message
                        </label>
                        <textarea
                            class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            id="message"
                            name="message"
                            required
                        ></textarea>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <input
                            class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            value="Send"
                        />
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </section>
    );
};

export default Contact;