import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

function Contact({ isDarkMode }) {
  const [result, setResult] = React.useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '057a2739-fabf-4967-8837-fe364697d656');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]"
      style={{
        backgroundImage: isDarkMode ? 'none' : 'url("/footer-bg-color.png")',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-20 text-5xl font-Ovo"
      >
        Connect with me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-12 mt-5 mx-auto max-w-2xl font-Ovo"
      >
        I&apos;d love to hear from you! If you have any questions, comments or feedback, please use
        the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="flex flex-col gap-6 mt-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              type="name"
              placeholder="Enter your name"
              required
              name="name"
            />
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              required
              type="email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <motion.textarea
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            rows="6"
            required
            placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
            name="message"
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          >
            Submit
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.button>
          <p className="mt-4">{result}</p>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
