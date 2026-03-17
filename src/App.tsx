import { motion, type Variants } from 'framer-motion'
import {
  Instagram,
  Facebook,
  Phone,
  MessageCircle,
} from 'lucide-react'

import logo from './assets/logo.jpeg'
import heroMain from './assets/1.jpg'
import quincePhoto from './assets/2.png'
import curlsBack from './assets/3.png'
import ponytailPhoto from './assets/4.png'
import promoPhoto from './assets/5.png'
import weddingStreet from './assets/6.png'
import bridePhone from './assets/7.png'

const packages = [
  {
    title: 'Paquete Básico',
    subtitle: 'Maquillaje Social',
    price: '$150',
    icon: 'M',
    description:
      'Ideal para eventos especiales con un look elegante, fresco y duradero.',
    features: [
      'Maquillaje social personalizado según tu estilo.',
      'Acabado elegante y natural.',
      'Preparación de piel para mejor duración.',
      'Fijación para que luzcas impecable durante tu evento.',
    ],
  },
  {
    title: 'Paquete Intermedio',
    subtitle: 'Glam',
    price: '$170',
    icon: 'G',
    description:
      'Perfecto para quienes buscan un look más definido, glamoroso y sofisticado.',
    features: [
      'Maquillaje glam con mayor definición.',
      'Técnicas de contorno e iluminación.',
      'Asesoría en elección de tonos según tu evento.',
      'Fijador de maquillaje profesional para mayor duración.',
    ],
    highlighted: true,
  },
  {
    title: 'Paquete Premium',
    subtitle: 'VIP',
    price: '$200',
    icon: 'V',
    description:
      'Una experiencia más completa para lucir espectacular en tu día especial.',
    features: [
      'Preparación completa de piel.',
      'Maquillaje premium de larga duración.',
      'Acabado de alta definición ideal para foto y video.',
      'Toques finales de iluminación y perfeccionamiento.',
      'Atención más personalizada para tu look final.',
    ],
  },
]

