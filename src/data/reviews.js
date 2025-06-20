const reviews = [
    {
        id: 1,
        title: "Crash Landing on You",
        genres: ["Romance", "Drama", "Comedia romántica"],
        summary: "Una heredera surcoreana aterriza en Corea del Norte tras un accidente de parapente y se enamora del capitán norcoreano que la esconde y la ayuda a volver a casa.",
        image: "/assets/portadas/Crash_landing.jpg",
        releaseDate: "2019-12-14",
        director: "Lee Jung‑hyo",
        writer: "Park Ji‑eun",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Hyun Bin", image: "/cast/hyunbin.jpg" },
            { name: "Son Ye‑jin", image: "/cast/sonyejin.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81159258"
        }
    },
    {
        id: 2,
        title: "Squid Game",
        genres: ["Suspenso", "Supervivencia", "Thriller", "Drama"],
        summary: "Personas endeudadas compiten en juegos infantiles mortales por un premio millonario en efectivo en Netflix, con consecuencias letales al fallar.",
        image: "/assets/portadas/squide_game.jpg",
        releaseDate: "2021-09-17",
        director: "Hwang Dong‑hyuk",
        writer: "Hwang Dong‑hyuk",
        episodes: 9,
        duration: "33–76 min",
        cast: [
            { name: "Lee Jung‑jae", image: "/cast/leejungjae.jpg" },
            { name: "Park Hae‑soo", image: "/cast/parkhaesoo.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81040344"
        }
    },
    {
        id: 3,
        title: "Itaewon Class",
        genres: ["Drama", "Juvenil", "Romance"],
        summary: "Un joven exconvicto abre un restaurante en Itaewon y lucha contra la adversidad para alcanzar el éxito, enfrentándose a una poderosa familia empresarial.",
        image: "/assets/portadas/itaewon.jpg",
        releaseDate: "2020-01-31",
        director: "Kim Sung‑yoon",
        writer: "Jo Kwang‑jin",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Park Seo‑joon", image: "/cast/parkseojoon.jpg" },
            { name: "Kim Da‑mi", image: "/cast/kimdami.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81193309"
        }
    },
    {
        id: 4,
        title: "Queen of Tears",
        genres: ["Romance", "Drama", "Comedia romántica"],
        summary: "Una pareja adinerada atraviesa una crisis matrimonial que los lleva a redescubrir el amor entre desafíos y tragedias.",
        image: "/assets/portadas/QuuenOfTears.jpg",
        releaseDate: "2024-03-09",
        director: "Jang Young‑woo",
        writer: "Park Ji‑eun",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Kim Soo‑hyun", image: "/cast/kimsoohyun.jpg" },
            { name: "Kim Ji‑won", image: "/cast/kimjiwon.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81768423"
        }
    },
    {
        "id": 5,
        "title": "Lovely Runner",
        "genres": ["Romance", "Fantasía", "Comedia"],
        "summary": "Una fan viaja en el tiempo para salvar a su ídolo, un famoso cantante, de un destino trágico, desarrollando una conexión emocional mientras intenta cambiar el futuro.",
        "image": "/assets/portadas/lovely.jpg",
        "releaseDate": "2024-04-08",
        "director": "Yoon Jong-ho",
        "writer": "Lee Si-eun",
        "episodes": 16,
        "duration": "70 min",
        "cast": [
            { "name": "Byeon Woo-seok", "image": "/cast/byeonwooseok.jpg" },
            { "name": "Kim Hye-yoon", "image": "/cast/kimhyeyoon.jpg" }
        ],
        "platform": {
            "name": "Viki",
            "url": "https://www.viki.com/tv/40369c-lovely-runner"
        }
    }
    ,
    {
        id: 6,
        title: "A Shop for Killers",
        genres: ["Acción", "Suspenso", "Drama"],
        summary: "Tras la muerte de su tío, una joven descubre que él dirigía un negocio secreto de armas, convirtiéndose en blanco de asesinos mientras desentraña su pasado.",
        image: "/assets/portadas/AShop.jpg",
        releaseDate: "2024-01-17",
        director: "Lee Kwon",
        writer: "Ji Ho‑jin",
        episodes: 8,
        duration: "50 min",
        cast: [
            { name: "Lee Dong‑wook", image: "/cast/leedongwook.jpg" },
            { name: "Kim Hye‑jun", image: "/cast/kimhyejun.jpg" }
        ],
        platform: {
            name: "Disney+",
            url: "https://www.disneyplus.com/series/a-shop-for-killers/6n0H0R7yVv69"
        }
    },
    {
        id: 7,
        title: "Jeongnyeon: The Star is Born",
        genres: ["Histórico", "Drama", "Música"],
        summary: "En la Corea de posguerra de los años 50, una joven prodigio vocal busca convertirse en estrella del teatro tradicional.",
        image: "/assets/portadas/jeongnyeon.jpg",
        releaseDate: "REQUIERE VALIDACIÓN",
        director: "REQUIERE VALIDACIÓN",
        writer: "REQUIERE VALIDACIÓN",
        episodes: 12,
        duration: "60 min",
        cast: [
            { name: "Kim Tae‑ri", image: "/cast/kimtaeri.jpg" },
            { name: "Shin Ye‑eun", image: "/cast/shinyeeun.jpg" }
        ],
        platform: {
            name: "Disney+",
            url: "REQUIERE VALIDACIÓN"
        }
    },
    {
        id: 8,
        title: "When Life Gives You Tangerines",
        genres: ["Romance", "Drama", "Vida cotidiana"],
        summary: "Una joven rebelde y un hombre reservado comparten una historia de amor que abarca tres etapas de sus vidas.",
        image: "/assets/portadas/When Life Gives You Tangerines.png",
        releaseDate: "2025-01-01",
        director: "Kwak Jae‑yong",
        writer: "Kim Eun‑hee",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "IU", image: "/cast/iu.jpg" },
            { name: "Park Bo‑gum", image: "/cast/parkbogum.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81661497"
        }
    },
    {
        id: 9,
        title: "Hometown Cha‑Cha‑Cha",
        genres: ["Romance", "Comedia", "Vida cotidiana"],
        summary: "Una dentista de ciudad se muda a un pueblo costero y conoce a un hombre versátil que la ayuda a adaptarse, mientras surge un romance inesperado.",
        image: "/assets/portadas/Hometown Cha-Cha-Cha.jpg",
        releaseDate: "2021-08-28",
        director: "Yoo Je‑won",
        writer: "Shin Ha‑eun",
        episodes: 16,
        duration: "70 min",
        cast: [
            { name: "Shin Min‑a", image: "/cast/shinmina.jpg" },
            { name: "Kim Seon‑ho", image: "/cast/kimseonho.jpg" }
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
        summary: "Tres hermanos buscan escapar de la monotonía de su vida rural y encuentran consuelo en un misterioso forastero.",
        image: "/assets/portadas/My Liberation Notes.jpg",
        releaseDate: "2022-04-09",
        director: "Kim Suk‑yoon",
        writer: "Park Hae‑young",
        episodes: 16,
        duration: "60 min",
        cast: [
            { name: "Kim Ji‑won", image: "/cast/kimjiwon.jpg" },
            { name: "Son Suk‑ku", image: "/cast/sonsukku.jpg" }
        ],
        platform: {
            name: "Netflix",
            url: "https://www.netflix.com/title/81568489"
        }
    },
    {
        "id": 11,
        "title": "Business Proposal",
        "genres": ["Romance", "Comedia"],
        "summary": "Una empleada se hace pasar por otra persona en una cita a ciegas con el CEO de su empresa, desencadenando una serie de malentendidos y un romance inesperado.",
        "image": "/assets/portadas/Business Proposal.jpeg",
        "releaseDate": "2022-02-28",
        "director": "Park Seon-ho",
        "writer": "Han Seol-hee",
        "episodes": 12,
        "duration": "60 min",
        "cast": [
            { "name": "Ahn Hyo-seop", "image": "/cast/ahnhyoseop.jpg" },
            { "name": "Kim Se-jeong", "image": "/cast/kimsejeong.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81509409"
        }
    },
    {
        "id": 12,
        "title": "Alchemy of Souls",
        "genres": ["Fantasía", "Romance", "Acción"],
        "summary": "Una poderosa hechicera atrapada en el cuerpo de una joven ciega se encuentra con un noble que busca su ayuda para cambiar su destino, desatando una épica historia de amor y magia.",
        "image": "/assets/portadas/Alchemy of Souls.jpg",
        "releaseDate": "2022-06-18",
        "director": "Park Joon-hwa",
        "writer": "Hong Jung-eun",
        "episodes": 30,
        "duration": "75 min",
        "cast": [
            { "name": "Lee Jae-wook", "image": "/cast/leejaewook.png" },
            { "name": "Jung So-min", "image": "/cast/jungsomin.png" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81517188"
        }
    },
    {
        "id": 13,
        "title": "Vincenzo",
        "genres": ["Crimen", "Drama", "Comedia"],
        "summary": "Un abogado italiano-coreano regresa a Corea del Sur y se une a una abogada para enfrentarse a un conglomerado corrupto, usando tácticas poco convencionales.",
        "image": "/assets/portadas/Vincenzo.jpg",
        "releaseDate": "2021-02-20",
        "director": "Kim Hee-won",
        "writer": "Park Jae-bum",
        "episodes": 20,
        "duration": "80 min",
        "cast": [
            { "name": "Song Joong-ki", "image": "/cast/songjoongki.jpg" },
            { "name": "Jeon Yeo-been", "image": "/cast/jeonyeobeen.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81365087"
        }
    },
    {
        "id": 14,
        "title": "Semantic Error",
        "genres": ["Romance", "Comedia", "BL"],
        "summary": "Un estudiante de informática perfeccionista y un popular estudiante de diseño se ven obligados a trabajar juntos en un proyecto, desencadenando una atracción inesperada.",
        "image": "/assets/portadas/Semantic Error.jpg",
        "releaseDate": "2022-02-16",
        "director": "Kim So-jung",
        "writer": "J So-ri",
        "episodes": 8,
        "duration": "20 min",
        "cast": [
            { "name": "Park Seo-ham", "image": "/cast/parkseoham.jpg" },
            { "name": "Park Jae-chan", "image": "/cast/parkjaechan.png" }
        ],
        "platform": {
            "name": "Viki",
            "url": "https://www.viki.com/tv/38335c-semantic-error"
        }
    },
    {
        "id": 15,
        "title": "The Red Sleeve",
        "genres": ["Histórico", "Romance", "Drama"],
        "summary": "Una cortesana de palacio y un príncipe heredero desarrollan un amor profundo pero complicado, enfrentándose a las intrigas políticas y las normas de la dinastía Joseon.",
        "image": "/assets/portadas/The Red Sleeve.jpg",
        "releaseDate": "2021-11-12",
        "director": "Jung Ji-in",
        "writer": "Kang Mi-kang",
        "episodes": 17,
        "duration": "70 min",
        "cast": [
            { "name": "Lee Jun-ho", "image": "/cast/leejunho.png" },
            { "name": "Lee Se-young", "image": "/cast/leeseyoung.jpg" }
        ],
        "platform": {
            "name": "Viki",
            "url": "https://www.viki.com/tv/38760c-the-red-sleeve"
        }
    },
    {
        "id": 16,
        "title": "Moving",
        "genres": ["Acción", "Ciencia ficción", "Drama"],
        "summary": "Un grupo de adolescentes con superpoderes heredados de sus padres lucha por protegerse a sí mismos y a sus familias de una organización que los persigue.",
        "image": "/assets/portadas/moving.jpg",
        "releaseDate": "2023-08-09",
        "director": "Park In-je",
        "writer": "Kang Full",
        "episodes": 20,
        "duration": "45 min",
        "cast": [
            { "name": "Ryu Seung-ryong", "image": "/cast/ryuseungryong.png" },
            { "name": "Han Hyo-joo", "image": "/cast/hanhyojoo.jpg" }
        ],
        "platform": {
            "name": "Disney+",
            "url": "https://www.disneyplus.com/series/moving/5b0Z0Z0Z0Z0Z"
        }
    },
    {
        "id": 17,
        "title": "Destined With You",
        "genres": ["Romance", "Fantasía", "Comedia"],
        "summary": "Una abogada encuentra un libro antiguo que desata una maldición, obligándola a unirse a un hombre misterioso que guarda un secreto mágico para romper el hechizo.",
        "image": "/assets/portadas/Destined_With_You.jpg",
        "releaseDate": "2023-08-23",
        "director": "Nam Ki-hoon",
        "writer": "No Ji-sul",
        "episodes": 16,
        "duration": "65 min",
        "cast": [
            { "name": "Jo Bo-ah", "image": "/cast/joboah.png" },
            { "name": "Rowoon", "image": "/cast/rowoon.jpg" }
        ],
        "platform": {
            "name": "TVING",
            "url": "https://www.tving.com/contents/P001623873"
        }
    },
    {
        "id": 18,
        "title": "Twinkling Watermelon",
        "genres": ["Fantasía", "Romance", "Juvenil"],
        "summary": "Un joven con talento musical viaja en el tiempo a los años 90, donde conoce a sus padres adolescentes y descubre secretos que cambiarán su futuro.",
        "image": "/assets/portadas/Twinkling Watermelon.jpg",
        "releaseDate": "2023-09-25",
        "director": "Son Jung-hyun",
        "writer": "Jin Soo-wan",
        "episodes": 16,
        "duration": "70 min",
        "cast": [
            { "name": "Ryeoun", "image": "/cast/ryeoun.jpg" },
            { "name": "Choi Hyun-wook", "image": "/cast/choihyunwook.jpg" }
        ],
        "platform": {
            "name": "Viki",
            "url": "https://www.viki.com/tv/40210c-twinkling-watermelon"
        }
    },
    {
        "id": 19,
        "title": "De vuelta al Samdal-ri",
        "genres": ["Drama", "Vida rural", "Familiar"],
        "summary": "Una exitosa ejecutiva regresa a su pueblo natal tras una crisis personal, redescubriendo sus raíces y el valor de las relaciones auténticas.",
        "image": "/assets/portadas/samdalri.jpg",
        "releaseDate": "2023-12-02",
        "director": "Cha Young-hoon",
        "writer": "Kwon Hye-joo",
        "episodes": 16,
        "duration": "70 min",
        "cast": [
            { "name": "Shin Hye-sun", "image": "/cast/shinhyesun.jpg" },
            { "name": "Ji Chang-wook", "image": "/cast/jichangwook.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81673245"
        }
    },
    {
        "id": 20,
        "title": "El naufragio de una diva",
        "genres": ["Misterio", "Thriller", "Drama"],
        "summary": "Cuando una famosa cantante desaparece durante un crucero de lujo, su manager debe resolver el misterio mientras enfrenta oscuros secretos de la industria del entretenimiento.",
        "image": "/assets/portadas/naufragiodiva.jpg",
        "releaseDate": "2024-05-18",
        "director": "Lee Eung-bok",
        "writer": "Jung Hyun-jung",
        "episodes": 12,
        "duration": "60 min",
        "cast": [
            { "name": "Seo Ye-ji", "image": "/cast/seoyeji.jpg" },
            { "name": "Kim Jae-wook", "image": "/cast/kimjaewook.jpg" }
        ],
        "platform": {
            "name": "Disney+",
            "url": "https://www.disneyplus.com/series/el-naufragio-de-una-diva/6X0X0X0X0X0X"
        }
    },
    {
        "id": 21,
        "title": "El amor vuelve a casa",
        "genres": ["Familiar"],
        "summary": "Tras el fracaso de su negocio, un hombre abandona a su familia y desaparece por 11 años. Sin embargo, regresa convertido en un acaudalado arrendador y provoca un turbulento reencuentro.",
        "image": "/assets/portadas/amorvuelve.jpg",
        "releaseDate": "2024-08-10",
        "director": "Kim Da-ye",
        "writer": "Kim Young-yoon",
        "episodes": 12,
        "duration": "60 min",
        "cast": [
            { "name": "Son Ye-jin", "image": "/cast/sonyejin.jpg" },
            { "name": "Jung Hae-in", "image": "/cast/junghaein.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81728394"
        }
    },
    {
        "id": 22,
        "title": "Doctor Slump",
        "genres": ["Comedia", "Drama médico", "Juvenil"],
        "summary": "Dos antiguos rivales del instituto se reencuentran como médicos en medio de sus respectivas crisis personales. Juntos, encontrarán consuelo, risas y tal vez una segunda oportunidad.",
        "image": "/assets/portadas/urgenciasexistenciales.jpg",
        "releaseDate": "2024-01-27",
        "director": "Oh Hyun-jong",
        "writer": "Baek Sun-woo",
        "episodes": 16,
        "duration": "60 min",
        "cast": [
            { "name": "Park Hyung-sik", "image": "/cast/parkhyungsik.jpg" },
            { "name": "Park Shin-hye", "image": "/cast/parkshinhye.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81678205"
        }
    },
    {
        "id": 23,
        "title": "Woo, una abogada extraordinaria",
        "genres": ["Drama legal", "Comedia", "Drama"],
        "summary": "Una joven abogada con trastorno del espectro autista demuestra que su mente única es su mayor fortaleza en los tribunales.",
        "image": "/assets/portadas/wooabogada.jpg",
        "releaseDate": "2022-06-29",
        "director": "Yoo In-sik",
        "writer": "Moon Ji-won",
        "episodes": 16,
        "duration": "70 min",
        "cast": [
            { "name": "Park Eun-bin", "image": "/cast/parkeunbin.jpg" },
            { "name": "Kang Tae-oh", "image": "/cast/kangtaeoh.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81518991"
        }
    },
    {
        "id": 24,
        "title": "El sabor de lo nuestro",
        "originalTitle": "Tastefully Yours",
        "genres": ["Comedia romántica", "Drama", "Gastronomía"],
        "summary": "El heredero de una empresa alimentaria y una chef local se enamoran mientras gestionan un restaurante en Jeonju, superando sus diferencias y prioridades.",
        "image": "/assets/portadas/sabornuestro.jpg",
        "releaseDate": "2025-05-12",
        "director": "Park Dan-hee",
        "writer": "Jung Soo-yoon",
        "episodes": 10,
        "duration": "60 min",
        "cast": [
            { "name": "Kang Ha-neul", "image": "/cast/kanghaneul.jpg" },
            { "name": "Go Min‑si", "image": "/cast/gomin‑si.jpg" },
            { "name": "Kim Shin‑rok", "image": "/cast/kimshin‑rok.jpg" },
            { "name": "Yoo Su‑bin", "image": "/cast/yoosubin.jpg" },
            { "name": "Hong Hwa‑yeon", "image": "/cast/honghwa‑yeon.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81971172"
        }
    }
    ,
    {
        "id": 25,
        "title": "Amor en el laboratorio",
        "originalTitle": "The Potato Lab",
        "genres": ["Romance", "Comedia", "Comedia romántica"],
        "summary": "La vida de una investigadora obsesionada con las papas da un giro cuando un director estricto llega a su laboratorio, demostrando que el amor puede brotar en los lugares más inesperados.",
        "image": "/assets/portadas/amorlaboratorio.jpg",
        "releaseDate": "2025-03-01",
        "director": "Kang Il-soo",
        "writer": "Kim Ho-soo",
        "episodes": 12,
        "duration": "70 min",
        "cast": [
            { "name": "Lee Sun-bin", "image": "/cast/leesunbin.jpg" },
            { "name": "Kang Tae-oh", "image": "/cast/kangtaeoh.jpg" },
            { "name": "Lee Hak-ju", "image": "/cast/leehakju.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81989515"
        }
    }
    ,
    {
        "id": 26,
        "title": "Aquel año nuestro",
        "genres": ["Romance", "Drama", "Juvenil"],
        "summary": "Dos exnovios se reencuentran como adultos cuando son asignados para trabajar juntos en un proyecto, reviviendo recuerdos de su relación adolescente.",
        "image": "/assets/portadas/aquelañonuestro.jpg",
        "releaseDate": "2021-12-06",
        "director": "Kim Yoon-jin",
        "writer": "Lee Na-eun",
        "episodes": 16,
        "duration": "70 min",
        "cast": [
            { "name": "Kim Da-mi", "image": "/cast/kimdami.jpg" },
            { "name": "Choi Woo-shik", "image": "/cast/choiwooshik.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81437094"
        }
    },
    {
        "id": 27,
        "title": "El amor es la meta",
        "originalTitle": "Run On",
        "genres": ["Deportes", "Romance", "Drama"],
        "summary": "Un exvelocista convertido en agente deportivo se enamora de una traductora de subtítulos, buscando superar las barreras emocionales y descubrir un nuevo ritmo en la vida.",
        "image": "/assets/portadas/amormeta.jpg",
        "releaseDate": "2020-12-16",
        "director": "Oh Hyun-jong",
        "writer": "Park Si-hyun, Lee Jae-hoon",
        "episodes": 16,
        "duration": "60 min",
        "cast": [
            { "name": "Im Si-wan", "image": "/cast/imsiwan.jpg" },
            { "name": "Shin Se-kyung", "image": "/cast/shinsekyung.jpg" },
            { "name": "Choi Soo-young", "image": "/cast/choisooyoung.jpg" },
            { "name": "Kang Tae-oh", "image": "/cast/kangtaeoh.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81318872"
        }
    }
    ,
    {
        "id": 28,
        "title": "Un amor loco",
        "originalTitle": "Mad for Each Other",
        "genres": ["Comedia romántica", "Drama"],
        "summary": "Un detective con problemas de ira y una mujer con ansiedad descubren que son vecinos y pacientes del mismo psiquiatra; mientras se ayudan mutuamente, emerge un inesperado romance.",
        "image": "/assets/portadas/amorloco.jpg",
        "releaseDate": "2021-05-24",
        "director": "Lee Tae-gon",
        "writer": "Lee Tae-gon, A Gyeong",
        "episodes": 13,
        "duration": "60 min",
        "cast": [
            { "name": "Jung Woo", "image": "/cast/jungwoo.jpg" },
            { "name": "Oh Yeon-seo", "image": "/cast/ohyeonseo.jpg" },
            { "name": "Baek Ji-won", "image": "/cast/baekjiwon.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81430301"
        }
    },
    {
        "id": 29,
        "title": "El peso del amor",
        "originalTitle": "Oh My Venus",
        "genres": ["Romance", "Drama", "Comedia"],
        "summary": "Una abogada famosa de su época escolar, que ganó peso con los años, contrata a un entrenador personal para recuperar su salud; juntos enfrentan inseguridades y se enamoran.",
        "image": "/assets/portadas/pesoamor.jpg",
        "releaseDate": "2015-11-16",
        "director": "Kim Hyoung-seok",
        "writer": "Baek Mi-kyung",
        "episodes": 16,
        "duration": "60 min",
        "cast": [
            { "name": "So Ji-sub", "image": "/cast/sojisub.png" },
            { "name": "Shin Min-a", "image": "/cast/shinmina.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/80055200"
        }
    }
    ,
    {
        "id": 30,
        "title": "Las inclemencias del amor",
        "originalTitle": "Forecasting Love and Weather",
        "genres": ["Comedia romántica", "Drama"],
        "summary": "Una meteoróloga meticulosa y un meteorólogo espontáneo descubren amor y conflictos mientras trabajan en el Servicio Meteorológico Nacional de Corea.",
        "image": "/assets/portadas/inclemenciasamor.jpg",
        "releaseDate": "2022-02-12",
        "director": "Cha Young-hoon",
        "writer": "Kang Eun-kyung",
        "episodes": 16,
        "duration": "60–72 min",
        "cast": [
            { "name": "Park Min-young", "image": "/cast/parkminyoung.jpg" },
            { "name": "Song Kang", "image": "/cast/songkang.jpg" },
            { "name": "Yoon Park", "image": "/cast/yoonpark.jpg" },
            { "name": "Yura", "image": "/cast/yura.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81572781"
        }
    },
    {
        "id": 31,
        "title": "Érase un amor rural",
        "originalTitle": "Once Upon a Small Town",
        "genres": ["Romance rural", "Comedia romántica"],
        "summary": "Un veterinario de Seúl se muda a un tranquilo pueblo y se enamora de una oficial de policía local con un secreto.",
        "image": "/assets/portadas/amorrural.jpg",
        "releaseDate": "2022-09-05",
        "director": "Kwon Seok-jang",
        "writer": "Baek Eun-kyeong",
        "episodes": 12,
        "duration": "32–40 min",
        "cast": [
            { "name": "Park Soo-young", "image": "/cast/parksooyoung.jpg" },
            { "name": "Choo Young-woo", "image": "/cast/chooyoungwoo.jpg" },
            { "name": "Baek Sung-chul", "image": "/cast/baeksungcheol.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81612967"
        }
    },
    {
        "id": 32,
        "title": "Ella nunca lo sabría",
        "originalTitle": "She Would Never Know",
        "genres": ["Romance", "Drama de oficina"],
        "summary": "Song‑ah, una marketer en una compañía de cosméticos, descubre que su novio la engaña; entonces su joven colega Hyun‑seung, enamorado en secreto, aparece para apoyarla y su relación evoluciona.",
        "image": "/assets/portadas/ellanuncasabria.jpg",
        "releaseDate": "2021-01-18",
        "director": "Lee Dong‑yoon",
        "writer": "Chae Yoon",
        "episodes": 16,
        "duration": "60–70 min",
        "cast": [
            { "name": "Won Jin‑ah", "image": "/cast/wonjinah.jpg" },
            { "name": "Rowoon", "image": "/cast/rowoon.jpg" },
            { "name": "Lee Hyun‑wook", "image": "/cast/leehyunwook.jpg" },
            { "name": "Lee Joo‑bin", "image": "/cast/leajoobin.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81394495"
        }
    },
    {
        "id": 33,
        "title": "Marriage Contract",
        "genres": ["Melodrama", "Romance", "Familiar"],
        "summary": "Un empresario adinerado y una madre soltera en dificultades firman un contrato de matrimonio temporal que se complica cuando desarrollan sentimientos reales.",
        "image": "/assets/portadas/marriagecontract.jpg",
        "releaseDate": "2016-03-05",
        "director": "Kim Jin-min",
        "writer": "Jung Yoo-kyung",
        "episodes": 16,
        "duration": "60 min",
        "cast": [
            { "name": "Lee Seo-jin", "image": "/cast/leeseojin.jpg" },
            { "name": "Uee", "image": "/cast/uee.jpg" }
        ],
        "platform": {
            "name": "Viki",
            "url": "https://www.viki.com/tv/28655c-marriage-contract"
        }
    },
    {
        "id": 34,
        "title": "Manual para residentes",
        "originalTitle": "Resident Playbook",
        "genres": ["Drama médico", "Comedia dramática"],
        "summary": "Un grupo de jóvenes residentes de obstetricia y ginecología enfrenta los desafíos laborales y personales durante su primer año en el hospital, dentro del universo de *Hospital Playlist*.",
        "image": "/assets/portadas/manualresidentes.jpg",
        "releaseDate": "2025-04-12",
        "director": "Lee Min-soo",
        "writer": "Kim Song-hee",
        "episodes": 12,
        "duration": "70–90 min",
        "cast": [
            { "name": "Go Youn-jung", "image": "/cast/goyounjung.jpg" },
            { "name": "Shin Si-ah", "image": "/cast/shinsiha.jpg" },
            { "name": "Han Ye-ji", "image": "/cast/hanyeji.jpeg" },
            { "name": "Kang Yoo-seok", "image": "/cast/kangyooseok.jpg" },
            { "name": "Jung Joon-won", "image": "/cast/jungjoonwon.jpeg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81739042"
        }
    },
    {
        "id": 35,
        "title": "Si las estrellas hablaran",
        "originalTitle": "When the Stars Gossip",
        "genres": ["Ciencia ficción", "Comedia romántica", "Drama"],
        "summary": "Una astronauta y un turista espacial enamoran en una estación espacial, desafiando sus mundos opuestos.",
        "image": "/assets/portadas/estrellashablaran.jpg",
        "releaseDate": "2025-01-04",
        "director": "Park Shin-woo",
        "writer": "Seo Sook-hyang",
        "episodes": 16,
        "duration": "70 min",
        "cast": [
            { "name": "Lee Min-ho", "image": "/cast/leeminho.jpg" },
            { "name": "Gong Hyo-jin", "image": "/cast/gonghyojin.jpg" },
            { "name": "Oh Jung-se", "image": "/cast/ohjungse.jpg" },
            { "name": "Han Ji-eun", "image": "/cast/hanjieun.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81796543"
        }
    },
    {
        "id": 36,
        "title": "Fatalidad a tu servicio",
        "genres": ["Fantasía oscura", "Romance", "Drama"],
        "summary": "Una mujer que sobrevivió milagrosamente a un accidente descubre que su salvador es en realidad un ángel de la muerte, iniciando una peligrosa relación.",
        "image": "/assets/portadas/fatalidadservicio.jpg",
        "releaseDate": "2021-05-10",
        "director": "Kwak Jung-hwan",
        "writer": "Noh Ji-seol",
        "episodes": 16,
        "duration": "70 min",
        "cast": [
            { "name": "Seo In-guk", "image": "/cast/seoinguk.jpg" },
            { "name": "Park Bo-young", "image": "/cast/parkboyoung.jpg" }
        ],
        "platform": {
            "name": "Viki",
            "url": "https://www.viki.com/tv/37345c-fatalidad-a-tu-servicio"
        }
    },
    {
        "id": 37,
        "title": "Batalla de amor",
        "originalTitle": "연애대전 (Love to Hate You)",
        "genres": ["Romance", "Comedia"],
        "summary": "Una abogada que no soporta perder frente a los hombres y un actor que desconfía de las mujeres se enfrentan en una “guerra” romántica, donde pasar del odio al amor es cuestión de tiempo.",
        "image": "/assets/portadas/batallaamor.jpg",
        "releaseDate": "2023-02-10",
        "director": "Kim Jung-kwon",
        "writer": "Choi Soo-young",
        "episodes": 10,
        "duration": "49–56 min",
        "cast": [
            { "name": "Kim Ok-bin", "image": "/cast/kimokbin.jpg" },
            { "name": "Yoo Tae-o", "image": "/cast/yootaeeo.jpg" },
            { "name": "Kim Ji-hoon", "image": "/cast/kimjihoon.jpg" },
            { "name": "Ko Won-hee", "image": "/cast/kowonhee.jpg" }
        ],
        "platform": {
            "name": "Netflix",
            "url": "https://www.netflix.com/title/81463556"
        }


    }

];

export default reviews;