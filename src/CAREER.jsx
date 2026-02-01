import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronUp, Users, Award, TrendingUp, Building, Lock, Calendar, MessageCircle, Star, HelpCircle, FileText, UserCheck, Briefcase, Globe, Zap, X, Menu, AlertCircle, Clock, CheckCircle } from 'lucide-react';

const ToukobeCareerLP = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('prime'); 
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-trigger, .mask-reveal, .text-reveal');
    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Header Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="antialiased text-slate-700 font-sans bg-[#FAFAFA] selection:bg-[#FF8A32] selection:text-white">
      {/* Styles Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
        
        :root {
          --c-main: #FF8A32;
          --c-main-light: #FFF2EB;
          --c-text: #334155;
        }

        body {
          font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
          color: var(--c-text);
          background-color: #FAFAFA;
        }

        .font-english { font-family: "Roboto", sans-serif; }

        /* Animation Classes */
        .mask-reveal { position: relative; overflow: hidden; }
        .mask-reveal::after {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-color: #FAFAFA; 
          transform: translateY(0);
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }
        .mask-reveal.active::after { transform: translateY(-100%); }
        .mask-reveal img { transform: scale(1.1); transition: transform 1.5s ease-out; }
        .mask-reveal.active img { transform: scale(1); }

        .text-reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .text-reveal.active { opacity: 1; transform: translateY(0); }
        
        .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

        .card-flat {
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 24px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }
        .section-title-en {
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            letter-spacing: 0.05em;
            color: #FF8A32;
            font-size: 0.875rem;
            display: block;
            margin-bottom: 0.5rem;
        }

        .hero-gradient {
            background: radial-gradient(circle at 50% 0%, rgba(255, 138, 50, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
        }

        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-sm border-gray-200 shadow-sm py-2' : 'bg-white/0 border-transparent py-4'}`}>
        <div className="max-w-[1200px] mx-auto px-6 h-12 md:h-16 flex justify-between items-center">
          <div className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => window.scrollTo(0, 0)}>
            <img src="https://www.toukobe.com/wp-content/uploads/Group-164.png" alt="TOUKOBE CAREER" className="h-6 md:h-9 w-auto object-contain" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[{ label: 'トウコベキャリアとは', id: 'concept' }, { label: '特徴', id: 'features' }, { label: 'メンター', id: 'mentor' }, { label: '流れ', id: 'flow' }, { label: 'よくある質問', id: 'faq' }].map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.id)} className="text-sm font-bold text-slate-800 hover:text-[#FF8A32] transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#FF8A32] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button className="bg-[#FF8A32] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e06d1b] transition-all">会員登録 (無料)</button>
          </nav>

          <button className="md:hidden text-slate-800 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-sm border border-gray-100" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transition-all duration-300 md:hidden flex flex-col ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-16 flex justify-end items-center px-6 border-b border-gray-100">
          <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center text-slate-800 bg-gray-50 rounded-full"><X size={20} /></button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-6">
          {['concept', 'features', 'mentor', 'flow', 'faq'].map((id, i) => (
            <button key={id} onClick={() => scrollToSection(id)} className="text-xl font-bold text-slate-800">
              {['トウコベキャリアとは', '特徴', 'メンター', '流れ', 'よくある質問'][i]}
            </button>
          ))}
          <button className="w-full max-w-xs bg-[#FF8A32] text-white py-4 rounded-full font-bold text-lg">会員登録 (無料)</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full pt-28 md:pt-40 pb-20 md:pb-24 overflow-hidden hero-gradient">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-[#FFF2EB] text-[#FF8A32] px-4 py-1.5 rounded-full text-xs font-bold mb-6 animate-fade-in-up border border-[#FF8A32]/20 shadow-sm" style={{animationDelay: '0.1s'}}>
                <span className="flex items-center justify-center w-4 h-4 bg-[#FF8A32] text-white rounded-full text-[10px]">★</span>
                東大・京大生講師のための選抜型PF
              </div>

              <h1 className="font-black leading-[1.3] tracking-tighter mb-6 animate-fade-in-up text-slate-900" style={{animationDelay: '0.2s'}}>
                <span className="block text-[2.75rem] sm:text-5xl md:text-7xl mb-2">教育の質を、</span>
                <span className="block text-[2.75rem] sm:text-5xl md:text-7xl text-[#FF8A32] relative inline-block">
                  キャリアの質へ。
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF8A32]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="animate-fade-in-up text-slate-500 font-medium text-sm md:text-lg leading-loose mb-8 max-w-lg mx-auto md:mx-0" style={{animationDelay: '0.3s'}}>
                あなたの指導実績を、社会が求める「ビジネススキル」として再定義する。<br className="hidden md:block" />
                トウコベ講師限定の、特別選考ルート直結プラットフォーム。
              </p>

              <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center md:justify-start" style={{animationDelay: '0.4s'}}>
                <button className="w-full sm:w-auto bg-[#FF8A32] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-[#FF8A32]/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                  会員登録する (無料)
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="mt-8 flex items-center justify-center md:justify-start gap-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <div className="flex -space-x-3">
                  {[12,13,14,15].map((id) => (
                    <div key={id} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${id}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-500">28卒・29卒が参加中</p>
                  <div className="flex text-[#FF8A32] text-xs">★★★★★ <span className="text-slate-400 ml-1">4.9/5.0</span></div>
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="w-full md:w-1/2 relative order-1 md:order-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="relative w-full aspect-[4/3] md:aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-slate-100 rounded-[32px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Students" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><CheckCircle size={20} /></div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">OFFER</p>
                    <p className="text-sm font-bold text-slate-800">特別選考ルート獲得</p>
                  </div>
                </div>

                <div className="absolute top-8 -right-4 md:-right-8 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-[#FF8A32]" />
                    <span className="text-xs font-bold text-slate-700">指導実績を評価</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      <section className="bg-white pt-2 pb-16 md:pt-4 md:pb-20 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-[1000px]">
          <div className="card-flat overflow-hidden flex flex-col md:flex-row group transition-all duration-300 shadow-sm hover:shadow-md animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="w-full md:w-2/5 relative min-h-[200px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-[#FF8A32] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>募集中
              </div>
            </div>
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-widest text-[#FF8A32] border border-[#FF8A32] px-2 py-0.5">EVENT</span>
                <span className="text-[10px] font-bold text-slate-400">2026.03.15 (Sat)</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#FF8A32] transition-colors">【28卒対象】Leveragesによる<br className="hidden md:block" />特別キャリア形成プロジェクト</h3>
              <p className="text-sm text-slate-500 mb-6">外資・コンサル・メガベンチャーの内定者が登壇。ES・面接の極意を徹底解説します。</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1.5"><Clock size={14} /> 19:00 - 20:30</span>
                  <span className="flex items-center gap-1.5"><Globe size={14} /> オンライン</span>
                </div>
                <button className="text-sm font-bold text-[#FF8A32] flex items-center gap-1">詳細を見る <ArrowRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-10 bg-[#FFF2EB] border-b border-[#FF8A32]/20 text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm sm:text-lg font-bold text-[#111111] mb-6 tracking-wider font-serif">＼ まずは無料の会員登録から ／</p>
          <button className="bg-[#FF8A32] text-white px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mx-auto group">
            今すぐ登録する <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-xs text-gray-500">※ 登録・利用はすべて無料です</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[1000px]">
          <div className="mb-16 scroll-trigger text-reveal">
            <span className="section-title-en">PROBLEM</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">「就活はまだ先でいい」<br />そう思っていませんか？</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ icon: <Clock />, title: "時間が足りない", desc: "研究・授業・指導バイトで忙しく、就活に割ける時間が物理的に足りない。" },
              { icon: <HelpCircle />, title: "ガクチカの不安", desc: "「家庭教師」の経験だけで、難関企業の選考を勝ち抜けるか不安がある。" },
              { icon: <TrendingUp />, title: "出遅れ感", desc: "周りはまだ動いていないが、ネット上の情報を見ると焦りを感じてしまう。" }
            ].map((p, i) => (
              <div key={i} className="card-flat p-8 flex flex-col items-start hover:border-[#FF8A32]/30 transition-all">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6">{p.icon}</div>
                <h3 className="font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="section-title-en">FEATURES</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">選ばれる3つの理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ icon: <Lock />, color: "bg-[#FFF2EB] text-[#FF8A32]", title: "完全招待制の特別ルート", desc: "一般のナビサイトには掲載されない特別選考ルートや、限定イベントへご招待。" },
              { icon: <Award />, color: "bg-[#F0F9FF] text-[#0EA5E9]", title: "指導実績が評価に直結", desc: "トウコベでの指導スコアを企業へ共有し、書類選考免除などの優遇を受けられます。" },
              { icon: <UserCheck />, color: "bg-[#FDF2F8] text-[#EC4899]", title: "内定者によるメンタリング", desc: "難関大生のみの限定コミュニティで、優秀な就活仲間や内定者メンターと繋がれます。" }
            ].map((f, i) => (
              <div key={i} className="card-flat p-8 md:p-10 text-center hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 mx-auto ${f.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>{f.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[900px]">
          <div className="text-center mb-12">
            <span className="section-title-en">COMPARISON</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">一般的な就活との違い</h2>
          </div>
          <div className="bg-white rounded-[32px] border border-slate-200 p-2 md:p-4 shadow-sm">
            <div className="flex rounded-3xl bg-slate-100 p-1 mb-8">
              <button onClick={() => setActiveTab('normal')} className={`flex-1 py-3 text-sm font-bold rounded-2xl transition-all ${activeTab === 'normal' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`}>一般的な就活</button>
              <button onClick={() => setActiveTab('prime')} className={`flex-1 py-3 text-sm font-bold rounded-2xl transition-all ${activeTab === 'prime' ? 'bg-[#FF8A32] text-white shadow-sm' : 'text-slate-400'}`}>トウコベキャリア</button>
            </div>
            <div className="px-4 pb-8 md:px-12 md:pb-12 min-h-[300px]">
              {activeTab === 'normal' ? (
                <div className="animate-fade-in-up">
                  <div className="text-center mb-8"><h3 className="text-xl font-bold text-slate-700">競争の激しい「通常ルート」</h3></div>
                  <ul className="space-y-4 max-w-md mx-auto text-sm font-bold text-slate-600">
                    {["数万人が一斉にエントリー", "書類選考で足切りされるリスク", "ES作成・面接対策に追われる"].map((t) => (
                      <li key={t} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100"><X size={16} />{t}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="animate-fade-in-up">
                  <div className="text-center mb-8"><h3 className="text-xl font-bold text-[#FF8A32]">実績が評価される「特別ルート」</h3></div>
                  <ul className="space-y-4 max-w-md mx-auto text-sm font-bold text-slate-800">
                    {["実績評価で書類選考スキップ", "特別枠で役員面接へ直結", "プロメンターと効率的に対策"].map((t) => (
                      <li key={t} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#FF8A32]/30 shadow-sm"><Check size={16} className="text-[#FF8A32]" />{t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[800px]">
          <div className="text-center mb-16"><span className="section-title-en">FAQ</span><h2 className="text-2xl md:text-3xl font-bold text-slate-900">よくあるご質問</h2></div>
          <div className="space-y-4">
            {[["費用はかかりますか？", "いいえ、全てのサービスを無料でご利用いただけます。"], ["まだ就活を始めていなくても？", "はい。1・2年生向けの講座や早期インターン情報も多数あります。"]].map(([q, a], i) => (
              <details key={i} className="group card-flat p-0 transition-all cursor-pointer">
                <summary className="flex justify-between items-center p-6 font-bold text-slate-800 list-none">
                  <span className="flex items-center gap-4"><span className="text-[#FF8A32]">Q.</span>{q}</span>
                  <ChevronDown className="transition-transform group-open:rotate-180" size={20} />
                </summary>
                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t pt-4"><span className="font-bold text-[#FF8A32] mr-2">A.</span>{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-400 py-12 text-center text-xs border-t border-slate-100">
         <img src="https://www.toukobe.com/wp-content/uploads/Group-164.png" alt="Logo" className="h-6 w-auto mx-auto mb-6 opacity-30 grayscale" />
         <p>&copy; Copyright © 2026 MANABI Inc. All Rights Reserved.</p>
      </footer>

      {/* Mobile Floating CTA */}
      <div className={`fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 shadow-lg z-50 md:hidden flex justify-center gap-3 transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <button className="flex-1 bg-white border border-slate-200 text-slate-600 py-3 rounded-full font-bold text-xs">資料請求</button>
        <button className="flex-[2] bg-[#FF8A32] text-white py-3 rounded-full font-bold text-sm shadow-md">会員登録 (無料)</button>
      </div>

    </div>
  );
};

export default ToukobeCareerLP;