const gallery = [
  {
    image: quincePhoto,
    title: 'Bridal elegance',
    text: 'Un look de novia elegante, romántico y cuidadosamente diseñado para un acabado inolvidable.',
  },
  {
    image: weddingStreet,
    title: 'Timeless beauty',
    text: 'Un look clásico, delicado y memorable para tu día especial.',
  },
  {
    image: curlsBack,
    title: 'Peinado de novia',
    text: 'Textura, volumen y un acabado sofisticado para complementar un look nupcial de lujo.',
  },
  {
    image: ponytailPhoto,
    title: 'Beauty styling',
    text: 'Peinados modernos y refinados para sesiones, eventos y celebraciones.',
  },
  {
    image: bridePhone,
    title: 'Bridal preparation',
    text: 'Momentos previos al gran día con un styling elegante, femenino y premium.',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

const zoomSoft: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050507] text-[#f8f2ea] selection:bg-[#c6a664] selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(182,135,120,0.14),transparent_22%),radial-gradient(circle_at_85%_10%,rgba(255,215,0,0.08),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(247,231,206,0.06),transparent_24%),linear-gradient(180deg,#070709_0%,#050507_42%,#030304_100%)]" />
        <div className="absolute left-[-120px] top-[100px] h-[360px] w-[360px] rounded-full bg-[#b68778]/10 blur-3xl animate-pulse" />
        <div className="absolute right-[-100px] top-[160px] h-[320px] w-[320px] rounded-full bg-[#c6a664]/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[80px] left-1/2 h-[280px] w-[680px] -translate-x-1/2 rounded-full bg-[#f7e7ce]/[0.05] blur-3xl" />
      </div>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <motion.a
          href="https://wa.me/17025823041"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c6a664] text-black shadow-[0_10px_30px_rgba(198,166,100,0.35)] transition hover:bg-[#ffd700]"
        >
          <MessageCircle size={22} />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/bridexvglam/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c6a664]/30 bg-black/70 text-[#f8f2ea] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:border-[#ffd700] hover:text-[#ffd700]"
        >
          <Instagram size={22} />
        </motion.a>

        <motion.a
          href="https://www.facebook.com/profile.php?id=61582169164367"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c6a664]/30 bg-black/70 text-[#f8f2ea] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:border-[#ffd700] hover:text-[#ffd700]"
        >
          <Facebook size={22} />
        </motion.a>
      </div>

      <header className="sticky top-0 z-50 px-4 py-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#c6a664]/15 bg-black/55 px-4 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6"
        >
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <motion.img
                whileHover={{ scale: 1.06, rotate: 1.5 }}
                src={logo}
                alt="Luz Cervantes Hair and Makeup Artist"
                className="h-12 w-12 rounded-full border border-[#c6a664]/30 object-cover shadow-[0_0_18px_rgba(198,166,100,0.22)]"
              />
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.34em] text-[#c6a664]">
                  Las Vegas, Nevada
                </p>
                <h1 className="text-sm font-medium text-[#fff8f0] md:text-base">
                  Luz Cervantes
                </h1>
                <p className="text-[11px] text-[#d7c9b3] md:text-xs">
                  Hair and Makeup Artist
                </p>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#inicio" className="text-sm text-[#f6eee4] transition duration-300 hover:text-[#ffd700]">
              Inicio
            </a>
            <a href="#experiencia" className="text-sm text-[#f6eee4] transition duration-300 hover:text-[#ffd700]">
              Experiencia
            </a>
            <a href="#servicios" className="text-sm text-[#f6eee4] transition duration-300 hover:text-[#ffd700]">
              Servicios
            </a>
            <a href="#galeria" className="text-sm text-[#f6eee4] transition duration-300 hover:text-[#ffd700]">
              Galería
            </a>
            <a href="#paquetes" className="text-sm text-[#f6eee4] transition duration-300 hover:text-[#ffd700]">
              Paquetes
            </a>
            <a href="#contacto" className="text-sm text-[#f6eee4] transition duration-300 hover:text-[#ffd700]">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/bridexvglam/"
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#c6a664]/20 text-[#f8f2ea] transition duration-300 hover:border-[#ffd700] hover:text-[#ffd700] md:flex"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61582169164367"
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#c6a664]/20 text-[#f8f2ea] transition duration-300 hover:border-[#ffd700] hover:text-[#ffd700] md:flex"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#contacto"
              className="rounded-full border border-[#c6a664] px-5 py-2.5 text-sm font-medium text-[#f8f2ea] transition duration-300 hover:scale-[1.04] hover:bg-[#c6a664] hover:text-black"
            >
              Reserva
            </a>
          </div>
        </motion.div>
      </header>

      <section
        id="inicio"
        className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14"
      >
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="pointer-events-none absolute left-1/2 top-[4%] z-0 -translate-x-1/2 md:top-[-1%]">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(198,166,100,0.24)_0%,rgba(198,166,100,0.09)_38%,transparent_74%)] blur-2xl md:h-[500px] md:w-[500px]" />
              <div className="absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_66%)] blur-3xl md:h-[600px] md:w-[600px]" />
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
                src={logo}
                alt="Luz Cervantes Hair and Makeup Artist"
                className="h-[270px] w-[270px] rounded-full object-cover blur-[0.2px] saturate-[1] md:h-[390px] md:w-[390px]"
              />
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="relative z-10 mx-auto mb-8 w-fit rounded-full border border-[#c6a664]/20 bg-white/[0.03] px-5 py-2 text-sm text-[#f7e7ce] shadow-[0_0_30px_rgba(198,166,100,0.10)]"
          >
            Hair and Makeup Artist · Brides · Quinceañeras
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="relative z-10 mb-5 text-xs uppercase tracking-[0.42em] text-[#c6a664] md:text-sm"
          >
            Glamour para Novias y Quinceañeras
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="relative z-10 mx-auto max-w-6xl text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#fff8f0] sm:text-[4rem] md:text-[5.3rem] xl:text-[6.2rem]"
          >
            Luz Cervantes
            <br className="hidden md:block" />
            <span className="inline-block bg-gradient-to-r from-[#fff8f0] via-[#f7e7ce] to-[#c6a664] bg-clip-text text-transparent">
              Hair and Makeup Artist
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.45}
            className="relative z-10 mx-auto mt-8 max-w-3xl text-base leading-8 text-[#d8cdbf] md:text-lg"
          >
            Un concepto elegante, femenino y glamoroso para novias y quinceañeras en
            Las Vegas. Creamos looks inolvidables con una presencia visual de lujo,
            pensada para fotografía, video y el gran evento.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#paquetes"
              className="rounded-full bg-[#c6a664] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black shadow-[0_10px_30px_rgba(198,166,100,0.25)] transition duration-300 hover:scale-[1.04] hover:bg-[#ffd700]"
            >
              Ver paquetes
            </a>
            <a
              href="#galeria"
              className="rounded-full border border-[#f7e7ce]/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#f8f2ea] transition duration-300 hover:scale-[1.04] hover:border-[#ffd700] hover:text-[#ffd700]"
            >
              Ver galería
            </a>
          </motion.div>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.88fr_1.24fr_0.88fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.1}
            className="rounded-[32px] border border-[#c6a664]/15 bg-white/[0.03] p-7 shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-[#c6a664]/35"
          >
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#c6a664]">
                Estilo
              </p>
              <h3 className="text-3xl font-semibold text-[#fff7ef]">
                Elegancia
                <br />
                editorial
              </h3>
              <p className="mt-5 leading-8 text-[#d5cab9]">
                Una imagen diseñada para transmitir lujo, armonía y una presencia
                inolvidable desde cada ángulo.
              </p>
            </div>

            <div className="mt-8 border-t border-[#c6a664]/12 pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6a664]">
                Especialidad
              </p>
              <p className="mt-3 text-lg text-[#f1e7da]">
                Novias · XV · Glam premium
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={zoomSoft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            className="group relative overflow-hidden rounded-[40px] border border-[#c6a664]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.42)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_95px_rgba(198,166,100,0.10)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(182,135,120,0.13),transparent_32%)]" />
            <div className="absolute inset-5 rounded-[34px] border border-[#f7e7ce]/10" />
            <div className="relative rounded-[30px] border border-[#c6a664]/12 bg-black/35 p-5 md:p-7">
              <div className="overflow-hidden rounded-[26px] border border-[#c6a664]/10 bg-[#0b0b0d]">
                <img
                  src={heroMain}
                  alt="Luz Cervantes principal"
                  className="h-[520px] w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                />
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#c6a664]/12 bg-black/30 p-4 transition duration-300 hover:border-[#c6a664]/30">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#c6a664]">
                    Hair Styling
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#eadfcf]">
                    Peinados elegantes y acabados con presencia de lujo.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#c6a664]/12 bg-black/30 p-4 transition duration-300 hover:border-[#c6a664]/30">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#c6a664]">
                    Makeup Glam
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#eadfcf]">
                    Looks glamorosos, femeninos y memorables para tu evento.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.3}
            className="rounded-[32px] border border-[#c6a664]/15 bg-white/[0.03] p-7 shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-[#c6a664]/35"
          >
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#c6a664]">
                Ubicación
              </p>
              <h3 className="text-3xl font-semibold text-[#fff7ef]">
                Las Vegas,
                <br />
                Nevada
              </h3>
              <p className="mt-5 leading-8 text-[#d5cab9]">
                Una experiencia visual sofisticada para eventos especiales con una
                identidad femenina, moderna y premium.
              </p>
            </div>

            <div className="mt-8 border-t border-[#c6a664]/12 pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6a664]">
                Dirección
              </p>
              <p className="mt-3 text-lg text-[#f1e7da]">
                2202 E Charleston Blvd
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experiencia" className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.1}
          className="overflow-hidden rounded-[36px] border border-[#c6a664]/15 bg-white/[0.03] shadow-[0_10px_60px_rgba(0,0,0,0.28)]"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-[#c6a664]/10 p-8 lg:border-b-0 lg:border-r lg:p-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c6a664]">
                La experiencia
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[#fff8f0] md:text-4xl">
                Más que peinado y maquillaje, una presencia completa.
              </h3>
              <p className="mt-5 max-w-xl leading-8 text-[#d6cab9]">
                La imagen ideal para tu evento no solo debe verse bonita: debe sentirse
                lujosa, armónica y pensada para que luzcas espectacular desde cada ángulo.
              </p>
            </div>

            <div className="grid gap-px bg-[#c6a664]/10 md:grid-cols-3">
              {[
                {
                  number: '01',
                  title: 'Asesoría visual',
                  text: 'Definimos un look acorde a tu vestido, accesorios y esencia.',
                },
                {
                  number: '02',
                  title: 'Acabado premium',
                  text: 'Técnicas que favorecen fotografía, video, iluminación y duración.',
                },
                {
                  number: '03',
                  title: 'Resultado memorable',
                  text: 'Un look elegante, glamoroso y de alto impacto para tu gran día.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={0.15 + index * 0.12}
                  className="bg-[#0d0d10] p-8 transition duration-300 hover:bg-[#111116]"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c6a664]">{item.number}</p>
                  <h4 className="mt-4 text-xl font-semibold text-[#fff6ec]">{item.title}</h4>
                  <p className="mt-3 leading-7 text-[#d2c6b6]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#c6a664]">Servicios</p>
          <h3 className="mt-4 text-4xl font-semibold text-[#fff8f0] md:text-5xl">
            Un servicio pensado para resaltar belleza, lujo y feminidad.
          </h3>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: 'B',
              label: 'Bridal Glam',
              title: 'Novias',
              text: 'Peinado y maquillaje sofisticado para una imagen refinada, elegante y luminosa.',
              footer: 'Elegancia atemporal',
              special: false,
            },
            {
              icon: 'XV',
              label: 'XV Glam',
              title: 'Quinceañeras',
              text: 'Looks glamorosos, juveniles y delicados para brillar con una imagen inolvidable.',
              footer: 'Glamour moderno',
              special: true,
            },
            {
              icon: 'M',
              label: 'Hair and Makeup',
              title: 'Maquillaje',
              text: 'Técnicas profesionales para una piel luminosa y un acabado impecable de alto nivel.',
              footer: 'Acabado premium',
              special: false,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={0.12 + index * 0.12}
              className={`group rounded-[34px] border p-8 transition duration-300 hover:-translate-y-2 hover:border-[#c6a664]/35 hover:shadow-[0_20px_50px_rgba(198,166,100,0.08)] ${
                item.special
                  ? 'border-[#c6a664]/15 bg-[linear-gradient(180deg,rgba(198,166,100,0.10),rgba(255,255,255,0.03))]'
                  : 'border-[#c6a664]/15 bg-white/[0.03]'
              }`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c6a664]/20 bg-[#c6a664]/10 text-lg font-semibold text-[#f7e7ce] transition duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#c6a664]">{item.label}</p>
              <h4 className="mt-4 text-2xl font-semibold text-[#fff8f0]">{item.title}</h4>
              <p className="mt-4 leading-8 text-[#d5c9b8]">{item.text}</p>
              <div className="mt-8 h-px bg-gradient-to-r from-[#c6a664]/40 to-transparent" />
              <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[#e9ddcf]">{item.footer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#c6a664]">Galería</p>
          <h3 className="mt-4 text-4xl font-semibold text-[#fff8f0] md:text-5xl">
            Inspiración visual para novias y quinceañeras.
          </h3>
          <p className="mt-6 leading-8 text-[#d5c9b8]">
            Una selección de estilos, peinados y momentos que reflejan la esencia elegante,
            femenina y glamorosa de la marca.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          {gallery.map((item, index) => {
            const cardSpan =
              index === 0
                ? 'xl:col-span-5'
                : index === 1
                ? 'xl:col-span-4'
                : index === 2
                ? 'xl:col-span-3'
                : 'xl:col-span-6'

            const imageHeight = index <= 2 ? 'h-[520px]' : 'h-[420px]'

            return (
              <motion.div
                key={index}
                variants={zoomSoft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.1 + index * 0.08}
                className={`group overflow-hidden rounded-[32px] border border-[#c6a664]/15 bg-white/[0.03] shadow-[0_12px_45px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-[#c6a664]/35 ${cardSpan}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`${imageHeight} w-full object-cover transition duration-[1200ms] group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#c6a664]">
                    {item.title}
                  </p>
                  <p className="mt-4 leading-8 text-[#eadfcf]">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          className="mt-10 overflow-hidden rounded-[34px] border border-[#c6a664]/15 bg-white/[0.03]"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="group relative overflow-hidden">
              <img
                src={promoPhoto}
                alt="Maquillaje y peinados"
                className="h-full min-h-[420px] w-full object-cover transition duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
            </div>

            <div className="flex items-center p-8 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#c6a664]">
                  Hair and Makeup Artist
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-[#fff8f0] md:text-4xl">
                  Maquillaje y peinados profesionales con acabado premium.
                </h3>
                <p className="mt-6 leading-8 text-[#d5c9b8]">
                  Un estilo diseñado para proyectar glamour, elegancia y seguridad en cada
                  evento especial.
                </p>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex rounded-full border border-[#c6a664] px-6 py-3 text-sm font-medium text-[#f8f2ea] transition duration-300 hover:bg-[#c6a664] hover:text-black"
                >
                  Agenda tu cita
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="paquetes" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#c6a664]">Paquetes</p>
          <h3 className="mt-4 text-4xl font-semibold text-[#fff8f0] md:text-5xl">
            Elige la experiencia perfecta para tu evento.
          </h3>
          <p className="mt-6 leading-8 text-[#d5c9b8]">
            Diseñamos cada paquete para que disfrutes un look sofisticado, femenino y
            duradero, pensado para resaltar tu belleza en cada momento especial.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={0.12 + index * 0.12}
              className={`rounded-[34px] border p-8 transition duration-300 hover:-translate-y-2 ${
                pkg.highlighted
                  ? 'border-[#c6a664]/35 bg-[linear-gradient(180deg,rgba(198,166,100,0.14),rgba(255,255,255,0.04))] shadow-[0_15px_50px_rgba(198,166,100,0.12)]'
                  : 'border-[#c6a664]/15 bg-white/[0.03] hover:border-[#c6a664]/30 hover:shadow-[0_15px_45px_rgba(198,166,100,0.06)]'
              }`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c6a664]/20 bg-[#c6a664]/10 text-lg font-semibold text-[#f7e7ce]">
                {pkg.icon}
              </div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#c6a664]">
                {pkg.title}
              </p>

              <h4 className="mt-3 text-2xl font-semibold text-[#fff8f0]">{pkg.subtitle}</h4>

              <p className="mt-4 text-3xl font-semibold text-[#f7e7ce]">{pkg.price}</p>

              <p className="mt-5 leading-8 text-[#d5c9b8]">{pkg.description}</p>

              <div className="mt-8 h-px bg-gradient-to-r from-[#c6a664]/40 to-transparent" />

              <ul className="mt-6 space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex gap-3 text-sm leading-7 text-[#eadfcf]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c6a664]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="mt-8 inline-flex rounded-full border border-[#c6a664] px-5 py-3 text-sm font-medium text-[#f8f2ea] transition duration-300 hover:bg-[#c6a664] hover:text-black"
              >
                Reservar paquete
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.18}
          className="mt-10 rounded-[28px] border border-[#c6a664]/20 bg-[#c6a664]/[0.06] px-6 py-5"
        >
          <p className="text-sm leading-7 text-[#f2e7d8] md:text-base">
            <span className="font-semibold text-[#c6a664]">Nota importante:</span> Los precios
            mostrados <span className="font-semibold">no incluyen gastos de transporte ni parking</span>{' '}
            en caso de ser requeridos. Estos costos se cotizan por separado según la ubicación del evento.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.24}
          className="mt-12 rounded-[30px] border border-[#c6a664]/15 bg-white/[0.03] px-6 py-6 text-center"
        >
          <p className="text-base leading-8 text-[#e8ddce] md:text-lg">
            ✨ Haz que cada momento brille. Agenda tu cita hoy y luce espectacular en
            tu evento especial. ✨
          </p>
        </motion.div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            className="rounded-[36px] border border-[#c6a664]/15 bg-white/[0.03] p-8 shadow-[0_15px_55px_rgba(0,0,0,0.25)] md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#c6a664]">Contacto</p>
            <h3 className="mt-4 text-4xl font-semibold text-[#fff8f0] md:text-5xl">
              Reserva tu fecha y haz que tu imagen también sea protagonista.
            </h3>

            <p className="mt-6 leading-8 text-[#d4c8b7]">
              Contáctanos directamente por WhatsApp, llamada o redes sociales para cotizar tu evento,
              revisar disponibilidad y apartar tu fecha.
            </p>

            <div className="mt-10 space-y-5 text-[#f6efe7]">
              <div className="rounded-2xl border border-[#c6a664]/12 bg-black/20 px-5 py-4 transition duration-300 hover:border-[#c6a664]/30">
                <span className="text-[#c6a664]">Ubicación:</span> 2202 E Charleston Blvd, Las Vegas, NV, United States, 89104
              </div>

              <a
                href="https://www.instagram.com/bridexvglam/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[#c6a664]/12 bg-black/20 px-5 py-4 transition duration-300 hover:border-[#c6a664]/30"
              >
                <Instagram size={18} className="text-[#c6a664]" />
                <span>
                  <span className="text-[#c6a664]">Instagram:</span> @bridexvglam
                </span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61582169164367"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[#c6a664]/12 bg-black/20 px-5 py-4 transition duration-300 hover:border-[#c6a664]/30"
              >
                <Facebook size={18} className="text-[#c6a664]" />
                <span>
                  <span className="text-[#c6a664]">Facebook:</span> Bride XV Glam
                </span>
              </a>

              <div className="rounded-2xl border border-[#c6a664]/12 bg-black/20 px-5 py-4 transition duration-300 hover:border-[#c6a664]/30">
                <span className="text-[#c6a664]">WhatsApp:</span> +1 (702) 582-3041
              </div>

              <div className="rounded-2xl border border-[#c6a664]/12 bg-black/20 px-5 py-4 transition duration-300 hover:border-[#c6a664]/30">
                <span className="text-[#c6a664]">Llamadas:</span> +1 (702) 582-3041
              </div>

              <div className="rounded-2xl border border-[#c6a664]/12 bg-black/20 px-5 py-4 transition duration-300 hover:border-[#c6a664]/30">
                <span className="text-[#c6a664]">Importante:</span> No incluye gastos de transporte ni parking en caso de ser requeridos.
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={zoomSoft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            className="rounded-[36px] border border-[#c6a664]/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-[0_15px_55px_rgba(0,0,0,0.25)] md:p-10"
          >
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c6a664]">
                Solicita información
              </p>
              <h4 className="mt-4 text-3xl font-semibold text-[#fff8f0]">
                Habla con nosotros directamente
              </h4>
              <p className="mt-5 leading-8 text-[#d4c8b7]">
                Elige la forma de contacto que prefieras para recibir atención más rápida.
              </p>
            </div>

            <div className="grid gap-5">
              <a
                href="https://wa.me/17025823041"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-[#c6a664] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black shadow-[0_12px_30px_rgba(198,166,100,0.25)] transition duration-300 hover:scale-[1.02] hover:bg-[#ffd700]"
              >
                <MessageCircle size={18} />
                Enviar mensaje por WhatsApp
              </a>

              <a
                href="tel:+17025823041"
                className="flex items-center justify-center gap-3 rounded-full border border-[#c6a664] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#f8f2ea] transition duration-300 hover:scale-[1.02] hover:bg-[#c6a664] hover:text-black"
              >
                <Phone size={18} />
                Hacer una llamada
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/bridexvglam/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-[#c6a664]/20 px-5 py-3 text-sm font-medium text-[#f8f2ea] transition duration-300 hover:border-[#ffd700] hover:text-[#ffd700]"
                >
                  <Instagram size={18} />
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61582169164367"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-[#c6a664]/20 px-5 py-3 text-sm font-medium text-[#f8f2ea] transition duration-300 hover:border-[#ffd700] hover:text-[#ffd700]"
                >
                  <Facebook size={18} />
                  Facebook
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-[#c6a664]/12 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[#c6a664]">
                Atención directa
              </p>
              <p className="mt-4 text-lg leading-8 text-[#eadfcf]">
                Agenda tu cita, consulta paquetes y confirma disponibilidad de forma rápida
                por WhatsApp, llamada o redes sociales.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#c6a664]/10 bg-black/40 px-4 py-8 backdrop-blur-md md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-[#fff7ef]">
              Luz Cervantes
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-[#c6a664]">
              Hair and Makeup Artist
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/bridexvglam/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c6a664]/20 text-[#f8f2ea] transition duration-300 hover:border-[#ffd700] hover:text-[#ffd700]"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61582169164367"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c6a664]/20 text-[#f8f2ea] transition duration-300 hover:border-[#ffd700] hover:text-[#ffd700]"
            >
              <Facebook size={18} />
            </a>
          </div>

          <p className="text-sm text-[#cbbfae]">© 2026 Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App