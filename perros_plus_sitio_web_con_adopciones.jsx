import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// Constantes y datos
const WHATSAPP_URL = "https://wa.me/5217222142773";
const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0?cid=OTRlMjIxYWZlOTllMjk4NDY3N2QzZWEyMzk0MmYyNDJjNTU0YTlmNjliNWNlYjE4ZjE3OTAwYTdiYzUxYTYyZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

const BRAND = {
  name: "Perros Plus",
  slogan: "Cuidamos su salud con atención profesional",
  phone: "+52 1 722 214 2773",
  address: "Toluca, Estado de México",
  hours: [
    { d: "Lun–Vie", h: "9:00 – 19:00" },
    { d: "Sábado", h: "9:00 – 15:00" },
    { d: "Domingo", h: "Cerrado" },
  ],
  social: {
    whatsapp: WHATSAPP_URL,
    facebook: "#",
    instagram: "#",
    maps: "#",
  },
};

const INITIAL_PETS = [
  { id: "adp-01", name: "Kira", age: "2 años", sex: "Hembra", size: "Mediano", description: "Energética, muy sociable con personas. Ideal para familia activa.", photo: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop" },
  { id: "adp-02", name: "Rocky", age: "3 años", sex: "Macho", size: "Grande", description: "Tranquilo y aprende rápido. Se adapta bien a hogar con patio.", photo: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop" },
  { id: "adp-03", name: "Maya", age: "8 meses", sex: "Hembra", size: "Pequeño", description: "Curiosa y juguetona. Excelente opción para departamento con salidas diarias.", photo: "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop" },
  { id: "adp-04", name: "Toby", age: "4 años", sex: "Macho", size: "Pequeño", description: "Cariñoso y tranquilo. Perfecto para personas mayores o familias con niños.", photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop" },
  { id: "adp-05", name: "Luna", age: "1 año", sex: "Hembra", size: "Mediano", description: "Inteligente y juguetona. Necesita espacio para correr y jugar.", photo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop" },
  { id: "adp-06", name: "Max", age: "5 años", sex: "Macho", size: "Grande", description: "Leal y protector. Requiere dueño con experiencia en perros grandes.", photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&auto=format&fit=crop" },
];

const SERVICES = [
  { t: "Consultas veterinarias", d: "Evaluación clínica, diagnóstico y plan de tratamiento.", i: "🩺" },
  { t: "Vacunación y desparasitación", d: "Esquemas actualizados y registro en cartilla.", i: "💉" },
  { t: "Estética canina", d: "Baño, corte higiénico y de raza, limpieza de oídos y uñas.", i: "✂️" },
  { t: "Accesorios y alimento", d: "Collares, arneses, juguetes y alimento balanceado.", i: "🛍️" },
  { t: "Cirugías", d: "Procedimientos quirúrgicos con anestesia segura y monitoreo.", i: "🔪" },
  { t: "Hospitalización", d: "Cuidado intensivo y monitoreo para casos graves.", i: "🏥" },
  { t: "Laboratorio", d: "Análisis clínicos, pruebas de sangre y diagnóstico por imagen.", i: "🧪" },
  { t: "Urgencias", d: "Atención inmediata para casos de emergencia las 24 horas.", i: "🚑" },
];

const GROOMING_SERVICES = [
  { name: "Baño terapéutico", price: "$200", description: "Con shampoo especial según necesidades de la piel" },
  { name: "Corte de raza", price: "$350", description: "Corte especializado según estándares de la raza" },
  { name: "Corte higiénico", price: "$250", description: "Incluye corte de uñas, limpieza de oídos y zonas íntimas" },
  { name: "Limpieza dental", price: "$300", description: "Limpieza profunda con ultrasonido" },
  { name: "Spa canino", price: "$500", description: "Incluye baño, masaje relajante y aromaterapia" },
];

// Utilidades
const openWhatsApp = (msg) => window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, "_blank");
const openGoogleCalendar = () => window.open(GOOGLE_CALENDAR_URL, "_blank");

// Componentes reutilizables
const Tag = ({ children }) => <span className="rounded-full border px-3 py-1 text-xs">{children}</span>;

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-10">
    {kicker && <p className="uppercase tracking-widest text-xs mb-2 opacity-70">{kicker}</p>}
    <h2 className="text-3xl sm:text-4xl font-semibold">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
  </div>
);

const PetCard = ({ pet, onAdoptClick }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img 
        src={pet.photo} 
        alt={pet.name} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{pet.name}</h3>
        <span className="text-sm bg-slate-100 px-2 py-1 rounded-full">{pet.age}</span>
      </div>
      <div className="flex gap-2 mt-3">
        <Tag>{pet.sex}</Tag>
        <Tag>{pet.size}</Tag>
      </div>
      <p className="mt-3 text-sm text-gray-600">{pet.description}</p>
      <button 
        onClick={() => onAdoptClick(pet)}
        className="mt-4 w-full rounded-xl py-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors"
      >
        Adoptar
      </button>
    </div>
  </motion.div>
);

const ServiceCard = ({ service }) => (
  <div className="rounded-3xl bg-white p-6 shadow border hover:shadow-md transition">
    <div className="text-3xl" aria-hidden>{service.i}</div>
    <h3 className="mt-3 font-semibold text-lg">{service.t}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{service.d}</p>
  </div>
);

const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border transition-colors ${
      active ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-900 border-gray-300 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

// Componente principal
export default function Website() {
  const [pets] = useState(INITIAL_PETS);
  const [filters, setFilters] = useState({ size: "Todos", sex: "Todos" });
  const [activeForm, setActiveForm] = useState("citas");

  const filteredPets = useMemo(() => 
    pets.filter(p => 
      (filters.size === "Todos" || p.size === filters.size) && 
      (filters.sex === "Todos" || p.sex === filters.sex)
    ), 
    [pets, filters]
  );

  const handleAdoptClick = (pet) => openWhatsApp(`Hola, me interesa adoptar a ${pet.name}. ¿Podrían compartirme requisitos y agendar una visita?`);

  const handleFormSubmit = (e, type) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const msg = type === "adopcion"
      ? `Solicitud de adopción:\nNombre: ${form.get("fullname")}\nTeléfono: ${form.get("phone")}\nExperiencia previa: ${form.get("experience")}\nTiempo disponible: ${form.get("time")}\nTipo de hogar: ${form.get("home")}\nComentarios: ${form.get("comments")}`
      : `Solicitud de cita médica:\nNombre: ${form.get("fullname")}\nTeléfono: ${form.get("phone")}\nServicio: ${form.get("service")}\nFecha y hora: ${form.get("datetime")}\nComentarios: ${form.get("comments")}`;
    openWhatsApp(msg);
    openGoogleCalendar();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-content-center text-sm font-bold">PP</div>
            <div className="leading-tight">
              <p className="font-semibold">{BRAND.name}</p>
              <p className="text-xs opacity-70">{BRAND.slogan}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:opacity-80">Servicios</a>
            <a href="#adopciones" className="hover:opacity-80">Adopciones</a>
            <a href="#citas" className="hover:opacity-80">Citas médicas</a>
            <a href="#esteticas" className="hover:opacity-80">Estética</a>
            <a href="#nosotros" className="hover:opacity-80">Nosotros</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </div>
          <button onClick={() => openWhatsApp("Hola, deseo más información, por favor.")} className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition">WhatsApp</button>
        </nav>
      </header>

      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl sm:text-5xl font-semibold leading-tight"
            >
              Atención veterinaria integral y responsable
            </motion.h1>
            <p className="mt-4 text-muted-foreground">Consultas, vacunación, desparasitación, estética canina y accesorios. En {BRAND.name} priorizamos el bienestar y la prevención con estándares profesionales.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => openWhatsApp("Quiero agendar una cita")} className="rounded-2xl px-5 py-3 bg-slate-900 text-white shadow hover:opacity-90">Agendar cita</button>
              <a href="#adopciones" className="rounded-2xl px-5 py-3 border shadow hover:shadow-md">Ver adopciones</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <Tag>Vacunación</Tag>
              <Tag>Desparasitación</Tag>
              <Tag>Estética</Tag>
              <Tag>Accesorios</Tag>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }} 
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              alt="Veterinaria Perros Plus" 
              src="https://images.unsplash.com/photo-1558944351-cf50b2d07586?q=80&w=1400&auto=format&fit=crop" 
              className="object-cover w-full h-full" 
            />
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-slate-50 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle 
            kicker="Servicios" 
            title="Soluciones de salud y bienestar" 
            subtitle="Profesionales capacitados, protocolos de bioseguridad y seguimiento claro para cada paciente." 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Adopciones */}
      <section id="adopciones" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            kicker="Adopciones" 
            title="Encuentra a tu compañero ideal" 
            subtitle="Todos nuestros rescatados están desparasitados, vacunados y esterilizados. ¡Conoce a estos amigos que buscan un hogar!" 
          />
          
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <div className="flex gap-2">
              <span className="font-medium">Tamaño:</span>
              {["Todos", "Pequeño", "Mediano", "Grande"].map(size => (
                <FilterButton
                  key={size}
                  active={filters.size === size}
                  onClick={() => setFilters(prev => ({ ...prev, size }))}
                >
                  {size}
                </FilterButton>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Sexo:</span>
              {["Todos", "Macho", "Hembra"].map(sex => (
                <FilterButton
                  key={sex}
                  active={filters.sex === sex}
                  onClick={() => setFilters(prev => ({ ...prev, sex }))}
                >
                  {sex}
                </FilterButton>
              ))}
            </div>
          </div>
          
          {filteredPets.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPets.map(pet => (
                <PetCard key={pet.id} pet={pet} onAdoptClick={handleAdoptClick} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg">No hay mascotas que coincidan con los filtros seleccionados.</p>
              <button 
                onClick={() => setFilters({ size: "Todos", sex: "Todos" })}
                className="mt-4 rounded-xl px-4 py-2 bg-slate-900 text-white"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Citas médicas */}
      <section id="citas" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            kicker="Citas" 
            title="Agenda tu cita médica" 
            subtitle="Reserva tu consulta, vacunación o cualquier servicio con nuestros veterinarios especializados." 
          />
          
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <form onSubmit={(e) => handleFormSubmit(e, "citas")}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium mb-2">Nombre completo</label>
                  <input type="text" id="fullname" name="fullname" required className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono</label>
                  <input type="tel" id="phone" name="phone" required className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Servicio</label>
                  <select id="service" name="service" required className="w-full rounded-xl border border-gray-300 px-4 py-3">
                    <option value="">Selecciona un servicio</option>
                    <option value="Consulta general">Consulta general</option>
                    <option value="Vacunación">Vacunación</option>
                    <option value="Desparasitación">Desparasitación</option>
                    <option value="Cirugía">Cirugía</option>
                    <option value="Urgencia">Urgencia</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="datetime" className="block text-sm font-medium mb-2">Fecha y hora preferida</label>
                  <input type="datetime-local" id="datetime" name="datetime" className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="comments" className="block text-sm font-medium mb-2">Comentarios adicionales</label>
                  <textarea id="comments" name="comments" rows="3" className="w-full rounded-xl border border-gray-300 px-4 py-3"></textarea>
                </div>
              </div>
              <button type="submit" className="mt-6 w-full md:w-auto rounded-xl px-6 py-3 bg-slate-900 text-white hover:bg-slate-800">
                Agendar cita por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Estética */}
      <section id="esteticas" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            kicker="Estética canina" 
            title="Servicios de belleza y cuidado" 
            subtitle="Mimos y cuidados estéticos para que tu mascota luzca y se sienta mejor." 
          />
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1591946653358-5a2cf4c2a1bc?q=80&w=1200&auto=format&fit=crop" 
                alt="Servicios de estética canina" 
                className="rounded-3xl shadow-lg" 
              />
            </div>
            
            <div className="space-y-6">
              {GROOMING_SERVICES.map((service, index) => (
                <div key={index} className="flex justify-between items-start p-4 rounded-2xl border border-gray-200 hover:bg-slate-50 transition">
                  <div>
                    <h4 className="font-semibold">{service.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                  <span className="font-bold text-slate-900">{service.price}</span>
                </div>
              ))}
              
              <button 
                onClick={() => openWhatsApp("Hola, me interesa agendar un servicio de estética para mi mascota")}
                className="w-full rounded-xl py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              >
                Reservar servicio de estética
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            kicker="Nosotros" 
            title="Nuestra historia y valores" 
            subtitle="Conoce más sobre nuestra misión y el equipo detrás de Perros Plus." 
          />
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Comprometidos con el bienestar animal</h3>
              <p className="mb-4">En Perros Plus llevamos más de 10 años brindando servicios veterinarios de calidad en Toluca. Nuestro equipo de profesionales está comprometido con la salud y bienestar de tus mascotas.</p>
              <p className="mb-4">Contamos con instalaciones modernas y equipamiento de última generación para diagnóstico y tratamiento. Nuestra filosofía se basa en la prevención, el trato humanizado y la educación a dueños.</p>
              <div className="flex gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">Mascotas atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm">Veterinarios especializados</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop" 
                alt="Nuestro equipo" 
                className="rounded-2xl" 
              />
              <img 
                src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=600&auto=format&fit=crop" 
                alt="Instalaciones" 
                className="rounded-2xl" 
              />
              <img 
                src="https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=600&auto=format&fit=crop" 
                alt="Atención veterinaria" 
                className="rounded-2xl" 
              />
              <img 
                src="https://images.unsplash.com/photo-1551144608-9b034ccdf98d?q=80&w=600&auto=format&fit=crop" 
                alt="Equipamiento" 
                className="rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            kicker="Contacto" 
            title="Visítanos o contáctanos" 
            subtitle="Estamos aquí para responder todas tus preguntas y atender a tu mascota." 
          />
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="bg-slate-50 rounded-3xl p-6">
                <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">📍</div>
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-gray-600">{BRAND.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">📞</div>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600">{BRAND.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">🕒</div>
                    <div>
                      <p className="font-medium">Horario de atención</p>
                      {BRAND.hours.map((hour, index) => (
                        <p key={index} className="text-gray-600">{hour.d}: {hour.h}</p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Síguenos en redes sociales</h4>
                  <div className="flex gap-3">
                    <a href={BRAND.social.facebook} className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center">f</a>
                    <a href={BRAND.social.instagram} className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center">ig</a>
                    <a href={BRAND.social.whatsapp} className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center">wa</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-4">Envíanos un mensaje</h3>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const form = new FormData(e.currentTarget);
                const msg = `Consulta general:\nNombre: ${form.get("name")}\nEmail: ${form.get("email")}\nMensaje: ${form.get("message")}`;
                openWhatsApp(msg);
              }}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre completo</label>
                    <input type="text" id="name" name="name" required className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Correo electrónico</label>
                    <input type="email" id="email" name="email" required className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea id="message" name="message" rows="4" required className="w-full rounded-xl border border-gray-300 px-4 py-3"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full rounded-xl py-3 bg-slate-900 text-white hover:bg-slate-800">
                    Enviar mensaje por WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-2xl bg-white text-slate-900 grid place-content-center text-sm font-bold">PP</div>
                <div className="leading-tight">
                  <p className="font-semibold">{BRAND.name}</p>
                  <p className="text-xs opacity-70">{BRAND.slogan}</p>
                </div>
              </div>
              <p className="text-sm opacity-80">Atención veterinaria profesional con enfoque preventivo y humano.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#servicios" className="hover:opacity-100 transition">Servicios</a></li>
                <li><a href="#adopciones" className="hover:opacity-100 transition">Adopciones</a></li>
                <li><a href="#citas" className="hover:opacity-100 transition">Citas médicas</a></li>
                <li><a href="#esteticas" className="hover:opacity-100 transition">Estética</a></li>
                <li><a href="#contacto" className="hover:opacity-100 transition">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <address className="not-italic text-sm opacity-80 space-y-2">
                <p>{BRAND.address}</p>
                <p>{BRAND.phone}</p>
                <div className="flex gap-3 mt-3">
                  <a href={BRAND.social.facebook} className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">f</a>
                  <a href={BRAND.social.instagram} className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">ig</a>
                  <a href={BRAND.social.whatsapp} className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">wa</a>
                </div>
              </address>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm opacity-70">
            <p>© {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}