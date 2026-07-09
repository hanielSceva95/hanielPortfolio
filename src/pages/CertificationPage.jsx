import React from 'react';
import { ArrowLeft, Award, ExternalLink } from 'lucide-react';

function CertificationPage() {
  const certifications = [
    {
      title: "Generative AI and LLMs: Architecture and Data Preparation",
      issuer: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/MY9TVPB8KZXD",
      date: "Issues 2026"
    },
    {
      title: "Gen AI Foundational Models for NLP & Language Understanding",
      issuer: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/HEN9BPM84XSC",
      date: "Issues 2026"
    },
    {
      title: "Generative AI Language Modeling with Transformers",
      issuer: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/KV1B05B1SLN6",
      date: "Issues 2026"
    },
    {
      title: "Building Data Lakes on AWS",
      issuer: "Amazon Web Services (AWS)",
      link: "https://www.coursera.org/account/accomplishments/verify/41CFEU2BV8JU",
      date: "Issues 2026"
    },
    {
      title: "Architecting Solutions on AWS",
      issuer: "Amazon Web Services (AWS)",
      link: "https://www.coursera.org/account/accomplishments/verify/6T78C21XB6S1",
      date: "Issues 2026"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services (AWS)",
      link: "https://www.coursera.org/account/accomplishments/verify/0CKOV5ZENCFO",
      date: "Issues 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans px-4 py-8 md:px-12 md:py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8 md:mb-12 border-b border-[#222] pb-6">
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] hover:bg-[#222] text-[#ededed] hover:text-[#d4af37] border border-[#222] hover:border-[#d4af37]/30 transition-all font-medium text-sm group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </a>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#d4af37] tracking-tight">Certifications</h1>
        </div>

        {/* Intro Text */}
        <div className="mb-10 text-center md:text-left max-w-2xl">
          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            A list of professional certifications and technical training milestones achieved. Click on a certificate's link to view the verification credential.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-[#111] border border-[#222] hover:border-emerald-500/30 p-6 md:p-8 rounded-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-lg shrink-0 mt-1">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">{cert.title}</h3>
                  <p className="text-[#d4af37] font-mono text-sm">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                </div>
              </div>
              
              <div className="shrink-0">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a1a] hover:bg-emerald-600 hover:text-black border border-[#333] hover:border-emerald-500 transition-all font-semibold text-sm cursor-pointer text-emerald-400 group"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertificationPage;
