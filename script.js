const translations = {
  es: {
    nav_motorhome:"La autocaravana",nav_included:"Incluido",nav_prices:"Precios",nav_booking:"Disponibilidad",nav_contact:"Contacto",cta_book:"Consultar disponibilidad",
    hero_eyebrow:"CASTELLDEFELS · BARCELONA",hero_title:"Tu aventura<br><em>empieza aquí.</em>",hero_copy:"Alquila tu autocaravana y descubre Europa con total comodidad, libertad y espacio.",cta_discover:"Descubrir la autocaravana →",from:"Desde",per_day:"/ día",
    intro_eyebrow:"VIAJAR, PERO A TU MANERA",intro_title:"Una casa sobre ruedas<br>para tu próxima historia.",intro_copy:"Sal de Castelldefels y pon rumbo donde quieras. Hemos preparado nuestra autocaravana para que solo tengas que preocuparte de elegir el destino.",
    motor_eyebrow:"LA AUTOCARAVANA",motor_title:"Espacio para compartir.",motor_copy:"Hasta 6 personas pueden viajar cómodamente, con tres camas dobles, cocina, baño y todo lo necesario para sentirse como en casa mientras recorres Europa.",spec_guests:"plazas",spec_beds:"camas dobles",spec_assistance:"asistencia",spec_from:"desde / día",see_included:"Ver todo lo incluido →",
    included_eyebrow:"TODO PREPARADO",included_title:"Llega, sube y disfruta.",included_copy:"Queremos que el viaje empiece desde el primer minuto. Por eso el alquiler incluye el equipamiento esencial.",
    f1_title:"Cocina equipada",f1_copy:"Utensilios de cocina y 2 bombonas de gas.",f2_title:"Seguro a todo riesgo",f2_copy:"Viaja con tranquilidad durante tu aventura.",f3_title:"Asistencia 24h",f3_copy:"Estamos disponibles cuando lo necesites.",f4_title:"Kit de viaje",f4_copy:"Sábanas, toallas, mesa y sillas de camping.",
    price_eyebrow:"TARIFAS",price_title:"Tu próxima escapada<br>desde <em>130€ al día.</em>",price_note:"Precio orientativo. El precio final depende de las fechas y condiciones de la reserva.",check_dates:"Comprobar fechas",
    booking_eyebrow:"PLANIFICA TU VIAJE",booking_title:"Comprueba disponibilidad.",booking_copy:"Selecciona tus fechas para obtener una estimación. En esta primera versión, la solicitud queda pendiente de confirmación.",pickup:"Recogida",return:"Devolución",guests:"Viajeros",nights:"Días de alquiler",estimated:"Estimación",request:"Solicitar reserva",
    gallery_eyebrow:"DENTRO DE ONIRIA",gallery_title:"Cómoda de día.<br>Acogedora de noche.",gallery_copy:"Un espacio pensado para cocinar, descansar, compartir y despertar cada día en un lugar diferente.",ask_more:"¿Tienes alguna pregunta? →",
    contact_eyebrow:"¿HABLAMOS?",contact_title:"Tu viaje empieza<br>con un mensaje.",contact_copy:"Recogida en Castelldefels, Gavà o el aeropuerto de Barcelona. Escríbenos y te ayudamos a preparar tu viaje.",footer:"Alquiler de autocaravanas · Castelldefels, Barcelona",privacy:"Privacidad",terms:"Condiciones"
  },
  en: {
    nav_motorhome:"The motorhome",nav_included:"What's included",nav_prices:"Prices",nav_booking:"Availability",nav_contact:"Contact",cta_book:"Check availability",
    hero_eyebrow:"CASTELLDEFELS · BARCELONA",hero_title:"Your adventure<br><em>starts here.</em>",hero_copy:"Rent your motorhome and discover Europe with comfort, freedom and plenty of space.",cta_discover:"Discover the motorhome →",from:"From",per_day:"/ day",
    intro_eyebrow:"TRAVEL, YOUR WAY",intro_title:"A home on wheels<br>for your next story.",intro_copy:"Leave Castelldefels and head wherever you want. Our motorhome is prepared so you only have to worry about choosing the destination.",
    motor_eyebrow:"THE MOTORHOME",motor_title:"Room to share.",motor_copy:"Up to 6 people can travel comfortably, with three double beds, a kitchen, bathroom and everything you need to feel at home while exploring Europe.",spec_guests:"seats",spec_beds:"double beds",spec_assistance:"assistance",spec_from:"from / day",see_included:"See what's included →",
    included_eyebrow:"ALL SET",included_title:"Arrive, get in and enjoy.",included_copy:"We want your trip to start from the very first minute. That's why the rental includes the essential equipment.",
    f1_title:"Equipped kitchen",f1_copy:"Kitchen utensils and 2 gas cylinders.",f2_title:"Comprehensive insurance",f2_copy:"Travel with peace of mind throughout your adventure.",f3_title:"24h assistance",f3_copy:"We're available whenever you need us.",f4_title:"Travel kit",f4_copy:"Bed linen, towels, camping table and chairs.",
    price_eyebrow:"RATES",price_title:"Your next getaway<br>from <em>€130 a day.</em>",price_note:"Indicative price. The final price depends on the dates and rental conditions.",check_dates:"Check dates",
    booking_eyebrow:"PLAN YOUR TRIP",booking_title:"Check availability.",booking_copy:"Select your dates to get an estimate. In this first version, requests remain subject to confirmation.",pickup:"Pick-up",return:"Return",guests:"Travellers",nights:"Rental days",estimated:"Estimate",request:"Request booking",
    gallery_eyebrow:"INSIDE ONIRIA",gallery_title:"Comfortable by day.<br>Cosy by night.",gallery_copy:"A space designed for cooking, resting, sharing and waking up somewhere different every day.",ask_more:"Have a question? →",
    contact_eyebrow:"LET'S TALK",contact_title:"Your trip starts<br>with a message.",contact_copy:"Pick-up in Castelldefels, Gavà or Barcelona airport. Write to us and we'll help you plan your trip.",footer:"Motorhome rental · Castelldefels, Barcelona",privacy:"Privacy",terms:"Terms"
  }
};

