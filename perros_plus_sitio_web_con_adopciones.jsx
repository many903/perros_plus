<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perros Plus - Veterinaria en Toluca</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/framer-motion@9.5.1/dist/framer-motion.js"></script>
    <style>
        /* Estilos personalizados adicionales */
        .pet-card:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease;
        }
        .service-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .gradient-bg {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        }
        @media (max-width: 768px) {
            .mobile-menu {
                display: none;
            }
            .mobile-menu.active {
                display: block;
            }
        }
    </style>
</head>
<body class="bg-white text-gray-800 font-sans">
    <!-- Header -->
    <header class="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-2xl bg-gray-900 text-white grid place-content-center text-sm font-bold">PP</div>
                <div class="leading-tight">
                    <p class="font-semibold">Perros Plus</p>
                    <p class="text-xs opacity-70">Cuidamos su salud con atención profesional</p>
                </div>
            </div>
            <div class="hidden md:flex items-center gap-6 text-sm">
                <a href="#servicios" class="hover:opacity-80">Servicios</a>
                <a href="#adopciones" class="hover:opacity-80">Adopciones</a>
                <a href="#citas" class="hover:opacity-80">Citas médicas</a>
                <a href="#esteticas" class="hover:opacity-80">Estética</a>
                <a href="#nosotros" class="hover:opacity-80">Nosotros</a>
                <a href="#contacto" class="hover:opacity-80">Contacto</a>
            </div>
            <button onclick="openWhatsApp('Hola, deseo más información, por favor.')" class="rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition">WhatsApp</button>
        </nav>
    </header>

    <!-- Banner/Hero Section -->
    <section class="gradient-bg">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h1 class="text-4xl sm:text-5xl font-semibold leading-tight">
                    Atención veterinaria integral y responsable
                </h1>
                <p class="mt-4 text-gray-600">Consultas, vacunación, desparasitación, estética canina y accesorios. En Perros Plus priorizamos el bienestar y la prevención con estándares profesionales.</p>
                <div class="mt-6 flex flex-wrap gap-3">
                    <button onclick="openWhatsApp('Quiero agendar una cita')" class="rounded-2xl px-5 py-3 bg-gray-900 text-white shadow hover:opacity-90">Agendar cita</button>
                    <a href="#adopciones" class="rounded-2xl px-5 py-3 border shadow hover:shadow-md">Ver adopciones</a>
                </div>
                <div class="mt-6 flex items-center gap-4 text-sm">
                    <span class="rounded-full border px-3 py-1 text-xs">Vacunación</span>
                    <span class="rounded-full border px-3 py-1 text-xs">Desparasitación</span>
                    <span class="rounded-full border px-3 py-1 text-xs">Estética</span>
                    <span class="rounded-full border px-3 py-1 text-xs">Accesorios</span>
                </div>
            </div>
            <div class="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img alt="Veterinaria Perros Plus" src="https://images.unsplash.com/photo-1558944351-cf50b2d07586?q=80&w=1400&auto=format&fit=crop" class="object-cover w-full h-full" />
            </div>
        </div>
    </section>

    <!-- Servicios Section -->
    <section id="servicios" class="bg-gray-50 border-y">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div class="text-center max-w-3xl mx-auto mb-10">
                <p class="uppercase tracking-widest text-xs mb-2 opacity-70">Servicios</p>
                <h2 class="text-3xl sm:text-4xl font-semibold">Soluciones de salud y bienestar</h2>
                <p class="mt-3 text-gray-600">Profesionales capacitados, protocolos de bioseguridad y seguimiento claro para cada paciente.</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="service-card rounded-3xl bg-white p-6 shadow border hover:shadow-md transition">
                    <div class="text-3xl" aria-hidden>🩺</div>
                    <h3 class="mt-3 font-semibold text-lg">Consultas veterinarias</h3>
                    <p class="mt-2 text-sm text-gray-600">Evaluación clínica, diagnóstico y plan de tratamiento.</p>
                </div>
                <div class="service-card rounded-3xl bg-white p-6 shadow border hover:shadow-md transition">
                    <div class="text-3xl" aria-hidden>💉</div>
                    <h3 class="mt-3 font-semibold text-lg">Vacunación y desparasitación</h3>
                    <p class="mt-2 text-sm text-gray-600">Esquemas actualizados y registro en cartilla.</p>
                </div>
                <div class="service-card rounded-3xl bg-white p-6 shadow border hover:shadow-md transition">
                    <div class="text-3xl" aria-hidden>✂️</div>
                    <h3 class="mt-3 font-semibold text-lg">Estética canina</h3>
                    <p class="mt-2 text-sm text-gray-600">Baño, corte higiénico y de raza, limpieza de oídos y uñas.</p>
                </div>
                <div class="service-card rounded-3xl bg-white p-6 shadow border hover:shadow-md transition">
                    <div class="text-3xl" aria-hidden>🛍️</div>
                    <h3 class="mt-3 font-semibold text-lg">Accesorios y alimento</h3>
                    <p class="mt-2 text-sm text-gray-600">Collares, arneses, juguetes y alimento balanceado.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Adopciones Section -->
    <section id="adopciones" class="py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-10">
                <p class="uppercase tracking-widest text-xs mb-2 opacity-70">Adopciones</p>
                <h2 class="text-3xl sm:text-4xl font-semibold">Encuentra a tu compañero ideal</h2>
                <p class="mt-3 text-gray-600">Todos nuestros rescatados están desparasitados, vacunados y esterilizados.</p>
            </div>
            
            <div class="flex flex-wrap gap-4 justify-center mb-10">
                <div class="flex gap-2">
                    <span class="font-medium">Tamaño:</span>
                    <button class="px-4 py-2 rounded-full border bg-gray-900 text-white border-gray-900">Todos</button>
                    <button class="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">Pequeño</button>
                    <button class="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">Mediano</button>
                    <button class="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">Grande</button>
                </div>
                <div class="flex gap-2">
                    <span class="font-medium">Sexo:</span>
                    <button class="px-4 py-2 rounded-full border bg-gray-900 text-white border-gray-900">Todos</button>
                    <button class="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">Macho</button>
                    <button class="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">Hembra</button>
                </div>
            </div>
            
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="pet-card rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div class="aspect-[4/3] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop" alt="Kira" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-start">
                            <h3 class="text-xl font-semibold">Kira</h3>
                            <span class="text-sm bg-gray-100 px-2 py-1 rounded-full">2 años</span>
                        </div>
                        <div class="flex gap-2 mt-3">
                            <span class="rounded-full border px-3 py-1 text-xs">Hembra</span>
                            <span class="rounded-full border px-3 py-1 text-xs">Mediano</span>
                        </div>
                        <p class="mt-3 text-sm text-gray-600">Energética, muy sociable con personas. Ideal para familia activa.</p>
                        <button onclick="openWhatsApp('Hola, me interesa adoptar a Kira. ¿Podrían compartirme requisitos y agendar una visita?')" class="mt-4 w-full rounded-xl py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">Adoptar</button>
                    </div>
                </div>
                
                <div class="pet-card rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div class="aspect-[4/3] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop" alt="Rocky" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-start">
                            <h3 class="text-xl font-semibold">Rocky</h3>
                            <span class="text-sm bg-gray-100 px-2 py-1 rounded-full">3 años</span>
                        </div>
                        <div class="flex gap-2 mt-3">
                            <span class="rounded-full border px-3 py-1 text-xs">Macho</span>
                            <span class="rounded-full border px-3 py-1 text-xs">Grande</span>
                        </div>
                        <p class="mt-3 text-sm text-gray-600">Tranquilo y aprende rápido. Se adapta bien a hogar con patio.</p>
                        <button onclick="openWhatsApp('Hola, me interesa adoptar a Rocky. ¿Podrían compartirme requisitos y agendar una visita?')" class="mt-4 w-full rounded-xl py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">Adoptar</button>
                    </div>
                </div>
                
                <div class="pet-card rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div class="aspect-[4/3] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop" alt="Maya" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-start">
                            <h3 class="text-xl font-semibold">Maya</h3>
                            <span class="text-sm bg-gray-100 px-2 py-1 rounded-full">8 meses</span>
                        </div>
                        <div class="flex gap-2 mt-3">
                            <span class="rounded-full border px-3 py-1 text-xs">Hembra</span>
                            <span class="rounded-full border px-3 py-1 text-xs">Pequeño</span>
                        </div>
                        <p class="mt-3 text-sm text-gray-600">Curiosa y juguetona. Excelente opción para departamento con salidas diarias.</p>
                        <button onclick="openWhatsApp('Hola, me interesa adoptar a Maya. ¿Podrían compartirme requisitos y agendar una visita?')" class="mt-4 w-full rounded-xl py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">Adoptar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8">
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="h-9 w-9 rounded-2xl bg-white text-gray-900 grid place-content-center text-sm font-bold">PP</div>
                        <div class="leading-tight">
                            <p class="font-semibold">Perros Plus</p>
                            <p class="text-xs opacity-70">Cuidamos su salud con atención profesional</p>
                        </div>
                    </div>
                    <p class="text-sm opacity-80">Atención veterinaria profesional con enfoque preventivo y humano.</p>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-4">Enlaces rápidos</h4>
                    <ul class="space-y-2 text-sm opacity-80">
                        <li><a href="#servicios" class="hover:opacity-100 transition">Servicios</a></li>
                        <li><a href="#adopciones" class="hover:opacity-100 transition">Adopciones</a></li>
                        <li><a href="#citas" class="hover:opacity-100 transition">Citas médicas</a></li>
                        <li><a href="#esteticas" class="hover:opacity-100 transition">Estética</a></li>
                        <li><a href="#contacto" class="hover:opacity-100 transition">Contacto</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-4">Contacto</h4>
                    <address class="not-italic text-sm opacity-80 space-y-2">
                        <p>Toluca, Estado de México</p>
                        <p>+52 1 722 214 2773</p>
                        <div class="flex gap-3 mt-3">
                            <a href="#" class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">f</a>
                            <a href="#" class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">ig</a>
                            <a href="https://wa.me/5217222142773" class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">wa</a>
                        </div>
                    </address>
                </div>
            </div>
            
            <div class="border-t border-white/10 mt-10 pt-6 text-center text-sm opacity-70">
                <p>© 2023 Perros Plus. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <script>
        // Funciones JavaScript
        function openWhatsApp(msg) {
            window.open(`https://wa.me/5217222142773?text=${encodeURIComponent(msg)}`, "_blank");
        }
        
        // Animación simple de scroll suave para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>