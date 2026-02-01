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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
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
          /* OS標準のゴシック体を優先 */
          font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
          color: var(--c-text);
          background-color: #FAFAFA;
        }

        .font-english {
          font-family: "Roboto", sans-serif;
        }

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
        .mask-reveal img {
          transform: scale(1.1); transition: transform 1.5s ease-out;
        }
        .mask-reveal.active img { transform: scale(1); }

        .text-reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .text-reveal.active { opacity: 1; transform: translateY(0); }
        
        .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }

        /* カスタムユーティリティ */
        .circle-decoration {
            border-radius: 9999px;
        }
        .card-flat {
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 24px; /* 大きめの角丸 */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
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
      `}</style>

      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-sm border-gray-200 shadow-sm py-2' : 'bg-white/0 border-transparent py-4'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex justify-between items-center">
          <div className="cursor-pointer hover:opacity-70 transition-opacity" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="https://www.toukobe.com/wp-content/uploads/Group-164.png" 
              alt="TOUKOBE CAREER" 
              className="h-8 md:h-9 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav - Japanese Only */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
                { label: 'トウコベキャリアとは', id: 'concept' },
                { label: '特徴', id: 'features' },
                { label: 'メンター', id: 'mentor' },
                { label: '流れ', id: 'flow' },
                { label: 'よくある質問', id: 'faq' }
            ].map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-bold text-slate-800 hover:text-[#FF8A32] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#FF8A32] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button className="bg-[#FF8A32] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e06d1b] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 min-w-[140px]">
              会員登録 (無料)
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-800 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div 
            className={`fixed inset-0 bg-white z-[60] transition-all duration-300 md:hidden flex flex-col ${mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}
        >
            <div className="h-16 flex justify-end items-center px-6 border-b border-gray-100">
                <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center text-slate-800 bg-gray-50 rounded-full">
                    <X size={20} />
                </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-6">
                {[
                    { label: 'トウコベキャリアとは', id: 'concept' },
                    { label: '特徴', id: 'features' },
                    { label: 'メンター', id: 'mentor' },
                    { label: '流れ', id: 'flow' },
                    { label: 'よくある質問', id: 'faq' }
                ].map((item) => (
                <button 
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="text-center group"
                >
                    <span className="block text-xl font-bold text-slate-800 mb-1 group-hover:text-[#FF8A32] transition-colors">{item.label}</span>
                </button>
                ))}
                <button className="w-full max-w-xs bg-[#FF8A32] text-white py-4 rounded-full font-bold text-lg shadow-lg mt-8">
                    会員登録 (無料)
                </button>
            </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full pt-24 md:pt-32 pb-20 md:pb-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                {/* Badge Removed */}

                <h1 className="font-black leading-[1.2] tracking-tight mb-8 animate-fade-in-up text-slate-900" style={{animationDelay: '0.1s'}}>
                    <span className="block text-4xl sm:text-5xl md:text-7xl mb-2">教育の質を、</span>
                    <span className="block text-4xl sm:text-5xl md:text-7xl text-[#FF8A32]">キャリアの質へ。</span>
                </h1>
                
                <p className="animate-fade-in-up text-slate-500 font-medium text-sm md:text-base leading-loose max-w-xl mx-auto md:mx-0 mb-10" style={{animationDelay: '0.2s'}}>
                    「アルバイト」で終わらせない。<br/>
                    あなたの指導実績を、社会が求める「ビジネススキル」として再定義する。
                    トウコベ講師のための、選抜型キャリアプラットフォーム。
                </p>

                <div className="animate-fade-in-up flex flex-col md:flex-row gap-4 justify-center md:justify-start" style={{animationDelay: '0.3s'}}>
                    <button className="bg-[#FF8A32] text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-[#e06d1b] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group min-w-[240px]">
                        会員登録する (無料)
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
        
        {/* Background Graphic - Simple Circle Motif */}
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-slate-50 rounded-full z-0 opacity-50 pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-[#FF8A32]/5 rounded-full z-0 pointer-events-none blur-3xl"></div>
      </section>

      {/* Upcoming Event Section (New) */}
      <section className="bg-white pt-2 pb-16 md:pt-4 md:pb-20 border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-[1000px]">
              <div className="card-flat overflow-hidden flex flex-col md:flex-row group hover:border-[#FF8A32]/50 transition-all duration-300 shadow-sm hover:shadow-md animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <div className="w-full md:w-2/5 relative min-h-[200px] md:min-h-full overflow-hidden">
                      <img 
                          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                          alt="Event" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#FF8A32] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                          募集中
                      </div>
                  </div>
                  <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-white">
                      <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-bold tracking-widest text-[#FF8A32] border border-[#FF8A32] px-2 py-0.5 rounded-sm">EVENT</span>
                          <span className="text-[10px] font-bold text-slate-400">2026.03.15 (Sat)</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#FF8A32] transition-colors">
                          【28卒対象】Leveragesによる<br className="hidden md:block" />特別キャリア形成プロジェクト
                      </h3>
                      <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                          外資・コンサル・メガベンチャーの内定者が登壇。夏までにやるべきこと、ES・面接の極意を徹底解説します。
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                              <span className="flex items-center gap-1.5"><Clock size={14} /> 19:00 - 20:30</span>
                              <span className="flex items-center gap-1.5"><Globe size={14} /> オンライン</span>
                          </div>
                          <button className="text-sm font-bold text-[#FF8A32] flex items-center gap-1 group-hover:gap-2 transition-all">
                              詳細を見る <ArrowRight size={16} />
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA Band */}
      <section className="py-10 bg-[#FFF2EB] border-b border-[#FF8A32]/20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
            <p className="text-sm sm:text-lg font-bold text-[#111111] mb-6 tracking-wider font-serif whitespace-nowrap">＼ まずは無料の会員登録から ／</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
                <a href="#" className="w-full max-w-[320px] md:w-auto bg-[#FF8A32] text-white px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-[#FF8A32] hover:bg-[#e06d1b] hover:border-[#e06d1b] whitespace-nowrap group">
                    <span>今すぐ登録する</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">※ 登録・利用はすべて無料です</p>
        </div>
      </section>

      {/* Problem Section - Stack Layout */}
      <section className="py-24 bg-[#FAFAFA] relative">
        <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
            <div className="mb-16 scroll-trigger text-reveal">
                <span className="section-title-en">PROBLEM</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-normal">
                    「就活はまだ先でいい」<br />
                    そう思っていませんか？
                </h2>
                <p className="mt-4 text-slate-500 text-sm md:text-base">優秀な学生ほど、<span className="text-[#FF8A32] font-bold border-b border-[#FF8A32]/30">「時間のなさ」</span>と<span className="text-[#FF8A32] font-bold border-b border-[#FF8A32]/30">「情報の非対称性」</span>に直面します。</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 scroll-trigger text-reveal">
                {/* Card 1 */}
                <div className="card-flat p-8 flex flex-col items-start hover:border-[#FF8A32]/30 transition-colors duration-300">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6">
                        <Clock size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-slate-800">時間が足りない</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        研究・授業・指導バイトで忙しく、就活に割ける時間が物理的に足りない。
                    </p>
                </div>

                {/* Card 2 */}
                <div className="card-flat p-8 flex flex-col items-start hover:border-[#FF8A32]/30 transition-colors duration-300">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6">
                        <HelpCircle size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-slate-800">ガクチカの不安</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        「家庭教師」の経験だけで、難関企業の選考を勝ち抜けるか不安がある。
                    </p>
                </div>

                {/* Card 3 */}
                <div className="card-flat p-8 flex flex-col items-start hover:border-[#FF8A32]/30 transition-colors duration-300">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6">
                        <TrendingUp size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-slate-800">出遅れ感</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        周りはまだ動いていないが、ネット上の情報を見ると焦りを感じてしまう。
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Solution / Concept - Clean Layout */}
      <section id="concept" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1000px]">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2 text-reveal">
                    <span className="section-title-en">SOLUTION</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                        その不安、<br/>
                        <span className="text-[#FF8A32]">トウコベキャリア</span>が<br/>
                        解決します。
                    </h2>
                    <p className="text-slate-600 leading-loose mb-6">
                        トウコベキャリアは、難関大生講師のためだけのキャリア形成プラットフォームです。<br/>
                        あなたの指導実績を価値ある経験として証明し、本質的な能力を評価するトップ企業へとダイレクトに接続します。
                    </p>
                </div>
                <div className="w-full md:w-1/2 mask-reveal">
                    <div className="aspect-square bg-slate-50 rounded-[40px] overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                             alt="Solution" 
                             className="w-full h-full object-cover" />
                        {/* Floating Badge Removed */}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Features - Cluster Layout */}
      <section id="features" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[1200px]">
            <div className="text-center mb-16">
                <span className="section-title-en">FEATURES</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">選ばれる3つの理由</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="card-flat p-8 md:p-10 text-center hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="w-16 h-16 mx-auto bg-[#FFF2EB] text-[#FF8A32] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Lock size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">完全招待制の<br/>特別ルート</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        一般のナビサイトには掲載されない特別選考ルートや、役員登壇の限定イベントへ優先的にご招待します。
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="card-flat p-8 md:p-10 text-center hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="w-16 h-16 mx-auto bg-[#F0F9FF] text-[#0EA5E9] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Award size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">指導実績が<br/>評価に直結</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        トウコベでの指導スコアや合格実績などの「実務データ」を企業へ共有し、書類選考免除などの優遇を受けられます。
                    </p>
                </div>
                
                {/* Feature 3 */}
                <div className="card-flat p-8 md:p-10 text-center hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="w-16 h-16 mx-auto bg-[#FDF2F8] text-[#EC4899] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <UserCheck size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">難関企業内定者による<br/>メンタリング</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        難関大生のみが参加できる限定コミュニティで、優秀な就活仲間や内定者メンターと繋がることができます。
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Mentor Section (Old Voice Section) */}
      <section id="mentor" className="py-24 bg-white border-t border-slate-100 overflow-hidden relative">
        {/* Background Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full z-0 pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
            <div className="text-center mb-16">
                <span className="section-title-en">MENTOR</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">メンターの紹介</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop", univ: "東京大学 経済学部", company: "外資コンサル", text: "「家庭教師」の経験を、ビジネスの「課題解決」として言語化できました。" },
                    { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop", univ: "京都大学 工学部", company: "メガベンチャー", text: "指導スコアを使った特別ルートで、研究と両立しながら2週間で内定獲得。" },
                    { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop", univ: "早稲田大学 商学部", company: "大手総合商社", text: "限定座談会で社員の本音を聞け、キャリアの解像度が一気に上がりました。" }
                ].map((item, idx) => (
                    <div key={idx} className="card-flat p-0 overflow-hidden group hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="p-6 text-center border-b border-slate-100 bg-slate-50/50">
                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
                                <img src={item.img} alt="User" className="w-full h-full object-cover" />
                            </div>
                            <span className="inline-block bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-2">{item.company}</span>
                            <p className="text-sm font-bold text-slate-700">{item.univ}</p>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-slate-600 leading-relaxed text-center font-medium">
                                "{item.text}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Comparison Section - Tab Style */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[900px]">
            <div className="text-center mb-12">
                <span className="section-title-en">COMPARISON</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">一般的な就活との違い</h2>
            </div>
            
            <div className="bg-white rounded-[32px] border border-slate-200 p-2 md:p-4 shadow-sm">
                <div className="flex rounded-3xl bg-slate-100 p-1 mb-8">
                    <button 
                        onClick={() => setActiveTab('normal')} 
                        className={`flex-1 py-3 text-sm font-bold rounded-2xl transition-all duration-300 ${activeTab === 'normal' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        一般的な就活
                    </button>
                    <button 
                        onClick={() => setActiveTab('prime')} 
                        className={`flex-1 py-3 text-sm font-bold rounded-2xl transition-all duration-300 ${activeTab === 'prime' ? 'bg-[#FF8A32] text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        トウコベキャリア
                    </button>
                </div>

                <div className="px-4 pb-8 md:px-12 md:pb-12 min-h-[300px]">
                    {activeTab === 'normal' ? (
                        <div className="animate-fade-in-up">
                            <div className="text-center mb-8">
                                <span className="inline-block px-3 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-full mb-2">通常ルート</span>
                                <h3 className="text-xl font-bold text-slate-700">多くの学生が通る「競争の激しい」道のり</h3>
                            </div>
                            <ul className="space-y-4 max-w-md mx-auto">
                                <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                                        <Users size={16} className="text-slate-500" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-600">数万人が一斉にエントリー</span>
                                </li>
                                <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                                        <FileText size={16} className="text-slate-500" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-600">書類選考で足切りされるリスク</span>
                                </li>
                                <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                                        <AlertCircle size={16} className="text-slate-500" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-600">ES作成・面接対策に追われる</span>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="animate-fade-in-up">
                            <div className="text-center mb-8">
                                <span className="inline-block px-3 py-1 bg-[#FFF2EB] text-[#FF8A32] text-xs font-bold rounded-full mb-2">特別ルート</span>
                                <h3 className="text-xl font-bold text-[#FF8A32]">実績が評価される「選ばれた人」の近道</h3>
                            </div>
                            <ul className="space-y-4 max-w-md mx-auto">
                                <li className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#FF8A32]/30 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-[#FF8A32] flex items-center justify-center shrink-0">
                                        <Check size={16} className="text-white" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-800"><span className="text-[#FF8A32]">実績評価</span>で書類選考スキップ</span>
                                </li>
                                <li className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#FF8A32]/30 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-[#FF8A32] flex items-center justify-center shrink-0">
                                        <Check size={16} className="text-white" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-800"><span className="text-[#FF8A32]">特別枠</span>で役員面接へ直結</span>
                                </li>
                                <li className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#FF8A32]/30 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-[#FF8A32] flex items-center justify-center shrink-0">
                                        <Check size={16} className="text-white" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-800">プロメンターと効率的に対策</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </section>

      {/* Flow Section (Updated Layout) */}
      <section id="flow" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-[1000px]">
            <div className="text-center mb-20">
                <span className="section-title-en">FLOW</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">ご利用の流れ</h2>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:flex justify-between relative px-4">
                {/* Horizontal Line Background */}
                <div className="absolute top-[24px] left-0 w-full h-[2px] bg-slate-100 -z-10"></div>
                
                {[
                    { num: "01", title: "会員登録", desc: "LINEで1分で登録完了。", icon: <UserCheck size={20} /> },
                    { num: "02", title: "説明会参加", desc: "サービスの仕組みを解説。", icon: <Calendar size={20} /> },
                    { num: "03", title: "限定オファー", desc: "あなたの実績に応じたオファー。", icon: <FileText size={20} /> },
                    { num: "04", title: "選考・内定", desc: "メンターが徹底伴走。", icon: <Award size={20} /> }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center w-1/4 px-2">
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-[#FF8A32] flex items-center justify-center text-[#FF8A32] font-bold text-lg mb-6 shadow-sm z-10 relative">
                            <span className="text-sm font-black">{item.num}</span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-[180px]">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8 pl-4 border-l-2 border-slate-100 ml-4">
                {[
                    { num: "01", title: "会員登録", desc: "LINEで1分で登録完了。" },
                    { num: "02", title: "説明会参加", desc: "サービスの仕組みを解説。" },
                    { num: "03", title: "限定オファー", desc: "あなたの実績に応じたオファー。" },
                    { num: "04", title: "選考・内定", desc: "メンターが徹底伴走。" }
                ].map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                        <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-2 border-[#FF8A32] flex items-center justify-center text-[#FF8A32] font-bold text-sm shadow-sm">
                            {item.num}
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[800px]">
            <div className="text-center mb-16">
                <span className="section-title-en">FAQ</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">よくあるご質問</h2>
            </div>
            <div className="space-y-4">
                {[
                    { q: "サービスに費用はかかりますか？", a: "いいえ、登録から内定後のサポートまで、全てのサービスを無料でご利用いただけます。" },
                    { q: "まだ就活を始めていなくても利用できますか？", a: "はい、可能です。大学1・2年生向けのキャリア講座や、早期インターン情報も多数取り扱っております。" },
                    { q: "紹介された企業は必ず応募しなければなりませんか？", a: "いいえ、強制は一切ありません。ご自身のキャリアビジョンに合う企業のみを選んで応募いただけます。" },
                    { q: "トウコベでの指導実績がないと利用できませんか？", a: "登録自体は可能です。ただし「特別選考ルート」などの一部特典は、一定の指導実績がある講師の方を優先してご案内する場合がございます。" }
                ].map((item, idx) => (
                    <details key={idx} className="group card-flat p-0 transition-all cursor-pointer">
                        <summary className="flex justify-between items-center p-6 list-none font-bold text-slate-800">
                            <span className="flex items-center gap-4">
                                <span className="text-[#FF8A32] font-english">Q.</span>
                                <span>{item.q}</span>
                            </span>
                            <ChevronDown className="text-slate-400 transition-transform group-open:rotate-180" size={20} />
                        </summary>
                        <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            <span className="font-bold text-[#FF8A32] mr-2">A.</span>
                            {item.a}
                        </div>
                    </details>
                ))}
            </div>
        </div>
      </section>

      {/* Closing CTA - Simple & Clean */}
      <section id="contact" className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                「自分はこのままでいいのか？」<br/>
                そう感じたら、一度ご相談ください。
            </h2>
            <p className="text-slate-500 mb-10">無理な勧誘は一切ありません。<br/>まずはあなたの可能性を知ることから始めましょう。</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <button className="w-full md:w-auto min-w-[280px] bg-[#FF8A32] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                    <UserCheck className="group-hover:scale-110 transition-transform" />
                    <span>会員登録する (無料)</span>
                </button>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-400 py-12 text-center text-xs border-t border-slate-100">
         <div className="flex justify-center mb-6">
            <img 
              src="https://www.toukobe.com/wp-content/uploads/Group-164.png" 
              alt="TOUKOBE CAREER" 
              className="h-6 w-auto object-contain opacity-50 grayscale"
            />
         </div>
         <p>&copy; Copyright © 2026 MANABI Inc. All Rights Reserved.</p>
      </footer>

      {/* Mobile Floating CTA */}
      <div className={`fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 shadow-lg z-50 md:hidden flex justify-center gap-3 transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
            <button className="flex-1 bg-white border border-slate-200 text-slate-600 text-center py-3 rounded-full font-bold text-xs shadow-sm flex items-center justify-center gap-1">
                資料請求
            </button>
            <button className="flex-[2] bg-[#FF8A32] text-white text-center py-3 rounded-full font-bold text-sm shadow-md flex items-center justify-center gap-1">
                会員登録 (無料)
            </button>
      </div>

    </div>
  );
};

export default ToukobeCareerLP;