import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await fetch(`mailto:shahidneur@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`);
      setStatus('sent');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-primary-950 text-white py-12">
      <div className="container-custom">
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Get in Touch</h3>
            
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-primary-900 border border-primary-800 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded bg-primary-900 border border-primary-800 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows={4}
                placeholder="Your message..."
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center px-6 py-3 bg-primary-700 hover:bg-primary-600 rounded transition-colors"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={18} className="ml-2" />
                </>
              )}
            </button>
            
            {status === 'sent' && (
              <p className="text-green-400 text-sm">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-primary-800 text-center text-sm text-primary-400">
            <p>© {new Date().getFullYear()} Shahid Ahmad. All rights reserved.</p>
            <a href="mailto:shahidneur@gmail.com" className="flex items-center justify-center mt-2 text-primary-300 hover:text-white transition-colors">
              <Mail size={16} className="mr-2" />
              shahidneur@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;