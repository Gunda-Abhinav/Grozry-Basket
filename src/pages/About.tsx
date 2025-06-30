
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Users, Truck, Shield, Clock, Heart, Award, Mail, Phone, MapPin, Headphones } from 'lucide-react';
import Avatar from 'react-avatar';

const About = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#meet-our-team') {
      const el = document.getElementById('meet-our-team');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay to ensure element is rendered
      }
    }
    else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Fast Delivery',
      description: 'Get your groceries delivered within 2 hours across the city.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality Assured',
      description: 'We source only the freshest products from trusted suppliers.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Service',
      description: 'Shop anytime, anywhere with our round-the-clock availability.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority with excellent customer service.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Best Prices',
      description: 'Competitive pricing with regular discounts and special offers.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Focus',
      description: 'Supporting local farmers and suppliers in our community.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      description: 'Passionate about bringing fresh groceries to every doorstep.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      description: 'Ensuring smooth delivery operations and customer satisfaction.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Quality Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      description: 'Maintaining the highest standards for all our products.'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      info: 'support@grozrybasket.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      description: 'Call us Mon-Fri 9AM-6PM'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      info: '123 Fresh Street, Grocery City, GC 12345',
      description: 'Visit our headquarters'
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: 'Customer Service',
      info: '24/7 Live Chat Support',
      description: 'We are here to help'
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section with enhanced animations */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
              About <span className="text-primary dark:text-accent-burgundy font-extrabold bg-gradient-to-r from-primary to-accent-burgundy bg-clip-text text-transparent animate-gradient">Grozry Basket</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We're on a mission to revolutionize grocery shopping by bringing fresh, 
              quality products directly to your doorstep with unmatched convenience and care.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                Grozry Basket was born from a simple idea: grocery shopping shouldn't be a chore. 
                Founded in 2020, we started as a small local delivery service and have grown 
                into a trusted platform serving thousands of families.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                We believe that everyone deserves access to fresh, quality groceries without 
                the hassle of long queues and crowded stores. Our technology-driven approach 
                ensures that you get the best products at competitive prices, delivered with care.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800 transform hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold text-primary dark:text-accent-burgundy mb-2">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To make fresh, quality groceries accessible to everyone through innovative 
                  technology and exceptional service, while supporting local communities and suppliers.
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600" 
                alt="Fresh groceries" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Why Choose Grozry Basket?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              We're committed to providing the best grocery delivery experience 
              with these key advantages.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary dark:text-accent-burgundy mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="meet-our-team" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Meet Our Team
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              The passionate people behind Grozry Basket who work tirelessly to 
              bring you the best grocery delivery experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Avatar
                    name={member.name}
                    size="128"
                    round={true}
                    className="mb-6 mx-auto transition-transform duration-300 transform group-hover:scale-105"
                  />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary dark:text-accent-burgundy font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">
              Get in Touch
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary dark:text-accent-burgundy mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {contact.title}
                  </h4>
                  <p className="text-primary dark:text-accent-burgundy font-medium mb-1">
                    {contact.info}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {contact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Ready to Experience Fresh Convenience?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Join thousands of satisfied customers who trust Grozry Basket for their grocery needs.
          </p>
          <button className="gradient-primary px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-all hover:scale-105 text-lg shadow-lg animate-bounce-subtle">
            Start Shopping Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
