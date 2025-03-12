import { motion } from "framer-motion";

export const SkillComponent = ({ title, desc, img, reverse }) => {
    return (
        <section className="flex justify-center items-center">
            <div className={`flex items-center h-full gap-4 w-full ${reverse ? "flex-row-reverse" : "flex-row"}`}>
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 200 : -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-[75%] h-full bg-grayCustom rounded-3xl p-6"
                >
                    <h2 className="font-bold text-2xl text-gray-900">{title}</h2>
                    <p className="text-md text-gray-900">{desc}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: reverse ? -200 : 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-[25%] h-full overflow-hidden"
                >
                    <img src={img} alt={title} className="w-full h-full rounded-3xl object-cover"/>
                </motion.div>
            </div>
        </section>
    );
};