let currentLang = "es";
const pricePerDay = 130;

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

const start = document.getElementById("startDate");
const end = document.getElementById("endDate");
const days = document.getElementById("days");
const total = document.getElementById("total");
const message = document.getElementById("bookingMessage");
const requestBtn = document.getElementById("requestBtn");

const today = new Date();
const iso = d => d.toISOString().split("T")[0];
start.min = iso(today);
end.min = iso(today);

function calculate(){
  message.textContent = "";
  message.className = "booking-message";
  if(!start.value || !end.value){ days.textContent="—"; total.textContent="—"; return; }
  const a = new Date(start.value), b = new Date(end.value);
  const diff = Math.round((b-a)/(1000*60*60*24));
  if(diff <= 0){
    days.textContent="—"; total.textContent="—";
    message.textContent = currentLang === "es" ? "La devolución debe ser posterior a la recogida." : "The return date must be after the pick-up date.";
    message.className = "booking-message error";
    return;
  }
  days.textContent = diff;
  total.textContent = `€${diff * pricePerDay}`;
  message.textContent = currentLang === "es"
    ? "Estimación orientativa. La disponibilidad se confirmará manualmente."
    : "Indicative estimate. Availability will be confirmed manually.";
}
start.addEventListener("change", () => { end.min = start.value; calculate(); });
end.addEventListener("change", calculate);

requestBtn.addEventListener("click", () => {
  if(!start.value || !end.value){
    message.textContent = currentLang === "es" ? "Selecciona primero las fechas de recogida y devolución." : "Please select your pick-up and return dates first.";
    message.className = "booking-message error";
    return;
  }
  const a = new Date(start.value), b = new Date(end.value);
  const diff = Math.round((b-a)/(1000*60*60*24));
  if(diff <= 0){ calculate(); return; }
  message.textContent = currentLang === "es"
    ? `Solicitud preparada: ${diff} días · €${diff*pricePerDay}. En la siguiente fase conectaremos este botón con el sistema real de reservas.`
    : `Request prepared: ${diff} days · €${diff*pricePerDay}. In the next phase this button will connect to the real booking system.`;
  message.className = "booking-message success";
});

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
