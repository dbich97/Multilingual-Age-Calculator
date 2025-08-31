import type { Translation, Language, LanguageCode, PrivacySection, SeoSection } from '../types';
import { LanguageCode as LangEnum } from '../types';


export const languages: Language[] = [
  { code: LangEnum.EN, name: 'English' },
  { code: LangEnum.ES, name: 'Español' },
  { code: LangEnum.FR, name: 'Français' },
  { code: LangEnum.DE, name: 'Deutsch' },
  { code: LangEnum.PT, name: 'Português' },
  { code: LangEnum.IT, name: 'Italiano' },
  { code: LangEnum.HI, name: 'हिन्दी' },
  { code: LangEnum.RU, name: 'Русский' },
  { code: LangEnum.JA, name: '日本語' },
  { code: LangEnum.ZH, name: '中文' },
  { code: LangEnum.PL, name: 'Polski' },
  { code: LangEnum.FA, name: 'فارسی' },
  { code: LangEnum.NL, name: 'Nederlands' },
  { code: LangEnum.KO, name: '한국어' },
  { code: LangEnum.TH, name: 'ไทย' },
  { code: LangEnum.TR, name: 'Türkçe' },
  { code: LangEnum.VI, name: 'Tiếng Việt' },
  { code: LangEnum.AR, name: 'العربية' },
];

const emptyCalendar = {
    calendarType: '',
    gregorian: '',
  hijri: '',
    hijriMonthsArray: [],
    ageInGregorian: '',
};

// FIX: Removed 'hijriMonthsArray' from Omit<> as baseContent provides a default value for it via emptyCalendar.
const baseContent: Omit<Translation, 'monthsArray' | 'seoSections' | 'privacyContent' | 'aboutContent'> = {
  // Navigation
  navHome: 'Home',
  navCalculator: 'Age Calculator',
  navAbout: 'About Us',
  navContact: 'Contact Us',

  // Footer
  footerPrivacyPolicy: 'Privacy Policy',
  footerContactUs: 'Contact Us',
  footerRights: `© ${new Date().getFullYear()} Age Calculator. All rights reserved.`,

  // Home Page
  homeTitle: 'Welcome to the Ultimate Age Calculator',
  homeDescription: 'Calculate age instantly from your date of birth with our free, easy-to-use, and multilingual age calculator. Find out your age in years, months, and days.',
  homeSubtitle: 'Accurate, Fast, and Free',
  homeCTAText: 'Calculate Your Age Now',

  // About Page
  aboutTitle: 'About Our Age Calculator',
  aboutHeading: 'Our Mission',
  
  // Privacy Policy Page
  privacyTitle: 'Privacy Policy',
  privacyHeading: 'Our Commitment to Your Privacy',

  // Contact Page
  contactTitle: 'Contact Us',
  contactHeading: 'Get in Touch',
  contactIntro: 'We value your feedback and inquiries. If you have any questions, suggestions, or need support, please do not hesitate to reach out to us. We will do our best to respond to you as soon as possible.',
  contactEmail: 'contact@agecalculator.com',

  // Age Calculator Page specific
  title: 'Age Calculator',
  dateOfBirthLabel: 'Your Date of Birth',
  calculateButton: 'Calculate Age',
  resultPrefix: 'You are',
  resultSuffix: 'old.',
  years: 'years',
  months: 'months',
  days: 'days',
  errorFutureDate: 'Date of birth cannot be in the future.',
  errorInvalidDate: 'Please enter a valid date of birth.',
  selectLanguage: 'Select Language',
  dayLabel: 'Day',
  monthLabel: 'Month',
  yearLabel: 'Year',
  
  // SEO Fields
  seoTitle: 'Age Calculator - Calculate Your Age Online for Free',
  seoDescription: 'Use our free online age calculator to calculate your age based on your birthdate. Available in multiple languages including English, Spanish, French, and more.',
  seoKeywords: 'age calculator, calculate age, date of birth, free online age calculator, age calculator in Spanish, age calculator in French, age calculator tool',
  h1: 'Age Calculator - Calculate My Age',
  h2: 'Calculate Your Age in Seconds',
  seoContent: "",
  
  // Share feature
  shareTitle: 'Share This Tool',
  copyLinkButton: 'Copy Link',
  copiedTooltip: 'Copied!',
  shareResultButton: 'Share Result',
  shareResultText: "I just found out I'm {years} years, {months} months, and {days} days old! Calculate your exact age too:",
  shareResultTitle: 'Share Your Result',
  copyResultButton: 'Copy Result',
  resultCopiedTooltip: 'Result Copied!',
  ...emptyCalendar,
  
  // More info section
  moreInfoTitle: 'More About Your Life',
  dayOfWeekLabel: 'You were born on a',
  seasonLabel: 'The season you were born in',
  nextBirthdayLabel: 'Days until your next birthday',
  daysOfWeekArray: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  seasonsArray: ['Winter', 'Spring', 'Summer', 'Autumn'],
}

const enPrivacyContent: PrivacySection[] = [
    { heading: 'Introduction', paragraphs: ['This Privacy Policy outlines our practices regarding information collection, use, and disclosure when you use our Age Calculator service. We are committed to protecting your privacy and ensuring you have a positive experience on our website.'] },
    { heading: 'Information We Do Not Collect', paragraphs: ['We want to be crystal clear: our Age Calculator tool is designed to function entirely on your device (client-side). We do not collect, store, or transmit any personal data you enter, such as your date of birth. All calculations are performed within your browser, and the information is discarded once you leave the page.'] },
    { heading: 'Cookies and Tracking', paragraphs: ['We do not use cookies or any other tracking technologies to monitor your activity on our site. Your session is completely anonymous.'] },
    { heading: 'Third-Party Services', paragraphs: ['This website does not integrate with any third-party services that would collect personal information.'] },
    { heading: 'Changes to This Policy', paragraphs: ['We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.'] }
];

const arPrivacyContent: PrivacySection[] = [
    { heading: 'مقدمة', paragraphs: ['توضح سياسة الخصوصية هذه ممارساتنا المتعلقة بجمع المعلومات واستخدامها والكشف عنها عند استخدام خدمة حاسبة العمر الخاصة بنا. نحن ملتزمون بحماية خصوصيتك وضمان حصولك على تجربة إيجابية على موقعنا.'] },
    { heading: 'المعلومات التي لا نجمعها', paragraphs: ['نريد أن نكون واضحين تمامًا: تم تصميم أداة حاسبة العمر الخاصة بنا لتعمل بالكامل على جهازك (من جانب العميل). نحن لا نجمع أو نخزن أو ننقل أي بيانات شخصية تدخلها، مثل تاريخ ميلادك. تتم جميع الحسابات داخل متصفحك، ويتم التخلص من المعلومات بمجرد مغادرة الصفحة.'] },
    { heading: 'ملفات تعريف الارتباط والتتبع', paragraphs: ['نحن لا نستخدم ملفات تعريف الارتباط أو أي تقنيات تتبع أخرى لمراقبة نشاطك على موقعنا. جلستك مجهولة تمامًا.'] },
    { heading: 'خدمات الطرف الثالث', paragraphs: ['لا يتكامل هذا الموقع مع أي خدمات تابعة لجهات خارجية من شأنها جمع معلومات شخصية.'] },
    { heading: 'التغييرات على هذه السياسة', paragraphs: ['قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنعلمك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة. ننصحك بمراجعة سياسة الخصوصية هذه بشكل دوري لأي تغييرات.'] }
];


