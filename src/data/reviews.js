const reviews = [
    {
        id: 1,
        title: "Crash Landing on You",
        genres: ["Romance", "Drama", "Comedia"],
        summary: "Una heredera surcoreana aterriza en Corea del Norte tras un accidente de parapente y se enamora de un oficial norcoreano que la ayuda a esconderse y regresar a casa.",
        image: "/assets/portadas/Crash_landing.jpg",
        releaseDate: "2019-12-14",
        director: "Lee Jeong-hyo",
        writer: "Park Ji-eun",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Hyun Bin", image: "/cast/hyunbin.jpg" },
            { name: "Son Ye-jin", image: "/cast/sonyejin.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81159258"
        }
    },
    {
        id: 2,
        title: "Squid Game",
        genres: ["Suspenso", "Drama", "Supervivencia"],
        summary: "Un grupo de personas desesperadas arriesgan sus vidas para competir en juegos infantiles por un premio millonario en efectivo, pero perder tiene consecuencias mortales.",
        image: "/assets/portadas/squide_game.jpg",
        releaseDate: "2021-09-17",
        director: "Hwang Dong-hyuk",
        writer: "Hwang Dong-hyuk",
        episodes: 9,
        duration: "55 min",
        cast: [
            { name: "Lee Jung-jae", image: "/cast/leejungjae.jpg" },
            { name: "Park Hae-soo", image: "/cast/parkhaesoo.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81040344"
        }
    },
    {
        id: 3,
        title: "Itaewon Class",
        genres: ["Drama", "Romance", "Juvenil"],
        summary: "Un joven exconvicto abre un restaurante en Itaewon y lucha contra la adversidad para alcanzar el éxito, enfrentándose a una poderosa familia empresarial.",
        image: "/assets/portadas/itaewon.jpg",
        releaseDate: "2020-01-31",
        director: "Kim Sung-yoon",
        writer: "Jo Kwang-jin",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Park Seo-joon", image: "/cast/parkseojoon.jpg" },
            { name: "Kim Da-mi", image: "/cast/kimdami.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81193309"
        }
    },
    {
        id: 4,
        title: "Queen of Tears",
        genres: ["Romance", "Drama", "Comedia"],
        summary: "Una pareja de esposos, un hombre común y una heredera de un conglomerado, enfrentan una crisis matrimonial que los lleva a redescubrir su amor a través de desafíos y tragedias.",
        image: "/assets/portadas/QuuenOfTears.jpg",
        releaseDate: "2024-03-09",
        director: "Jang Young-woo",
        writer: "Park Ji-eun",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Kim Soo-hyun", image: "/cast/kimsoohyun.jpg" },
            { name: "Kim Ji-won", image: "/cast/kimjiwon.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81768423"
        }
    },
    {
        id: 5,
        title: "Lovely Runner",
        genres: ["Romance", "Fantasía", "Comedia"],
        summary: "Una fan viaja en el tiempo para salvar a su ídolo, un famoso cantante, de un destino trágico, desarrollando una conexión emocional mientras intenta cambiar el futuro.",
        image: "/assets/portadas/lovely.jpg",
        releaseDate: "2024-04-08",
        director: "Yoon Jong-ho",
        writer: "Lee Si-eun",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Byeon Woo-seok", image: "/cast/byeonwooseok.jpg" },
            { name: "Kim Hye-yoon", image: "/cast/kimhyeyoon.jpg" }
        ],
        platform: {
            name: "Viki",
            url: "https://www.viki.com/tv/40369c-lovely-runner"
        }
    },
    {
        id: 6,
        title: "A Shop for Killers",
        genres: ["Acción", "Suspenso", "Drama"],
        summary: "Tras la muerte de su tío, una joven descubre que él dirigía un negocio secreto de venta de armas, convirtiéndose en el blanco de asesinos mientras desentraña su pasado.",
        image: "/assets/portadas/AShop.jpg",
        releaseDate: "2024-01-17",
        director: "Lee Kwon",
        writer: "Ji Ho-jin",
        episodes: 8,
        duration: "50 min",
        cast: [
            { name: "Lee Dong-wook", image: "/cast/leedongwook.jpg" },
            { name: "Kim Hye-jun", image: "/cast/kimhyejun.jpg" }
        ],
        platform: {
            name: "Disney+",
            url: "https://www.disneyplus.com/series/a-shop-for-killers/6n0H0R7yVv69"
        }
    },
    {
        id: 7,
        title: "Jeongnyeon: The Star is Born",
        genres: ["Drama", "Histórico", "Música"],
        summary: "En la Corea de posguerra de los años 50, una joven prodigio vocal persigue su sueño de convertirse en una estrella del teatro tradicional, enfrentando rivalidades y desafíos personales.",
        image: "/assets/portadas/jeongnyeon.jpg",
        releaseDate: "2024-10-12",
        director: "Jung Ji-in",
        writer: "Choi Hyo-bi",
        episodes: 12,
        duration: "60 min",
        cast: [
            { name: "Kim Tae-ri", image: "/cast/kimtaeri.jpg" },
            { name: "Shin Ye-eun", image: "/cast/shinyeeun.jpg" }
        ],
        platform: {
            name: "Disney+",
            url: "https://www.disneyplus.com/series/jeongnyeon-the-star-is-born/3K9Y0Z2Z2Z2Z"
        }
    },
    {
        id: 8,
        title: "When Life Gives You Tangerines",
        genres: ["Romance", "Drama", "Vida cotidiana"],
        summary: "Una joven rebelde con sueños de ser poeta y un hombre reservado que la ama profundamente comparten una historia de amor que abarca tres etapas de sus vidas: infancia, juventud y madurez.",
        image: "/assets/portadas/When Life Gives You Tangerines.png",
        releaseDate: "2025-01-01",
        director: "Kwak Jae-yong",
        writer: "Kim Eun-hee",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "IU", image: "/cast/iu.jpg" },
            { name: "Park Bo-gum", image: "/cast/parkbogum.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81661497"
        }
    },
    {
        id: 9,
        title: "Hometown Cha-Cha-Cha",
        genres: ["Romance", "Comedia", "Vida cotidiana"],
        summary: "Una dentista de ciudad se muda a un pequeño pueblo costero y conoce a un hombre versátil que la ayuda a adaptarse, mientras surge un romance inesperado.",
        image: "/assets/portadas/Hometown Cha-Cha-Cha.jpg",
        releaseDate: "2021-08-28",
        director: "Yoo Je-won",
        writer: "Shin Ha-eun",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Shin Min-a", image: "/cast/shinmina.jpg" },
            { name: "Kim Seon-ho", image: "/cast/kimseonho.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81473182"
        }
    },
    {
        id: 10,
        title: "My Liberation Notes",
        genres: ["Drama", "Romance", "Vida cotidiana"],
        summary: "Tres hermanos buscan escapar de la monotonía de su vida rural y encuentran consuelo en un misterioso forastero que llega a su pueblo.",
        image: "/assets/portadas/My Liberation Notes.jpg",
        releaseDate: "2022-04-09",
        director: "Kim Suk-yoon",
        writer: "Park Hae-young",
        episodes: 16,
        duration: "60 min",
        cast: [
            { name: "Kim Ji-won", image: "/cast/kimjiwon.jpg" },
            { name: "Son Suk-ku", image: "/cast/sonsukku.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81568489"
        }
    },
    {
        id: 11,
        title: "Business Proposal",
        genres: ["Romance", "Comedia"],
        summary: "Una empleada se hace pasar por otra persona en una cita a ciegas con el CEO de su empresa, desencadenando una serie de malentendidos y un romance inesperado.",
        image: "/assets/portadas/Business Proposal.jpeg",
        releaseDate: "2022-02-28",
        director: "Park Seon-ho",
        writer: "Han Sul-hee",
        episodes: 12,
        duration: "60 min",
        cast: [
            { name: "Ahn Hyo-seop", image: "/cast/ahnhyoseop.jpg" },
            { name: "Kim Se-jeong", image: "/cast/kimsejeong.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81509409"
        }
    },
    {
        id: 12,
        title: "Alchemy of Souls",
        genres: ["Fantasía", "Romance", "Acción"],
        summary: "Una poderosa hechicera atrapada en el cuerpo de una joven ciega se encuentra con un noble que busca su ayuda para cambiar su destino, desatando una épica historia de amor y magia.",
        image: "/assets/portadas/Alchemy of Souls.jpg",
        releaseDate: "2022-06-18",
        director: "Park Joon-hwa",
        writer: "Hong Jung-eun",
        episodes: 20,
        duration: "75 min",
        cast: [
            { name: "Lee Jae-wook", image: "/cast/leejaewook.jpg" },
            { name: "Jung So-min", image: "/cast/jungsomin.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81517188"
        }
    },
    {
        id: 13,
        title: "Vincenzo",
        genres: ["Crimen", "Drama", "Comedia"],
        summary: "Un abogado italiano-coreano regresa a Corea del Sur y se une a una abogada para enfrentarse a un conglomerado corrupto, usando tácticas poco convencionales.",
        image: "/assets/portadas/Vincenzo.jpg",
        releaseDate: "2021-02-20",
        director: "Kim Hee-won",
        writer: "Park Jae-bum",
        episodes: 20,
        duration: "80 min",
        cast: [
            { name: "Song Joong-ki", image: "/cast/songjoongki.jpg" },
            { name: "Jeon Yeo-been", image: "/cast/jeonyeobeen.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81365087"
        }
    },
    {
        id: 14,
        title: "Semantic Error",
        genres: ["Romance", "Comedia", "BL"],
        summary: "Un estudiante de informática perfeccionista y un popular estudiante de diseño se ven obligados a trabajar juntos en un proyecto, desencadenando una atracción inesperada.",
        image: "/assets/portadas/Semantic Error.jpg",
        releaseDate: "2022-02-16",
        director: "Kim Soo-jung",
        writer: "J So-ri",
        episodes: 8,
        duration: "20 min",
        cast: [
            { name: "Park Seo-ham", image: "/cast/parkseoham.jpg" },
            { name: "Park Jae-chan", image: "/cast/parkjaechan.jpg" }
        ],
        platform: {
            name: "Viki",
            url: "https://www.viki.com/tv/38335c-semantic-error"
        }
    },
    {
        id: 15,
        title: "The Red Sleeve",
        genres: ["Histórico", "Romance", "Drama"],
        summary: "Una cortesana de palacio y un príncipe heredero desarrollan un amor profundo pero complicado, enfrentándose a las intrigas políticas y las normas de la dinastía Joseon.",
        image: "/assets/portadas/The Red Sleeve.jpg",
        releaseDate: "2021-11-12",
        director: "Jung Ji-in",
        writer: "Kang Mi-kang",
        episodes: 17,
        duration: "70 min",
        cast: [
            { name: "Lee Jun-ho", image: "/cast/leejunho.jpg" },
            { name: "Lee Se-young", image: "/cast/leeseyoung.jpg" }
        ],
        platform: {
            name: "Viki",
            url: "https://www.viki.com/tv/38760c-the-red-sleeve"
        }
    },
    {
        id: 16,
        title: "Moving",
        genres: ["Acción", "Ciencia ficción", "Drama"],
        summary: "Un grupo de adolescentes con superpoderes heredados de sus padres lucha por protegerse a sí mismos y a sus familias de una organización que los persigue.",
        image: "/assets/portadas/moving.jpg",
        releaseDate: "2023-08-09",
        director: "Park In-je",
        writer: "Kang Full",
        episodes: 20,
        duration: "45 min",
        cast: [
            { name: "Ryu Seung-ryong", image: "/cast/ryuseungryong.jpg" },
            { name: "Han Hyo-joo", image: "/cast/hanhyojoo.jpg" }
        ],
        platform: {
            name: "Disney+",
            url: "https://www.disneyplus.com/series/moving/5b0Z0Z0Z0Z0Z"
        }
    },
    {
        id: 17,
        title: "Destined With You",
        genres: ["Romance", "Fantasía", "Comedia"],
        summary: "Una abogada encuentra un libro antiguo que desata una maldición, obligándola a unirse a un hombre misterioso que guarda un secreto mágico para romper el hechizo.",
        image: "/assets/portadas/Destined_With_You.jpg",
        releaseDate: "2023-08-23",
        director: "Nam Ki-hoon",
        writer: "No Ji-sul",
        episodes: 16,
        duration: "65 min",
        cast: [
            { name: "Jo Bo-ah", image: "/cast/joboah.jpg" },
            { name: "Rowoon", image: "/cast/rowoon.jpg" }
        ],
        platform: {
            name: "TVING",
            url: "https://www.tving.com/contents/P001623873"
        }
    },
    {
        id: 18,
        title: "Twinkling Watermelon",
        genres: ["Fantasía", "Romance", "Juvenil"],
        summary: "Un joven con talento musical viaja en el tiempo a los años 90, donde conoce a sus padres adolescentes y descubre secretos que cambiarán su futuro.",
        image: "/assets/portadas/Twinkling Watermelon.jpg",
        releaseDate: "2023-09-25",
        director: "Son Jung-hyun",
        writer: "Jin Soo-wan",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Ryeoun", image: "/cast/ryeoun.jpg" },
            { name: "Choi Hyun-wook", image: "/cast/choihyunwook.jpg" }
        ],
        platform: {
            name: "Viki",
            url: "https://www.viki.com/tv/40210c-twinkling-watermelon"
        }
    }
];

export default reviews;