import { motion } from "framer-motion";

export const SkillComponent = ({ title, desc, img, reverse }) => {
    return (
        <section className="flex flex-col sm:flex-row justify-center items-center max-w-4xl md:max-w-full gap-6 text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, x: reverse ? 200 : -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-[75%] lg:w-full lg:h-full bg-gray-100 rounded-3xl p-6"
            >
                <h2 className="font-bold text-sm sm:text-lg  text-gray-900">{title}</h2>
                <p className="text-xs sm:text-md lg:text-lg text-gray-900">{desc}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: reverse ? -200 : 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="invisible sm:visible sm:w-full sm:h-full md:w-3/4 lg:h-full overflow-hidden"
            >
                <img src={img} alt={title} className="w-full h-full rounded-3xl object-cover" />
            </motion.div>
        </section>
    );
};
