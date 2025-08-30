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

const baseContent: Omit<Translation, 'monthsArray' | 'hijriMonthsArray' | 'seoSections' | 'privacyContent' | 'aboutContent'> = {
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
  // Add placeholder content for other languages to avoid breaking the app
  ...[LangEnum.DE, LangEnum.PT, LangEnum.IT, LangEnum.HI, LangEnum.RU, LangEnum.JA, LangEnum.ZH, LangEnum.PL, LangEnum.FA, LangEnum.NL, LangEnum.KO, LangEnum.TH, LangEnum.TR, LangEnum.VI].reduce((acc, lang) => {
    acc[lang] = {
      ...baseContent,
      aboutContent: [],
      privacyContent: [],
      seoSections: [],
      monthsArray: [],
      hijriMonthsArray: [],
    };
    return acc;
  }, {} as Record<LanguageCode, Translation>),
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