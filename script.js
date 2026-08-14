const translations = {
  es: {
    nav_motorhome:"La autocaravana",nav_included:"Incluido",nav_prices:"Precios",nav_gallery:"Galería",nav_faq:"FAQs",nav_contact:"Contacto",cta_whatsapp:"WhatsApp",
    hero_eyebrow:"CASTELLDEFELS · BARCELONA",hero_title:"Tu aventura<br><em>empieza aquí.</em>",hero_copy:"Alquila tu autocaravana y descubre Europa con total comodidad, libertad y espacio.",cta_book:"Reserva por WhatsApp",cta_discover:"Descubrir la autocaravana →",from:"Desde",per_day:"/ día",
    intro_eyebrow:"VIAJAR, PERO A TU MANERA",intro_title:"Una casa sobre ruedas<br>para tu próxima historia.",intro_copy:"Sal de Castelldefels y pon rumbo donde quieras. Hemos preparado nuestra autocaravana para que solo tengas que preocuparte de elegir el destino.",
    motor_eyebrow:"LA AUTOCARAVANA",motor_title:"Espacio para compartir.",motor_copy:"Hasta 6 personas pueden viajar cómodamente, con tres camas dobles, cocina, baño y todo lo necesario para sentirse como en casa mientras recorres Europa.",spec_guests:"plazas",spec_beds:"camas dobles",spec_assistance:"asistencia",spec_from:"desde / día",see_included:"Ver todo lo incluido →",
    included_eyebrow:"TODO PREPARADO",included_title:"Llega, sube y disfruta.",included_copy:"Queremos que el viaje empiece desde el primer minuto. Por eso el alquiler incluye el equipamiento esencial.",
    f1_title:"Cocina equipada",f1_copy:"Utensilios de cocina y 2 bombonas de gas.",f2_title:"Seguro a todo riesgo",f2_copy:"Viaja con tranquilidad durante tu aventura.",f3_title:"Asistencia 24h",f3_copy:"Estamos disponibles cuando lo necesites.",f4_title:"Kit de viaje",f4_copy:"Sábanas, toallas, mesa y sillas de camping.",
    gallery_eyebrow:"DENTRO DE ONIRIA",gallery_title:"Conoce todos los detalles.",gallery_copy:"Un espacio pensado para cocinar, descansar, compartir y despertar cada día en un lugar diferente.",
    price_eyebrow:"TARIFAS",price_title:"Tu próxima escapada<br>desde <em>130€ al día.</em>",price_note:"El precio final depende de las fechas y disponibilidad. Escríbenos para obtener un presupuesto exacto.",check_dates:"Consultar disponibilidad",
    faq_eyebrow:"PREGUNTAS FRECUENTES",faq_title:"Resolvemos tus dudas.",
    faq_1_q:"¿Qué requisitos necesito para alquilar?",faq_1_a:"Debes tener al menos 25 años y un permiso de conducir tipo B con una antigüedad mínima de 2 años.",
    faq_2_q:"¿Se admiten mascotas?",faq_2_a:"¡Sí! Nos encantan los animales. Consulta con nosotros las condiciones específicas para viajar con tu mascota.",
    faq_3_q:"¿Hay kilometraje límite?",faq_3_a:"Ofrecemos un límite generoso de kilómetros diarios. Para viajes más largos, contáctanos para revisar las condiciones.",
    contact_eyebrow:"¿HABLAMOS?",contact_title:"Tu viaje empieza<br>con un mensaje.",contact_copy:"Recogida en Castelldefels, Gavà o el aeropuerto de Barcelona. Escríbenos y te ayudamos a preparar tu viaje.",footer:"Alquiler de autocaravanas · Castelldefels, Barcelona"
  },
  en: {
    nav_motorhome:"The motorhome",nav_included:"What's included",nav_prices:"Prices",nav_gallery:"Gallery",nav_faq:"FAQs",nav_contact:"Contact",cta_whatsapp:"WhatsApp",
    hero_eyebrow:"CASTELLDEFELS · BARCELONA",hero_title:"Your adventure<br><em>starts here.</em>",hero_copy:"Rent your motorhome and discover Europe with comfort, freedom and plenty of space.",cta_book:"Book via WhatsApp",cta_discover:"Discover the motorhome →",from:"From",per_day:"/ day",
    intro_eyebrow:"TRAVEL, YOUR WAY",intro_title:"A home on wheels<br>for your next story.",intro_copy:"Leave Castelldefels and head wherever you want. Our motorhome is prepared so you only have to worry about choosing the destination.",
    motor_eyebrow:"THE MOTORHOME",motor_title:"Room to share.",motor_copy:"Up to 6 people can travel comfortably, with three double beds, a kitchen, bathroom and everything you need to feel at home while exploring Europe.",spec_guests:"seats",spec_beds:"double beds",spec_assistance:"assistance",spec_from:"from / day",see_included:"See what's included →",
    included_eyebrow:"ALL SET",included_title:"Arrive, get in and enjoy.",included_copy:"We want your trip to start from the very first minute. That's why the rental includes the essential equipment.",
    f1_title:"Equipped kitchen",f1_copy:"Kitchen utensils and 2 gas cylinders.",f2_title:"Comprehensive insurance",f2_copy:"Travel with peace of mind throughout your adventure.",f3_title:"24h assistance",f3_copy:"We're available whenever you need us.",f4_title:"Travel kit",f4_copy:"Bed linen, towels, camping table and chairs.",
    gallery_eyebrow:"INSIDE ONIRIA",gallery_title:"See all the details.",gallery_copy:"A space designed for cooking, resting, sharing and waking up somewhere different every day.",
    price_eyebrow:"RATES",price_title:"Your next getaway<br>from <em>€130 a day.</em>",price_note:"The final price depends on dates and availability. Contact us for an exact quote.",check_dates:"Check availability",
    faq_eyebrow:"FAQS",faq_title:"We answer your questions.",
    faq_1_q:"What are the rental requirements?",faq_1_a:"You must be at least 25 years old and hold a category B driving license for a minimum of 2 years.",
    faq_2_q:"Are pets allowed?",faq_2_a:"Yes! We love animals. Contact us for specific conditions regarding travelling with your pet.",
    faq_3_q:"Is there a mileage limit?",faq_3_a:"We offer a generous daily mileage limit. For longer trips, contact us to review the conditions.",
    contact_eyebrow:"LET'S TALK",contact_title:"Your trip starts<br>with a message.",contact_copy:"Pick-up in Castelldefels, Gavà or Barcelona airport. Write to us and we'll help you plan your trip.",footer:"Motorhome rental · Castelldefels, Barcelona"
  }
};

