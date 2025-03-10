export const SkillComponent = ({title, desc, img, reverse}) => {
    return (
        <section className="flex justify-center items-center">
            <div className={`flex items-center h-full gap-4 w-full ${reverse ? "flex-row-reverse" : "flex-row"}`}>
                <div className="w-[75%] h-full bg-grayCustom rounded-3xl p-6">
                    <h2 className="font-bold text-2xl text-gray-900">{title}</h2>
                    <p className="text-md text-gray-900">{desc}</p>
                </div>

                <div className="w-[25%] h-full">
                    <img src={img} alt={title} className="w-full h-full rounded-3xl object-cover"/>
                </div>
            </div>
        </section>
    )
}