export const translations: Record<LanguageCode, Translation> = {
  [LangEnum.EN]: {
    ...baseContent,
    aboutContent: [
        'Welcome to the most intuitive and user-friendly Age Calculator on the web. Our mission is to provide a fast, accurate, and easy-to-use tool for anyone who needs to calculate an age or time duration. Whether you\'re curious about your own age down to the day, or you need to calculate someone\'s age for an official form, our tool is designed to give you the exact information you need.',
        'Developed with a focus on simplicity and global accessibility, our calculator supports multiple languages and is built to be responsive, ensuring a seamless experience on any device, from desktops to mobile phones. We believe in privacy, which is why our tool performs all calculations directly in your browser, meaning your data is never sent to our servers. Your privacy is guaranteed.',
        'We are constantly working to improve our tool and add new features. Thank you for choosing us for your age calculation needs!'
    ],
    privacyContent: enPrivacyContent,
    monthsArray: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    seoSections: [
        {
            heading: "Instant and Accurate Age Calculator",
            paragraphs: [
                "Ever wondered, 'How old am I exactly?' Our online Age Calculator provides a precise and immediate answer. Calculating your age down to the exact day can be complex, but our tool makes it effortless. Simply enter your date of birth, and we will instantly compute your chronological age in years, months, and days. It's the perfect tool for quickly finding your age without manual calculations.",
                "Whether for official documents, curiosity, or planning events, knowing your precise age is essential. This calculator is designed for everyone, offering a simple, fast, and reliable way to determine your age.",
            ],
        },
        {
            heading: "How to Find Your Exact Age",
            paragraphs: ["Using our tool is incredibly straightforward. Follow these simple steps to get your result in seconds:"],
            list: [
              "Select your Day, Month, and Year of birth using the dropdown menus.",
              "Double-check that the entered date is correct.",
              "Click the 'Calculate Age' button.",
              "Your exact age will be displayed instantly, broken down into years, months, and days.",
            ]
        },
        {
            heading: "Precision and Convenience at Your Fingertips",
            paragraphs: [
                "Manually calculating age can be tricky due to leap years and the varying number of days in months. Our Age Calculator eliminates the guesswork and potential errors by using an algorithm that accounts for these complexities. This ensures you receive a highly accurate result every time.",
                "Instead of spending time with a calendar and complex math, get an instant and reliable answer. Our tool is available 24/7 on any device, providing you with the convenience you need.",
            ]
        },
        {
            heading: "More Than Just Years",
            paragraphs: [
                "Your age is more than just a number of years. Our calculator breaks it down into years, months, and days to give you a complete picture of your life's timeline. This detailed breakdown is useful for understanding milestones and appreciating the full duration of your life so far. It provides a comprehensive perspective that a simple year count cannot offer.",
            ]
        }
    ],
  },
  [LangEnum.ES]: {
    ...baseContent,
    navHome: 'Inicio',
    navCalculator: 'Calculadora de Edad',
    navAbout: 'Sobre Nosotros',
    navContact: 'Contacto',
    footerPrivacyPolicy: 'Política de Privacidad',
    footerContactUs: 'Contáctanos',
    footerRights: `© ${new Date().getFullYear()} Calculadora de Edad. Todos los derechos reservados.`,
    homeTitle: 'Bienvenido a la Calculadora de Edad Definitiva',
    homeDescription: 'Calcula la edad instantáneamente a partir de tu fecha de nacimiento con nuestra calculadora de edad gratuita, fácil de usar y multilingüe. Descubre tu edad en años, meses y días.',
    homeSubtitle: 'Precisa, Rápida y Gratuita',
    homeCTAText: 'Calcula Tu Edad Ahora',
    aboutTitle: 'Sobre Nuestra Calculadora de Edad',
    aboutHeading: 'Nuestra Misión',
    aboutContent: [
        'Bienvenido a la Calculadora de Edad más intuitiva y fácil de usar de la web. Nuestra misión es proporcionar una herramienta rápida, precisa y fácil de usar para cualquiera que necesite calcular una edad o la duración de un tiempo. Ya sea que tengas curiosidad por tu propia edad hasta el día, o necesites calcular la edad de alguien para un formulario oficial, nuestra herramienta está diseñada para darte la información exacta que necesitas.',
        'Desarrollada con un enfoque en la simplicidad y la accesibilidad global, nuestra calculadora es compatible con múltiples idiomas y está diseñada para ser responsiva, asegurando una experiencia perfecta en cualquier dispositivo, desde computadoras de escritorio hasta teléfonos móviles. Creemos en la privacidad, por eso nuestra herramienta realiza todos los cálculos directamente en tu navegador, lo que significa que tus datos nunca se envían a nuestros servidores. Tu privacidad está garantizada.',
        'Trabajamos constantemente para mejorar nuestra herramienta y agregar nuevas características. ¡Gracias por elegirnos para tus necesidades de cálculo de edad!'
    ],
    privacyTitle: 'Política de Privacidad',
    privacyHeading: 'Nuestro Compromiso con Tu Privacidad',
    privacyContent: [
        { heading: 'Introducción', paragraphs: ['Esta Política de Privacidad describe nuestras prácticas con respecto a la recopilación, uso y divulgación de información cuando utiliza nuestro servicio de Calculadora de Edad. Estamos comprometidos a proteger su privacidad y garantizar que tenga una experiencia positiva en nuestro sitio web.'] },
        { heading: 'Información que No Recopilamos', paragraphs: ['Queremos ser muy claros: nuestra herramienta de Calculadora de Edad está diseñada para funcionar completamente en su dispositivo (del lado del cliente). No recopilamos, almacenamos ni transmitimos ningún dato personal que ingrese, como su fecha de nacimiento. Todos los cálculos se realizan dentro de su navegador y la información se descarta una vez que abandona la página.'] },
        { heading: 'Cookies y Seguimiento', paragraphs: ['No utilizamos cookies ni ninguna otra tecnología de seguimiento para monitorear su actividad en nuestro sitio. Su sesión es completamente anónima.'] },
        { heading: 'Servicios de Terceros', paragraphs: ['Este sitio web no se integra con ningún servicio de terceros que pueda recopilar información personal.'] },
        { heading: 'Cambios a esta Política', paragraphs: ['Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Se le recomienda revisar esta Política de Privacidad periódicamente para detectar cualquier cambio.'] }
    ],
    contactTitle: 'Contáctanos',
    contactHeading: 'Ponte en Contacto',
    contactIntro: 'Valoramos tus comentarios y consultas. Si tienes alguna pregunta, sugerencia o necesitas soporte, no dudes en contactarnos. Haremos todo lo posible para responderte lo antes posible.',
    contactEmail: 'contacto@agecalculator.com',
    seoTitle: 'Calculadora de Edad - Calcula tu Edad Online Gratis',
    seoDescription: 'Usa nuestra calculadora de edad online gratis para calcular tu edad según tu fecha de nacimiento. Disponible en varios idiomas, incluyendo inglés, español, francés y más.',
    seoKeywords: 'calculadora de edad, calcular edad, fecha de nacimiento, calculadora de edad online gratis, calculadora de edad en español',
    h1: 'Calculadora de Edad - Calcula Mi Edad',
    h2: 'Calcula tu Edad en Segundos',
    title: 'Calculadora de Edad',
    dateOfBirthLabel: 'Tu Fecha de Nacimiento',
    calculateButton: 'Calcular Edad',
    resultPrefix: 'Tienes',
    resultSuffix: 'de edad.',
    years: 'años',
    months: 'meses',
    days: 'días',
    selectLanguage: 'Seleccionar Idioma',
    monthsArray: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    dayLabel: 'Día',
    monthLabel: 'Mes',
    yearLabel: 'Año',
    shareTitle: 'Compartir esta herramienta',
    copyLinkButton: 'Copiar enlace',
    copiedTooltip: '¡Copiado!',
    shareResultButton: 'Compartir Resultado',
    shareResultText: '¡Acabo de descubrir que tengo {years} años, {months} meses y {days} días! Calcula tu edad exacta también:',
    shareResultTitle: 'Comparte Tu Resultado',
    copyResultButton: 'Copiar Resultado',
    resultCopiedTooltip: '¡Resultado Copiado!',
    moreInfoTitle: 'Más sobre tu vida',
    dayOfWeekLabel: 'Naciste un',
    seasonLabel: 'La estación en que naciste',
    nextBirthdayLabel: 'Días para tu próximo cumpleaños',
    daysOfWeekArray: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    seasonsArray: ['Invierno', 'Primavera', 'Verano', 'Otoño'],
    seoSections: [
        {
            heading: "Calculadora de Edad Instantánea y Precisa",
            paragraphs: [
                "¿Alguna vez te has preguntado '¿Cuál es mi edad exacta?' Nuestra Calculadora de Edad en línea proporciona una respuesta precisa e inmediata. Calcular tu edad hasta el día exacto puede ser complejo, pero nuestra herramienta lo hace sin esfuerzo. Simplemente introduce tu fecha de nacimiento y calcularemos instantáneamente tu edad cronológica en años, meses y días. Es la herramienta perfecta para saber tu edad rápidamente sin cálculos manuales.",
                "Ya sea para documentos oficiales, por curiosidad o para planificar eventos, conocer tu edad precisa es esencial. Esta calculadora está diseñada para todos, ofreciendo una forma sencilla, rápida y fiable de determinar tu edad.",
            ],
        },
        {
            heading: "Cómo Saber Tu Edad Exacta",
            paragraphs: ["Usar nuestra herramienta es increíblemente sencillo. Sigue estos simples pasos para obtener tu resultado en segundos:"],
            list: [
              "Selecciona tu Día, Mes y Año de nacimiento usando los menús desplegables.",
              "Verifica que la fecha introducida sea correcta.",
              "Haz clic en el botón 'Calcular Edad'.",
              "Tu edad exacta se mostrará al instante, desglosada en años, meses y días.",
            ]
        },
        {
            heading: "Precisión y Comodidad al Alcance de Tu Mano",
            paragraphs: [
                "Calcular la edad manualmente puede ser complicado debido a los años bisiestos y el número variable de días en los meses. Nuestra Calculadora de Edad elimina las conjeturas y los posibles errores utilizando un algoritmo que tiene en cuenta estas complejidades. Esto asegura que recibas un resultado muy preciso cada vez.",
                "En lugar de pasar tiempo con un calendario y matemáticas complejas, obtén una respuesta instantánea y fiable. Nuestra herramienta está disponible 24/7 en cualquier dispositivo, brindándote la comodidad que necesitas.",
            ]
        },
        {
            heading: "Más que Solo Años",
            paragraphs: [
                "Tu edad es más que un simple número de años. Nuestra calculadora la desglosa en años, meses y días para darte una imagen completa de la cronología de tu vida. Este desglose detallado es útil para comprender hitos y apreciar la duración completa de tu vida hasta ahora. Proporciona una perspectiva integral que un simple recuento de años no puede ofrecer.",
            ]
        }
    ],
  },
  [LangEnum.FR]: {
    ...baseContent,
    navHome: 'Accueil',
    navCalculator: 'Calculatrice d\'Âge',
    navAbout: 'À Propos',
    navContact: 'Contact',
    footerPrivacyPolicy: 'Politique de Confidentialité',
    footerContactUs: 'Contactez-nous',
    footerRights: `© ${new Date().getFullYear()} Calculatrice d'Âge. Tous droits réservés.`,
    homeTitle: 'Bienvenue sur la Calculatrice d\'Âge Ultime',
    homeDescription: 'Calculez l\'âge instantanément à partir de votre date de naissance avec notre calculatrice d\'âge gratuite, facile à utiliser et multilingue. Découvrez votre âge en années, mois et jours.',
    homeSubtitle: 'Précis, Rapide et Gratuit',
    homeCTAText: 'Calculez Votre Âge Maintenant',
    aboutTitle: 'À Propos de Notre Calculatrice d\'Âge',
    aboutHeading: 'Notre Mission',
    aboutContent: [
        'Bienvenue sur la calculatrice d\'âge la plus intuitive et conviviale du web. Notre mission est de fournir un outil rapide, précis et facile à utiliser pour quiconque a besoin de calculer un âge ou une durée. Que vous soyez curieux de connaître votre propre âge au jour près, ou que vous ayez besoin de calculer l\'âge de quelqu\'un pour un formulaire officiel, notre outil est conçu pour vous donner les informations exactes dont vous avez besoin.',
        'Développée en mettant l\'accent sur la simplicité et l\'accessibilité mondiale, notre calculatrice prend en charge plusieurs langues et est conçue pour être réactive, garantissant une expérience transparente sur n\'importe quel appareil, des ordinateurs de bureau aux téléphones mobiles. Nous croyons en la confidentialité, c\'est pourquoi notre outil effectue tous les calculs directement dans votre navigateur, ce qui signifie que vos données ne sont jamais envoyées à nos serveurs. Votre vie privée est garantie.',
        'Nous travaillons constamment à améliorer notre outil et à ajouter de nouvelles fonctionnalités. Merci de nous avoir choisis pour vos besoins de calcul d\'âge !'
    ],
    privacyTitle: 'Politique de Confidentialité',
    privacyHeading: 'Notre Engagement envers Votre Confidentialité',
    privacyContent: [
        { heading: 'Introduction', paragraphs: ['Cette politique de confidentialité décrit nos pratiques concernant la collecte, l\'utilisation et la divulgation des informations lorsque vous utilisez notre service de calculatrice d\'âge. Nous nous engageons à protéger votre vie privée et à garantir que vous ayez une expérience positive sur notre site Web.'] },
        { heading: 'Informations que Nous ne Collectons Pas', paragraphs: ['Nous voulons être très clairs : notre outil de calculatrice d\'âge est conçu pour fonctionner entièrement sur votre appareil (côté client). Nous ne collectons, ne stockons ni ne transmettons aucune donnée personnelle que vous saisissez, comme votre date de naissance. Tous les calculs sont effectués dans votre navigateur et les informations sont supprimées une fois que vous quittez la page.'] },
        { heading: 'Cookies et Suivi', paragraphs: ['Nous n\'utilisons pas de cookies ou d\'autres technologies de suivi pour surveiller votre activité sur notre site. Votre session est entièrement anonyme.'] },
        { heading: 'Services Tiers', paragraphs: ['Ce site Web ne s\'intègre à aucun service tiers qui collecterait des informations personnelles.'] },
        { heading: 'Modifications de cette Politique', paragraphs: ['Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page. Il vous est conseillé de consulter périodiquement cette politique de confidentialité pour tout changement.'] }
    ],
    contactTitle: 'Contactez-nous',
    contactHeading: 'Prenez Contact',
    contactIntro: 'Nous apprécions vos commentaires et demandes. Si vous avez des questions, des suggestions ou besoin d\'aide, n\'hésitez pas à nous contacter. Nous ferons de notre mieux pour vous répondre dans les plus brefs délais.',
    contactEmail: 'contact@agecalculator.com',
    seoTitle: "Calculatrice d'Âge - Calculez Votre Âge en Ligne Gratuitement",
    seoDescription: "Utilisez notre calculatrice d'âge en ligne gratuite pour calculer votre âge en fonction de votre date de naissance. Disponible en plusieurs langues, dont l'anglais, l'espagnol, le français, etc.",
    seoKeywords: "calculatrice d'âge, calculer l'âge, date de naissance, calculatrice d'âge en ligne gratuite, calculatrice d'âge en français",
    h1: "Calcul d'Âge - Calculez Mon Âge",
    h2: "Calculez Votre Âge en Quelques Secondes",
    title: 'Calculatrice d\'Âge',
    dateOfBirthLabel: 'Votre Date de Naissance',
    calculateButton: 'Calculer l\'Âge',
    resultPrefix: 'Vous avez',
    resultSuffix: '.',
    years: 'ans',
    months: 'mois',
    days: 'jours',
    selectLanguage: 'Sélectionner la Langue',
    monthsArray: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    dayLabel: 'Jour',
    monthLabel: 'Mois',
    yearLabel: 'Année',
    shareTitle: 'Partager cet outil',
    copyLinkButton: 'Copier le lien',
    copiedTooltip: 'Copié !',
    shareResultButton: 'Partager le Résultat',
    shareResultText: "Je viens de découvrir que j'ai {years} ans, {months} mois et {days} jours ! Calculez aussi votre âge exact :",
    shareResultTitle: 'Partagez Votre Résultat',
    copyResultButton: 'Copier le Résultat',
    resultCopiedTooltip: 'Résultat Copié !',
    moreInfoTitle: 'Plus sur votre vie',
    dayOfWeekLabel: 'Vous êtes né(e) un',
    seasonLabel: 'La saison de votre naissance',
    nextBirthdayLabel: 'Jours avant votre prochain anniversaire',
    daysOfWeekArray: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    seasonsArray: ['Hiver', 'Printemps', 'Été', 'Automne'],
    seoSections: [
        {
            heading: "Calculatrice d'Âge Instantanée et Précise",
            paragraphs: [
                "Vous êtes-vous déjà demandé : 'Quel est mon âge exact ?' Notre calculatrice d'âge en ligne fournit une respuesta précise et immédiate. Calculer votre âge au jour près peut être complexe, mais notre outil le rend facile. Entrez simplement votre date de naissance, et nous calculerons instantanément votre âge chronologique en années, mois et jours. C'est l'outil parfait pour connaître rapidement votre âge sans calculs manuels.",
                "Que ce soit pour des documents officiels, par curiosité ou pour planifier des événements, il est essentiel de connaître votre âge précis. Cette calculatrice est conçue pour tout le monde, offrant un moyen simple, rapide et fiable de déterminer votre âge.",
            ],
        },
        {
            heading: "Comment Connaître Votre Âge Exact",
            paragraphs: ["L'utilisation de notre outil est incroyablement simple. Suivez ces étapes pour obtenir votre résultat en quelques secondes :"],
            list: [
              "Sélectionnez votre Jour, Mois et Année de naissance à l'aide des menus déroulants.",
              "Vérifiez que la date saisie est correcte.",
              "Cliquez sur le bouton 'Calculer l'Âge'.",
              "Votre âge exact sera affiché instantanément, détaillé en années, mois et jours.",
            ]
        },
        {
            heading: "Précision et Confort à Portée de Main",
            paragraphs: [
                "Calculer l'âge manuellement peut être difficile en raison des années bissextiles et du nombre variable de jours dans les mois. Notre calculatrice d'âge élimine les approximations et les erreurs potentielles en utilisant un algorithme qui prend en compte ces complexités. Cela garantit que vous recevez un résultat très précis à chaque fois.",
                "Au lieu de passer du temps avec un calendrier et des calculs complexes, obtenez une respuesta instantanée et fiable. Notre outil est disponible 24/7 sur n'importe quel appareil, vous offrant la commodité dont vous avez besoin.",
            ]
        },
        {
            heading: "Plus que de Simples Années",
            paragraphs: [
                "Votre âge est plus qu'un simple nombre d'années. Notre calculatrice le décompose en années, mois et jours pour vous donner une image complète de votre parcours de vie. Cette répartition détaillée est utile pour comprendre les étapes importantes et apprécier la durée complète de votre vie jusqu'à présent. Elle offre une perspective complète qu'un simple décompte en années ne peut pas offrir.",
            ]
        }
    ],
  },
  [LangEnum.DE]: {
    ...baseContent,
    navHome: 'Startseite',
    navCalculator: 'Altersrechner',
    navAbout: 'Über uns',
    navContact: 'Kontakt',
    footerPrivacyPolicy: 'Datenschutzrichtlinie',
    footerContactUs: 'Kontaktieren Sie uns',
    footerRights: `© ${new Date().getFullYear()} Altersrechner. Alle Rechte vorbehalten.`,
    homeTitle: 'Willkommen beim ultimativen Altersrechner',
    homeDescription: 'Berechnen Sie Ihr Alter sofort anhand Ihres Geburtsdatums mit unserem kostenlosen, benutzerfreundlichen und mehrsprachigen Altersrechner. Finden Sie Ihr Alter in Jahren, Monaten und Tagen heraus.',
    homeSubtitle: 'Genau, schnell und kostenlos',
    homeCTAText: 'Berechnen Sie jetzt Ihr Alter',
    aboutTitle: 'Über unseren Altersrechner',
    aboutHeading: 'Unsere Mission',
    aboutContent: [
        'Willkommen beim intuitivsten und benutzerfreundlichsten Altersrechner im Web. Unsere Mission ist es, ein schnelles, genaues und einfach zu bedienendes Werkzeug für jeden bereitzustellen, der ein Alter oder eine Zeitdauer berechnen muss. Ob Sie neugierig auf Ihr eigenes Alter bis auf den Tag genau sind oder das Alter von jemandem für ein offizielles Formular berechnen müssen, unser Werkzeug ist darauf ausgelegt, Ihnen genau die Informationen zu geben, die Sie benötigen.',
        'Entwickelt mit dem Fokus auf Einfachheit und globale Zugänglichkeit, unterstützt unser Rechner mehrere Sprachen und ist reaktionsschnell gestaltet, um eine nahtlose Erfahrung auf jedem Gerät, von Desktops bis zu Mobiltelefonen, zu gewährleisten. Wir glauben an den Datenschutz, weshalb unser Werkzeug alle Berechnungen direkt in Ihrem Browser durchführt, was bedeutet, dass Ihre Daten niemals an unsere Server gesendet werden. Ihre Privatsphäre ist garantiert.',
        'Wir arbeiten ständig daran, unser Werkzeug zu verbessern und neue Funktionen hinzuzufügen. Vielen Dank, dass Sie uns für Ihre Altersberechnungsbedürfnisse gewählt haben!'
    ],
    privacyTitle: 'Datenschutzrichtlinie',
    privacyHeading: 'Unsere Verpflichtung zu Ihrem Datenschutz',
    privacyContent: [
        { heading: 'Einführung', paragraphs: ['Diese Datenschutzrichtlinie beschreibt unsere Praktiken bezüglich der Erfassung, Verwendung und Offenlegung von Informationen, wenn Sie unseren Altersrechner-Dienst nutzen. Wir verpflichten uns, Ihre Privatsphäre zu schützen und sicherzustellen, dass Sie eine positive Erfahrung auf unserer Website haben.'] },
        { heading: 'Informationen, die wir nicht sammeln', paragraphs: ['Wir möchten ganz klarstellen: Unser Altersrechner-Tool ist so konzipiert, dass es vollständig auf Ihrem Gerät (clientseitig) funktioniert. Wir sammeln, speichern oder übertragen keine persönlichen Daten, die Sie eingeben, wie z. B. Ihr Geburtsdatum. Alle Berechnungen werden in Ihrem Browser durchgeführt, und die Informationen werden verworfen, sobald Sie die Seite verlassen.'] },
        { heading: 'Cookies und Tracking', paragraphs: ['Wir verwenden keine Cookies oder andere Tracking-Technologien, um Ihre Aktivitäten auf unserer Website zu überwachen. Ihre Sitzung ist vollständig anonym.'] },
        { heading: 'Dienste von Drittanbietern', paragraphs: ['Diese Website integriert keine Dienste von Drittanbietern, die persönliche Informationen sammeln würden.'] },
        { heading: 'Änderungen dieser Richtlinie', paragraphs: ['Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen. Es wird empfohlen, diese Datenschutzrichtlinie regelmäßig auf Änderungen zu überprüfen.'] }
    ],
    contactTitle: 'Kontaktieren Sie uns',
    contactHeading: 'Nehmen Sie Kontakt auf',
    contactIntro: 'Wir schätzen Ihr Feedback und Ihre Anfragen. Wenn Sie Fragen, Anregungen haben oder Unterstützung benötigen, zögern Sie bitte nicht, uns zu kontaktieren. Wir werden unser Bestes tun, um Ihnen so schnell wie möglich zu antworten.',
    contactEmail: 'kontakt@agecalculator.com',
    title: 'Altersrechner',
    dateOfBirthLabel: 'Ihr Geburtsdatum',
    calculateButton: 'Alter berechnen',
    resultPrefix: 'Sie sind',
    resultSuffix: 'alt.',
    years: 'Jahre',
    months: 'Monate',
    days: 'Tage',
    selectLanguage: 'Sprache auswählen',
    monthsArray: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    dayLabel: 'Tag',
    monthLabel: 'Monat',
    yearLabel: 'Jahr',
    shareTitle: 'Dieses Tool teilen',
    copyLinkButton: 'Link kopieren',
    copiedTooltip: 'Kopiert!',
    shareResultButton: 'Ergebnis teilen',
    shareResultText: 'Ich habe gerade herausgefunden, dass ich {years} Jahre, {months} Monate und {days} Tage alt bin! Berechnen Sie auch Ihr genaues Alter:',
    shareResultTitle: 'Teilen Sie Ihr Ergebnis',
    copyResultButton: 'Ergebnis kopieren',
    resultCopiedTooltip: 'Ergebnis kopiert!',
    seoTitle: 'Altersrechner - Berechnen Sie Ihr Alter online kostenlos',
    seoDescription: 'Nutzen Sie unseren kostenlosen Online-Altersrechner, um Ihr Alter basierend auf Ihrem Geburtsdatum zu berechnen. Verfügbar in mehreren Sprachen, einschließlich Englisch, Spanisch, Französisch und mehr.',
    seoKeywords: 'Altersrechner, Alter berechnen, Geburtsdatum, kostenloser Online-Altersrechner, Altersrechner auf Deutsch',
    h1: 'Altersrechner - Mein Alter berechnen',
    h2: 'Berechnen Sie Ihr Alter in Sekunden',
    moreInfoTitle: 'Mehr über Ihr Leben',
    dayOfWeekLabel: 'Sie wurden an einem',
    seasonLabel: 'Die Jahreszeit, in der Sie geboren wurden',
    nextBirthdayLabel: 'Tage bis zu Ihrem nächsten Geburtstag',
    daysOfWeekArray: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    seasonsArray: ['Winter', 'Frühling', 'Sommer', 'Herbst'],
    seoSections: [
        {
            heading: "Sofortiger und genauer Altersrechner",
            paragraphs: [
                "Haben Sie sich jemals gefragt: 'Wie alt bin ich genau?' Unser Online-Altersrechner liefert eine präzise und sofortige Antwort. Ihr Alter bis auf den genauen Tag zu berechnen, kann komplex sein, aber unser Tool macht es mühelos. Geben Sie einfach Ihr Geburtsdatum ein, und wir berechnen sofort Ihr chronologisches Alter in Jahren, Monaten und Tagen. Es ist das perfekte Werkzeug, um schnell Ihr Alter ohne manuelle Berechnungen zu finden.",
                "Ob für offizielle Dokumente, aus Neugier oder zur Planung von Veranstaltungen, die Kenntnis Ihres genauen Alters ist unerlässlich. Dieser Rechner ist für jeden konzipiert und bietet eine einfache, schnelle und zuverlässige Möglichkeit, Ihr Alter zu bestimmen.",
            ],
        },
        {
            heading: "So finden Sie Ihr genaues Alter",
            paragraphs: ["Die Verwendung unseres Tools ist unglaublich einfach. Befolgen Sie diese einfachen Schritte, um Ihr Ergebnis in Sekunden zu erhalten:"],
            list: [
              "Wählen Sie Ihren Tag, Monat und Ihr Geburtsjahr über die Dropdown-Menüs aus.",
              "Überprüfen Sie, ob das eingegebene Datum korrekt ist.",
              "Klicken Sie auf die Schaltfläche 'Alter berechnen'.",
              "Ihr genaues Alter wird sofort angezeigt, aufgeschlüsselt nach Jahren, Monaten und Tagen.",
            ]
        },
        {
            heading: "Präzision und Komfort auf Knopfdruck",
            paragraphs: [
                "Die manuelle Berechnung des Alters kann aufgrund von Schaltjahren und der unterschiedlichen Anzahl von Tagen in den Monaten schwierig sein. Unser Altersrechner eliminiert das Rätselraten und potenzielle Fehler, indem er einen Algorithmus verwendet, der diese Komplexitäten berücksichtigt. Dies stellt sicher, dass Sie jedes Mal ein hochpräzises Ergebnis erhalten.",
                "Anstatt Zeit mit einem Kalender und komplexer Mathematik zu verbringen, erhalten Sie eine sofortige und zuverlässige Antwort. Unser Tool ist rund um die Uhr auf jedem Gerät verfügbar und bietet Ihnen den Komfort, den Sie benötigen.",
            ]
        },
        {
            heading: "Mehr als nur Jahre",
            paragraphs: [
                "Ihr Alter ist mehr als nur eine Anzahl von Jahren. Unser Rechner schlüsselt es in Jahre, Monate und Tage auf, um Ihnen ein vollständiges Bild Ihrer Lebenszeitleiste zu geben. Diese detaillierte Aufschlüsselung ist nützlich, um Meilensteine zu verstehen und die gesamte Dauer Ihres bisherigen Lebens zu würdigen. Sie bietet eine umfassende Perspektive, die eine einfache Jahreszählung nicht bieten kann.",
            ]
        }
    ],
  },
  [LangEnum.PT]: {
    ...baseContent,
    navHome: 'Início',
    navCalculator: 'Calculadora de Idade',
    navAbout: 'Sobre Nós',
    navContact: 'Contato',
    footerPrivacyPolicy: 'Política de Privacidade',
    footerContactUs: 'Contate-nos',
    footerRights: `© ${new Date().getFullYear()} Calculadora de Idade. Todos os direitos reservados.`,
    homeTitle: 'Bem-vindo à Calculadora de Idade Definitiva',
    homeDescription: 'Calcule a idade instantaneamente a partir da sua data de nascimento com a nossa calculadora de idade gratuita, fácil de usar e multilíngue. Descubra a sua idade em anos, meses e dias.',
    homeSubtitle: 'Precisa, Rápida e Gratuita',
    homeCTAText: 'Calcule Sua Idade Agora',
    aboutTitle: 'Sobre a Nossa Calculadora de Idade',
    aboutHeading: 'Nossa Missão',
    aboutContent: [
        'Bem-vindo à calculadora de idade mais intuitiva e fácil de usar da web. Nossa missão é fornecer uma ferramenta rápida, precisa e fácil de usar para qualquer pessoa que precise calcular uma idade ou a duração de um tempo. Se você está curioso sobre sua própria idade até o dia, ou precisa calcular a idade de alguém para um formulário oficial, nossa ferramenta foi projetada para lhe dar a informação exata que você precisa.',
        'Desenvolvida com foco na simplicidade e acessibilidade global, nossa calculadora suporta varios idiomas e é construída para ser responsiva, garantindo uma experiência perfeita em qualquer dispositivo, de desktops a celulares. Acreditamos na privacidade, e é por isso que nossa ferramenta realiza todos os cálculos diretamente no seu navegador, o que significa que seus dados nunca são enviados para nossos servidores. Sua privacidade é garantida.',
        'Estamos constantemente trabalhando para melhorar nossa ferramenta e adicionar novos recursos. Obrigado por nos escolher para suas necessidades de cálculo de idade!'
    ],
    privacyTitle: 'Política de Privacidade',
    privacyHeading: 'Nosso Compromisso com a Sua Privacidade',
    privacyContent: [
        { heading: 'Introdução', paragraphs: ['Esta Política de Privacidade descreve nossas práticas em relação à coleta, uso e divulgação de informações quando você usa nosso serviço de Calculadora de Idade. Estamos empenhados em proteger sua privacidade e garantir que você tenha uma experiência positiva em nosso site.'] },
        { heading: 'Informações que Não Coletamos', paragraphs: ['Queremos ser muito claros: nossa ferramenta de Calculadora de Idade foi projetada para funcionar inteiramente no seu dispositivo (lado do cliente). Não coletamos, armazenamos ou transmitimos quaisquer dados pessoais que você insere, como sua data de nascimento. Todos os cálculos são realizados em seu navegador e as informações são descartadas assim que você sai da página.'] },
        { heading: 'Cookies e Rastreamento', paragraphs: ['Não usamos cookies ou quaisquer outras tecnologias de rastreamento para monitorar sua atividade em nosso site. Sua sessão é completamente anônima.'] },
        { heading: 'Serviços de Terceiros', paragraphs: ['Este site não se integra a nenhum serviço de terceiros que possa coletar informações pessoais.'] },
        { heading: 'Alterações a esta Política', paragraphs: ['Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página. Aconselhamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações.'] }
    ],
    contactTitle: 'Contate-nos',
    contactHeading: 'Entre em Contato',
    contactIntro: 'Valorizamos seus comentários e perguntas. Se você tiver alguma dúvida, sugestão ou precisar de suporte, não hesite em nos contatar. Faremos o nosso melhor para responder o mais rápido possível.',
    contactEmail: 'contato@agecalculator.com',
    title: 'Calculadora de Idade',
    dateOfBirthLabel: 'Sua Data de Nascimento',
    calculateButton: 'Calcular Idade',
    resultPrefix: 'Você tem',
    resultSuffix: 'de idade.',
    years: 'anos',
    months: 'meses',
    days: 'dias',
    selectLanguage: 'Selecione o Idioma',
    monthsArray: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    dayLabel: 'Dia',
    monthLabel: 'Mês',
    yearLabel: 'Ano',
    shareTitle: 'Compartilhe esta Ferramenta',
    copyLinkButton: 'Copiar Link',
    copiedTooltip: 'Copiado!',
    shareResultButton: 'Compartilhar Resultado',
    shareResultText: 'Acabei de descobrir que tenho {years} anos, {months} meses e {days} dias! Calcule sua idade exata também:',
    shareResultTitle: 'Compartilhe Seu Resultado',
    copyResultButton: 'Copiar Resultado',
    resultCopiedTooltip: 'Resultado Copiado!',
    seoTitle: 'Calculadora de Idade - Calcule Sua Idade Online de Graça',
    seoDescription: 'Use nossa calculadora de idade online gratuita para calcular sua idade com base na sua data de nascimento. Disponível em vários idiomas, incluindo inglês, espanhol, francês e muito mais.',
    seoKeywords: 'calculadora de idade, calcular idade, data de nascimento, calculadora de idade online gratuita, calculadora de idade em português',
    h1: 'Calculadora de Idade - Calcule Minha Idade',
    h2: 'Calcule Sua Idade em Segundos',
    moreInfoTitle: 'Mais sobre sua vida',
    dayOfWeekLabel: 'Você nasceu em uma',
    seasonLabel: 'A estação em que você nasceu',
    nextBirthdayLabel: 'Dias até seu próximo aniversário',
    daysOfWeekArray: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    seasonsArray: ['Inverno', 'Primavera', 'Verão', 'Outono'],
    seoSections: [
        {
            heading: "Calculadora de Idade Instantânea e Precisa",
            paragraphs: [
                "Já se perguntou: 'Qual é a minha idade exata?' Nossa Calculadora de Idade online fornece uma resposta precisa e imediata. Calcular sua idade até o dia exato pode ser complexo, mas nossa ferramenta torna isso fácil. Basta inserir sua data de nascimento e calcularemos instantaneamente sua idade cronológica em anos, meses e dias. É a ferramenta perfeita para encontrar rapidamente sua idade sem cálculos manuais.",
                "Seja para documentos oficiais, por curiosidade ou para planejar eventos, saber sua idade precisa é essencial. Esta calculadora foi projetada para todos, oferecendo uma maneira simples, rápida e confiável de determinar sua idade.",
            ],
        },
        {
            heading: "Como Descobrir Sua Idade Exata",
            paragraphs: ["Usar nossa ferramenta é incrivelmente simples. Siga estes passos para obter seu resultado em segundos:"],
            list: [
              "Selecione o Dia, Mês e Ano do seu nascimento usando os menus suspensos.",
              "Verifique se a data inserida está correta.",
              "Clique no botão 'Calcular Idade'.",
              "Sua idade exata será exibida instantaneamente, detalhada em anos, meses e dias.",
            ]
        },
        {
            heading: "Precisão e Conveniência na Ponta dos Dedos",
            paragraphs: [
                "Calcular a idade manually pode ser complicado devido aos anos bissextos e ao número variável de dias nos meses. Nossa Calculadora de Idade elimina as suposições e os possíveis erros, usando um algoritmo que leva em conta essas complexidades. Isso garante que você receba um resultado altamente preciso todas as vezes.",
                "Em vez de perder tempo com um calendário e matemática complexa, obtenha uma resposta instantânea e confiável. Nossa ferramenta está disponível 24 horas por dia, 7 dias por semana, em qualquer dispositivo, proporcionando a conveniência de que você precisa.",
            ]
        },
        {
            heading: "Mais do que Apenas Anos",
            paragraphs: [
                "Sua idade é mais do que apenas um número de anos. Nossa calculadora a detalha em anos, meses e dias para lhe dar uma imagem completa da linha do tempo da sua vida. Essa análise detalhada é útil para entender marcos e apreciar a duração total da sua vida até agora. Ela fornece uma perspectiva abrangente que uma simples contagem de anos não pode oferecer.",
            ]
        }
    ],
  },
  [LangEnum.IT]: {
    ...baseContent,
    navHome: 'Home',
    navCalculator: 'Calcolatore di Età',
    navAbout: 'Chi Siamo',
    navContact: 'Contatti',
    footerPrivacyPolicy: 'Informativa sulla Privacy',
    footerContactUs: 'Contattaci',
    footerRights: `© ${new Date().getFullYear()} Calcolatore di Età. Tutti i diritti riservati.`,
    homeTitle: 'Benvenuto nel Calcolatore di Età Definitivo',
    homeDescription: 'Calcola l\'età istantaneamente dalla tua data di nascita con il nostro calcolatore di età gratuito, facile da usare e multilingue. Scopri la tua età in anni, mesi e giorni.',
    homeSubtitle: 'Preciso, Veloce e Gratuito',
    homeCTAText: 'Calcola la Tua Età Ora',
    aboutTitle: 'Sul Nostro Calcolatore di Età',
    aboutHeading: 'La Nostra Missione',
    aboutContent: [
        'Benvenuto nel calcolatore di età più intuitivo e facile da usare del web. La nostra missione è fornire uno strumento rapido, preciso e facile da usare per chiunque abbia bisogno di calcolare un\'età o una durata di tempo. Che tu sia curioso di conoscere la tua età fino al giorno esatto, o che tu debba calcolare l\'età di qualcuno per un modulo ufficiale, il nostro strumento è progettato per darti le informazioni esatte di cui hai bisogno.',
        'Sviluppato con un focus sulla semplicità e l\'accessibilità globale, il nostro calcolatore supporta più lingue ed è costruito per essere reattivo, garantendo un\'esperienza senza interruzioni su qualsiasi dispositivo, dai computer desktop ai telefoni cellulari. Crediamo nella privacy, motivo per cui il nostro strumento esegue tutti i calcoli direttamente nel tuo browser, il che significa che i tuoi dati non vengono mai inviati ai nostri server. La tua privacy è garantita.',
        'Lavoriamo costantemente per migliorare il nostro strumento e aggiungere nuove funzionalità. Grazie per averci scelto per le tue esigenze di calcolo dell\'età!'
    ],
    privacyTitle: 'Informativa sulla Privacy',
    privacyHeading: 'Il Nostro Impegno per la Tua Privacy',
    privacyContent: [
        { heading: 'Introduzione', paragraphs: ['La presente Informativa sulla Privacy descrive le nostre pratiche in merito alla raccolta, all\'uso e alla divulgazione delle informazioni quando si utilizza il nostro servizio di Calcolatore di Età. Ci impegniamo a proteggere la tua privacy e a garantirti un\'esperienza positiva sul nostro sito web.'] },
        { heading: 'Informazioni che Non Raccogliamo', paragraphs: ['Vogliamo essere chiarissimi: il nostro strumento Calcolatore di Età è progettato per funzionare interamente sul tuo dispositivo (lato client). Non raccogliamo, memorizziamo o trasmettiamo alcun dato personale che inserisci, come la tua data di nascita. Tutti i calcoli vengono eseguiti all\'interno del tuo browser e le informazioni vengono eliminate una volta che lasci la pagina.'] },
        { heading: 'Cookie e Tracciamento', paragraphs: ['Non utilizziamo cookie o altre tecnologie di tracciamento per monitorare la tua attività sul nostro sito. La tua sessione è completamente anonima.'] },
        { heading: 'Servizi di Terze Parti', paragraphs: ['Questo sito web non si integra con alcun servizio di terze parti che potrebbe raccogliere informazioni personali.'] },
        { heading: 'Modifiche a questa Informativa', paragraphs: ['Potremmo aggiornare la nostra Informativa sulla Privacy di volta in volta. Ti informeremo di eventuali modifiche pubblicando la nuova Informativa sulla Privacy su questa pagina. Ti consigliamo di rivedere periodicamente questa Informativa sulla Privacy per eventuali modifiche.'] }
    ],
    contactTitle: 'Contattaci',
    contactHeading: 'Mettiti in Contatto',
    contactIntro: 'Apprezziamo i tuoi feedback e le tue richieste. Se hai domande, suggerimenti o hai bisogno di supporto, non esitare a contattarci. Faremo del nostro meglio per risponderti il prima possibile.',
    contactEmail: 'contatto@agecalculator.com',
    title: 'Calcolatore di Età',
    dateOfBirthLabel: 'La Tua Data di Nascita',
    calculateButton: 'Calcola Età',
    resultPrefix: 'Hai',
    resultSuffix: '',
    years: 'anni',
    months: 'mesi',
    days: 'giorni',
    selectLanguage: 'Seleziona Lingua',
    monthsArray: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    dayLabel: 'Giorno',
    monthLabel: 'Mese',
    yearLabel: 'Anno',
    shareTitle: 'Condividi questo Strumento',
    copyLinkButton: 'Copia Link',
    copiedTooltip: 'Copiato!',
    shareResultButton: 'Condividi Risultato',
    shareResultText: 'Ho appena scoperto di avere {years} anni, {months} mesi e {days} giorni! Calcola anche tu la tua età esatta:',
    shareResultTitle: 'Condividi il Tuo Risultato',
    copyResultButton: 'Copia Risultato',
    resultCopiedTooltip: 'Risultato Copiato!',
    seoTitle: 'Calcolatore di Età - Calcola la Tua Età Online Gratuitamente',
    seoDescription: 'Usa il nostro calcolatore di età online gratuito per calcolare la tua età in base alla tua data di nascita. Disponibile in più lingue tra cui inglese, spagnolo, francese e altre.',
    seoKeywords: 'calcolatore di età, calcola età, data di nascita, calcolatore di età online gratuito, calcolatore di età in italiano',
    h1: 'Calcolatore di Età - Calcola la Mia Età',
    h2: 'Calcola la Tua Età in Pochi Secondi',
    moreInfoTitle: 'Più sulla tua vita',
    dayOfWeekLabel: 'Sei nato/a di',
    seasonLabel: 'La stagione in cui sei nato/a',
    nextBirthdayLabel: 'Giorni al tuo prossimo compleanno',
    daysOfWeekArray: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    seasonsArray: ['Inverno', 'Primavera', 'Estate', 'Autunno'],
    seoSections: [
        {
            heading: "Calcolatore di Età Istantaneo e Preciso",
            paragraphs: [
                "Ti sei mai chiesto, 'Quanti anni ho esattamente?' Il nostro Calcolatore di Età online fornisce una risposta precisa e immediata. Calcolare la tua età fino al giorno esatto può essere complesso, ma il nostro strumento lo rende semplicissimo. Inserisci semplicemente la tua data di nascita e calcoleremo istantaneamente la tua età cronologica in anni, mesi e giorni. È lo strumento perfetto per trovare rapidamente la tua età senza calcoli manuali.",
                "Che sia per documenti ufficiali, per curiosità o per pianificare eventi, conoscere la tua età precisa è essenziale. Questo calcolatore è progettato per tutti, offrendo un modo semplice, veloce e affidabile per determinare la tua età.",
            ],
        },
        {
            heading: "Come Scoprire la Tua Età Esatta",
            paragraphs: ["Usare il nostro strumento è incredibilmente semplice. Segui questi semplici passaggi per ottenere il tuo risultato in pochi secondi:"],
            list: [
              "Seleziona il Giorno, il Mese e l'Anno di nascita utilizzando i menu a discesa.",
              "Controlla che la data inserita sia corretta.",
              "Fai clic sul pulsante 'Calcola Età'.",
              "La tua età esatta verrà visualizzata istantaneamente, suddivisa in anni, mesi e giorni.",
            ]
        },
        {
            heading: "Precisione e Comodità a Portata di Mano",
            paragraphs: [
                "Calcolare manualmente l'età può essere complicato a causa degli anni bisestili e del numero variabile di giorni nei mesi. Il nostro Calcolatore di Età elimina le congetture e i potenziali errori utilizzando un algoritmo che tiene conto di queste complessità. Ciò garantisce di ricevere ogni volta un risultato estremamente preciso.",
                "Invece di perdere tempo con un calendario e calcoli complessi, ottieni una risposta istantanea e affidabile. Il nostro strumento è disponibile 24/7 su qualsiasi dispositivo, offrendoti la comodità di cui hai bisogno.",
            ]
        },
        {
            heading: "Più che Semplici Anni",
            paragraphs: [
                "La tua età è più di un semplice numero di anni. Il nostro calcolatore la scompone in anni, mesi e giorni per darti un quadro completo della tua linea temporale di vita. Questa suddivisione dettagliata è utile per comprendere le tappe fondamentali e apprezzare la durata completa della tua vita finora. Fornisce una prospettiva completa che un semplice conteggio degli anni non può offrire.",
            ]
        }
    ],
  },
  [LangEnum.HI]: {
    ...baseContent,
    navHome: 'होम',
    navCalculator: 'आयु कैलकुलेटर',
    navAbout: 'हमारे बारे में',
    navContact: 'संपर्क करें',
    footerPrivacyPolicy: 'गोपनीयता नीति',
    footerContactUs: 'हमसे संपर्क करें',
    footerRights: `© ${new Date().getFullYear()} आयु कैलकुलेटर। सर्वाधिकार सुरक्षित।`,
    homeTitle: 'सर्वश्रेष्ठ आयु कैलकुलेटर में आपका स्वागत है',
    homeDescription: 'हमारे मुफ़्त, उपयोग में आसान और बहुभाषी आयु कैलकुलेटर के साथ अपनी जन्म तिथि से तुरंत आयु की गणना करें। अपनी आयु वर्षों, महीनों और दिनों में जानें।',
    homeSubtitle: 'सटीक, तेज़ और मुफ़्त',
    homeCTAText: 'अब अपनी आयु की गणना करें',
    aboutTitle: 'हमारे आयु कैलकुलेटर के बारे में',
    aboutHeading: 'हमारा मिशन',
    aboutContent: [
        'वेब पर सबसे सहज और उपयोगकर्ता-अनुकूल आयु कैलकुलेटर में आपका स्वागत है। हमारा मिशन किसी भी व्यक्ति के लिए एक तेज़, सटीक और उपयोग में आसान उपकरण प्रदान करना है जिसे आयु या समय अवधि की गणना करने की आवश्यकता है। चाहे आप दिन-प्रतिदिन अपनी उम्र के बारे में जानने को उत्सुक हों, या आपको किसी आधिकारिक फॉर्म के लिए किसी की उम्र की गणना करने की आवश्यकता हो, हमारा उपकरण आपको सटीक जानकारी देने के लिए डिज़ाइन किया गया है जिसकी आपको आवश्यकता है।',
        'सरलता और वैश्विक पहुंच पर ध्यान देने के साथ विकसित, हमारा कैलकुलेटर कई भाषाओं का समर्थन करता है और इसे उत्तरदायी बनाने के लिए बनाया गया है, जो डेस्कटॉप से लेकर मोबाइल फोन तक किसी भी डिवाइस पर एक सहज अनुभव सुनिश्चित करता है। हम गोपनीयता में विश्वास करते हैं, यही कारण है कि हमारा उपकरण सभी गणना सीधे आपके ब्राउज़र में करता है, जिसका अर्थ है कि आपका डेटा कभी भी हमारे सर्वर पर नहीं भेजा जाता है। आपकी गोपनीयता की गारंटी है।',
        'हम अपने उपकरण को बेहतर बनाने और नई सुविधाएँ जोड़ने के लिए लगातार काम कर रहे हैं। अपनी आयु गणना आवश्यकताओं के लिए हमें चुनने के लिए धन्यवाद!'
    ],
    privacyTitle: 'गोपनीयता नीति',
    privacyHeading: 'आपकी गोपनीयता के प्रति हमारी प्रतिबद्धता',
    privacyContent: [
        { heading: 'परिचय', paragraphs: ['यह गोपनीयता नीति हमारी आयु कैलकुलेटर सेवा का उपयोग करते समय सूचना संग्रह, उपयोग और प्रकटीकरण के संबंध में हमारी प्रथाओं की रूपरेखा तैयार करती है। हम आपकी गोपनीयता की रक्षा करने और यह सुनिश्चित करने के लिए प्रतिबद्ध हैं कि हमारी वेबसाइट पर आपका सकारात्मक अनुभव हो।'] },
        { heading: 'जानकारी जो हम एकत्र नहीं करते हैं', paragraphs: ['हम बिल्कुल स्पष्ट होना चाहते हैं: हमारा आयु कैलकुलेटर उपकरण पूरी तरह से आपके डिवाइस (क्लाइंट-साइड) पर कार्य करने के लिए डिज़ाइन किया गया है। हम आपके द्वारा दर्ज किए गए किसी भी व्यक्तिगत डेटा, जैसे कि आपकी जन्म तिथि, को एकत्र, संग्रहीत या प्रसारित नहीं करते हैं। सभी गणनाएँ आपके ब्राउज़र के भीतर की जाती हैं, और पृष्ठ छोड़ने के बाद जानकारी छोड़ दी जाती है।'] },
        { heading: 'कुकीज़ और ट्रैकिंग', paragraphs: ['हम अपनी साइट पर आपकी गतिविधि की निगरानी के लिए कुकीज़ या किसी अन्य ट्रैकिंग तकनीक का उपयोग नहीं करते हैं। आपका सत्र पूरी तरह से गुमनाम है।'] },
        { heading: 'तृतीय-पक्ष सेवाएँ', paragraphs: ['यह वेबसाइट किसी भी तृतीय-पक्ष सेवाओं के साथ एकीकृत नहीं है जो व्यक्तिगत जानकारी एकत्र करेगी।'] },
        { heading: 'इस नीति में परिवर्तन', paragraphs: ['हम समय-समय पर अपनी गोपनीयता नीति को अपडेट कर सकते हैं। हम इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके आपको किसी भी बदलाव के बारे में सूचित करेंगे। आपको किसी भी बदलाव के लिए समय-समय पर इस गोपनीयता नीति की समीक्षा करने की सलाह दी जाती है।'] }
    ],
    contactTitle: 'हमसे संपर्क करें',
    contactHeading: 'संपर्क में रहें',
    contactIntro: 'हम आपकी प्रतिक्रिया और पूछताछ को महत्व देते हैं। यदि आपके कोई प्रश्न, सुझाव हैं, या समर्थन की आवश्यकता है, तो कृपया हमसे संपर्क करने में संकोच न करें। हम आपको जल्द से जल्द जवाब देने की पूरी कोशिश करेंगे।',
    contactEmail: 'contact.hi@agecalculator.com',
    title: 'आयु कैलकुलेटर',
    dateOfBirthLabel: 'आपकी जन्म तिथि',
    calculateButton: 'आयु की गणना करें',
    resultPrefix: 'आपकी उम्र है',
    resultSuffix: '',
    years: 'वर्ष',
    months: 'महीने',
    days: 'दिन',
    selectLanguage: 'भाषा चुनें',
    monthsArray: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
    dayLabel: 'दिन',
    monthLabel: 'महीना',
    yearLabel: 'वर्ष',
    shareTitle: 'इस उपकरण को साझा करें',
    copyLinkButton: 'लिंक कॉपी करें',
    copiedTooltip: 'कॉपी किया गया!',
    shareResultButton: 'परिणाम साझा करें',
    shareResultText: 'मुझे अभी पता चला कि मैं {years} साल, {months} महीने और {days} दिन का हूँ! अपनी सटीक उम्र की भी गणना करें:',
    shareResultTitle: 'अपना परिणाम साझा करें',
    copyResultButton: 'परिणाम कॉपी करें',
    resultCopiedTooltip: 'परिणाम कॉपी किया गया!',
    seoTitle: 'आयु कैलकुलेटर - अपनी आयु की ऑनलाइन निःशुल्क गणना करें',
    seoDescription: 'अपनी जन्मतिथि के आधार पर अपनी आयु की गणना करने के लिए हमारे निःशुल्क ऑनलाइन आयु कैलकुलेटर का उपयोग करें। अंग्रेजी, स्पेनिश, फ्रेंच और अन्य सहित कई भाषाओं में उपलब्ध है।',
    seoKeywords: 'आयु कैलकुलेटर, आयु की गणना, जन्म तिथि, मुफ्त ऑनलाइन आयु कैलकुलेटर, हिंदी में आयु कैलकुलेटर',
    h1: 'आयु कैलकुलेटर - मेरी आयु की गणना करें',
    h2: 'सेकंड में अपनी आयु की गणना करें',
    moreInfoTitle: 'आपके जीवन के बारे में अधिक जानकारी',
    dayOfWeekLabel: 'आपका जन्म एक',
    seasonLabel: 'जिस मौसम में आपका जन्म हुआ',
    nextBirthdayLabel: 'आपके अगले जन्मदिन तक के दिन',
    daysOfWeekArray: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
    seasonsArray: ['सर्दी', 'बसंत', 'गर्मी', 'शरद'],
    seoSections: [
        {
            heading: "तत्काल और सटीक आयु कैलकुलेटर",
            paragraphs: [
                "क्या आपने कभी सोचा है, 'मैं वास्तव में कितना पुराना हूँ?' हमारा ऑनलाइन आयु कैलकुलेटर एक सटीक और तत्काल उत्तर प्रदान करता है। अपनी उम्र को सटीक दिन तक गणना करना जटिल हो सकता है, लेकिन हमारा उपकरण इसे सरल बनाता है। बस अपनी जन्म तिथि दर्ज करें, और हम तुरंत आपकी कालानुक्रमिक आयु को वर्षों, महीनों और दिनों में गणना करेंगे। यह मैन्युअल गणना के बिना अपनी उम्र को जल्दी से पता लगाने के लिए एकदम सही उपकरण है।",
                "चाहे आधिकारिक दस्तावेजों के लिए, जिज्ञासा के लिए, या घटनाओं की योजना बनाने के लिए, अपनी सटीक उम्र जानना आवश्यक है। यह कैलकुलेटर सभी के लिए डिज़ाइन किया गया है, जो आपकी उम्र निर्धारित करने का एक सरल, तेज़ और विश्वसनीय तरीका प्रदान करता है।",
            ],
        },
        {
            heading: "अपनी सटीक आयु कैसे पता करें",
            paragraphs: ["हमारे उपकरण का उपयोग करना अविश्वसनीय रूप से सीधा है। सेकंड में अपना परिणाम प्राप्त करने के लिए इन सरल चरणों का पालन करें:"],
            list: [
              "ड्रॉपडाउन मेनू का उपयोग करके अपने जन्म का दिन, महीना और वर्ष चुनें।",
              "जांच लें कि दर्ज की गई तारीख सही है।",
              "'आयु की गणना करें' बटन पर क्लिक करें।",
              "आपकी सटीक आयु तुरंत प्रदर्शित होगी, जो वर्षों, महीनों और दिनों में विभाजित है।",
            ]
        },
        {
            heading: "आपकी उंगलियों पर सटीकता और सुविधा",
            paragraphs: [
                "लीप वर्ष और महीनों में दिनों की अलग-अलग संख्या के कारण मैन्युअल रूप से उम्र की गणना करना मुश्किल हो सकता है। हमारा आयु कैलकुलेटर एक एल्गोरिथ्म का उपयोग करके अनुमान और संभावित त्रुटियों को समाप्त करता है जो इन जटिलताओं का हिसाब रखता है। यह सुनिश्चित करता है कि आपको हर बार एक अत्यधिक सटीक परिणाम प्राप्त हो।",
                "एक कैलेंडर और जटिल गणित के साथ समय बिताने के बजाय, एक त्वरित और विश्वसनीय उत्तर प्राप्त करें। हमारा उपकरण किसी भी डिवाइस पर 24/7 उपलब्ध है, जो आपको आवश्यक सुविधा प्रदान करता है।",
            ]
        },
        {
            heading: "सिर्फ वर्षों से अधिक",
            paragraphs: [
                "आपकी उम्र सिर्फ वर्षों की संख्या से कहीं अधिक है। हमारा कैलकुलेटर इसे वर्षों, महीनों और दिनों में तोड़ता है ताकि आपको अपने जीवन की समय-सीमा की पूरी तस्वीर मिल सके। यह विस्तृत विश्लेषण मील के पत्थर को समझने और अब तक आपके जीवन की पूरी अवधि की सराहना करने के लिए उपयोगी है। यह एक व्यापक परिप्रेक्ष्य प्रदान करता है जो एक साधारण वर्ष गणना प्रदान नहीं कर सकती है।",
            ]
        }
    ],
  },
  [LangEnum.RU]: {
    ...baseContent,
    navHome: 'Главная',
    navCalculator: 'Калькулятор возраста',
    navAbout: 'О нас',
    navContact: 'Контакты',
    footerPrivacyPolicy: 'Политика конфиденциальности',
    footerContactUs: 'Свяжитесь с нами',
    footerRights: `© ${new Date().getFullYear()} Калькулятор возраста. Все права защищены.`,
    homeTitle: 'Добро пожаловать в лучший калькулятор возраста',
    homeDescription: 'Мгновенно рассчитайте возраст по дате рождения с помощью нашего бесплатного, простого в использовании и многоязычного калькулятора возраста. Узнайте свой возраст в годах, месяцах и днях.',
    homeSubtitle: 'Точно, быстро и бесплатно',
    homeCTAText: 'Рассчитать свой возраст сейчас',
    aboutTitle: 'О нашем калькуляторе возраста',
    aboutHeading: 'Наша миссия',
    aboutContent: [
        'Добро пожаловать в самый интуитивно понятный и удобный калькулятор возраста в Интернете. Наша миссия — предоставить быстрый, точный и простой в использовании инструмент для всех, кому необходимо рассчитать возраст или продолжительность времени. Если вам интересно узнать свой возраст с точностью до дня или вам нужно рассчитать чей-то возраст для официального документа, наш инструмент разработан, чтобы предоставить вам именно ту информацию, которая вам нужна.',
        'Разработанный с упором на простоту и глобальную доступность, наш калькулятор поддерживает несколько языков и создан адаптивным, обеспечивая безупречную работу на любом устройстве, от настольных компьютеров до мобильных телефонов. Мы верим в конфиденциальность, поэтому наш инструмент выполняет все расчеты непосредственно в вашем браузере, что означает, что ваши данные никогда не отправляются на наши серверы. Ваша конфиденциальность гарантирована.',
        'Мы постоянно работаем над улучшением нашего инструмента и добавлением новых функций. Спасибо, что выбрали нас для расчета вашего возраста!'
    ],
    privacyTitle: 'Политика конфиденциальности',
    privacyHeading: 'Наша приверженность вашей конфиденциальности',
    privacyContent: [
        { heading: 'Введение', paragraphs: ['Настоящая Политика конфиденциальности описывает наши методы сбора, использования и раскрытия информации при использовании нашего сервиса «Калькулятор возраста». Мы стремимся защищать вашу конфиденциальность и обеспечивать положительный опыт на нашем веб-сайте.'] },
        { heading: 'Информация, которую мы не собираем', paragraphs: ['Мы хотим быть абсолютно ясными: наш инструмент «Калькулятор возраста» предназначен для работы исключительно на вашем устройстве (на стороне клиента). Мы не собираем, не храним и не передаем никакие личные данные, которые вы вводите, например, вашу дату рождения. Все расчеты выполняются в вашем браузере, и информация удаляется, как только вы покидаете страницу.'] },
        { heading: 'Файлы cookie и отслеживание', paragraphs: ['Мы не используем файлы cookie или любые другие технологии отслеживания для мониторинга вашей активности на нашем сайте. Ваша сессия полностью анонимна.'] },
        { heading: 'Сторонние сервисы', paragraphs: ['Этот веб-сайт не интегрируется ни с какими сторонними сервисами, которые могли бы собирать личную информацию.'] },
        { heading: 'Изменения в настоящей Политике', paragraphs: ['Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую Политику конфиденциальности на этой странице. Рекомендуется периодически просматривать настоящую Политику конфиденциальности на предмет любых изменений.'] }
    ],
    contactTitle: 'Свяжитесь с нами',
    contactHeading: 'Напишите нам',
    contactIntro: 'Мы ценим ваши отзывы и запросы. Если у вас есть какие-либо вопросы, предложения или вам нужна поддержка, пожалуйста, не стесняйтесь обращаться к нам. Мы сделаем все возможное, чтобы ответить вам как можно скорее.',
    contactEmail: 'contact.ru@agecalculator.com',
    title: 'Калькулятор возраста',
    dateOfBirthLabel: 'Ваша дата рождения',
    calculateButton: 'Рассчитать возраст',
    resultPrefix: 'Вам',
    resultSuffix: '',
    years: 'лет',
    months: 'месяцев',
    days: 'дней',
    selectLanguage: 'Выберите язык',
    monthsArray: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayLabel: 'День',
    monthLabel: 'Месяц',
    yearLabel: 'Год',
    shareTitle: 'Поделиться этим инструментом',
    copyLinkButton: 'Копировать ссылку',
    copiedTooltip: 'Скопировано!',
    shareResultButton: 'Поделиться результатом',
    shareResultText: 'Я только что узнал(а), что мне {years} лет, {months} месяцев и {days} дней! Рассчитайте и вы свой точный возраст:',
    shareResultTitle: 'Поделитесь своим результатом',
    copyResultButton: 'Копировать результат',
    resultCopiedTooltip: 'Результат скопирован!',
    seoTitle: 'Калькулятор возраста - Рассчитайте свой возраст онлайн бесплатно',
    seoDescription: 'Используйте наш бесплатный онлайн-калькулятор возраста, чтобы рассчитать свой возраст на основе даты рождения. Доступно на нескольких языках, включая английский, испанский, французский и другие.',
    seoKeywords: 'калькулятор возраста, рассчитать возраст, дата рождения, бесплатный онлайн-калькулятор возраста, калькулятор возраста на русском',
    h1: 'Калькулятор возраста - Рассчитать мой возраст',
    h2: 'Рассчитайте свой возраст за секунды',
    moreInfoTitle: 'Больше о вашей жизни',
    dayOfWeekLabel: 'Вы родились в',
    seasonLabel: 'Время года, когда вы родились',
    nextBirthdayLabel: 'Дней до вашего следующего дня рождения',
    daysOfWeekArray: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    seasonsArray: ['Зима', 'Весна', 'Лето', 'Осень'],
    seoSections: [
        {
            heading: "Мгновенный и точный калькулятор возраста",
            paragraphs: [
                "Вы когда-нибудь задумывались: «Сколько мне лет на самом деле?» Наш онлайн-калькулятор возраста дает точный и немедленный ответ. Вычисление вашего возраста с точностью до дня может быть сложным, но наш инструмент делает это без усилий. Просто введите дату своего рождения, и мы мгновенно рассчитаем ваш хронологический возраст в годах, месяцах и днях. Это идеальный инструмент для быстрого определения вашего возраста без ручных вычислений.",
                "Будь то для официальных документов, из любопытства или для планирования мероприятий, знание вашего точного возраста необходимо. Этот калькулятор предназначен для всех, предлагая простой, быстрый и надежный способ определения вашего возраста.",
            ],
        },
        {
            heading: "Как узнать свой точный возраст",
            paragraphs: ["Использование нашего инструмента невероятно просто. Выполните эти простые шаги, чтобы получить результат за считанные секунды:"],
            list: [
              "Выберите день, месяц и год вашего рождения с помощью выпадающих меню.",
              "Дважды проверьте правильность введенной даты.",
              "Нажмите кнопку «Рассчитать возраст».",
              "Ваш точный возраст будет немедленно отображен с разбивкой на годы, месяцы и дни.",
            ]
        },
        {
            heading: "Точность и удобство на кончиках ваших пальцев",
            paragraphs: [
                "Ручной расчет возраста может быть затруднен из-за високосных лет и различного количества дней в месяцах. Наш калькулятор возраста устраняет догадки и потенциальные ошибки, используя алгоритм, который учитывает эти сложности. Это гарантирует, что вы каждый раз получаете очень точный результат.",
                "Вместо того чтобы тратить время на календарь и сложные математические вычисления, получите мгновенный и надежный ответ. Наш инструмент доступен 24/7 на любом устройстве, предоставляя вам необходимое удобство.",
            ]
        },
        {
            heading: "Больше, чем просто годы",
            paragraphs: [
                "Ваш возраст - это больше, чем просто количество лет. Наш калькулятор разбивает его на годы, месяцы и дни, чтобы дать вам полную картину вашей жизни. Эта подробная разбивка полезна для понимания вех и оценки полной продолжительности вашей жизни до сих пор. Она обеспечивает всестороннюю перспективу, которую не может предложить простой подсчет лет.",
            ]
        }
    ],
  },
  [LangEnum.JA]: {
    ...baseContent,
    navHome: 'ホーム',
    navCalculator: '年齢計算機',
    navAbout: '概要',
    navContact: 'お問い合わせ',
    footerPrivacyPolicy: 'プライバシーポリシー',
    footerContactUs: 'お問い合わせ',
    footerRights: `© ${new Date().getFullYear()} 年齢計算機. 全著作権所有.`,
    homeTitle: '究極の年齢計算機へようこそ',
    homeDescription: '無料で使いやすく、多言語対応の年齢計算機で、生年月日から即座に年齢を計算します。あなたの年齢を年、月、日で調べましょう。',
    homeSubtitle: '正確、高速、無料',
    homeCTAText: '今すぐ年齢を計算',
    aboutTitle: '私たちの年齢計算機について',
    aboutHeading: '私たちの使命',
    aboutContent: [
        'ウェブ上で最も直感的で使いやすい年齢計算機へようこそ。私たちの使命は、年齢や期間を計算する必要があるすべての人に、高速で正確、かつ使いやすいツールを提供することです。自分の年齢を正確に知りたい場合でも、公式な書類のために誰かの年齢を計算する必要がある場合でも、私たちのツールはあなたが必要とする正確な情報を提供するように設計されています。',
        'シンプルさとグローバルなアクセシビリティに焦点を当てて開発された私たちの計算機は、複数の言語をサポートし、デスクトップから携帯電話まで、あらゆるデバイスでシームレスな体験を保証するようにレスポンシブに作られています。私たちはプライバシーを信じており、そのため私たちのツールはすべての計算をブラウザで直接実行します。つまり、あなたのデータが私たちのサーバーに送信されることはありません。あなたのプライバシーは保証されています。',
        '私たちは常にツールを改善し、新しい機能を追加するために取り組んでいます。年齢計算のニーズに私たちを選んでいただきありがとうございます！'
    ],
    privacyTitle: 'プライバシーポリシー',
    privacyHeading: 'あなたのプライバシーに対する私たちのコミットメント',
    privacyContent: [
        { heading: 'はじめに', paragraphs: ['このプライバシーポリシーは、当社の年齢計算機サービスを使用する際の情報収集、使用、および開示に関する当社の慣行を概説しています。当社は、お客様のプライバシーを保護し、当社のウェブサイトで肯定的な体験をしていただくことをお約束します。'] },
        { heading: '当社が収集しない情報', paragraphs: ['私たちは明確にしておきたい：私たちの年齢計算機ツールは、完全にあなたのデバイス（クライアント側）で機能するように設計されています。生年月日など、お客様が入力した個人データを収集、保存、または送信することはありません。すべての計算はブラウザ内で行われ、ページを離れると情報は破棄されます。'] },
        { heading: 'クッキーと追跡', paragraphs: ['当社は、サイトでのお客様の活動を監視するためにクッキーやその他の追跡技術を使用しません。お客様のセッションは完全に匿名です。'] },
        { heading: '第三者サービス', paragraphs: ['このウェブサイトは、個人情報を収集する可能性のある第三者サービスとは統合されていません。'] },
        { heading: 'このポリシーの変更', paragraphs: ['当社は、プライバシーポリシーを随時更新することがあります。変更があった場合は、このページに新しいプライバシーポリシーを掲載してお知らせします。変更がないか、このプライバシーポリシーを定期的に確認することをお勧めします。'] }
    ],
    contactTitle: 'お問い合わせ',
    contactHeading: '連絡を取る',
    contactIntro: 'ご意見やお問い合わせをお待ちしております。ご質問、ご提案、またはサポートが必要な場合は、お気軽にお問い合わせください。できるだけ早くご返信できるよう最善を尽くします。',
    contactEmail: 'contact.ja@agecalculator.com',
    title: '年齢計算機',
    dateOfBirthLabel: 'あなたの生年月日',
    calculateButton: '年齢を計算',
    resultPrefix: 'あなたの年齢は',
    resultSuffix: 'です。',
    years: '歳',
    months: 'ヶ月',
    days: '日',
    selectLanguage: '言語を選択',
    monthsArray: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayLabel: '日',
    monthLabel: '月',
    yearLabel: '年',
    shareTitle: 'このツールを共有',
    copyLinkButton: 'リンクをコピー',
    copiedTooltip: 'コピーしました！',
    shareResultButton: '結果を共有',
    shareResultText: '私は{years}歳{months}ヶ月{days}日であることがわかりました！あなたも正確な年齢を計算してみてください：',
    shareResultTitle: 'あなたの結果を共有',
    copyResultButton: '結果をコピー',
    resultCopiedTooltip: '結果をコピーしました！',
    seoTitle: '年齢計算機 - オンラインで無料で年齢を計算',
    seoDescription: '無料のオンライン年齢計算機を使用して、生年月日に基づいて年齢を計算します。英語、スペイン語、フランス語など、複数の言語で利用できます。',
    seoKeywords: '年齢計算機, 年齢計算, 生年月日, 無料オンライン年齢計算機, 日本語の年齢計算機',
    h1: '年齢計算 - 私の年齢を計算',
    h2: '数秒で年齢を計算',
    moreInfoTitle: 'あなたの人生についてもっと詳しく',
    dayOfWeekLabel: 'あなたが生まれた曜日',
    seasonLabel: 'あなたが生まれた季節',
    nextBirthdayLabel: '次の誕生日までの日数',
    daysOfWeekArray: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    seasonsArray: ['冬', '春', '夏', '秋'],
    seoSections: [
        {
            heading: "即時かつ正確な年齢計算機",
            paragraphs: [
                "「私は正確に何歳だろう？」と思ったことはありますか？当社のオンライン年齢計算機は、正確で即時の答えを提供します。あなたの年齢を正確な日まで計算するのは複雑な場合がありますが、当社のツールを使えば簡単です。生年月日を入力するだけで、年、月、日であなたの暦年齢を即座に計算します。手動で計算することなく、すばやく年齢を見つけるのに最適なツールです。",
                "公式文書、好奇心、またはイベントの計画のためであれ、正確な年齢を知ることは不可欠です。この計算機は、すべての人のために設計されており、あなたの年齢を決定するためのシンプルで、速く、信頼性の高い方法を提供します。",
            ],
        },
        {
            heading: "正確な年齢を知る方法",
            paragraphs: ["当社のツールの使用は非常に簡単です。これらの簡単な手順に従って、数秒で結果を得ることができます。"],
            list: [
              "ドロップダウンメニューを使用して、生年月日、月、年を選択します。",
              "入力した日付が正しいことを再確認してください。",
              "「年齢を計算」ボタンをクリックします。",
              "あなたの正確な年齢が、年、月、日に分けて即座に表示されます。",
            ]
        },
        {
            heading: "指先で精度と利便性",
            paragraphs: [
                "閏年や月の日数が異なるため、手動で年齢を計算するのは難しい場合があります。当社の年齢計算機は、これらの複雑さを考慮したアルゴリズムを使用することで、当て推量や潜在的なエラーを排除します。これにより、毎回非常に正確な結果が得られることが保証されます。",
                "カレンダーと複雑な数学に時間を費やす代わりに、即時で信頼性の高い答えを得てください。当社のツールは、どのデバイスでも24時間年中無休で利用でき、必要な利便性を提供します。",
            ]
        },
        {
            heading: "単なる年数以上",
            paragraphs: [
                "あなたの年齢は、単なる年数ではありません。当社の計算機は、それを年、月、日に分解して、あなたの人生のタイムラインの全体像を提供します。この詳細な内訳は、マイルストーンを理解し、これまでの人生の全期間を評価するのに役立ちます。単純な年数カウントでは提供できない包括的な視点を提供します。",
            ]
        }
    ],
  },
  [LangEnum.ZH]: {
    ...baseContent,
    navHome: '首页',
    navCalculator: '年龄计算器',
    navAbout: '关于我们',
    navContact: '联系我们',
    footerPrivacyPolicy: '隐私政策',
    footerContactUs: '联系我们',
    footerRights: `© ${new Date().getFullYear()} 年龄计算器. 版权所有.`,
    homeTitle: '欢迎使用终极年龄计算器',
    homeDescription: '使用我们免费、易于使用且支持多种语言的年龄计算器，根据您的出生日期即时计算年龄。查明您的年龄（岁、月、日）。',
    homeSubtitle: '准确、快速、免费',
    homeCTAText: '立即计算您的年龄',
    aboutTitle: '关于我们的年龄计算器',
    aboutHeading: '我们的使命',
    aboutContent: [
        '欢迎使用网络上最直观、最用户友好的年龄计算器。我们的使命是为任何需要计算年龄或时间长度的人提供一个快速、准确且易于使用的工具。无论您是好奇自己的确切年龄，还是需要为官方表格计算某人的年龄，我们的工具都旨在为您提供所需的确切信息。',
        '我们的计算器以简单和全球可访问性为重点进行开发，支持多种语言，并且响应迅速，确保在从台式机到手机的任何设备上都能获得无缝体验。我们相信隐私，这就是为什么我们的工具直接在您的浏览器中执行所有计算，这意味着您的数据永远不会发送到我们的服务器。您的隐私得到保证。',
        '我们不断努力改进我们的工具并添加新功能。感谢您选择我们来满足您的年龄计算需求！'
    ],
    privacyTitle: '隐私政策',
    privacyHeading: '我们对您隐私的承诺',
    privacyContent: [
        { heading: '引言', paragraphs: ['本隐私政策概述了您在使用我们的年龄计算器服务时我们关于信息收集、使用和披露的做法。我们致力于保护您的隐私并确保您在我们的网站上获得积极的体验。'] },
        { heading: '我们不收集的信息', paragraphs: ['我们想明确一点：我们的年龄计算器工具旨在完全在您的设备上（客户端）运行。我们不收集、存储或传输您输入的任何个人数据，例如您的出生日期。所有计算都在您的浏览器中执行，一旦您离开页面，信息就会被丢弃。'] },
        { heading: 'Cookie 和跟踪', paragraphs: ['我们不使用 Cookie 或任何其他跟踪技术来监控您在我们网站上的活动。您的会话是完全匿名的。'] },
        { heading: '第三方服务', paragraphs: ['本网站不与任何会收集个人信息的第三方服务集成。'] },
        { heading: '本政策的变更', paragraphs: ['我们可能会不时更新我们的隐私政策。我们将通过在此页面上发布新的隐私政策来通知您任何更改。建议您定期查看本隐私政策以了解任何更改。'] }
    ],
    contactTitle: '联系我们',
    contactHeading: '保持联系',
    contactIntro: '我们重视您的反馈和询问。如果您有任何问题、建议或需要支持，请随时与我们联系。我们将尽力尽快回复您。',
    contactEmail: 'contact.zh@agecalculator.com',
    title: '年龄计算器',
    dateOfBirthLabel: '您的出生日期',
    calculateButton: '计算年龄',
    resultPrefix: '您是',
    resultSuffix: '岁。',
    years: '岁',
    months: '月',
    days: '天',
    selectLanguage: '选择语言',
    monthsArray: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    dayLabel: '日',
    monthLabel: '月',
    yearLabel: '年',
    shareTitle: '分享此工具',
    copyLinkButton: '复制链接',
    copiedTooltip: '已复制！',
    shareResultButton: '分享结果',
    shareResultText: '我刚发现我{years}岁{months}个月{days}天了！也来计算一下你的确切年龄吧：',
    shareResultTitle: '分享您的结果',
    copyResultButton: '复制结果',
    resultCopiedTooltip: '结果已复制！',
    seoTitle: '年龄计算器 - 免费在线计算您的年龄',
    seoDescription: '使用我们的免费在线年龄计算器，根据您的出生日期计算您的年龄。提供多种语言版本，包括英语、西班牙语、法语等。',
    seoKeywords: '年龄计算器, 计算年龄, 出生日期, 免费在线年龄计算器, 中文年龄计算器',
    h1: '年龄计算器 - 计算我的年龄',
    h2: '在几秒钟内计算您的年龄',
    moreInfoTitle: '关于你生活的更多信息',
    dayOfWeekLabel: '你出生在',
    seasonLabel: '你出生的季节',
    nextBirthdayLabel: '距离你下一个生日还有',
    daysOfWeekArray: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    seasonsArray: ['冬季', '春季', '夏季', '秋季'],
    seoSections: [
        {
            heading: "即时准确的年龄计算器",
            paragraphs: [
                "有没有想过，“我到底多大了？”我们的在线年龄计算器提供了一个精确而即时的答案。将您的年龄计算到确切的一天可能很复杂，但我们的工具使其变得毫不费力。只需输入您的出生日期，我们就会立即计算出您的实足年龄，以年、月、日为单位。这是无需手动计算即可快速查找年龄的完美工具。",
                "无论是用于官方文件、出于好奇心还是计划活动，了解您的确切年龄都至关重要。该计算器专为每个人设计，提供了一种简单、快速、可靠的方式来确定您的年龄。",
            ],
        },
        {
            heading: "如何找到您的确切年龄",
            paragraphs: ["使用我们的工具非常简单。请按照以下简单步骤在几秒钟内获得结果："],
            list: [
              "使用下拉菜单选择您的出生日、月和年。",
              "仔细检查输入的日期是否正确。",
              "单击“计算年龄”按钮。",
              "您的确切年龄将立即显示，并按年、月、日细分。",
            ]
        },
        {
            heading: "触手可及的精确与便利",
            paragraphs: [
                "由于闰年和月份天数不同，手动计算年龄可能很棘手。我们的年龄计算器使用一种考虑了这些复杂性的算法，消除了猜测和潜在的错误。这确保您每次都能获得高度准确的结果。",
                "无需花费时间在日历和复杂的数学上，即可获得即时可靠的答案。我们的工具可在任何设备上 24/7 全天候使用，为您提供所需的便利。",
            ]
        },
        {
            heading: "不仅仅是年份",
            paragraphs: [
                "您的年龄不仅仅是一个年数。我们的计算器将其分解为年、月、日，为您提供一幅完整的人生时间线图景。这种详细的分解有助于理解里程碑和欣赏您迄今为止的整个生命历程。它提供了一个简单的年数计数无法提供的全面视角。",
            ]
        }
    ],
  },
  [LangEnum.PL]: {
    ...baseContent,
    navHome: 'Strona główna',
    navCalculator: 'Kalkulator Wieku',
    navAbout: 'O nas',
    navContact: 'Kontakt',
    footerPrivacyPolicy: 'Polityka Prywatności',
    footerContactUs: 'Skontaktuj się z nami',
    footerRights: `© ${new Date().getFullYear()} Kalkulator Wieku. Wszelkie prawa zastrzeżone.`,
    homeTitle: 'Witamy w Ostatecznym Kalkulatorze Wieku',
    homeDescription: 'Oblicz wiek natychmiastowo na podstawie daty urodzenia za pomocą naszego darmowego, łatwego w obsłudze i wielojęzycznego kalkulatora wieku. Sprawdź swój wiek w latach, miesiącach i dniach.',
    homeSubtitle: 'Dokładnie, Szybko i za Darmo',
    homeCTAText: 'Oblicz Swój Wiek Teraz',
    aboutTitle: 'O naszym Kalkulatorze Wieku',
    aboutHeading: 'Nasza Misja',
    aboutContent: [
        'Witamy w najbardziej intuicyjnym i przyjaznym dla użytkownika Kalkulatorze Wieku w internecie. Naszą misją jest dostarczanie szybkiego, dokładnego i łatwego w użyciu narzędzia dla każdego, kto potrzebuje obliczyć wiek lub czas trwania. Niezależnie od tego, czy jesteś ciekawy swojego wieku co do dnia, czy potrzebujesz obliczyć czyjś wiek do oficjalnego formularza, nasze narzędzie jest zaprojektowane tak, aby dostarczyć Ci dokładnych informacji, których potrzebujesz.',
        'Opracowany z naciskiem na prostotę i globalną dostępność, nasz kalkulator obsługuje wiele języków i jest zbudowany tak, aby był responsywny, zapewniając płynne działanie на każdym urządzeniu, od komputerów stacjonarnych po telefony komórkowe. Wierzymy w prywatność, dlatego nasze narzędzie wykonuje wszystkie obliczenia bezpośrednio w Twojej przeglądarce, co oznacza, że Twoje dane nigdy nie są wysyłane на nasze serwery. Twoja prywatność jest gwarantowana.',
        'Ciągle pracujemy nad ulepszaniem naszego narzędzia i dodawaniem nowych funkcji. Dziękujemy za wybranie nas do swoich potrzeb związanych z obliczaniem wieku!'
    ],
    privacyTitle: 'Polityka Prywatności',
    privacyHeading: 'Nasze Zobowiązanie do Twojej Prywatności',
    privacyContent: [
        { heading: 'Wprowadzenie', paragraphs: ['Niniejsza Polityka Prywatności określa nasze praktyki dotyczące gromadzenia, wykorzystywania i ujawniania informacji podczas korzystania z naszej usługi Kalkulatora Wieku. Zobowiązujemy się do ochrony Twojej prywatności i zapewnienia pozytywnych doświadczeń na naszej stronie internetowej.'] },
        { heading: 'Informacje, których nie gromadzimy', paragraphs: ['Chcemy być absolutnie transparentni: nasze narzędzie Kalkulator Wieku jest zaprojektowane do działania w całości na Twoim urządzeniu (po stronie klienta). Nie gromadzimy, nie przechowujemy ani nie przesyłamy żadnych danych osobowych, które wprowadzasz, takich jak data urodzenia. Wszystkie obliczenia są wykonywane w Twojej przeglądarce, a informacje są usuwane po opuszczeniu strony.'] },
        { heading: 'Ciasteczka i Śledzenie', paragraphs: ['Nie używamy plików cookie ani żadnych innych technologii śledzących do monitorowania Twojej aktywności na naszej stronie. Twoja sesja jest całkowicie anonimowa.'] },
        { heading: 'Usługi Stron Trzecich', paragraphs: ['Ta strona internetowa nie integruje się z żadnymi usługami stron trzecich, które mogłyby gromadzić dane osobowe.'] },
        { heading: 'Zmiany w tej Polityce', paragraphs: ['Od czasu do czasu możemy aktualizować naszą Politykę Prywatności. O wszelkich zmianach poinformujemy Cię, publikując nową Politykę Prywatności na tej stronie. Zaleca się okresowe przeglądanie niniejszej Polityki Prywatności w celu zapoznania się z wszelkimi zmianami.'] }
    ],
    contactTitle: 'Skontaktuj się z nami',
    contactHeading: 'Nawiąż kontakt',
    contactIntro: 'Cenimy Twoje opinie i zapytania. Jeśli masz jakieś pytania, sugestie lub potrzebujesz wsparcia, nie wahaj się z nami skontaktować. Dołożymy wszelkich starań, aby odpowiedzieć jak najszybciej.',
    contactEmail: 'kontakt@agecalculator.com',
    title: 'Kalkulator Wieku',
    dateOfBirthLabel: 'Twoja Data Urodzenia',
    calculateButton: 'Oblicz Wiek',
    resultPrefix: 'Masz',
    resultSuffix: 'lat.',
    years: 'lata',
    months: 'miesiące',
    days: 'dni',
    selectLanguage: 'Wybierz Język',
    monthsArray: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    dayLabel: 'Dzień',
    monthLabel: 'Miesiąc',
    yearLabel: 'Rok',
    shareTitle: 'Udostępnij to narzędzie',
    copyLinkButton: 'Kopiuj link',
    copiedTooltip: 'Skopiowano!',
    shareResultButton: 'Udostępnij wynik',
    shareResultText: 'Właśnie dowiedziałem/am się, że mam {years} lat, {months} miesięcy i {days} dni! Oblicz też swój dokładny wiek:',
    shareResultTitle: 'Udostępnij swój wynik',
    copyResultButton: 'Kopiuj wynik',
    resultCopiedTooltip: 'Wynik skopiowany!',
    seoTitle: 'Kalkulator Wieku - Oblicz Swój Wiek Online za Darmo',
    seoDescription: 'Użyj naszego darmowego kalkulatora wieku online, aby obliczyć swój wiek na podstawie daty urodzenia. Dostępny w wielu językach, w tym angielskim, hiszpańskim, francuskim i innych.',
    seoKeywords: 'kalkulator wieku, oblicz wiek, data urodzenia, darmowy kalkulator wieku online, kalkulator wieku po polsku',
    h1: 'Kalkulator Wieku - Oblicz Mój Wiek',
    h2: 'Oblicz Swój Wiek w Kilka Sekund',
    moreInfoTitle: 'Więcej o Twoim życiu',
    dayOfWeekLabel: 'Urodziłeś/aś się w',
    seasonLabel: 'Pora roku, w której się urodziłeś/aś',
    nextBirthdayLabel: 'Dni do następnych urodzin',
    daysOfWeekArray: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
    seasonsArray: ['Zima', 'Wiosna', 'Lato', 'Jesień'],
    seoSections: [
        {
            heading: "Błyskawiczny i Dokładny Kalkulator Wieku",
            paragraphs: [
                "Czy kiedykolwiek zastanawiałeś się: 'Ile dokładnie mam lat?' Nasz internetowy Kalkulator Wieku dostarcza precyzyjnej i natychmiastowej odpowiedzi. Obliczanie wieku co do dnia może być skomplikowane, ale nasze narzędzie sprawia, że jest to bezproblemowe. Wystarczy wpisać datę urodzenia, a my natychmiast obliczymy Twój wiek chronologiczny w latach, miesiącach i dniach. To idealne narzędzie do szybkiego sprawdzenia wieku bez ręcznych obliczeń.",
                "Czy to do oficjalnych dokumentów, z ciekawości, czy do planowania wydarzeń, znajomość dokładnego wieku jest niezbędna. Ten kalkulator jest przeznaczony dla każdego, oferując prosty, szybki i niezawodny sposób na określenie wieku.",
            ],
        },
        {
            heading: "Jak Sprawdzić Swój Dokładny Wiek",
            paragraphs: ["Korzystanie z naszego narzędzia jest niezwykle proste. Postępuj zgodnie z tymi prostymi krokami, aby uzyskać wynik w kilka sekund:"],
            list: [
              "Wybierz dzień, miesiąc i rok urodzenia za pomocą rozwijanych menu.",
              "Sprawdź dwukrotnie, czy wprowadzona data jest poprawna.",
              "Kliknij przycisk 'Oblicz Wiek'.",
              "Twój dokładny wiek zostanie natychmiast wyświetlony, z podziałem na lata, miesiące i dni.",
            ]
        },
        {
            heading: "Precyzja i Wygoda na Wyciągnięcie Ręki",
            paragraphs: [
                "Ręczne obliczanie wieku może być trudne ze względu na lata przestępne i zmienną liczbę dni w miesiącach. Nasz Kalkulator Wieku eliminuje zgadywanie i potencjalne błędy, używając algorytmu, który uwzględnia te złożoności. Zapewnia to, że za każdym razem otrzymujesz bardzo dokładny wynik.",
                "Zamiast spędzać czas z kalendarzem i skomplikowaną matematyką, uzyskaj natychmiastową i wiarygodną odpowiedź. Nasze narzędzie jest dostępne 24/7 na dowolnym urządzeniu, zapewniając Ci potrzebną wygodę.",
            ]
        },
        {
            heading: "Więcej Niż Tylko Lata",
            paragraphs: [
                "Twój wiek to coś więcej niż tylko liczba lat. Nasz kalkulator rozkłada go na lata, miesiące i dni, aby dać Ci pełny obraz osi czasu Twojego życia. Ten szczegółowy podział jest przydatny do zrozumienia kamieni milowych i docenienia pełnego czasu trwania Twojego dotychczasowego życia. Zapewnia kompleksową perspektywę, której nie może zaoferować proste liczenie lat.",
            ]
        }
    ],
  },
  [LangEnum.FA]: {
    ...baseContent,
    navHome: 'خانه',
    navCalculator: 'محاسبه‌گر سن',
    navAbout: 'درباره ما',
    navContact: 'تماس با ما',
    footerPrivacyPolicy: 'سیاست حفظ حریم خصوصی',
    footerContactUs: 'تماس با ما',
    footerRights: `© ${new Date().getFullYear()} محاسبه‌گر سن. تمام حقوق محفوظ است.`,
    homeTitle: 'به بهترین محاسبه‌گر سن خوش آمدید',
    homeDescription: 'با محاسبه‌گر سن رایگان، آسان و چندزبانه ما، سن خود را فوراً از تاریخ تولدتان محاسبه کنید. سن خود را به سال، ماه و روز پیدا کنید.',
    homeSubtitle: 'دقیق، سریع و رایگان',
    homeCTAText: 'اکنون سن خود را محاسبه کنید',
    aboutTitle: 'درباره محاسبه‌گر سن ما',
    aboutHeading: 'ماموریت ما',
    aboutContent: [
        'به بصری‌ترین و کاربرپسندترین محاسبه‌گر سن در وب خوش آمدید. ماموریت ما ارائه ابزاری سریع، دقیق و آسان برای هر کسی است که نیاز به محاسبه سن یا مدت زمان دارد. چه کنجکاو باشید که سن دقیق خود را تا به امروز بدانید، یا نیاز به محاسبه سن کسی برای فرم رسمی داشته باشید، ابزار ما طوری طراحی شده است که اطلاعات دقیقی را که نیاز دارید به شما بدهد.',
        'با تمرکز بر سادگی و دسترسی جهانی، محاسبه‌گر ما از چندین زبان پشتیبانی می‌کند و به گونه‌ای واکنش‌گرا ساخته شده است که تجربه‌ای یکپارچه را در هر دستگاهی، از دسکتاپ تا تلفن همراه، تضمین می‌کند. ما به حریم خصوصی اعتقاد داریم، به همین دلیل ابزار ما تمام محاسبات را مستقیماً در مرورگر شما انجام می‌دهد، به این معنی که داده‌های شما هرگز به سرورهای ما ارسال نمی‌شود. حریم خصوصی شما تضمین شده است.',
        'ما دائماً در حال تلاش برای بهبود ابزار خود و افزودن ویژگی‌های جدید هستیم. از اینکه ما را برای نیازهای محاسبه سن خود انتخاب کردید سپاسگزاریم!'
    ],
    privacyTitle: 'سیاست حفظ حریم خصوصی',
    privacyHeading: 'تعهد ما به حریم خصوصی شما',
    privacyContent: [
        { heading: 'مقدمه', paragraphs: ['این سیاست حفظ حریم خصوصی، شیوه‌های ما در مورد جمع‌آوری، استفاده و افشای اطلاعات هنگام استفاده از سرویس محاسبه‌گر سن ما را تشریح می‌کند. ما متعهد به حفاظت از حریم خصوصی شما و اطمینان از تجربه مثبت شما در وب‌سایت ما هستیم.'] },
        { heading: 'اطلاعاتی که جمع‌آوری نمی‌کنیم', paragraphs: ['ما می‌خواهیم کاملاً شفاف باشیم: ابزار محاسبه‌گر سن ما طوری طراحی شده است که کاملاً روی دستگاه شما (سمت کاربر) کار کند. ما هیچ‌گونه داده شخصی که شما وارد می‌کنید، مانند تاریخ تولدتان، را جمع‌آوری، ذخیره یا منتقل نمی‌کنیم. تمام محاسبات در مرورگر شما انجام می‌شود و اطلاعات پس از خروج از صفحه حذف می‌شوند.'] },
        { heading: 'کوکی‌ها و ردیابی', paragraphs: ['ما از کوکی‌ها یا هیچ فناوری ردیابی دیگری برای نظارت بر فعالیت شما در سایت خود استفاده نمی‌کنیم. جلسه شما کاملاً ناشناس است.'] },
        { heading: 'خدمات شخص ثالث', paragraphs: ['این وب‌سایت با هیچ سرویس شخص ثالثی که اطلاعات شخصی را جمع‌آوری کند، ادغام نمی‌شود.'] },
        { heading: 'تغییرات در این سیاست', paragraphs: ['ما ممکن است هر از چند گاهی سیاست حفظ حریم خصوصی خود را به‌روز کنیم. ما شما را از هرگونه تغییر با ارسال سیاست حفظ حریم خصوصی جدید در این صفحه مطلع خواهیم کرد. به شما توصیه می‌شود که برای هرگونه تغییر، به طور دوره‌ای این سیاست حفظ حریم خصوصی را مرور کنید.'] }
    ],
    contactTitle: 'تماس با ما',
    contactHeading: 'در تماس باشید',
    contactIntro: 'ما برای بازخورد و سوالات شما ارزش قائل هستیم. اگر سوال، پیشنهاد یا نیاز به پشتیبانی دارید، لطفاً با ما تماس بگیرید. ما تمام تلاش خود را خواهیم کرد تا در اسرع وقت به شما پاسخ دهیم.',
    contactEmail: 'contact.fa@agecalculator.com',
    title: 'محاسبه‌گر سن',
    dateOfBirthLabel: 'تاریخ تولد شما',
    calculateButton: 'محاسبه سن',
    resultPrefix: 'شما',
    resultSuffix: 'سن دارید.',
    years: 'سال',
    months: 'ماه',
    days: 'روز',
    selectLanguage: 'انتخاب زبان',
    monthsArray: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
    dayLabel: 'روز',
    monthLabel: 'ماه',
    yearLabel: 'سال',
    shareTitle: 'این ابزار را به اشتراک بگذارید',
    copyLinkButton: 'کپی لینک',
    copiedTooltip: 'کپی شد!',
    shareResultButton: 'اشتراک‌گذاری نتیجه',
    shareResultText: 'من به تازگی متوجه شدم که {years} سال، {months} ماه و {days} روز سن دارم! سن دقیق خود را نیز محاسبه کنید:',
    shareResultTitle: 'نتیجه خود را به اشتراک بگذارید',
    copyResultButton: 'کپی نتیجه',
    resultCopiedTooltip: 'نتیجه کپی شد!',
    seoTitle: 'محاسبه‌گر سن - سن خود را آنلاین و رایگان محاسبه کنید',
    seoDescription: 'از محاسبه‌گر سن آنلاین رایگان ما برای محاسبه سن خود بر اساس تاریخ تولدتان استفاده کنید. به زبان‌های مختلفی از جمله انگلیسی، اسپانیایی، فرانسوی و غیره موجود است.',
    seoKeywords: 'محاسبه‌گر سن, محاسبه سن, تاریخ تولد, محاسبه‌گر سن آنلاین رایگان, محاسبه‌گر سن به فارسی',
    h1: 'محاسبه‌گر سن - سن من را محاسبه کن',
    h2: 'سن خود را در چند ثانیه محاسبه کنید',
    moreInfoTitle: 'اطلاعات بیشتر درباره زندگی شما',
    dayOfWeekLabel: 'شما در یک روز به دنیا آمدید',
    seasonLabel: 'فصلی که در آن به دنیا آمدید',
    nextBirthdayLabel: 'روزهای مانده تا تولد بعدی شما',
    daysOfWeekArray: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
    seasonsArray: ['زمستان', 'بهار', 'تابستان', 'پاییز'],
    seoSections: [
        {
            heading: "محاسبه‌گر سن فوری و دقیق",
            paragraphs: [
                "آیا تا به حال از خود پرسیده‌اید، 'من دقیقاً چند سال دارم؟' محاسبه‌گر سن آنلاین ما پاسخی دقیق و فوری ارائه می‌دهد. محاسبه سن شما تا روز دقیق می‌تواند پیچیده باشد، اما ابزار ما آن را بی‌دردسر می‌کند. به سادگی تاریخ تولد خود را وارد کنید، و ما فوراً سن تقویمی شما را به سال، ماه و روز محاسبه خواهیم کرد. این ابزار عالی برای یافتن سریع سن شما بدون محاسبات دستی است.",
                "چه برای اسناد رسمی، کنجکاو یا برنامه‌ریزی رویدادها، دانستن سن دقیق شما ضروری است. این محاسبه‌گر برای همه طراحی شده است و روشی ساده، سریع و قابل اعتماد برای تعیین سن شما ارائه می‌دهد.",
            ],
        },
        {
            heading: "چگونه سن دقیق خود را پیدا کنید",
            paragraphs: ["استفاده از ابزار ما فوق‌العاده ساده است. برای دریافت نتیجه در چند ثانیه این مراحل ساده را دنبال کنید:"],
            list: [
              "روز، ماه و سال تولد خود را با استفاده از منوهای کشویی انتخاب کنید.",
              "دوباره بررسی کنید که تاریخ وارد شده صحیح باشد.",
              "روی دکمه 'محاسبه سن' کلیک کنید.",
              "سن دقیق شما فوراً نمایش داده می‌شود، که به سال، ماه و روز تقسیم شده است.",
            ]
        },
        {
            heading: "دقت و راحتی در دستان شما",
            paragraphs: [
                "محاسبه دستی سن به دلیل سال‌های کبیسه و تعداد متفاوت روزها در ماه‌ها می‌تواند دشوار باشد. محاسبه‌گر سن ما با استفاده از الگوریتمی که این پیچیدگی‌ها را در نظر می‌گیرد، حدس و گمان و خطاهای احتمالی را از بین می‌برد. این تضمین می‌کند که شما هر بار نتیجه‌ای بسیار دقیق دریافت می‌کنید.",
                "به جای صرف وقت با تقویم و ریاضیات پیچیده، پاسخی فوری و قابل اعتماد دریافت کنید. ابزار ما به صورت 24/7 در هر دستگاهی در دسترس است و راحتی مورد نیاز شما را فراهم می‌کند.",
            ]
        },
        {
            heading: "بیش از فقط سال‌ها",
            paragraphs: [
                "سن شما چیزی بیش از یک عدد از سال‌هاست. محاسبه‌گر ما آن را به سال، ماه و روز تقسیم می‌کند تا تصویری کامل از جدول زمانی زندگی شما به شما بدهد. این تفکیک دقیق برای درک نقاط عطف و قدردانی از کل مدت زمان زندگی شما تا کنون مفید است. این یک دیدگاه جامع ارائه می‌دهد که شمارش ساده سال‌ها نمی‌تواند ارائه دهد.",
            ]
        }
    ],
  },
  [LangEnum.NL]: {
    ...baseContent,
    navHome: 'Home',
    navCalculator: 'Leeftijdscalculator',
    navAbout: 'Over ons',
    navContact: 'Contact',
    footerPrivacyPolicy: 'Privacybeleid',
    footerContactUs: 'Neem contact op',
    footerRights: `© ${new Date().getFullYear()} Leeftijdscalculator. Alle rechten voorbehouden.`,
    homeTitle: 'Welkom bij de Ultieme Leeftijdscalculator',
    homeDescription: 'Bereken direct uw leeftijd op basis van uw geboortedatum met onze gratis, gebruiksvriendelijke en meertalige leeftijdscalculator. Ontdek uw leeftijd in jaren, maanden en dagen.',
    homeSubtitle: 'Nauwkeurig, Snel en Gratis',
    homeCTAText: 'Bereken Nu Uw Leeftijd',
    aboutTitle: 'Over onze Leeftijdscalculator',
    aboutHeading: 'Onze Missie',
    aboutContent: [
        'Welkom bij de meest intuïtieve en gebruiksvriendelijke leeftijdscalculator op het web. Onze missie is om een snelle, nauwkeurige en eenvoudig te gebruiken tool te bieden voor iedereen die een leeftijd of tijdsduur moet berekenen. Of u nu nieuwsgierig bent naar uw eigen leeftijd tot op de dag nauwkeurig, of de leeftijd van iemand anders moet berekenen voor een officieel formulier, onze tool is ontworpen om u precies de informatie te geven die u nodig heeft.',
        'Ontwikkeld met een focus op eenvoud en wereldwijde toegankelijkheid, ondersteunt onze calculator meerdere talen en is hij responsief gebouwd, wat zorgt voor een naadloze ervaring op elk apparaat, van desktops tot mobiele telefoons. Wij geloven in privacy, daarom voert onze tool alle berekeningen rechtstreeks in uw browser uit, wat betekent dat uw gegevens nooit naar onze servers worden verzonden. Uw privacy is gegarandeerd.',
        'We werken voortdurend aan het verbeteren van onze tool en het toevoegen van nieuwe functies. Bedankt dat u voor ons heeft gekozen voor uw leeftijdsberekeningen!'
    ],
    privacyTitle: 'Privacybeleid',
    privacyHeading: 'Onze Toewijding aan Uw Privacy',
    privacyContent: [
        { heading: 'Inleiding', paragraphs: ['Dit Privacybeleid beschrijft onze praktijken met betrekking tot het verzamelen, gebruiken en openbaar maken van informatie wanneer u onze Leeftijdscalculator-service gebruikt. We zijn toegewijd aan het beschermen van uw privacy en ervoor te zorgen dat u een positieve ervaring heeft op onze website.'] },
        { heading: 'Informatie die we niet verzamelen', paragraphs: ['We willen heel duidelijk zijn: onze Leeftijdscalculator-tool is ontworpen om volledig op uw apparaat (client-side) te functioneren. We verzamelen, bewaren of verzenden geen persoonlijke gegevens die u invoert, zoals uw geboortedatum. Alle berekeningen worden uitgevoerd in uw browser en de informatie wordt verwijderd zodra u de pagina verlaat.'] },
        { heading: 'Cookies en Tracking', paragraphs: ['We gebruiken geen cookies of andere trackingtechnologieën om uw activiteit op onze site te monitoren. Uw sessie is volledig anoniem.'] },
        { heading: 'Diensten van Derden', paragraphs: ['Deze website integreert niet met diensten van derden die persoonlijke informatie zouden verzamelen.'] },
        { heading: 'Wijzigingen in dit Beleid', paragraphs: ['We kunnen ons Privacybeleid van tijd tot tijd bijwerken. We zullen u op de hoogte stellen van eventuele wijzigingen door het nieuwe Privacybeleid op deze pagina te plaatsen. U wordt geadviseerd om dit Privacybeleid periodiek te controleren op eventuele wijzigingen.'] }
    ],
    contactTitle: 'Neem contact op',
    contactHeading: 'Neem contact op',
    contactIntro: 'Wij waarderen uw feedback en vragen. Als u vragen, suggesties of ondersteuning nodig heeft, aarzel dan niet om contact met ons op te nemen. We zullen ons best doen om u zo snel mogelijk te antwoorden.',
    contactEmail: 'contact.nl@agecalculator.com',
    title: 'Leeftijdscalculator',
    dateOfBirthLabel: 'Uw Geboortedatum',
    calculateButton: 'Bereken Leeftijd',
    resultPrefix: 'U bent',
    resultSuffix: 'oud.',
    years: 'jaar',
    months: 'maanden',
    days: 'dagen',
    selectLanguage: 'Selecteer Taal',
    monthsArray: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
    dayLabel: 'Dag',
    monthLabel: 'Maand',
    yearLabel: 'Jaar',
    shareTitle: 'Deel deze Tool',
    copyLinkButton: 'Kopieer Link',
    copiedTooltip: 'Gekopieerd!',
    shareResultButton: 'Deel Resultaat',
    shareResultText: 'Ik heb net ontdekt dat ik {years} jaar, {months} maanden en {days} dagen oud ben! Bereken ook jouw exacte leeftijd:',
    shareResultTitle: 'Deel Uw Resultaat',
    copyResultButton: 'Kopieer Resultaat',
    resultCopiedTooltip: 'Resultaat Gekopieerd!',
    seoTitle: 'Leeftijdscalculator - Bereken Uw Leeftijd Online Gratis',
    seoDescription: 'Gebruik onze gratis online leeftijdscalculator om uw leeftijd te berekenen op basis van uw geboortedatum. Beschikbaar in meerdere talen, waaronder Engels, Spaans, Frans en meer.',
    seoKeywords: 'leeftijdscalculator, leeftijd berekenen, geboortedatum, gratis online leeftijdscalculator, leeftijdscalculator in het Nederlands',
    h1: 'Leeftijdscalculator - Bereken Mijn Leeftijd',
    h2: 'Bereken Uw Leeftijd in Seconden',
    moreInfoTitle: 'Meer over uw leven',
    dayOfWeekLabel: 'U bent geboren op een',
    seasonLabel: 'Het seizoen waarin u bent geboren',
    nextBirthdayLabel: 'Dagen tot uw volgende verjaardag',
    daysOfWeekArray: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
    seasonsArray: ['Winter', 'Lente', 'Zomer', 'Herfst'],
    seoSections: [
        {
            heading: "Directe en Nauwkeurige Leeftijdscalculator",
            paragraphs: [
                "Heeft u zich ooit afgevraagd: 'Hoe oud ben ik precies?' Onze online Leeftijdscalculator geeft een precies en onmiddellijk antwoord. Het berekenen van uw leeftijd tot op de exacte dag kan complex zijn, maar onze tool maakt het moeiteloos. Voer gewoon uw geboortedatum in, en we berekenen onmiddellijk uw chronologische leeftijd in jaren, maanden en dagen. Het is de perfecte tool om snel uw leeftijd te vinden zonder handmatige berekeningen.",
                "Of het nu voor officiële documenten, uit nieuwsgierigheid of voor het plannen van evenementen is, het kennen van uw precieze leeftijd is essentieel. Deze calculator is ontworpen voor iedereen en biedt een eenvoudige, snelle en betrouwbare manier om uw leeftijd te bepalen.",
            ],
        },
        {
            heading: "Hoe U Uw Exacte Leeftijd Kunt Vinden",
            paragraphs: ["Het gebruik van onze tool is ongelooflijk eenvoudig. Volg deze eenvoudige stappen om binnen enkele seconden uw resultaat te krijgen:"],
            list: [
              "Selecteer uw dag, maand en geboortejaar met behulp van de vervolgkeuzemenu's.",
              "Controleer nogmaals of de ingevoerde datum correct is.",
              "Klik op de knop 'Bereken Leeftijd'.",
              "Uw exacte leeftijd wordt onmiddellijk weergegeven, uitgesplitst in jaren, maanden en dagen.",
            ]
        },
        {
            heading: "Precisie en Gemak binnen Handbereik",
            paragraphs: [
                "Handmatig de leeftijd berekenen kan lastig zijn vanwege schrikkeljaren en het variërende aantal dagen in maanden. Onze Leeftijdscalculator elimineert het giswerk en mogelijke fouten door een algoritme te gebruiken dat rekening houdt met deze complexiteiten. Dit zorgt ervoor dat u elke keer een zeer nauwkeurig resultaat ontvangt.",
                "In plaats van tijd te besteden aan een kalender en complexe wiskunde, krijgt u een direct en betrouwbaar antwoord. Onze tool is 24/7 beschikbaar op elk apparaat en biedt u het gemak dat u nodig heeft.",
            ]
        },
        {
            heading: "Meer dan Alleen Jaren",
            paragraphs: [
                "Uw leeftijd is meer dan alleen een aantal jaren. Onze calculator splitst het op in jaren, maanden en dagen om u een compleet beeld te geven van uw levensloop. Deze gedetailleerde uitsplitsing is handig voor het begrijpen van mijlpalen en het waarderen van de volledige duur van uw leven tot nu toe. Het biedt een uitgebreid perspectief dat een eenvoudige jaartelling niet kan bieden.",
            ]
        }
    ],
  },
  [LangEnum.KO]: {
    ...baseContent,
    navHome: '홈',
    navCalculator: '나이 계산기',
    navAbout: '소개',
    navContact: '문의하기',
    footerPrivacyPolicy: '개인정보 처리방침',
    footerContactUs: '문의하기',
    footerRights: `© ${new Date().getFullYear()} 나이 계산기. 모든 권리 보유.`,
    homeTitle: '최고의 나이 계산기에 오신 것을 환영합니다',
    homeDescription: '무료이며 사용하기 쉽고 다국어를 지원하는 나이 계산기로 생년월일로부터 즉시 나이를 계산하세요. 당신의 나이를 년, 월, 일로 알아보세요.',
    homeSubtitle: '정확하고, 빠르고, 무료',
    homeCTAText: '지금 나이 계산하기',
    aboutTitle: '나이 계산기 소개',
    aboutHeading: '우리의 미션',
    aboutContent: [
        '웹에서 가장 직관적이고 사용자 친화적인 나이 계산기에 오신 것을 환영합니다. 우리의 미션은 나이나 기간을 계산해야 하는 모든 사람에게 빠르고 정확하며 사용하기 쉬운 도구를 제공하는 것입니다. 자신의 나이를 정확히 알고 싶거나 공식적인 양식을 위해 누군가의 나이를 계산해야 할 때, 저희 도구는 필요한 정확한 정보를 제공하도록 설계되었습니다.',
        '단순성과 글로벌 접근성에 중점을 두고 개발된 저희 계산기는 여러 언어를 지원하며 데스크톱에서 휴대폰에 이르기까지 모든 기기에서 원활한 경험을 보장하도록 반응형으로 제작되었습니다. 저희는 개인 정보 보호를 중요하게 생각하며, 그렇기 때문에 저희 도구는 모든 계산을 브라우저에서 직접 수행합니다. 즉, 귀하의 데이터는 절대 저희 서버로 전송되지 않습니다. 귀하의 개인 정보는 보장됩니다.',
        '저희는 지속적으로 도구를 개선하고 새로운 기능을 추가하기 위해 노력하고 있습니다. 나이 계산이 필요할 때 저희를 선택해 주셔서 감사합니다!'
    ],
    privacyTitle: '개인정보 처리방침',
    privacyHeading: '귀하의 개인정보 보호에 대한 우리의 약속',
    privacyContent: [
        { heading: '소개', paragraphs: ['이 개인정보 처리방침은 귀하가 저희 나이 계산기 서비스를 사용할 때 정보 수집, 사용 및 공개에 관한 저희의 관행을 설명합니다. 저희는 귀하의 개인 정보를 보호하고 저희 웹사이트에서 긍정적인 경험을 할 수 있도록 최선을 다하고 있습니다.'] },
        { heading: '수집하지 않는 정보', paragraphs: ['저희는 분명히 하고 싶습니다: 저희 나이 계산기 도구는 전적으로 귀하의 기기(클라이언트 측)에서 작동하도록 설계되었습니다. 저희는 귀하가 입력한 생년월일과 같은 개인 데이터를 수집, 저장 또는 전송하지 않습니다. 모든 계산은 귀하의 브라우저 내에서 수행되며, 귀하가 페이지를 떠나면 정보는 폐기됩니다.'] },
        { heading: '쿠키 및 추적', paragraphs: ['저희는 저희 사이트에서 귀하의 활동을 모니터링하기 위해 쿠키나 기타 추적 기술을 사용하지 않습니다. 귀하의 세션은 완전히 익명입니다.'] },
        { heading: '제3자 서비스', paragraphs: ['이 웹사이트는 개인 정보를 수집할 수 있는 제3자 서비스와 통합되지 않습니다.'] },
        { heading: '이 방침의 변경', paragraphs: ['저희는 때때로 개인정보 처리방침을 업데이트할 수 있습니다. 변경 사항이 있는 경우 이 페이지에 새로운 개인정보 처리방침을 게시하여 알려드립니다. 변경 사항이 있는지 정기적으로 이 개인정보 처리방침을 검토하는 것이 좋습니다.'] }
    ],
    contactTitle: '문의하기',
    contactHeading: '연락하기',
    contactIntro: '저희는 귀하의 피드백과 문의를 소중하게 생각합니다. 질문, 제안 또는 지원이 필요한 경우 주저하지 말고 저희에게 연락하십시오. 가능한 한 빨리 답변해 드리도록 최선을 다하겠습니다.',
    contactEmail: 'contact.ko@agecalculator.com',
    title: '나이 계산기',
    dateOfBirthLabel: '생년월일',
    calculateButton: '나이 계산',
    resultPrefix: '당신은',
    resultSuffix: '입니다.',
    years: '년',
    months: '개월',
    days: '일',
    selectLanguage: '언어 선택',
    monthsArray: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayLabel: '일',
    monthLabel: '월',
    yearLabel: '년',
    shareTitle: '이 도구 공유하기',
    copyLinkButton: '링크 복사',
    copiedTooltip: '복사됨!',
    shareResultButton: '결과 공유',
    shareResultText: '제가 {years}년 {months}개월 {days}일이라는 것을 방금 알게 되었습니다! 당신의 정확한 나이도 계산해보세요:',
    shareResultTitle: '결과 공유하기',
    copyResultButton: '결과 복사',
    resultCopiedTooltip: '결과가 복사되었습니다!',
    seoTitle: '나이 계산기 - 온라인에서 무료로 나이 계산',
    seoDescription: '무료 온라인 나이 계산기를 사용하여 생년월일을 기준으로 나이를 계산하세요. 영어, 스페인어, 프랑스어 등 여러 언어로 제공됩니다.',
    seoKeywords: '나이 계산기, 나이 계산, 생년월일, 무료 온라인 나이 계산기, 한국어 나이 계산기',
    h1: '나이 계산기 - 내 나이 계산하기',
    h2: '몇 초 만에 나이 계산하기',
    moreInfoTitle: '당신의 삶에 대한 추가 정보',
    dayOfWeekLabel: '당신이 태어난 요일',
    seasonLabel: '당신이 태어난 계절',
    nextBirthdayLabel: '다음 생일까지 남은 날',
    daysOfWeekArray: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    seasonsArray: ['겨울', '봄', '여름', '가을'],
    seoSections: [
        {
            heading: "즉각적이고 정확한 나이 계산기",
            paragraphs: [
                "'내 나이가 정확히 몇 살이지?'라고 궁금해한 적이 있습니까? 저희 온라인 나이 계산기는 정확하고 즉각적인 답변을 제공합니다. 나이를 정확한 날짜까지 계산하는 것은 복잡할 수 있지만 저희 도구를 사용하면 간편합니다. 생년월일을 입력하기만 하면 저희가 즉시 당신의 만 나이를 년, 월, 일 단위로 계산해 드립니다. 수동 계산 없이 빠르게 나이를 알 수 있는 완벽한 도구입니다.",
                "공식 문서, 호기심 또는 행사 계획을 위해서든 정확한 나이를 아는 것은 필수적입니다. 이 계산기는 모든 사람을 위해 설계되었으며, 나이를 결정하는 간단하고 빠르며 신뢰할 수 있는 방법을 제공합니다.",
            ],
        },
        {
            heading: "정확한 나이를 아는 방법",
            paragraphs: ["저희 도구를 사용하는 것은 매우 간단합니다. 다음의 간단한 단계를 따라 몇 초 안에 결과를 얻으세요."],
            list: [
              "드롭다운 메뉴를 사용하여 출생일, 월, 년을 선택하세요.",
              "입력한 날짜가 올바른지 다시 확인하세요.",
              "'나이 계산' 버튼을 클릭하세요.",
              "정확한 나이가 즉시 표시되며, 년, 월, 일로 구분됩니다.",
            ]
        },
        {
            heading: "손끝에서 느끼는 정확성과 편리함",
            paragraphs: [
                "윤년과 월별 일수가 다르기 때문에 수동으로 나이를 계산하는 것은 까다로울 수 있습니다. 저희 나이 계산기는 이러한 복잡성을 고려한 알고리즘을 사용하여 추측과 잠재적인 오류를 제거합니다. 이를 통해 매번 매우 정확한 결과를 얻을 수 있습니다.",
                "달력과 복잡한 수학에 시간을 낭비하는 대신 즉각적이고 신뢰할 수 있는 답변을 얻으세요. 저희 도구는 모든 기기에서 연중무휴 24시간 이용 가능하며, 필요한 편리함을 제공합니다.",
            ]
        },
        {
            heading: "단순한 나이를 넘어",
            paragraphs: [
                "당신의 나이는 단순한 숫자가 아닙니다. 저희 계산기는 이를 년, 월, 일로 나누어 당신의 인생 타임라인을 완벽하게 보여줍니다. 이 상세한 분석은 이정표를 이해하고 지금까지의 삶의 전체 기간을 감사하는 데 유용합니다. 이는 단순한 나이 계산이 제공할 수 없는 포괄적인 관점을 제공합니다.",
            ]
        }
    ],
  },
  [LangEnum.TH]: {
    ...baseContent,
    navHome: 'หน้าแรก',
    navCalculator: 'เครื่องคำนวณอายุ',
    navAbout: 'เกี่ยวกับเรา',
    navContact: 'ติดต่อเรา',
    footerPrivacyPolicy: 'นโยบายความเป็นส่วนตัว',
    footerContactUs: 'ติดต่อเรา',
    footerRights: `© ${new Date().getFullYear()} เครื่องคำนวณอายุ. สงวนลิขสิทธิ์.`,
    homeTitle: 'ยินดีต้อนรับสู่เครื่องคำนวณอายุที่ดีที่สุด',
    homeDescription: 'คำนวณอายุจากวันเกิดของคุณได้ทันทีด้วยเครื่องคำนวณอายุที่ฟรี ใช้งานง่าย และรองรับหลายภาษาของเรา ค้นหาอายุของคุณเป็นปี เดือน และวัน',
    homeSubtitle: 'แม่นยำ รวดเร็ว และฟรี',
    homeCTAText: 'คำนวณอายุของคุณตอนนี้',
    aboutTitle: 'เกี่ยวกับเครื่องคำนวณอายุของเรา',
    aboutHeading: 'ภารกิจของเรา',
    aboutContent: [
        'ยินดีต้อนรับสู่เครื่องคำนวณอายุที่ใช้งานง่ายและเป็นมิตรที่สุดบนเว็บ ภารกิจของเราคือการจัดหาเครื่องมือที่รวดเร็ว แม่นยำ และใช้งานง่ายสำหรับทุกคนที่ต้องการคำนวณอายุหรือระยะเวลา ไม่ว่าคุณจะสงสัยเกี่ยวกับอายุของตัวเองจนถึงวันปัจจุบัน หรือต้องการคำนวณอายุของใครบางคนสำหรับแบบฟอร์มที่เป็นทางการ เครื่องมือของเราถูกออกแบบมาเพื่อให้ข้อมูลที่ถูกต้องตามที่คุณต้องการ',
        'พัฒนาโดยเน้นความเรียบง่ายและการเข้าถึงทั่วโลก เครื่องคำนวณของเรารองรับหลายภาษาและสร้างขึ้นให้ตอบสนองได้ดี ทำให้มั่นใจได้ถึงประสบการณ์ที่ราบรื่นบนทุกอุปกรณ์ ตั้งแต่เดสก์ท็อปไปจนถึงโทรศัพท์มือถือ เราเชื่อในความเป็นส่วนตัว ซึ่งเป็นเหตุผลว่าทำไมเครื่องมือของเราจึงทำการคำนวณทั้งหมดโดยตรงในเบราว์เซอร์ของคุณ ซึ่งหมายความว่าข้อมูลของคุณจะไม่ถูกส่งไปยังเซิร์ฟเวอร์ของเรา ความเป็นส่วนตัวของคุณได้รับการรับประกัน',
        'เราทำงานอย่างต่อเนื่องเพื่อปรับปรุงเครื่องมือของเราและเพิ่มคุณสมบัติใหม่ๆ ขอบคุณที่เลือกเราสำหรับความต้องการในการคำนวณอายุของคุณ!'
    ],
    privacyTitle: 'นโยบายความเป็นส่วนตัว',
    privacyHeading: 'ความมุ่งมั่นของเราต่อความเป็นส่วนตัวของคุณ',
    privacyContent: [
        { heading: 'บทนำ', paragraphs: ['นโยบายความเป็นส่วนตัวนี้สรุปแนวทางปฏิบัติของเราเกี่ยวกับการรวบรวมข้อมูล การใช้ และการเปิดเผยข้อมูลเมื่อคุณใช้บริการเครื่องคำนวณอายุของเรา เรามุ่งมั่นที่จะปกป้องความเป็นส่วนตัวของคุณและรับรองว่าคุณจะได้รับประสบการณ์ที่ดีบนเว็บไซต์ของเรา'] },
        { heading: 'ข้อมูลที่เราไม่รวบรวม', paragraphs: ['เราต้องการให้ชัดเจน: เครื่องมือคำนวณอายุของเราได้รับการออกแบบมาให้ทำงานบนอุปกรณ์ของคุณทั้งหมด (ฝั่งไคลเอ็นต์) เราไม่รวบรวม จัดเก็บ หรือส่งข้อมูลส่วนบุคคลใดๆ ที่คุณป้อน เช่น วันเกิดของคุณ การคำนวณทั้งหมดจะดำเนินการภายในเบราว์เซอร์ของคุณ และข้อมูลจะถูกละทิ้งเมื่อคุณออกจากหน้า'] },
        { heading: 'คุกกี้และการติดตาม', paragraphs: ['เราไม่ใช้คุกกี้หรือเทคโนโลยีการติดตามอื่นๆ เพื่อตรวจสอบกิจกรรมของคุณบนเว็บไซต์ของเรา เซสชันของคุณไม่เปิดเผยตัวตนโดยสมบูรณ์'] },
        { heading: 'บริการของบุคคลที่สาม', paragraphs: ['เว็บไซต์นี้ไม่ได้รวมเข้ากับบริการของบุคคลที่สามใดๆ ที่จะรวบรวมข้อมูลส่วนบุคคล'] },
        { heading: 'การเปลี่ยนแปลงนโยบายนี้', paragraphs: ['เราอาจปรับปรุงนโยบายความเป็นส่วนตัวของเราเป็นครั้งคราว เราจะแจ้งให้คุณทราบถึงการเปลี่ยนแปลงใดๆ โดยการโพสต์นโยบายความเป็นส่วนตัวใหม่ในหน้านี้ ขอแนะนำให้คุณตรวจสอบนโยบายความเป็นส่วนตัวนี้เป็นระยะๆ สำหรับการเปลี่ยนแปลงใดๆ'] }
    ],
    contactTitle: 'ติดต่อเรา',
    contactHeading: 'ติดต่อเรา',
    contactIntro: 'เราให้ความสำคัญกับความคิดเห็นและข้อสงสัยของคุณ หากคุณมีคำถาม ข้อเสนอแนะ หรือต้องการความช่วยเหลือ โปรดอย่าลังเลที่จะติดต่อเรา เราจะพยายามอย่างเต็มที่เพื่อตอบกลับคุณโดยเร็วที่สุด',
    contactEmail: 'contact.th@agecalculator.com',
    title: 'เครื่องคำนวณอายุ',
    dateOfBirthLabel: 'วันเกิดของคุณ',
    calculateButton: 'คำนวณอายุ',
    resultPrefix: 'คุณอายุ',
    resultSuffix: '',
    years: 'ปี',
    months: 'เดือน',
    days: 'วัน',
    selectLanguage: 'เลือกภาษา',
    monthsArray: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    dayLabel: 'วัน',
    monthLabel: 'เดือน',
    yearLabel: 'ปี',
    shareTitle: 'แชร์เครื่องมือนี้',
    copyLinkButton: 'คัดลอกลิงก์',
    copiedTooltip: 'คัดลอกแล้ว!',
    shareResultButton: 'แชร์ผลลัพธ์',
    shareResultText: 'ฉันเพิ่งรู้ว่าฉันอายุ {years} ปี {months} เดือน และ {days} วัน! คำนวณอายุที่แน่นอนของคุณด้วย:',
    shareResultTitle: 'แชร์ผลลัพธ์ของคุณ',
    copyResultButton: 'คัดลอกผลลัพธ์',
    resultCopiedTooltip: 'คัดลอกผลลัพธ์แล้ว!',
    seoTitle: 'เครื่องคำนวณอายุ - คำนวณอายุของคุณออนไลน์ฟรี',
    seoDescription: 'ใช้เครื่องคำนวณอายุออนไลน์ฟรีของเราเพื่อคำนวณอายุของคุณตามวันเกิดของคุณ มีให้บริการในหลายภาษา รวมถึงภาษาอังกฤษ สเปน ฝรั่งเศส และอื่นๆ',
    seoKeywords: 'เครื่องคำนวณอายุ, คำนวณอายุ, วันเกิด, เครื่องคำนวณอายุออนไลน์ฟรี, เครื่องคำนวณอายุภาษาไทย',
    h1: 'เครื่องคำนวณอายุ - คำนวณอายุของฉัน',
    h2: 'คำนวณอายุของคุณในไม่กี่วินาที',
    moreInfoTitle: 'ข้อมูลเพิ่มเติมเกี่ยวกับชีวิตของคุณ',
    dayOfWeekLabel: 'คุณเกิดวัน',
    seasonLabel: 'ฤดูที่คุณเกิด',
    nextBirthdayLabel: 'วันก่อนถึงวันเกิดครั้งต่อไปของคุณ',
    daysOfWeekArray: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
    seasonsArray: ['ฤดูหนาว', 'ฤดูใบไม้ผลิ', 'ฤดูร้อน', 'ฤดูใบไม้ร่วง'],
    seoSections: [
        {
            heading: "เครื่องคำนวณอายุที่รวดเร็วและแม่นยำ",
            paragraphs: [
                "เคยสงสัยไหมว่า 'ฉันอายุเท่าไหร่กันแน่?' เครื่องคำนวณอายุออนไลน์ของเราให้คำตอบที่แม่นยำและทันที การคำนวณอายุของคุณจนถึงวันที่แน่นอนอาจซับซ้อน แต่เครื่องมือของเราทำให้เป็นเรื่องง่าย เพียงป้อนวันเกิดของคุณ แล้วเราจะคำนวณอายุตามลำดับเวลาของคุณเป็นปี เดือน และวันทันที เป็นเครื่องมือที่สมบูรณ์แบบสำหรับการค้นหาอายุของคุณอย่างรวดเร็วโดยไม่ต้องคำนวณด้วยตนเอง",
                "ไม่ว่าจะเป็นสำหรับเอกสารราชการ ความอยากรู้ หรือการวางแผนงานต่างๆ การทราบอายุที่แม่นยำของคุณเป็นสิ่งจำเป็น เครื่องคำนวณนี้ออกแบบมาสำหรับทุกคน โดยนำเสนอวิธีที่ง่าย รวดเร็ว และเชื่อถือได้ในการกำหนดอายุของคุณ",
            ],
        },
        {
            heading: "วิธีหาอายุที่แน่นอนของคุณ",
            paragraphs: ["การใช้เครื่องมือของเรานั้นตรงไปตรงมาอย่างไม่น่าเชื่อ ทำตามขั้นตอนง่ายๆ เหล่านี้เพื่อรับผลลัพธ์ของคุณในไม่กี่วินาที:"],
            list: [
              "เลือกวัน เดือน และปีเกิดของคุณโดยใช้เมนูแบบเลื่อนลง",
              "ตรวจสอบอีกครั้งว่าวันที่ป้อนถูกต้อง",
              "คลิกปุ่ม 'คำนวณอายุ'",
              "อายุที่แน่นอนของคุณจะแสดงขึ้นทันที โดยแบ่งเป็นปี เดือน และวัน",
            ]
        },
        {
            heading: "ความแม่นยำและความสะดวกสบายที่ปลายนิ้วของคุณ",
            paragraphs: [
                "การคำนวณอายุด้วยตนเองอาจเป็นเรื่องยุ่งยากเนื่องจากปีอธิกสุรทินและจำนวนวันที่แตกต่างกันในแต่ละเดือน เครื่องคำนวณอายุของเราช่วยขจัดการคาดเดาและข้อผิดพลาดที่อาจเกิดขึ้นโดยใช้อัลกอริทึมที่คำนึงถึงความซับซ้อนเหล่านี้ สิ่งนี้ทำให้มั่นใจได้ว่าคุณจะได้รับผลลัพธ์ที่แม่นยำสูงทุกครั้ง",
                "แทนที่จะใช้เวลากับปฏิทินและคณิตศาสตร์ที่ซับซ้อน รับคำตอบที่รวดเร็วและเชื่อถือได้ เครื่องมือของเราพร้อมให้บริการทุกวันตลอด 24 ชั่วโมงบนทุกอุปกรณ์ มอบความสะดวกสบายที่คุณต้องการ",
            ]
        },
        {
            heading: "มากกว่าแค่ปี",
            paragraphs: [
                "อายุของคุณเป็นมากกว่าจำนวนปี เครื่องคำนวณของเราแบ่งมันออกเป็นปี เดือน และวัน เพื่อให้คุณเห็นภาพรวมของไทม์ไลน์ชีวิตของคุณ การแจกแจงโดยละเอียดนี้มีประโยชน์สำหรับการทำความเข้าใจเหตุการณ์สำคัญและชื่นชมระยะเวลาทั้งหมดของชีวิตของคุณจนถึงตอนนี้ มันให้มุมมองที่ครอบคลุมซึ่งการนับปีแบบง่ายๆ ไม่สามารถให้ได้",
            ]
        }
    ],
  },
  [LangEnum.TR]: {
    ...baseContent,
    navHome: 'Ana Sayfa',
    navCalculator: 'Yaş Hesaplayıcı',
    navAbout: 'Hakkımızda',
    navContact: 'İletişim',
    footerPrivacyPolicy: 'Gizlilik Politikası',
    footerContactUs: 'Bize Ulaşın',
    footerRights: `© ${new Date().getFullYear()} Yaş Hesaplayıcı. Tüm hakları saklıdır.`,
    homeTitle: 'En İyi Yaş Hesaplayıcıya Hoş Geldiniz',
    homeDescription: 'Ücretsiz, kullanımı kolay ve çok dilli yaş hesaplayıcımızla doğum tarihinize göre anında yaşınızı hesaplayın. Yaşınızı yıl, ay ve gün olarak öğrenin.',
    homeSubtitle: 'Doğru, Hızlı ve Ücretsiz',
    homeCTAText: 'Yaşınızı Şimdi Hesaplayın',
    aboutTitle: 'Yaş Hesaplayıcımız Hakkında',
    aboutHeading: 'Misyonumuz',
    aboutContent: [
        'Web\'deki en sezgisel ve kullanıcı dostu Yaş Hesaplayıcıya hoş geldiniz. Misyonumuz, yaş veya süre hesaplaması gereken herkes için hızlı, doğru ve kullanımı kolay bir araç sağlamaktır. Kendi yaşınızı güne kadar merak ediyor olun veya resmi bir form için birinin yaşını hesaplamanız gerekiyorsa, aracımız size tam olarak ihtiyacınız olan bilgiyi vermek üzere tasarlanmıştır.',
        'Basitlik ve küresel erişilebilirlik odaklı geliştirilen hesaplayıcımız, birden çok dili destekler ve masaüstü bilgisayarlardan cep telefonlarına kadar her cihazda sorunsuz bir deneyim sağlamak için duyarlı olarak oluşturulmuştur. Gizliliğe inanıyoruz, bu yüzden aracımız tüm hesaplamaları doğrudan tarayıcınızda gerçekleştirir, bu da verilerinizin asla sunucularımıza gönderilmediği anlamına gelir. Gizliliğiniz garantilidir.',
        'Aracımızı sürekli olarak geliştirmek ve yeni özellikler eklemek için çalışıyoruz. Yaş hesaplama ihtiyaçlarınız için bizi seçtiğiniz için teşekkür ederiz!'
    ],
    privacyTitle: 'Gizlilik Politikası',
    privacyHeading: 'Gizliliğinize Olan Bağlılığımız',
    privacyContent: [
        { heading: 'Giriş', paragraphs: ['Bu Gizlilik Politikası, Yaş Hesaplayıcı hizmetimizi kullandığınızda bilgi toplama, kullanma ve ifşa etme konusundaki uygulamalarımızı özetlemektedir. Gizliliğinizi korumayı ve web sitemizde olumlu bir deneyim yaşamanızı sağlamayı taahhüt ediyoruz.'] },
        { heading: 'Toplamadığımız Bilgiler', paragraphs: ['Açık olmak istiyoruz: Yaş Hesaplayıcı aracımız tamamen cihazınızda (istemci tarafında) çalışacak şekilde tasarlanmıştır. Doğum tarihiniz gibi girdiğiniz hiçbir kişisel veriyi toplamıyor, saklamıyor veya iletmiyoruz. Tüm hesaplamalar tarayıcınızda gerçekleştirilir ve sayfadan ayrıldığınızda bilgiler atılır.'] },
        { heading: 'Çerezler ve Takip', paragraphs: ['Sitemizdeki etkinliğinizi izlemek için çerez veya başka herhangi bir izleme teknolojisi kullanmıyoruz. Oturumunuz tamamen anonimdir.'] },
        { heading: 'Üçüncü Taraf Hizmetleri', paragraphs: ['Bu web sitesi, kişisel bilgi toplayabilecek herhangi bir üçüncü taraf hizmetiyle entegre olmaz.'] },
        { heading: 'Bu Politikadaki Değişiklikler', paragraphs: ['Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Herhangi bir değişikliği bu sayfada yeni Gizlilik Politikasını yayınlayarak size bildireceğiz. Herhangi bir değişiklik için bu Gizlilik Politikasını periyodik olarak gözden geçirmeniz tavsiye edilir.'] }
    ],
    contactTitle: 'Bize Ulaşın',
    contactHeading: 'İletişime Geçin',
    contactIntro: 'Geri bildirimlerinize ve sorularınıza değer veriyoruz. Herhangi bir sorunuz, öneriniz veya desteğe ihtiyacınız varsa, lütfen bizimle iletişime geçmekten çekinmeyin. Size en kısa sürede yanıt vermek için elimizden gelenin en iyisini yapacağız.',
    contactEmail: 'contact.tr@agecalculator.com',
    title: 'Yaş Hesaplayıcı',
    dateOfBirthLabel: 'Doğum Tarihiniz',
    calculateButton: 'Yaşı Hesapla',
    resultPrefix: 'Siz',
    resultSuffix: 'yaşındasınız.',
    years: 'yıl',
    months: 'ay',
    days: 'gün',
    selectLanguage: 'Dil Seçin',
    monthsArray: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    dayLabel: 'Gün',
    monthLabel: 'Ay',
    yearLabel: 'Yıl',
    shareTitle: 'Bu Aracı Paylaş',
    copyLinkButton: 'Bağlantıyı Kopyala',
    copiedTooltip: 'Kopyalandı!',
    shareResultButton: 'Sonucu Paylaş',
    shareResultText: 'Az önce {years} yıl, {months} ay ve {days} günlük olduğumu öğrendim! Siz de tam yaşınızı hesaplayın:',
    shareResultTitle: 'Sonucunuzu Paylaşın',
    copyResultButton: 'Sonucu Kopyala',
    resultCopiedTooltip: 'Sonuç Kopyalandı!',
    seoTitle: 'Yaş Hesaplayıcı - Yaşınızı Çevrimiçi Ücretsiz Hesaplayın',
    seoDescription: 'Doğum tarihinize göre yaşınızı hesaplamak için ücretsiz çevrimiçi yaş hesaplayıcımızı kullanın. İngilizce, İspanyolca, Fransızca ve daha fazlası dahil olmak üzere birden çok dilde mevcuttur.',
    seoKeywords: 'yaş hesaplayıcı, yaş hesaplama, doğum tarihi, ücretsiz çevrimiçi yaş hesaplayıcı, Türkçe yaş hesaplayıcı',
    h1: 'Yaş Hesaplayıcı - Yaşımı Hesapla',
    h2: 'Yaşınızı Saniyeler İçinde Hesaplayın',
    moreInfoTitle: 'Hayatınız Hakkında Daha Fazla Bilgi',
    dayOfWeekLabel: 'Doğduğunuz gün',
    seasonLabel: 'Doğduğunuz mevsim',
    nextBirthdayLabel: 'Bir sonraki doğum gününüze kalan gün',
    daysOfWeekArray: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    seasonsArray: ['Kış', 'İlkbahar', 'Yaz', 'Sonbahar'],
    seoSections: [
        {
            heading: "Anında ve Doğru Yaş Hesaplayıcı",
            paragraphs: [
                "Hiç 'Tam olarak kaç yaşındayım?' diye merak ettiniz mi? Çevrimiçi Yaş Hesaplayıcımız kesin ve anında bir yanıt sağlar. Yaşınızı tam güne kadar hesaplamak karmaşık olabilir, ancak aracımız bunu zahmetsiz hale getirir. Sadece doğum tarihinizi girin, kronolojik yaşınızı anında yıl, ay ve gün olarak hesaplayalım. Manuel hesaplamalar olmadan yaşınızı hızlıca bulmak için mükemmel bir araçtır.",
                "Resmi belgeler, merak veya etkinlik planlaması için olsun, kesin yaşınızı bilmek esastır. Bu hesaplayıcı herkes için tasarlanmıştır ve yaşınızı belirlemek için basit, hızlı ve güvenilir bir yol sunar.",
            ],
        },
        {
            heading: "Tam Yaşınızı Nasıl Bulursunuz",
            paragraphs: ["Aracımızı kullanmak inanılmaz derecede basittir. Sonucunuzu saniyeler içinde almak için bu basit adımları izleyin:"],
            list: [
              "Açılır menüleri kullanarak doğum gününüzü, ayınızı ve yılınızı seçin.",
              "Girilen tarihin doğru olduğunu iki kez kontrol edin.",
              "'Yaşı Hesapla' düğmesine tıklayın.",
              "Tam yaşınız, yıl, ay ve günlere bölünmüş olarak anında görüntülenecektir.",
            ]
        },
        {
            heading: "Parmaklarınızın Ucunda Hassasiyet ve Kolaylık",
            paragraphs: [
                "Artık yıllar ve aylardaki değişen gün sayısı nedeniyle yaşı manuel olarak hesaplamak zor olabilir. Yaş Hesaplayıcımız, bu karmaşıklıkları hesaba katan bir algoritma kullanarak tahminleri ve potansiyel hataları ortadan kaldırır. Bu, her seferinde son derece doğru bir sonuç almanızı sağlar.",
                "Bir takvim ve karmaşık matematikle zaman harcamak yerine, anında ve güvenilir bir yanıt alın. Aracımız her cihazda 7/24 kullanılabilir ve size ihtiyacınız olan rahatlığı sağlar.",
            ]
        },
        {
            heading: "Sadece Yıllardan Daha Fazlası",
            paragraphs: [
                "Yaşınız sadece bir yıl sayısından daha fazlasıdır. Hesaplayıcımız, hayatınızın zaman çizelgesinin tam bir resmini vermek için onu yıllara, aylara ve günlere ayırır. Bu ayrıntılı döküm, kilometre taşlarını anlamak ve şimdiye kadarki hayatınızın tam süresini takdir etmek için kullanışlıdır. Basit bir yıl sayımının sunamayacağı kapsamlı bir bakış açısı sağlar.",
            ]
        }
    ],
  },
  [LangEnum.VI]: {
    ...baseContent,
    navHome: 'Trang chủ',
    navCalculator: 'Tính Tuổi',
    navAbout: 'Về chúng tôi',
    navContact: 'Liên hệ',
    footerPrivacyPolicy: 'Chính sách Bảo mật',
    footerContactUs: 'Liên hệ với chúng tôi',
    footerRights: `© ${new Date().getFullYear()} Tính Tuổi. Bảo lưu mọi quyền.`,
    homeTitle: 'Chào mừng bạn đến với Công cụ Tính Tuổi Tối ưu',
    homeDescription: 'Tính tuổi ngay lập tức từ ngày sinh của bạn với công cụ tính tuổi miễn phí, dễ sử dụng và đa ngôn ngữ của chúng tôi. Tìm ra tuổi của bạn theo năm, tháng và ngày.',
    homeSubtitle: 'Chính xác, Nhanh chóng và Miễn phí',
    homeCTAText: 'Tính Tuổi Của Bạn Ngay',
    aboutTitle: 'Về Công cụ Tính Tuổi của chúng tôi',
    aboutHeading: 'Sứ mệnh của chúng tôi',
    aboutContent: [
        'Chào mừng bạn đến với công cụ tính tuổi trực quan và thân thiện với người dùng nhất trên web. Sứ mệnh của chúng tôi là cung cấp một công cụ nhanh chóng, chính xác và dễ sử dụng cho bất kỳ ai cần tính tuổi hoặc khoảng thời gian. Cho dù bạn tò mò về tuổi của chính mình tính đến ngày hôm nay, hay bạn cần tính tuổi của ai đó cho một biểu mẫu chính thức, công cụ của chúng tôi được thiết kế để cung cấp cho bạn thông tin chính xác mà bạn cần.',
        'Được phát triển với trọng tâm là sự đơn giản và khả năng truy cập toàn cầu, máy tính của chúng tôi hỗ trợ nhiều ngôn ngữ và được xây dựng để đáp ứng, đảm bảo trải nghiệm liền mạch trên mọi thiết bị, từ máy tính để bàn đến điện thoại di động. Chúng tôi tin vào quyền riêng tư, đó là lý do tại sao công cụ của chúng tôi thực hiện tất cả các phép tính trực tiếp trong trình duyệt của bạn, có nghĩa là dữ liệu của bạn không bao giờ được gửi đến máy chủ của chúng tôi. Quyền riêng tư của bạn được đảm bảo.',
        'Chúng tôi không ngừng làm việc để cải thiện công cụ của mình và thêm các tính năng mới. Cảm ơn bạn đã chọn chúng tôi cho nhu cầu tính tuổi của mình!'
    ],
    privacyTitle: 'Chính sách Bảo mật',
    privacyHeading: 'Cam kết của chúng tôi đối với Quyền riêng tư của bạn',
    privacyContent: [
        { heading: 'Giới thiệu', paragraphs: ['Chính sách Bảo mật này nêu rõ các thông lệ của chúng tôi về việc thu thập, sử dụng và tiết lộ thông tin khi bạn sử dụng dịch vụ Tính Tuổi của chúng tôi. Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và đảm bảo bạn có trải nghiệm tích cực trên trang web của chúng tôi.'] },
        { heading: 'Thông tin chúng tôi không thu thập', paragraphs: ['Chúng tôi muốn làm rõ: công cụ Tính Tuổi của chúng tôi được thiết kế để hoạt động hoàn toàn trên thiết bị của bạn (phía máy khách). Chúng tôi không thu thập, lưu trữ hoặc truyền bất kỳ dữ liệu cá nhân nào bạn nhập, chẳng hạn như ngày sinh của bạn. Tất cả các phép tính được thực hiện trong trình duyệt của bạn và thông tin sẽ bị loại bỏ khi bạn rời khỏi trang.'] },
        { heading: 'Cookie và Theo dõi', paragraphs: ['Chúng tôi không sử dụng cookie hoặc bất kỳ công nghệ theo dõi nào khác để theo dõi hoạt động của bạn trên trang web của chúng tôi. Phiên của bạn hoàn toàn ẩn danh.'] },
        { heading: 'Dịch vụ của bên thứ ba', paragraphs: ['Trang web này không tích hợp với bất kỳ dịch vụ của bên thứ ba nào có thể thu thập thông tin cá nhân.'] },
        { heading: 'Thay đổi Chính sách này', paragraphs: ['Chúng tôi có thể cập nhật Chính sách Bảo mật của mình theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Chính sách Bảo mật mới trên trang này. Bạn nên xem lại Chính sách Bảo mật này định kỳ để biết bất kỳ thay đổi nào.'] }
    ],
    contactTitle: 'Liên hệ với chúng tôi',
    contactHeading: 'Giữ liên lạc',
    contactIntro: 'Chúng tôi đánh giá cao phản hồi và yêu cầu của bạn. Nếu bạn có bất kỳ câu hỏi, đề xuất hoặc cần hỗ trợ, xin vui lòng liên hệ với chúng tôi. Chúng tôi sẽ cố gắng hết sức để trả lời bạn sớm nhất có thể.',
    contactEmail: 'contact.vi@agecalculator.com',
    title: 'Tính Tuổi',
    dateOfBirthLabel: 'Ngày sinh của bạn',
    calculateButton: 'Tính Tuổi',
    resultPrefix: 'Bạn',
    resultSuffix: 'tuổi.',
    years: 'năm',
    months: 'tháng',
    days: 'ngày',
    selectLanguage: 'Chọn ngôn ngữ',
    monthsArray: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    dayLabel: 'Ngày',
    monthLabel: 'Tháng',
    yearLabel: 'Năm',
    shareTitle: 'Chia sẻ Công cụ này',
    copyLinkButton: 'Sao chép Liên kết',
    copiedTooltip: 'Đã sao chép!',
    shareResultButton: 'Chia sẻ Kết quả',
    shareResultText: 'Tôi vừa phát hiện ra mình đã được {years} năm, {months} tháng và {days} ngày tuổi! Hãy tính tuổi chính xác của bạn nữa:',
    shareResultTitle: 'Chia sẻ Kết quả của bạn',
    copyResultButton: 'Sao chép Kết quả',
    resultCopiedTooltip: 'Đã sao chép kết quả!',
    seoTitle: 'Tính Tuổi - Tính Tuổi Trực tuyến Miễn phí',
    seoDescription: 'Sử dụng công cụ tính tuổi trực tuyến miễn phí của chúng tôi để tính tuổi của bạn dựa trên ngày sinh. Có sẵn bằng nhiều ngôn ngữ bao gồm tiếng Anh, tiếng Tây Ban Nha, tiếng Pháp và nhiều hơn nữa.',
    seoKeywords: 'tính tuổi, tính tuổi, ngày sinh, công cụ tính tuổi trực tuyến miễn phí, tính tuổi bằng tiếng Việt',
    h1: 'Tính Tuổi - Tính Tuổi của tôi',
    h2: 'Tính Tuổi của bạn trong vài giây',
    moreInfoTitle: 'Thêm về cuộc sống của bạn',
    dayOfWeekLabel: 'Bạn sinh vào thứ',
    seasonLabel: 'Mùa bạn sinh ra',
    nextBirthdayLabel: 'Số ngày còn lại đến sinh nhật tiếp theo',
    daysOfWeekArray: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
    seasonsArray: ['Mùa đông', 'Mùa xuân', 'Mùa hè', 'Mùa thu'],
    seoSections: [
        {
            heading: "Công cụ Tính Tuổi Tức thì và Chính xác",
            paragraphs: [
                "Bạn đã bao giờ tự hỏi, 'Tôi chính xác bao nhiêu tuổi?' Công cụ Tính Tuổi trực tuyến của chúng tôi cung cấp một câu trả lời chính xác và ngay lập tức. Tính tuổi của bạn đến ngày chính xác có thể phức tạp, nhưng công cụ của chúng tôi làm cho nó trở nên dễ dàng. Chỉ cần nhập ngày sinh của bạn, và chúng tôi sẽ ngay lập tức tính toán tuổi theo thời gian của bạn theo năm, tháng và ngày. Đó là công cụ hoàn hảo để nhanh chóng tìm ra tuổi của bạn mà không cần tính toán thủ công.",
                "Dù là cho các tài liệu chính thức, sự tò mò hay lập kế hoạch sự kiện, việc biết tuổi chính xác của bạn là điều cần thiết. Máy tính này được thiết kế cho tất cả mọi người, cung cấp một cách đơn giản, nhanh chóng và đáng tin cậy để xác định tuổi của bạn.",
            ],
        },
        {
            heading: "Làm thế nào để tìm ra tuổi chính xác của bạn",
            paragraphs: ["Sử dụng công cụ của chúng tôi cực kỳ đơn giản. Hãy làm theo các bước đơn giản sau để nhận kết quả của bạn trong vài giây:"],
            list: [
              "Chọn Ngày, Tháng và Năm sinh của bạn bằng menu thả xuống.",
              "Kiểm tra lại xem ngày đã nhập có chính xác không.",
              "Nhấp vào nút 'Tính Tuổi'.",
              "Tuổi chính xác của bạn sẽ được hiển thị ngay lập tức, được chia thành năm, tháng và ngày.",
            ]
        },
        {
            heading: "Độ chính xác và Tiện lợi trong tầm tay bạn",
            paragraphs: [
                "Tính tuổi thủ công có thể khó khăn do năm nhuận và số ngày thay đổi trong các tháng. Công cụ Tính Tuổi của chúng tôi loại bỏ sự phỏng đoán và các lỗi tiềm ẩn bằng cách sử dụng một thuật toán tính đến những phức tạp này. Điều này đảm bảo bạn nhận được một kết quả có độ chính xác cao mỗi lần.",
                "Thay vì dành thời gian với lịch và các phép toán phức tạp, hãy nhận được một câu trả lời tức thì và đáng tin cậy. Công cụ của chúng tôi có sẵn 24/7 trên mọi thiết bị, mang lại cho bạn sự tiện lợi mà bạn cần.",
            ]
        },
        {
            heading: "Không chỉ là những con số",
            paragraphs: [
                "Tuổi của bạn không chỉ là một con số. Máy tính của chúng tôi chia nhỏ nó thành năm, tháng và ngày để cung cấp cho bạn một bức tranh hoàn chỉnh về dòng thời gian cuộc đời của bạn. Phân tích chi tiết này hữu ích để hiểu các cột mốc và đánh giá cao toàn bộ thời gian sống của bạn cho đến nay. Nó cung cấp một góc nhìn toàn diện mà một phép đếm năm đơn giản không thể cung cấp.",
            ]
        }
    ],
  },
  [LangEnum.AR]: {
    ...baseContent,
    navHome: 'الرئيسية',
    navCalculator: 'حاسبة العمر',
    navAbout: 'من نحن',
    navContact: 'تواصل معنا',
    footerPrivacyPolicy: 'سياسة الخصوصية',
    footerContactUs: 'تواصل معنا',
    footerRights: `© ${new Date().getFullYear()} حاسبة العمر. جميع الحقوق محفوظة.`,

    homeTitle: 'أهلاً بك في أفضل حاسبة للعمر',
    homeDescription: 'احسب عمرك فوراً من تاريخ ميلادك مع حاسبة العمر المجانية، سهلة الاستخدام ومتعددة اللغات. اكتشف عمرك بالسنوات والأشهر والأيام.',
    homeSubtitle: 'دقيقة، سريعة، ومجانية',
    homeCTAText: 'احسب عمرك الآن',

    aboutTitle: 'عن حاسبة العمر',
    aboutHeading: 'مهمتنا',
    aboutContent: [
        'مرحباً بك في حاسبة العمر الأكثر سهولة وسلاسة على الإنترنت. مهمتنا هي توفير أداة سريعة ودقيقة وسهلة الاستخدام لأي شخص يحتاج إلى حساب العمر أو مدة زمنية. سواء كنت تشعر بالفضول لمعرفة عمرك باليوم، أو تحتاج إلى حساب عمر شخص ما لغرض رسمي، فإن أداتنا مصممة لتوفر لك المعلومات الدقيقة التي تحتاجها.',
        'تم تطوير الحاسبة مع التركيز على البساطة وإمكانية الوصول العالمية، حيث تدعم لغات متعددة وهي مصممة لتكون متجاوبة، مما يضمن تجربة سلسة على أي جهاز، من أجهزة الكمبيوتر المكتبية إلى الهواتف المحمولة. نحن نؤمن بالخصوصية، ولهذا السبب تقوم أداتنا بإجراء جميع العمليات الحسابية مباشرة في متصفحك، مما يعني أن بياناتك لا تُرسل أبداً إلى خوادمنا. خصوصيتك مضمونة.',
        'نحن نعمل باستمرار على تحسين أداتنا وإضافة ميزات جديدة. شكراً لاختيارك لنا لتلبية احتياجاتك في حساب العمر!'
    ],
    privacyTitle: 'سياسة الخصوصية',
    privacyHeading: 'التزامنا بخصوصيتك',
    privacyContent: arPrivacyContent,
    
    contactTitle: 'تواصل معنا',
    contactHeading: 'ابقى على تواصل',
    contactIntro: 'نحن نقدّر ملاحظاتك واستفساراتك. إذا كان لديك أي أسئلة أو اقتراحات أو تحتاج إلى دعم، فلا تتردد في التواصل معنا. سنبذل قصارى جهدنا للرد عليك في أقرب وقت ممكن.',
    contactEmail: 'contact.ar@agecalculator.com',

    seoTitle: 'حاسبة العمر - احسب عمرك بالهجري والميلادي مجاناً',
    seoDescription: 'استخدم حاسبة العمر المجانية عبر الإنترنت لحساب عمرك بدقة بناءً على تاريخ ميلادك، سواء بالتقويم الهجري أو الميلادي. متوفرة بلغات متعددة.',
    seoKeywords: 'حاسبة العمر, حساب العمر, تاريخ الميلاد, حاسبة العمر بالهجري, حاسبة العمر بالميلادي, حساب العمر اون لاين',
    h1: 'حساب العمر - احسب عمري',
    h2: 'احسب عمرك بالسنوات والأشهر والأيام',
    title: 'حاسبة العمر',
    dateOfBirthLabel: 'تاريخ ميلادك',
    calculateButton: 'احسب العمر',
    resultPrefix: 'عمرك هو',
    resultSuffix: '.',
    years: 'سنوات',
    months: 'أشهر',
    days: 'أيام',
    selectLanguage: 'اختر اللغة',
    monthsArray: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    dayLabel: 'اليوم',
    monthLabel: 'الشهر',
    yearLabel: 'السنة',
    calendarType: 'نوع التقويم',
    gregorian: 'الميلادي',
    hijri: 'الهجري',
    hijriMonthsArray: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'],
    ageInGregorian: 'العمر بالتقويم الميلادي',
    shareTitle: 'شارك هذه الأداة',
    copyLinkButton: 'نسخ الرابط',
    copiedTooltip: 'تم النسخ!',
    shareResultButton: 'شارك النتيجة',
    shareResultText: 'لقد اكتشفت أن عمري هو {years} سنوات، و {months} أشهر، و {days} أيام! احسب عمرك الدقيق أيضاً:',
    shareResultTitle: 'شارك نتيجتك',
    copyResultButton: 'نسخ النتيجة',
    resultCopiedTooltip: 'تم نسخ النتيجة!',
    moreInfoTitle: 'معلومات أكثر عن حياتك',
    dayOfWeekLabel: 'اليوم الذي وُلدت فيه',
    seasonLabel: 'الفصل الذي وُلدت فيه',
    nextBirthdayLabel: 'الأيام المتبقية لعيد ميلادك القادم',
    daysOfWeekArray: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    seasonsArray: ['الشتاء', 'الربيع', 'الصيف', 'الخريف'],
    seoSections: [
        {
            heading: "حاسبة العمر الفورية والدقيقة",
            paragraphs: [
                "هل سألت نفسك يوماً: 'كم عمري بالضبط؟' توفر حاسبة العمر الإلكترونية الخاصة بنا إجابة دقيقة وفورية. قد يكون حساب عمرك باليوم والشهر والسنة أمراً معقداً، لكن أداتنا تجعل الأمر في غاية السهولة. ببساطة، أدخل تاريخ ميلادك، وسنقوم فوراً بحساب عمرك الزمني بالسنوات والأشهر والأيام. إنها الأداة المثالية لمعرفة عمرك بسرعة ودون الحاجة إلى حسابات يدوية.",
                "سواء كنت تحتاجها للمستندات الرسمية، أو بدافع الفضول، أو لتخطيط المناسبات، فإن معرفة عمرك بدقة أمر ضروري. تم تصميم هذه الحاسبة لتكون سهلة الاستخدام للجميع، حيث توفر طريقة بسيطة وسريعة وموثوقة لتحديد عمرك.",
            ],
        },
        {
            heading: "كيف تعرف عمرك بالضبط",
            paragraphs: ["استخدام أداتنا بسيط للغاية. اتبع هذه الخطوات السهلة للحصول على نتيجتك في ثوانٍ:"],
            list: [
              "اختر يوم وشهر وسنة ميلادك باستخدام القوائم المنسدلة.",
              "تأكد مرة أخرى من صحة التاريخ الذي أدخلته.",
              "اضغط على زر 'احسب العمر'.",
              "سيتم عرض عمرك الدقيق على الفور، مفصلاً بالسنوات والأشهر والأيام.",
            ]
        },
        {
            heading: "الدقة والسهولة في متناول يدك",
            paragraphs: [
                "قد يكون حساب العمر يدوياً أمراً صعباً بسبب السنوات الكبيسة واختلاف عدد الأيام في الأشهر. تتجنب حاسبة العمر لدينا التخمين والأخطاء المحتملة باستخدام خوارزمية تأخذ هذه التعقيدات في الاعتبار، مما يضمن حصولك على نتيجة دقيقة للغاية في كل مرة.",
                "بدلاً من قضاء الوقت في الحسابات المعقدة، احصل على إجابة فورية وموثوقة. أداتنا متاحة على مدار الساعة طوال أيام الأسبوع على أي جهاز، مما يوفر لك الراحة التي تحتاجها.",
            ]
        },
        {
            heading: "حساب العمر بالتقويم الهجري والميلادي",
            paragraphs: [
                "ندرك أهمية التقويم الهجري لمستخدمينا، لذا تتيح حاسبتنا للمستخدمين الناطقين باللغة العربية خيار إدخال تاريخ ميلادهم بالتقويم الهجري. ما عليك سوى تحديد خيار 'الهجري' وإدخال تاريخ ميلادك، وستقوم الأداة تلقائياً بتحويله وحساب عمرك بدقة بالسنوات الميلادية.",
                "هذه الميزة تجعل أداتنا شاملة ومناسبة لجميع احتياجاتك، سواء كنت تفضل استخدام التقويم الميلادي أو الهجري.",
            ]
        },
        {
            heading: "عمرك بالتفصيل: أكثر من مجرد سنوات",
            paragraphs: [
                "عمرك هو أكثر من مجرد عدد من السنوات. تقوم الحاسبة لدينا بتفصيله إلى سنوات وأشهر وأيام لتمنحك صورة كاملة عن خطك الزمني في الحياة. هذا التفصيل مفيد لفهم المراحل المهمة وتقدير المدة الكاملة لحياتك حتى الآن، مما يوفر منظوراً شاملاً لا يمكن أن يقدمه مجرد حساب السنوات.",
            ]
        }
    ],
  },
};