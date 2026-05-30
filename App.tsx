import React, { useState } from 'react';
import { 
  Car, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  ShieldCheck, 
  CreditCard, 
  Clock4, 
  Star,
  CheckCircle2,
  MessageSquare,
  Menu,
  X,
  ChevronRight,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = "905352908080";

const generateWhatsAppLink = (pickup = "", dropoff = "", date = "", passengers = "") => {
  const text = `Hello, I would like to book a transfer.
Pickup: ${pickup}
Destination: ${dropoff}
Date: ${date}
Passengers: ${passengers}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-white">
              BLACK<span className="text-gold-500">DRIVER</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors">Services</a>
            <a href="#fleet" className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors">Fleet</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors">How it Works</a>
            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-black px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Book via WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold-500">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black-900 border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-300 hover:text-gold-500 py-2">Services</a>
              <a href="#fleet" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-300 hover:text-gold-500 py-2">Fleet</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-300 hover:text-gold-500 py-2">How it Works</a>
              <a 
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-gold-500 text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mt-4"
              >
                <MessageSquare className="w-5 h-5" />
                Book via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppLink(
      formData.pickup,
      formData.dropoff,
      formData.date,
      formData.passengers
    ), '_blank');
  };

  return (
    <div className="relative min-h-screen pt-20 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Luxury Chauffeur Interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-950 via-black-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
              <span className="text-sm font-medium text-gray-200">Trusted Premium Chauffeur Service</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Premium <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Chauffeur Service
              </span><br/>
              in Istanbul
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-xl font-light">
              Reliable, luxury airport transfers and private drivers at fixed prices. Experience the ultimate comfort and professionalism.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                Book via WhatsApp
              </a>
              <a 
                href="#fleet"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
              >
                Explore Our Fleet
              </a>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="bg-black-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Get Instant Price</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="space-y-4">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      required
                      placeholder="Pickup Location (e.g. IST Airport)" 
                      value={formData.pickup}
                      onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                      className="w-full bg-black-800/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gold-500" />
                    <input 
                      type="text" 
                      required
                      placeholder="Drop-off Location" 
                      value={formData.dropoff}
                      onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
                      className="w-full bg-black-800/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-black-800/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all [color-scheme:dark]"
                    />
                  </div>
                  
                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input 
                      type="time" 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-black-800/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Users className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <select 
                    value={formData.passengers}
                    onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                    className="w-full bg-black-800/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num} className="bg-black-900">{num} Passenger{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-[#2A2A2A] py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all mt-4"
                >
                  Get Instant Price
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-gold-500" />,
      title: "Fixed Pricing",
      description: "No hidden fees, no surge pricing. The price you see is the price you pay."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-500" />,
      title: "Professional Drivers",
      description: "Vetted, English-speaking chauffeurs dedicated to your safety and comfort."
    },
    {
      icon: <Car className="w-8 h-8 text-gold-500" />,
      title: "Luxury Vehicles",
      description: "Late-model Mercedes-Benz vehicles maintained to the highest standards."
    },
    {
      icon: <Clock4 className="w-8 h-8 text-gold-500" />,
      title: "24/7 Availability",
      description: "Day or night, our service is available around the clock for your convenience."
    }
  ];

  return (
    <section id="services" className="py-24 bg-black-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The BlackDriver Standard</h2>
          <p className="text-gray-400 text-lg">Experience unparalleled luxury and reliability for your journeys in and around Istanbul.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black-900 p-8 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all group">
              <div className="bg-black-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  const vehicles = [
    {
      name: "Mercedes-Benz Vito",
      type: "Luxury Van",
      image: "/images/vito.jpg",
      passengers: "1-6",
      luggage: "6",
      description: "Perfect for families or small groups. Spacious interior with premium leather seating and climate control."
    },
    {
      name: "Mercedes-Benz Sprinter",
      type: "Executive Minibus",
      image: "/images/sprinter-new.jpg",
      passengers: "7-14",
      luggage: "14",
      description: "Ideal for larger groups, corporate events, or extensive luggage requirements without compromising on luxury."
    },
    {
      name: "Tesla Model Y",
      type: "Premium SUV",
      image: "/images/tesla-juniper.jpg",
      passengers: "1-4",
      luggage: "4",
      description: "Experience the future of luxury travel. Eco-friendly, silent, and incredibly smooth with a panoramic glass roof."
    },
    {
      name: "Mercedes-Benz S-Class",
      type: "First Class Sedan",
      image: "/images/sclass.jpg",
      passengers: "1-3",
      luggage: "3",
      description: "The ultimate in luxury travel. Arrive in style and absolute comfort with our flagship executive sedan."
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Premium Fleet</h2>
          <p className="text-gray-400 text-lg">Travel in ultimate comfort with our meticulously maintained Mercedes-Benz vehicles.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="bg-black-950 rounded-2xl overflow-hidden border border-white/10 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-gold-500 text-sm font-medium">{vehicle.type}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{vehicle.name}</h3>
                
                <div className="flex gap-6 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-5 h-5 text-gold-500" />
                    <span>{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      <rect width="20" height="14" x="2" y="6" rx="2"/>
                    </svg>
                    <span>{vehicle.luggage}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-8">{vehicle.description}</p>
                
                <a 
                  href={generateWhatsAppLink("", "", "", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black py-3 rounded-xl font-semibold transition-all"
                >
                  Book This Vehicle
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Book your ride",
      description: "Fill out the form or send us a message on WhatsApp with your travel details."
    },
    {
      number: "02",
      title: "Get confirmation",
      description: "Receive instant pricing and confirmation via WhatsApp from our team."
    },
    {
      number: "03",
      title: "Enjoy your journey",
      description: "Meet your professional chauffeur and travel in premium comfort to your destination."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Seamless Travel Experience</h2>
            <p className="text-gray-400 text-lg mb-12">Booking a premium transfer in Istanbul has never been easier. We handle the logistics so you can focus on your trip.</p>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 relative">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-gradient-to-b from-gold-500/50 to-transparent"></div>
                  )}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black-900 border border-gold-500 flex items-center justify-center relative z-10">
                    <span className="text-gold-500 font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square lg:aspect-auto lg:h-[600px]">
              <img 
                src="/images/hero.jpg" 
                alt="Chauffeur opening door" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "James Wilson",
      location: "United Kingdom",
      text: "Exceptional service from start to finish. The driver was waiting at Istanbul Airport with a sign, the Mercedes Vito was immaculate, and the driving was incredibly smooth. Highly recommended.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      location: "Singapore",
      text: "Used BlackDriver for our family trip to Istanbul. Having a reliable, English-speaking driver made navigating the city so much easier. The fixed price gave us great peace of mind.",
      rating: 5
    },
    {
      name: "Michael Schmidt",
      location: "Germany",
      text: "Perfect corporate transfer service. Punctual, professional, and the S-Class was in perfect condition. Will definitely use them again for my next business trip to Turkey.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by Global Travelers</h2>
          <p className="text-gray-400 text-lg">Don't just take our word for it. Read what our clients have to say about their experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-black-950 p-8 rounded-2xl border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black-800 flex items-center justify-center text-white font-bold border border-white/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-500"></div>
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] opacity-20 mix-blend-multiply bg-cover bg-center"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">Ready for a Premium Journey?</h2>
        <p className="text-black/80 text-xl mb-10 font-medium">Book your reliable, luxury transfer in Istanbul today.</p>
        
        <a 
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-black-900 transition-all hover:scale-105 shadow-2xl"
        >
          <MessageSquare className="w-6 h-6 text-gold-500" />
          Book Your Ride Now
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black-950 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <span className="text-3xl font-bold tracking-tighter text-white block mb-6">
              BLACK<span className="text-gold-500">DRIVER</span>
            </span>
            <p className="text-gray-400 max-w-md mb-8">
              Premium chauffeur service and luxury airport transfers in Istanbul. Reliable, professional, and dedicated to your comfort.
            </p>
            <div className="flex gap-4">
              <span className="inline-flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-gold-500" /> English Speaking
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-gold-500" /> 24/7 Service
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-500 flex items-center gap-3 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  +90 535 290 80 80
                </a>
              </li>
              <li>
                <a 
                  href="mailto:serkansavas123@gmail.com"
                  className="text-gray-400 hover:text-gold-500 flex items-center gap-3 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  serkansavas123@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Coverage Area</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Istanbul Airport (IST)</li>
              <li>Sabiha Gökçen Airport (SAW)</li>
              <li>City Center Hotels</li>
              <li>Sultanahmet & Taksim</li>
              <li>Bursa, Sapanca & Yalova</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BlackDriver Istanbul. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black-950">
      <Navbar />
      <Hero />
      <WhyUs />
      <Fleet />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
