import { motion } from 'framer-motion';
import { CheckCircle, Zap, Lock, LayoutDashboard } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 md:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold mb-4">
          Plug AI + Blockchain Into Your Business.
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          NeuroChain Systems integrates proven AI and blockchain tools directly into your business workflows — so you can grow smarter, faster, and more secure.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg rounded-2xl shadow-lg transition">
          Book Your Free Audit Call
        </button>

        <section className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <Zap className="text-indigo-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Fast-Track</h3>
            <p className="text-gray-400">Automate sales, hiring, and support using ChatGPT, Claude, Fireflies, and more. Save hours weekly.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <Lock className="text-indigo-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Blockchain Ready</h3>
            <p className="text-gray-400">Integrate smart contracts, NFT loyalty, on-chain logs, and decentralized systems — no dev team needed.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow">
            <LayoutDashboard className="text-indigo-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI x Chain Bundle</h3>
            <p className="text-gray-400">Combine intelligent automations with verifiable, trustless data on-chain. Fully scalable, secure systems.</p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Discovery & AI+Blockchain Audit</li>
            <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Proposal & Custom Plan</li>
            <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Integration & Automation</li>
            <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Training + Optional Support</li>
          </ul>
        </section>

        <footer className="mt-24 text-sm text-gray-500">
          © {new Date().getFullYear()} NeuroChain Systems. All rights reserved.
        </footer>
      </div>
    </div>
  );
}