let currentLang = "es";

function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll(".lang").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  document.title = lang === "es"
    ? "Oniria Caravaning | Alquiler de autocaravanas en Castelldefels"
    : "Oniria Caravaning | Motorhome rental in Castelldefels";
}

document.querySelectorAll(".lang").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector(".nav nav");
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.right = "5vw";
  nav.style.flexDirection = "column";
  nav.style.background = "rgba(29,36,32,.96)";
  nav.style.padding = "20px";
  nav.style.borderRadius = "12px";
});

setLanguage("es");


/* --- LÓGICA DEL SLIDER AUTOMÁTICO Y LIGHTBOX (V4) --- */

// Slider Automático
const track = document.getElementById('galleryTrack');
let autoScroll;

function startAutoScroll() {
  if (!track) return;
  autoScroll = setInterval(() => {
    track.scrollLeft += 1; // Velocidad de movimiento
    // Reinicia el slider si llega al final
    if (track.scrollLeft >= (track.scrollWidth - track.clientWidth - 1)) {
      track.scrollLeft = 0;
    }
  }, 20); // Intervalo de tiempo
}

if (track) {
  startAutoScroll();
  // Pausa cuando el ratón está encima para poder mirar o hacer clic
  track.addEventListener('mouseenter', () => clearInterval(autoScroll));
  track.addEventListener('mouseleave', startAutoScroll);
}

// Lightbox (ampliar imágenes al hacer clic)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

// Asigna el evento a todas las imágenes dentro del slider
document.querySelectorAll('.slider-img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src; // Pone la ruta de la imagen en grande
  });
});

// Cerrar el lightbox con la X
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
}

// Cerrar el lightbox haciendo clic fuera de la imagen (en el fondo oscuro)
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });
}
