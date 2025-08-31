import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen cozy-gradient">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4 font-natural">
              🌿 About Bites Garden
            </h1>
            <p className="text-xl text-sage-700 leading-relaxed">
              Welcome to Bites Garden – where every bite blooms with flavor!
            </p>
            <p className="text-lg text-sage-600 mt-4">
              Whether you're a beginner in the kitchen or just looking for quick, delicious meal ideas, you're in the right place.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Why Bites Garden Was Created */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4 font-natural">
                👩‍🍳 Why Bites Garden Was Created
              </h2>
              <p className="text-lg text-sage-700 leading-relaxed">
                Bites Garden started from a simple idea: to make everyday cooking easier, more enjoyable, and totally stress-free. I've always loved experimenting in the kitchen, and over time, I realized that some of the best meals are the simplest ones — made with love, basic ingredients, and a bit of creativity.
              </p>
              <p className="text-lg text-sage-700 leading-relaxed mt-4">
                This website was born to share that joy.
              </p>
            </section>

            {/* What You'll Find Here */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4 font-natural">
                🍽 What You'll Find Here
              </h2>
              <p className="text-lg text-sage-700 leading-relaxed mb-4">
                At Bites Garden, you'll discover:
              </p>
              <ul className="space-y-3 text-lg text-sage-700">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">•</span>
                  <span>Simple step-by-step recipes – for breakfast, lunch, dinner & desserts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">•</span>
                  <span>Beginner-friendly guides – no complicated techniques or tools required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">•</span>
                  <span>Visual instructions – real photos to help you follow along</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">•</span>
                  <span>Affordable ingredients – things you already have or can easily find</span>
                </li>
              </ul>
              <p className="text-lg text-sage-700 leading-relaxed mt-4">
                Whether you're making fluffy pancakes, creamy pasta, or cozy soups, every recipe is written clearly and made with real-life cooking in mind.
              </p>
            </section>

            {/* Our Food Philosophy */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4 font-natural">
                🌱 Our Food Philosophy
              </h2>
              <p className="text-lg text-sage-700 leading-relaxed mb-4">
                We believe cooking should be:
              </p>
              <ul className="space-y-3 text-lg text-sage-700">
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">•</span>
                  <span><strong>Comforting</strong> – food that feels like home</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">•</span>
                  <span><strong>Accessible</strong> – anyone can do it, no fancy skills needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-600 mr-3">•</span>
                  <span><strong>Fun</strong> – a way to express yourself and enjoy the process</span>
                </li>
              </ul>
              <p className="text-lg text-sage-700 leading-relaxed mt-4">
                It's not about perfection — it's about enjoying every bite.
              </p>
            </section>

            {/* Let's Connect */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4 font-natural">
                💌 Let's Connect
              </h2>
              <p className="text-lg text-sage-700 leading-relaxed mb-4">
                I'm so glad you're here. Feel free to explore the recipes, try something new, and make Bites Garden part of your kitchen. Got a question, idea, or just want to say hi? You can contact me here or email me at{' '}
                <a 
                  href="mailto:bitesgarden.info@proton.me" 
                  className="text-sage-600 hover:text-sage-800 underline transition-colors"
                >
                  bitesgarden.info@proton.me
                </a>.
              </p>
              <p className="text-lg text-sage-700 leading-relaxed mb-4">
                You can also follow along on{' '}
                <a 
                  href="https://www.instagram.com/bitesgarden/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-800 underline transition-colors"
                >
                  Instagram
                </a>{' '}
                for new recipes, updates, and behind-the-scenes kitchen moments.
              </p>
              <p className="text-lg text-sage-700 leading-relaxed">
                Thanks for stopping by — now let's get cooking! 🌼
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
