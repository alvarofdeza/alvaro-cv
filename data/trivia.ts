export interface TriviaItem {
  es: {
    title: string;
    fact: string;
    source: string;
  };
  en: {
    title: string;
    fact: string;
    source: string;
  };
}

export const COMPUTING_TRIVIA: TriviaItem[] = [
  {
    es: {
      title: "El primer 'Bug' literal de la historia (1947)",
      fact: "Grace Hopper y su equipo encontraron una polilla real atrapada en el relé Nº 70 del ordenador electromecánico Harvard Mark II. La pegaron con cinta en el cuaderno de bitácora con la nota: 'Primer caso real de bicho encontrado'.",
      source: "Smithsonian National Museum",
    },
    en: {
      title: "The First Literal 'Bug' (1947)",
      fact: "Grace Hopper's engineering team discovered an actual moth trapped inside Relay #70 of the Harvard Mark II computer. They taped it into their logbook with the note: 'First actual case of bug being found.'",
      source: "Smithsonian National Museum",
    },
  },
  {
    es: {
      title: "El Origen del Nombre 'Java' (1995)",
      fact: "James Gosling bautizó inicialmente el lenguaje como 'Oak' en honor a un roble que veía desde su ventana en Sun Microsystems. Por conflictos de marca registrada, tras una lluvia de ideas tomando café de la isla de Java, adoptaron su nombre definitivo.",
      source: "Sun Microsystems Archives",
    },
    en: {
      title: "Why Java is Named 'Java' (1995)",
      fact: "James Gosling originally named the language 'Oak' after a tree outside his office window at Sun Microsystems. Due to a trademark conflict, the engineering team renamed it 'Java' during a brainstorming session over Indonesian coffee.",
      source: "Sun Microsystems Archives",
    },
  },
  {
    es: {
      title: "El videojuego de 9 Kilobytes: Spacewar! (1962)",
      fact: "Uno de los primeros videojuegos interactivos de la historia, Spacewar!, fue programado por ingenieros del MIT en una computadora PDP-1. Todo el motor gráfico vectorial y el cálculo físico de atracción gravitatoria cabían en apenas 9 KB de memoria.",
      source: "Computer History Museum",
    },
    en: {
      title: "Spacewar! in 9 Kilobytes (1962)",
      fact: "One of history's first interactive video games, Spacewar!, was programmed by MIT engineers on a DEC PDP-1. The entire code, including dynamic orbital physics and vector graphics, fit inside just 9 KB of magnetic core memory.",
      source: "Computer History Museum",
    },
  },
  {
    es: {
      title: "¿Por qué el puntero del ratón está inclinado a 45°?",
      fact: "En 1981, en el centro de investigación Xerox PARC, las pantallas tenían tan baja resolución que una flecha vertical de 1 píxel era casi invisible al situarse sobre líneas de texto. Decidieron inclinarla 45 grados para hacerla inmediatamente reconocible.",
      source: "Xerox PARC Research",
    },
    en: {
      title: "Why the Mouse Pointer is Tilted 45°",
      fact: "In 1981 at Xerox PARC, display pixel densities were so low that a 1-pixel vertical pointer was hard to spot against dense text. Engineers angled it by 45 degrees so its diagonal edge was sharp and immediately visible.",
      source: "Xerox PARC Research",
    },
  },
  {
    es: {
      title: "IP sobre Palomas Mensajeras (RFC 1149)",
      fact: "El 1 de abril de 1990 se publicó el estándar oficial RFC 1149 para transmitir paquetes de red mediante aves. En 2001, en Noruega, se probó con éxito enviando 9 paquetes con palomas a 5 km de distancia, logrando una latencia de 52 minutos y 55% de pérdida de paquetes.",
      source: "IETF RFC 1149",
    },
    en: {
      title: "IP over Avian Carriers (RFC 1149)",
      fact: "Published on April Fools' Day 1990, RFC 1149 officially standardizes Internet protocol transmission via carrier pigeons. In 2001, Norwegian engineers successfully transferred 9 packets across 5 km with a round-trip time of 52 minutes.",
      source: "IETF RFC 1149",
    },
  },
  {
    es: {
      title: "El origen del término 'Parche' de software",
      fact: "En la era de la computación con tarjetas perforadas, cuando un programador detectaba un fallo en una tarjeta entre miles, no la perforaba de cero: tapaba físicamente los orificios erróneos con un trozo de cinta adhesiva ('patch') y perforaba el valor correcto.",
      source: "Early Computing Heritage",
    },
    en: {
      title: "The Literal Origin of Software 'Patches'",
      fact: "During the punched-card era, correcting a code defect didn't mean re-punching a 2,000-card tray. Programmers glued physical adhesive tape ('a patch') over erroneous holes and re-punched the corrected opcode directly onto it.",
      source: "Early Computing Heritage",
    },
  },
  {
    es: {
      title: "El Gusano Morris que midió Internet (1988)",
      fact: "Robert Tappan Morris escribió un programa de 99 líneas de código en C para calcular el tamaño total de la red ARPANET. Debido a un error que hacía que se reinfectara múltiples veces la misma máquina, dejó inoperativo al 10% de todos los servidores de Internet de la época.",
      source: "ARPANET History",
    },
    en: {
      title: "The Morris Worm of 1988",
      fact: "Robert Tappan Morris wrote a 99-line C program meant to count the size of ARPANET. A logic flaw in its reinfection check caused machines to clone the process indefinitely, taking down nearly 10% of all connected computers worldwide.",
      source: "ARPANET History",
    },
  },
  {
    es: {
      title: "Linux nació como un 'pequeño hobby' (1991)",
      fact: "Linus Torvalds anunció la primera versión del kernel de Linux en el grupo comp.os.minix con estas palabras: 'Estoy haciendo un sistema operativo libre (solo un hobby, no será grande ni profesional como GNU)'. Hoy mueve la mayor parte de Internet y la nube.",
      source: "Comp.os.minix Newsgroup (1991)",
    },
    en: {
      title: "Linux Began as 'Just a Hobby' (1991)",
      fact: "Linus Torvalds announced the first Linux kernel to comp.os.minix with: 'I'm doing a free operating system (just a hobby, won't be big and professional like GNU)'. Today, Linux powers the vast majority of cloud servers and supercomputers.",
      source: "Comp.os.minix Newsgroup (1991)",
    },
  },
];
