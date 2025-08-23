import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// === Configuración rápida ===
const WHATSAPP_URL = "https://wa.me/5217222142773"; // Atención inmediata
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

// === Data ejemplo de adopciones (edita/actualiza cuando quieras) ===
const INITIAL_PETS = [
  {
    id: "adp-01",
    name: "Kira",
    age: "2 años",
    sex: "Hembra",
    size: "Mediano",
    vaccinated: true,
    sterilized: true,
    description:
      "Energética, muy sociable con personas. Ideal para familia activa que disfrute de paseos diarios.",
    photo:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "adp-02",
    name: "Rocky",
    age: "3 años",
    sex: "Macho",
    size: "Grande",
    vaccinated: true,
    sterilized: false,
    description:
      "Tranquilo, aprende rápido. Se adapta bien a hogar con patio y rutinas estables.",
    photo:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "adp-03",
    name: "Maya",
    age: "8 meses",
    sex: "Hembra",
    size: "Pequeño",
    vaccinated: true,
    sterilized: true,
    description:
      "Curiosa y juguetona. Excelente opción para departamento con salidas diarias.",
    photo:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop",
  },
];

// Utilidad para CTA de WhatsApp con mensaje prellenado
const openWhatsApp = (msg) => {
  const url = `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
};

// Etiquetas simples
const Tag = ({ children }) => (
  <span className="rounded-full border px-3 py-1 text-xs">{children}</span>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-10">
    {kicker && (
      <p className="uppercase tracking-widest text-xs mb-2 opacity-70">{kicker}</p>
    )}
    <h2 className="text-3xl sm:text-4xl font-semibold">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
  </div>
);

export default function Website() {
  const [pets, setPets] = useState(INITIAL_PETS);
  const [filters, setFilters] = useState({ size: "Todos", sex: "Todos" });

  const filteredPets = useMemo(() => {
    return pets.filter((p) => {
      const okSize = filters.size === "Todos" || p.size === filters.size;
      const okSex = filters.sex === "Todos" || p.sex === filters.sex;
      return okSize && okSex;
    });
  }, [pets, filters]);

  const handleAdoptClick = (pet) => {
    openWhatsApp(
      `Hola, me interesa adoptar a ${pet.name}. ¿Podrían compartirme requisitos y agendar una visita?`
    );
  };

  const handleGeneralAdoptionForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const msg = `Solicitud de adopción:\n\nNombre: ${form.get(
      "fullname"
    )}\nTeléfono: ${form.get("phone")}\nExperiencia previa: ${form.get(
      "experience"
    )}\nTiempo disponible: ${form.get("time")}\nTipo de hogar: ${form.get(
      "home"
    )}\nComentarios: ${form.get("comments")}`;
    openWhatsApp(msg);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-content-center text-sm font-bold">
              PP
            </div>
            <div className="leading-tight">
              <p className="font-semibold">{BRAND.name}</p>
              <p className="text-xs opacity-70">{BRAND.slogan}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:opacity-80">Servicios</a>
            <a href="#adopciones" className="hover:opacity-80">Adopciones</a>
            <a href="#nosotros" className="hover:opacity-80">Nosotros</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </div>
          <button
            onClick={() => openWhatsApp("Hola, deseo más información, por favor.")}
            className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition"
          >
            WhatsApp
          </button>
        </nav>
      </header>

      {/* HERO */}
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
            <p className="mt-4 text-muted-foreground">
              Consultas, vacunación, desparasitación, estética canina y accesorios. En {BRAND.name} priorizamos el bienestar y la prevención con estándares profesionales.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => openWhatsApp("Quiero agendar una cita")}
                className="rounded-2xl px-5 py-3 bg-slate-900 text-white shadow hover:opacity-90"
              >
                Agendar cita
              </button>
              <a
                href="#adopciones"
                className="rounded-2xl px-5 py-3 border shadow hover:shadow-md"
              >
                Ver adopciones
              </a>
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

      {/* SERVICIOS */}
      <section id="servicios" className="bg-slate-50 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            kicker="Servicios"
            title="Soluciones de salud y bienestar"
            subtitle="Profesionales capacitados, protocolos de bioseguridad y seguimiento claro para cada paciente."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              t: "Consultas veterinarias",
              d: "Evaluación clínica, diagnóstico y plan de tratamiento. Enfoque preventivo y educación al tutor.",
              i: "🩺",
            },{
              t: "Vacunación y desparasitación",
              d: "Esquemas actualizados por etapa de vida. Recordatorios y registro en cartilla.",
              i: "💉",
            },{
              t: "Estética canina",
              d: "Baño, corte higiénico y de raza, limpieza de oídos y corte de uñas.",
              i: "✂️",
            },{
              t: "Accesorios y alimento",
              d: "Collares, arneses, juguetes y alimento balanceado de marcas confiables.",
              i: "🛍️",
            }].map((c, idx) => (
              <div key={idx} className="rounded-3xl bg-white p-6 shadow border hover:shadow-md transition">
                <div className="text-3xl" aria-hidden>{c.i}</div>
                <h3 className="mt-3 font-semibold text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADOPCIONES */}
      <section id="adopciones" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle
            kicker="Adopciones"
            title="Da un hogar responsable"
            subtitle="Cada adopción se realiza con evaluación y seguimiento para asegurar el bienestar."
          />

          {/* Filtros */}
          <div className="mb-6 grid sm:grid-cols-3 gap-3">
            <select
              className="rounded-2xl border px-4 py-3"
              value={filters.size}
              onChange={(e) => setFilters((f) => ({ ...f, size: e.target.value }))}
            >
              {['Todos','Pequeño','Mediano','Grande'].map(opt => (
                <option key={opt} value={opt}>{`Tamaño: ${opt}`}</option>
              ))}
            </select>
            <select
              className="rounded-2xl border px-4 py-3"
              value={filters.sex}
              onChange={(e) => setFilters((f) => ({ ...f, sex: e.target.value }))}
            >
              {['Todos','Hembra','Macho'].map(opt => (
                <option key={opt} value={opt}>{`Sexo: ${opt}`}</option>
              ))}
            </select>
            <button
              onClick={() => setFilters({ size: 'Todos', sex: 'Todos' })}
              className="rounded-2xl border px-4 py-3"
            >
              Limpiar filtros
            </button>
          </div>

          {/* Cards de mascotas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((p) => (
              <div key={p.id} className="rounded-3xl overflow-hidden border bg-white shadow hover:shadow-lg transition">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={p.photo} alt={`Foto de ${p.name}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{p.name}</h3>
                    <div className="flex gap-2 text-xs">
                      <Tag>{p.age}</Tag>
                      <Tag>{p.size}</Tag>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-3 flex gap-2 text-xs">
                    {p.vaccinated && <Tag>Vacunado</Tag>}
                    {p.sterilized && <Tag>Esterilizado</Tag>}
                    <Tag>{p.sex}</Tag>
                  </div>
                  <div className="mt-5 flex gap-3">
                    <button
                      onClick={() => handleAdoptClick(p)}
                      className="rounded-2xl px-4 py-2 bg-slate-900 text-white"
                    >
                      Adoptar / Info
                    </button>
                    <button
                      onClick={() => openWhatsApp(`Quiero visitar a ${p.name} para conocerlo.`)}
                      className="rounded-2xl px-4 py-2 border"
                    >
                      Agendar visita
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Formulario general de adopción */}
          <div className="mt-12 rounded-3xl border p-6 sm:p-8 bg-slate-50">
            <h3 className="text-xl font-semibold">Formulario rápido</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Completa el formulario y te contactaremos para continuar el proceso. Se enviará por WhatsApp.
            </p>
            <form className="mt-6 grid sm:grid-cols-2 gap-4" onSubmit={handleGeneralAdoptionForm}>
              <input name="fullname" required placeholder="Nombre completo" className="rounded-2xl border px-4 py-3" />
              <input name="phone" required placeholder="Teléfono" className="rounded-2xl border px-4 py-3" />
              <select name="experience" className="rounded-2xl border px-4 py-3">
                <option value="Primera adopción">Experiencia: Primera adopción</option>
                <option value="Experiencia previa">Experiencia: Previa</option>
              </select>
              <select name="time" className="rounded-2xl border px-4 py-3">
                <option value="Tiempo completo en casa">Tiempo completo en casa</option>
                <option value="Parcial (horario laboral)">Parcial (horario laboral)</option>
              </select>
              <select name="home" className="rounded-2xl border px-4 py-3">
                <option value="Departamento">Tipo de hogar: Departamento</option>
                <option value="Casa con patio">Tipo de hogar: Casa con patio</option>
              </select>
              <input name="comments" placeholder="Comentarios (opcional)" className="rounded-2xl border px-4 py-3" />
              <div className="sm:col-span-2 flex gap-3">
                <button type="submit" className="rounded-2xl px-5 py-3 bg-slate-900 text-white">
                  Enviar por WhatsApp
                </button>
                <button type="button" onClick={() => openWhatsApp("Quiero conocer el proceso de adopción")}
                  className="rounded-2xl px-5 py-3 border">
                  Dudas del proceso
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-slate-50 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              kicker="Nosotros"
              title="Equipo comprometido con la medicina preventiva"
              subtitle="Trabajamos con protocolos claros, comunicación transparente y seguimiento posterior a cada servicio."
            />
            <ul className="space-y-3 text-sm">
              <li>• Historia clínica digital y recordatorios de esquemas de salud.</li>
              <li>• Área de estética con procedimientos higiénicos y controlados.</li>
              <li>• Recomendaciones nutricionales y accesorios seguros.</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <button onClick={() => openWhatsApp("Requiero cotización de servicios")}
                className="rounded-2xl px-5 py-3 bg-slate-900 text-white">Cotizar</button>
              <a href="#contacto" className="rounded-2xl px-5 py-3 border">Ver contacto</a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border shadow">
            <img
              src="https://images.unsplash.com/photo-1606425271394-6fc1b25592c0?q=80&w=1400&auto=format&fit=crop"
              alt="Equipo veterinario"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle kicker="Contacto" title="Agenda y ubicaciones" />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border p-6">
              <h4 className="font-semibold">Información</h4>
              <div className="mt-3 text-sm">
                <p>📍 {BRAND.address}</p>
                <p>📞 {BRAND.phone}</p>
              </div>
              <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                {BRAND.hours.map((h) => (
                  <div key={h.d} className="rounded-2xl border px-4 py-3 bg-slate-50">
                    <p className="font-medium">{h.d}</p>
                    <p className="text-muted-foreground">{h.h}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={() => openWhatsApp("Hola, deseo información y horarios.")}
                  className="rounded-2xl px-5 py-3 bg-slate-900 text-white"
                >
                  WhatsApp inmediato
                </button>
                <a href={BRAND.social.facebook} className="rounded-2xl px-5 py-3 border">Facebook</a>
                <a href={BRAND.social.instagram} className="rounded-2xl px-5 py-3 border">Instagram</a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border">
              {/* Reemplaza el src con tu mapa de Google */}
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                alt="Mapa o fachada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="opacity-70">© {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#servicios" className="hover:opacity-80">Servicios</a>
            <a href="#adopciones" className="hover:opacity-80">Adopciones</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
