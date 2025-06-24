// ========================================================================= //
// ---------------------- WEBSITE CONTENT MANAGEMENT ----------------------- //
// ========================================================================= //
// Este es tu "CMS". Edita el texto dentro de las comillas para cambiar el
// contenido de tu sitio web. ¡No necesitas tocar el archivo HTML!

const siteContent = {
    // ---- Navigation Menu ----
    navLinks: [
        { href: "#hero", text: "Inicio" },
        { href: "#philosophy", text: "Filosofía" },
        { href: "#programs", text: "Programas" },
        { href: "#instructors", text: "Instructor" },
        { href: "#blog", text: "Blog" },
        { href: "#contact", text: "Contacto" }
    ],

    // ---- Hero Section Slider ----
    heroSlides: [
        {
            line1: "Descubre tu Potencial",
            line2: "Jiu-Jitsu en Lo Barnechea",
            paragraph: "Somos la academia especialista en Jiu-Jitsu Brasileño en Lo Barnechea. Únete a una comunidad forjada con respeto, disciplina y pasión.",
            button1_text: "Reserva tu Clase Gratis",
            button1_link: "#contact",
            button2_text: "Ver Programas",
            button2_link: "#programs"
        },
        {
            line1: "Forja Cuerpo y Mente",
            line2: "Descubre tu Poder",
            paragraph: "El Jiu-Jitsu transforma. Desarrolla disciplina, confianza y una fuerza que no conocías. Clases para todas las edades y niveles.",
            button1_text: "Agenda tu Clase Gratis",
            button1_link: "#contact",
            button2_text: "Ver Beneficios",
            button2_link: "#benefits"
        },
        {
            line1: "Ambiente de Respeto",
            line2: "Crece con Nosotros",
            paragraph: "En Raion BJJ encontrarás más que un gimnasio: una familia. Apoyo, motivación y el mejor entrenamiento de Jiu-Jitsu.",
            button1_text: "Conoce al Instructor",
            button1_link: "#instructors",
            button2_text: "Ver Testimonios",
            button2_link: "#testimonials"
        }
    ],

    // ---- Philosophy Section ----
    philosophy: {
        title: "Nuestra Filosofía",
        subtitle: "Más que un deporte, una forma de vida.",
        p1: "En Raion BJJ, concebimos el Jiu-Jitsu no solo como un deporte, sino como un sendero de profunda transformación personal. Nuestro nombre, \"Raion\" – león en japonés – simboliza la fuerza, el liderazgo y el espíritu indomable que cohesiona a nuestra comunidad. Fieles a nuestra esencia, no avanzamos en solitario: **somos una manada que se impulsa, se sostiene y evoluciona en conjunto.**",
        p2: "Nuestra filosofía se erige sobre tres pilares fundamentales:",
        p3: "En Raion BJJ, forjamos guerreros de carácter resiliente, preparados para los desafíos tanto dentro como fuera del tatami. Te invitamos a unirte a nuestra Manada y a liberar el león que reside en ti.",
        pillars: [
            { title: "🧠 Disciplina y Desarrollo Personal", description: "El tatami es nuestro crisol: un reflejo de la vida donde aprendemos a caer con dignidad y a levantarnos con renovada determinación. Cada movimiento esculpe el cuerpo, serena la mente y templa el carácter." },
            { title: "💪 Superación a través del Esfuerzo", description: "Principiante o avanzado, en Raion BJJ celebramos tu entrega y actitud. La verdadera superación nace de la constancia y el coraje para enfrentar cada desafío, puliendo tu espíritu con cada intento." },
            { title: "🤝 Comunidad y Respeto", description: "Desde el instante en que cruzas nuestra puerta, te conviertes en parte de la manada. Fomentamos un santuario de respeto, inclusión y colaboración, vital para el crecimiento de todos nuestros miembros." }
        ]
    },

    // ---- Benefits Section ----
    benefits: {
        title: "Transforma tu Cuerpo y Mente",
        subtitle: "Descubre cómo el Jiu-Jitsu impacta positivamente en cada área de tu vida.",
        items: [
            { icon: "img/1.png", title: "Entrenamiento de Elite", description: "Aprende de un instructor altamente capacitado con técnicas de linaje comprobado." },
            { icon: "img/2.png", title: "Ambiente Inclusivo", description: "Disfruta de un entorno seguro y motivador donde cada miembro de la manada es valorado." },
            { icon: "img/4.png", title: "Desarrollo Integral", description: "Fortalece el cuerpo, serena la mente y adquiere una confianza inquebrantable." },
            { icon: "img/3.png", title: "Instalaciones Modernas", description: "Entrena en W Fitness La Dehesa, un espacio equipado para tu confort y desarrollo." }
        ]
    },

    // ---- Video Section ----
    video: {
        title: "Conoce Nuestra Energía",
        subtitle: "Un vistazo a la disciplina y camaradería en Raion BJJ.",
        cta_button_text: "¡Vive la experiencia! Agenda tu clase gratis"
    },

    // ---- Programs Section ----
    programs: {
        title: "Programas Para Todos los Niveles",
        subtitle: "Clases diseñadas para niños, jóvenes y adultos, adaptadas a cada necesidad y objetivo.",
        cards: [
            { image: "img/NiñosGrupal.png", title: "BJJ para Niños (\"Raion Cubs\")", description: "Un programa enfocado en construir disciplina, confianza y técnicas anti-bullying en un entorno divertido y seguro. El mejor regalo para su desarrollo.", button_text: "Consultar por clases", button_link: "#contact" },
            { image: "img/juvenil2.png", title: "BJJ para Principiantes / Juvenil", description: "¿Nuevo en el tatami? Te enseñaremos las bases del Jiu-Jitsu en un ambiente acogedor. Ideal para jóvenes que buscan un nuevo desafío.", button_text: "Empezar a entrenar", button_link: "#contact" },
            { image: "img/Adulto3.jpeg", title: "BJJ Adultos / Competición", description: "Clases de alto nivel para adultos que buscan perfeccionar su técnica, mejorar su estado físico y prepararse para competir al más alto nivel.", button_text: "Ver Horarios", button_link: "#schedule" }
        ]
    },
    
    // ---- Schedule Section ----
    schedule: {
        title: "Nuestros Horarios",
        subtitle: "Encuentra el momento perfecto para unirte a la manada.",
        cta_title: "¿Listo para el Desafío?",
        cta_p1: "Tu viaje en el Jiu-Jitsu empieza con el primer paso. ¡Te esperamos para tu clase de prueba gratuita!",
        cta_button_text: "¡Reserva Tu Clase Gratis!"
    },

    // ---- Instructor Section ----
    instructor: {
        title: "Conoce al Líder de la Manada",
        subtitle: "La calidad y experiencia de nuestro instructor es nuestra mayor fortaleza.",
        name: "Prof. Pablo León",
        belt: "Cinturón Negro, Especialista en BJJ",
        bio1: "El Profesor Pablo León, cinturón negro con más de una década de dedicación al Brazilian Jiu-Jitsu, es un especialista consumado con una sólida formación que abarca diversas artes marciales.",
        bio2: "Su extensa trayectoria, forjada en prestigiosas academias, le permite impartir una instrucción de élite. El Profesor León cultiva un ambiente de riguroso respeto y constante superación, liderando Raion BJJ – orgullosa filial de Focus Academy – con la firme misión de guiar a cada estudiante en el descubrimiento y desarrollo de su máximo potencial.",
        bio3_label: "Filosofía de Enseñanza:",
        bio3_text: "\"Mi objetivo es crear un ambiente donde la técnica se perfeccione a través de la repetición inteligente y la camaradería. Cada estudiante es un proyecto único, y mi pasión es ayudarles a descubrir su propio Jiu-Jitsu.\""
    },

    // ---- Testimonials Section ----
    testimonials: {
        title: "La Experiencia de Nuestra Manada",
        subtitle: "Nuestros estudiantes son nuestro mayor orgullo.",
        reviews: [
            { quote: "Entrenar en Raion ha sido transformador. Cada clase me motiva a ser mejor.", author: "– Francisco Aracena" },
            { quote: "Raion no es solo una academia, es un lugar donde se forma carácter, disciplina y comunidad.", author: "– Matías Errázuriz" },
            { quote: "Desde que llegué a Raion, encontré respeto, desafío y camaradería. Aquí se crece.", author: "– Max O'krey" },
            { quote: "El nivel técnico es altísimo y el ambiente es insuperable.", author: "– Nicolás Castillo" },
            { quote: "Mi hijo solía ser tímido, pero ahora se nota más seguro y feliz.", author: "– Jorge Hernández, padre" },
            { quote: "Desde que mi hija comenzó en Raion, su confianza ha crecido muchísimo.", author: "– María Gómez, madre" }
        ]
    },

    // ---- Blog Section ----
    blog: {
        title: "Desde Nuestro Tatami: El Blog de Raion",
        subtitle: "Consejos, historias y reflexiones para potenciar tu camino en el Jiu-Jitsu.",
        posts: [
            {
                image: "img/firstDay.png",
                title: "Tu Primera Clase de BJJ: Qué Esperar y Cómo Sobrevivir",
                summary: "Dar el primer paso puede ser intimidante. Te contamos todo lo que necesitas saber para que tu primera experiencia en el tatami sea increíble.",
                full_content: `
                    <h4>Todo listo para empezar</h4>
                    <p>¡Felicitaciones por decidir empezar tu viaje en el Jiu-Jitsu! La primera clase siempre genera nervios y preguntas, y estamos aquí para resolverlas. Lo más importante es venir con la mente abierta y ganas de aprender. No necesitas experiencia previa ni una condición física de atleta; eso se construye aquí, en el tatami.</p>
                    <h4>¿Qué debo llevar?</h4>
                    <p>Para tu primera clase, solo necesitas ropa deportiva cómoda sin cierres ni bolsillos (para evitar enganches), como shorts y una polera. No te preocupes por el Gi (el uniforme), nosotros te podemos facilitar uno para tu clase de prueba. ¡Ah! Y no olvides una botella de agua y una toalla.</p>
                    <h4>El Ambiente</h4>
                    <p>En Raion BJJ, serás recibido por el profesor y por tus nuevos compañeros. El ambiente es de respeto y colaboración. Te asignaremos un compañero con más experiencia para que te guíe durante los ejercicios. Recuerda, todos fuimos cinturones blancos alguna vez. ¡No dudes en preguntar!</p>
                `
            },
            {
                image: "img/niñosBlog.png",
                title: "Jiu-Jitsu para Niños: Más que un Deporte, una Escuela de Vida",
                summary: "Descubre por qué el BJJ es una de las mejores herramientas para el desarrollo de la confianza, disciplina y habilidades anti-bullying en los niños.",
                full_content: `
                    <h4>Beneficios que van más allá del Tatami</h4>
                    <p>Inscribir a un niño en Jiu-Jitsu es una inversión en su carácter. A través de juegos y técnicas adaptadas a su edad, los niños aprenden valores fundamentales que les servirán toda la vida.</p>
                    <h4>Confianza Inquebrantable</h4>
                    <p>El BJJ enseña a los niños a manejar situaciones de presión física y mental en un entorno controlado. Superar pequeños desafíos en clase se traduce directamente en una mayor autoconfianza para enfrentar los retos del día a día, como hablar en público o defender sus ideas.</p>
                    <h4>La Mejor Herramienta Anti-Bullying</h4>
                    <p>A diferencia de otras artes marciales, el Jiu-Jitsu se basa en el control y la inmovilización, no en golpes. Esto enseña a los niños a defenderse de manera efectiva sin necesidad de ser agresivos, dándoles la seguridad para evitar y de-escalar conflictos. Saben que tienen las herramientas para protegerse, y esa confianza es su mejor escudo.</p>
                `
            },
            {
                image: "img/senior.jpg",
                title: "5 Mitos Comunes sobre el Brazilian Jiu-Jitsu (y la Verdad)",
                summary: "\"¿Necesito ser fuerte?\" \"¿Es solo para hombres?\" Desmentimos los mitos más comunes que impiden a muchos descubrir la belleza de este arte.",
                full_content: `
                    <h4>Mito 1: "Necesito estar en forma para empezar."</h4>
                    <p><strong>Verdad:</strong> El Jiu-Jitsu es lo que te pondrá en forma. Vienes a entrenar para mejorar tu condición física, no necesitas tenerla antes de empezar. Adaptamos la intensidad a cada persona.</p>
                    <h4>Mito 2: "Es demasiado violento y me voy a lesionar."</h4>
                    <p><strong>Verdad:</strong> El BJJ se conoce como "el arte suave". Se enfoca en la técnica sobre la fuerza bruta. En Raion BJJ, la seguridad es nuestra prioridad número uno. Las lesiones son raras cuando se practica con respeto y bajo la supervisión de un instructor calificado.</p>
                    <h4>Mito 3: "Es solo para hombres jóvenes."</h4>
                    <p><strong>Verdad:</strong> ¡Totalmente falso! Nuestra manada incluye hombres y mujeres de todas las edades, desde niños de 5 años hasta adultos de más de 50. El Jiu-Jitsu es para todos los que quieran aprender.</p>
                `
            }
        ]
    },

    // ---- Contact Section ----
    contact: {
        subtitle: "Agenda tu clase de prueba, consulta horarios o envíanos tus preguntas. ¡El primer paso es tuyo!",
        phone: "+56 9 9678 7321",
        email: "raionbjjacademy@gmail.com"
    }
};