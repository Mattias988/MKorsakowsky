export const SkillComponent = ({title, desc, img, reverse}) => {
    return (
        <section className="flex justify-center items-center">
            <div className={`flex items-center h-full gap-4 w-full ${reverse ? "flex-row-reverse" : "flex-row"}`}>
                <div className="w-[75%] bg-grayCustom border-8 h-full rounded-3xl p-4">
                    <h2 className="font-bold text-xl text-whiteMain">{title}</h2>
                    <p className="text-whiteMain">{desc}</p>
                </div>

                <div className="w-[25%] h-full">
                    <img src={img} alt={title} className="w-full h-full rounded-3xl object-cover"/>
                </div>
            </div>
        </section>
    )
}