const placeInfo = {
    name: "Cueva de la Virgen",
    type: "Rincón Histórico de Terque",
    description: "Un fascinante lugar de peregrinación que marcó la historia de Terque entre 1955 y 1956. La cueva fue testigo de la supuesta aparición de la Virgen, un acontecimiento que atrajo a miles de peregrinos desde la capital, la cuenca del Andarax y diversas partes de España, convirtiéndose en un notable fenómeno sociológico de la época.",
    location: "Terque, Almería",
    image: "/imagen-cueva-virgen.webp",
    url: "https://www.google.com/search?01d7d1da4f3739f4&kgmid=/g/11vq8_3pk1&q=Cueva+de+La+Virgen&shndl=30&shem=lsptbl1,shrtsdl&source=sh/x/loc/act/m1/2&kgs=75547750140a45fd&utm_source=lsptbl1,shrtsdl,sh/x/loc/act/m1/2"
};

export default function PlacesOfInterest() {
    return (
        <div className="w-full max-w-[450px] relative h-[600px] rounded-2xl overflow-hidden group hover-lift shadow-lg hover:shadow-2xl transition-all duration-500">
            <img 
                src={placeInfo.image} 
                alt={placeInfo.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-[#FF8833] text-2xl mb-2 drop-shadow-lg">{placeInfo.name}</h3>
                            <span className="text-base text-white/90 block mb-3 font-medium">{placeInfo.type}</span>
                        </div>
                        <p className="text-sm text-white leading-relaxed mb-4 line-clamp-4">{placeInfo.description}</p>
                        <div className="flex items-center text-white/80 text-sm mb-4">
                            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{placeInfo.location}</span>
                        </div>
                        <a 
                            href={placeInfo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-[#FF8833] text-white px-6 py-3 rounded-xl hover:bg-[#ff7711] transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Ver más información
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
