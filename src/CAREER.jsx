import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Users,
  Award,
  TrendingUp,
  Lock,
  Globe,
  X,
  Menu,
  AlertCircle,
  Clock,
  HelpCircle,
  FileText,
  UserCheck,
  Gift,
  ChevronsRight,
  UserPlus,
  Mail,
  ArrowDown
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('prime');

  // URL Constants
  const LINE_URL = 'https://lin.ee/FHuYx9S';
  const LEVERAGES_EVENT_URL = 'https://www.toukobe.com/career/leverages0215/';

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll(
      '.scroll-trigger, .mask-reveal, .text-reveal'
    );
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Header Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Helper to open URLs
  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  // Helper to calculate days remaining
  const getDaysRemaining = (deadlineDateStr) => {
    // For simulation/demo purposes, we fix "today" to 2026-02-02
    // In a real app, use: const today = new Date();
    const today = new Date('2026-02-02'); 
    const deadline = new Date(deadlineDateStr);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  // --------------------------------------------------------------------------
  // Refactored Single CTA Button Component (Green Only)
  // --------------------------------------------------------------------------
  const MainCtaButton = ({ onClick, className = "", small = false, mainText = "LINEで限定イベントを見る", showSubtext = true, showBadge = true }) => {
    const heightClass = small ? "h-[56px]" : "h-[80px]";
    const badgeSize = small ? "w-12 h-12 text-[9px] -top-2 -left-2" : "w-14 h-14 text-[10px] -top-3 -left-3";
    const iconBoxWidth = small ? "w-14" : "w-16";
    const iconSize = small ? 24 : 36;
    const textSize = small ? "text-lg md:text-xl" : "text-base md:text-xl";
    const subTextSize = small ? "text-[9px] md:text-[10px] px-2 py-0.5" : "text-[10px] md:text-xs px-3 py-0.5";
    const arrowBoxWidth = small ? "w-10" : "w-12";
    const arrowSize = small ? 18 : 22;
    
    // Padding logic: 
    // If showBadge is true, we hide the icon to avoid overlap.
    // Therefore, we need extra left padding for the content to clear the badge.
    const contentPadding = showBadge 
      ? (small ? 'pl-10 pr-1' : 'pl-12 pr-2 md:pl-16') 
      : 'px-2';

    return (
      <button
        onClick={onClick}
        className={`group relative w-full max-w-[360px] ${heightClass} flex items-stretch text-white transition-transform active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#145a32] bg-[#06C755] shadow-[4px_4px_0px_0px_#145a32] ${className}`}
      >
        {/* Badge */}
        {showBadge && (
          <div className={`absolute ${badgeSize} bg-[#333] rounded-full flex flex-col items-center justify-center text-white font-bold border-2 border-white z-10 tracking-widest leading-tight shadow-md`}>
            <span>完全</span>
            <span>無料</span>
          </div>
        )}

        {/* Icon Area - Only show if NO badge */}
        {!showBadge && (
          <div className={`${iconBoxWidth} bg-[#06C755] flex flex-col items-center justify-center border-r border-white/10 shrink-0`}>
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" 
               alt="LINE" 
               style={{ width: iconSize, height: iconSize }}
               className="object-contain" 
             />
          </div>
        )}

        {/* Main Content */}
        <div className={`flex-1 flex flex-col items-center justify-center py-2 ${contentPadding}`}>
          {showSubtext && (
            <div className={`bg-white/20 text-white font-bold rounded-full mb-1.5 tracking-wider ${subTextSize}`}>
              簡単1分で登録完了
            </div>
          )}
          <div className={`${textSize} font-black leading-none tracking-tight whitespace-nowrap`}>
            {mainText}
          </div>
        </div>

        {/* Right Arrow Area */}
        <div className={`${arrowBoxWidth} relative flex flex-col items-center justify-center overflow-hidden border-l border-white/10 shrink-0`}>
          <div className="absolute inset-0 bg-black/10 -skew-x-12 origin-bottom-right scale-150 translate-x-2" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[8px] font-bold font-english mb-0.5 tracking-tighter opacity-90">CLICK!</span>
            <ChevronsRight size={arrowSize} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </button>
    );
  };

  return (
    <div className="antialiased text-[#111111] font-sans bg-white selection:bg-[#06C755] selection:text-white">
      {/* Style + Design Tokens */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap');

        :root {
          --manabi-main: #FF7B44;
          --manabi-green: #06C755;
          --manabi-black: #111111;
          --border-gray: #E0E0E0;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Noto Sans JP', sans-serif;
          color: var(--manabi-black);
          background-color: #fff;
          overflow-x: hidden;
        }

        .font-english { font-family: 'Montserrat', sans-serif; }

        /* Animation */
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .mask-reveal { position: relative; overflow: hidden; }
        .mask-reveal::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          transform: translateY(0);
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }
        .mask-reveal.active::after { transform: translateY(-100%); }
        .mask-reveal img { transform: scale(1.1); transition: transform 1.5s ease-out; }
        .mask-reveal.active img { transform: scale(1); }

        .text-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .text-reveal.active { opacity: 1; transform: translateY(0); }

        @keyframes scrollLine {
          0%    { height: 0%; top: 0; opacity: 0; }
          30%   { height: 50%; top: 0; opacity: 1; }
          100% { height: 0%; top: 100%; opacity: 0; }
        }
        .animate-scroll-line { animation: scrollLine 2s ease-in-out infinite; }

        .toukobe-scroll {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .toukobe-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Header (PC Only) */}
      <header
        className={`fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 hidden md:block ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-[72px] flex justify-between items-center">
          <div
            className="cursor-pointer hover:opacity-60 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="https://www.toukobe.com/wp-content/uploads/Group-164.png"
              alt="TOUKOBE CAREER"
              className="h-10 w-auto object-contain"
            />
          </div>

          <nav className="flex items-center h-full">
            <div className="flex items-center space-x-8 mr-8">
              {[
                { label: 'トウコベキャリアとは', id: 'concept' },
                { label: '特徴', id: 'features' },
                { label: 'よくある質問', id: 'faq' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-bold tracking-widest text-[#111111] hover:text-[#FF7B44] transition-colors font-english relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#FF7B44] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
            
            {/* Header CTA Button (Modified: No "Free" badge/subtext) */}
            <div className="flex h-full items-center ml-4 py-1">
              <button
                onClick={() => openUrl(LINE_URL)}
                className="group h-full flex items-stretch shadow-sm hover:opacity-95 transition-opacity"
              >
                {/* Main Content */}
                <div className="flex-1 bg-[#06C755] text-white flex items-center justify-between px-4 md:px-5 rounded-md min-w-[200px]">
                  <div className="flex flex-col items-start justify-center h-full space-y-0.5 whitespace-nowrap">
                    <span className="text-[10px] font-bold leading-tight opacity-90">LINEで</span>
                    <span className="text-sm font-bold leading-tight">限定イベントを確認</span>
                  </div>
                  <ChevronsRight size={20} strokeWidth={3} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section (FV) */}
      <section className="relative h-[100dvh] w-full overflow-hidden">
        {/* SP Logo */}
        <div className="md:hidden absolute top-6 left-6 z-30">
          <img
            src="https://www.toukobe.com/wp-content/uploads/Group-164.png"
            alt="TOUKOBE CAREER"
            className="h-6 w-auto object-contain"
          />
        </div>

        {/* Base */}
        <div className="absolute inset-0 bg-white" />

        {/* Color accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full blur-[90px] opacity-70 bg-[radial-gradient(circle_at_center,_rgba(255,138,50,0.35),_rgba(255,255,255,0)_60%)]" />
          <div className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full blur-[110px] opacity-70 bg-[radial-gradient(circle_at_center,_rgba(56,82,227,0.20),_rgba(255,255,255,0)_60%)]" />
          <div className="absolute inset-0">
            <div className="absolute left-[-12%] top-[18%] w-[120%] h-[60%] bg-[#FFF2EB]" style={{ clipPath: 'polygon(0% 35%, 100% 5%, 100% 70%, 0% 95%)' }} />
            <div className="absolute left-[-10%] top-[32%] w-[120%] h-[55%] bg-[#FFE2D0] opacity-80" style={{ clipPath: 'polygon(0% 55%, 100% 15%, 100% 85%, 0% 100%)' }} />
            <div className="absolute right-[-20%] top-[22%] w-[70%] h-[70%] bg-[#EAF0FF] opacity-55" style={{ clipPath: 'polygon(18% 0%, 100% 18%, 82% 100%, 0% 82%)' }} />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 h-full">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left copy */}
            <div className="md:col-span-7 h-full flex flex-col justify-center pt-0 md:pt-32 md:pb-20 relative z-20">
              <div className="animate-fade-in-up">
                {/* Added Badge */}
                <div className="inline-block bg-[#111] text-white text-[10px] md:text-xs font-bold px-3 py-1 mb-4 rounded-sm tracking-wider">
                  28卒・29卒対象
                </div>
                <p className="text-3xl sm:text-4xl md:text-3xl font-black text-[#111111] tracking-tight mb-3 md:mb-4">
                  講師限定
                </p>
                <h1 className="text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.15] md:leading-[1.05] tracking-tight text-[#FF7B44] whitespace-nowrap">
                  就活支援プログラム
                </h1>
              </div>

              {/* CTA Area - Unified */}
              <div className="mt-12 md:mt-16 animate-fade-in-up" style={{ animationDelay: '0.22s' }}>
                <div className="flex flex-wrap gap-2 mb-8 justify-start">
                  <span className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 text-gray-700 text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full">
                    <Check size={12} className="text-[#06C755]" strokeWidth={3} />
                    完全無料
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-50 border border-green-100 text-[#06C755] text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full">
                    <Check size={12} className="text-[#06C755]" strokeWidth={3} />
                    限定ルート多数
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-6">
                  <MainCtaButton onClick={() => openUrl(LINE_URL)} />
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden md:flex md:col-span-5 relative h-full items-end justify-end pointer-events-none">
              <div className="relative w-full h-[85%] translate-y-14">
                <div className="absolute inset-0 overflow-visible mask-reveal scroll-trigger">
                  <img
                    src="https://www.toukobe.com/wp-content/uploads/image-16.png"
                    alt="Tutor"
                    className="w-full h-full object-contain object-bottom scale-[1.35] origin-bottom-right"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-[80%] h-[50%] bg-[#FF7B44] opacity-[0.10] z-[-1]" style={{ clipPath: 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)' }} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gray-100 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black animate-scroll-line" />
        </div>
      </section>

      {/* Problem Section (Refined Text) */}
      <section className="py-32 bg-[#F5F5F5] relative">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="mb-20 scroll-trigger text-reveal">
            <p className="text-xs font-bold font-english tracking-widest text-gray-400 mb-4">PROBLEM</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-relaxed tracking-tight">
              「就活はまだ先でいい」<br />
              そう思っていませんか？
            </h2>
            <p className="mt-6 text-sm md:text-base text-gray-600 leading-loose font-medium max-w-xl">
              テスト勉強や授業準備に追われ、ESを書く時間がない...。<br />
              優秀な学生ほど、<span className="text-[#FF7B44] font-bold border-b-2 border-[#FF7B44] pb-1">時間不足</span>という構造的な制約に直面しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-300 scroll-trigger text-reveal">
            {[
              { 
                no: '01', 
                icon: <Clock size={22} />, 
                title: '圧倒的な時間不足', 
                desc: '大学の授業やテスト勉強に加え、講師業務も重なり、就活に割けるまとまった時間が取れない。' 
              },
              { 
                no: '02', 
                icon: <HelpCircle size={22} />, 
                title: '「ガクチカ」の不安', 
                desc: '「家庭教師」の経験だけで、難関企業の選考を勝ち抜けるか不安。指導実績をどうアピールすべきか分からない。' 
              },
              { 
                no: '03', 
                icon: <TrendingUp size={22} />, 
                title: '出遅れ感と焦り', 
                desc: '周りはインターンに行き始めているが、自分は生徒のために時間を割いている。ネットの情報を見ると焦りを感じてしまう。' 
              }
            ].map((c) => (
              <div key={c.no} className="bg-white p-12 border-r border-b border-gray-300 group hover:bg-black transition-colors duration-500">
                <div className="text-[#FF7B44] text-3xl font-english font-bold mb-6 group-hover:text-white transition-colors">{c.no}</div>
                <h3 className="text-lg font-bold text-black mb-4 group-hover:text-white transition-colors">{c.title}</h3>
                <p className="text-xs text-gray-500 leading-loose group-hover:text-gray-400 transition-colors">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section (Authority & Empathy) */}
      <section id="concept" className="py-24 md:py-40 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#F5F5F5] z-0 hidden md:block" />
            <div className="relative z-10 w-full aspect-[4/3] mask-reveal scroll-trigger">
              <img
                src="https://www.toukobe.com/wp-content/uploads/Frame-787-4.jpg"
                className="w-full h-full object-cover grayscale-[30%]"
                alt="Concept"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-12">
            <div className="text-reveal scroll-trigger">
              <p className="text-xs font-bold font-english tracking-widest text-gray-400 mb-4">
                ABOUT
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-relaxed tracking-tight mb-8">
                その不安、<br />
                <span className="text-[#FF7B44] border-b-2 border-[#FF7B44] pb-1">トウコベキャリア</span>が解決します。
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-loose font-medium mb-6">
                オンライン個別指導塾『トウコベ』が贈る、講師限定のキャリア支援プラットフォームです。
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-loose font-medium mb-8">
                あなたの指導実績を価値ある経験として証明し、本質的な能力を評価するトップ企業へとダイレクトに接続します。
                MBB内定者、メガベンチャー内定者がメンターとして伴走し、忙しいあなたの就活を強力にバックアップします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#F9F9F9] py-24 md:py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 text-reveal scroll-trigger">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-english tracking-tight mb-4">
                MERIT
              </h2>
              <p className="text-sm font-bold text-gray-500">選ばれる3つの理由</p>
            </div>
            <div className="hidden md:block w-1/2 h-[1px] bg-gray-300 mb-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-300 scroll-trigger">
            {[
              {
                no: '01',
                icon: <Lock size={22} />,
                title: '完全招待制の特別ルート',
                desc: '一般のナビサイトには掲載されない特別選考ルートや、限定イベントへ優先的にご招待します。',
              },
              {
                no: '02',
                icon: <Award size={22} />,
                title: '指導実績が評価に直結',
                desc: '指導実績などの実務データを企業へ共有し、書類選考免除などの優遇を受けられます。',
              },
              {
                no: '03',
                icon: <Gift size={22} />,
                title: '説明会参加で謝礼を支給',
                desc: '本イベントは業務の一環として扱われるため、参加者には謝礼を支給します。',
              },
            ].map((m) => (
              <div
                key={m.no}
                className="bg-white p-10 border-r border-b border-gray-300 group hover:bg-black transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[#FF7B44] text-3xl font-english font-bold group-hover:text-white transition-colors">
                    {m.no}
                  </div>
                  <div className="text-gray-300 group-hover:text-[#FF7B44] transition-colors">
                    {m.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4 group-hover:text-white transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs text-gray-500 leading-loose group-hover:text-gray-400 transition-colors">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section (Corrected Logic) */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-reveal scroll-trigger mb-12 md:mb-16">
            <p className="text-xs font-bold font-english tracking-widest text-gray-400 mb-4">COMPARISON</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              一般的な就活との違い
            </h2>
            <p className="mt-5 text-sm text-gray-600 leading-loose max-w-2xl">
              "情報"と"準備"で消耗しがちな就活を、<span className="text-[#FF7B44] font-bold border-b-2 border-[#FF7B44] pb-0.5">実績評価</span>に寄せてショートカットします。
            </p>
          </div>

          {/* Segmented Tabs */}
          <div className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="p-2 bg-gray-50 border-b border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveTab('normal')}
                  className={`h-12 rounded-xl text-xs md:text-sm font-bold tracking-widest font-english transition-all duration-300 flex items-center justify-center gap-3 ${
                    activeTab === 'normal'
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-white text-black hover:text-[#FF7B44] border border-gray-200'
                  }`}
                >
                  NORMAL
                </button>

                <button
                  onClick={() => setActiveTab('prime')}
                  className={`h-12 rounded-xl text-xs md:text-sm font-bold tracking-widest font-english transition-all duration-300 flex items-center justify-center gap-3 ${
                    activeTab === 'prime'
                      ? 'bg-[#FF7B44] text-white shadow-sm'
                      : 'bg-white text-black hover:text-[#FF7B44] border border-gray-200'
                  }`}
                  aria-label="TOUKOBE CAREER"
                >
                  <img
                    src="https://www.toukobe.com/wp-content/uploads/Group-164.png"
                    alt="TOUKOBE CAREER"
                    className={`h-5 w-auto object-contain transition-all ${
                      activeTab === 'prime'
                        ? 'brightness-0 invert'
                        : 'opacity-90'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-10 md:px-10 md:py-12">
              {activeTab === 'normal' ? (
                <div className="animate-fade-in-up">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                    {/* Left narrative */}
                    <div className="md:col-span-5">
                      <h3 className="mt-5 text-2xl font-bold text-black leading-snug">
                        多くの学生が通る<br />"競争の激しい"道のり
                      </h3>
                      <p className="mt-5 text-sm text-gray-600 leading-loose">
                        エントリー数が膨大で、情報収集・ES・面接対策の「総力戦」になりやすい。
                        実務的な強みがあっても、書類で埋もれるリスクが残ります。
                      </p>
                    </div>

                    {/* Right list */}
                    <div className="md:col-span-7">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-5 md:p-6 border border-gray-200 rounded-xl bg-white">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center">
                              <Users size={18} className="text-gray-500" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-black">数万人が一斉にエントリー</p>
                              <p className="mt-1 text-xs text-gray-500 leading-loose">競争環境が前提。差別化が難しい。</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 md:p-6 border border-gray-200 rounded-xl bg-white">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center">
                              <FileText size={18} className="text-gray-500" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-black">書類選考で足切りされるリスク</p>
                              <p className="mt-1 text-xs text-gray-500 leading-loose">実績があっても、文字情報だけだと伝わりにくい。</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 md:p-6 border border-gray-200 rounded-xl bg-white">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center">
                              <AlertCircle size={18} className="text-gray-500" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-black">ES作成・面接対策に追われる</p>
                              <p className="mt-1 text-xs text-gray-500 leading-loose">時間コストが積み上がり、学業・研究とバッティングしがち。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in-up">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                    {/* Left narrative */}
                    <div className="md:col-span-5">
                      <h3 className="mt-5 text-2xl font-black text-[#FF7B44] leading-snug">
                        実績が評価される<br />"選ばれた人"の近道
                      </h3>
                      <p className="mt-5 text-sm text-gray-600 leading-loose">
                        指導実績・スコアなどのデータを評価軸に置き、
                        書類・準備のムダを削ります。
                      </p>
                    </div>

                    {/* Right list */}
                    <div className="md:col-span-7">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-5 md:p-6 rounded-xl border border-[#FF7B44]/35 bg-white shadow-[0_10px_30px_rgba(255,138,50,0.08)]">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl bg-[#FF7B44] flex items-center justify-center shrink-0">
                              <Check size={18} className="text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-black">
                                <span className="text-[#FF7B44]">実績評価</span>で書類選考スキップ
                              </p>
                              <p className="mt-1 text-xs text-gray-500 leading-loose">指導実績を定量で共有し、評価ポイントを明確化。</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 md:p-6 rounded-xl border border-[#FF7B44]/35 bg-white shadow-[0_10px_30px_rgba(255,138,50,0.08)]">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl bg-[#FF7B44] flex items-center justify-center shrink-0">
                              <Check size={18} className="text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-black">
                                <span className="text-[#FF7B44]">特別枠</span>で非公開のイベントへご案内
                              </p>
                              <p className="mt-1 text-xs text-gray-500 leading-loose">限定ルートのため、選考が短く意思決定が速い。</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 md:p-6 rounded-xl border border-[#FF7B44]/35 bg-white shadow-[0_10px_30px_rgba(255,138,50,0.08)]">
                          <div className="flex items-start gap-4">
                            <div className="w-11 h-11 rounded-xl bg-[#FF7B44] flex items-center justify-center shrink-0">
                              <Check size={18} className="text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-black">
                                メンターと効率的に対策<span className="text-[#FF7B44]">*</span>
                              </p>
                              <p className="mt-1 text-xs text-gray-500 leading-loose">
                                ※メンターはMBB内定者、メガベンチャー内定者等
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Moved Upcoming Event Section (Evidence) */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black">新着エントリー</h2>
          </div>

          {(() => {
            const events = [
              {
                id: 'leverages-20260315',
                deadlineDate: '2026-02-05',
                company: 'レバレジーズ',
                title: '【参加謝礼3,000円】Leverages特別企業説明会',
                desc: '年商1,000億規模の急成長企業「レバレジーズ」が全面協力。就活の進め方レクチャー、GD練習、座談会を通じて、キャリア形成の第一歩を踏み出しませんか？',
                meta: '90min / GD練習 / 座談会 / オンライン',
                dateLabel: '2026.02.15',
                time: '18:00 - 19:30',
                place: 'オンライン(Zoom)',
                image:
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
                logo:
                  'https://www.toukobe.com/wp-content/uploads/%E3%83%AC%E3%83%90%E3%83%AC%E3%82%B8%E3%83%BC%E3%82%BA%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE-%E5%BA%83%E5%A0%B1%E6%8B%85%E5%BD%93_id-XN67gio_0.png',
              },
            ];

            return (
              <div className="relative">
                <div className="flex gap-6 overflow-x-auto pb-3 snap-x snap-mandatory toukobe-scroll">
                  {events.map((e) => {
                    const daysLeft = getDaysRemaining(e.deadlineDate);
                    return (
                      <div
                        key={e.id}
                        onClick={() => openUrl(LEVERAGES_EVENT_URL)}
                        className="w-[85vw] sm:w-[400px] md:w-[480px] shrink-0 bg-white border border-gray-200 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden snap-start cursor-pointer hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                          <p className="text-sm font-bold text-[#FF7B44]">
                            {`【申込締切】あと${daysLeft}日`}
                          </p>
                        </div>

                        <div className="relative">
                          <div className="h-[200px] md:h-[240px] bg-gray-50 overflow-hidden">
                            <img
                              src={e.image}
                              alt={e.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="absolute left-4 top-4 w-14 h-14 bg-white border border-gray-200 rounded-xl p-2 shadow-md flex items-center justify-center">
                            <img
                              src={e.logo}
                              alt={`${e.company} ロゴ`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="px-6 py-6">
                          <p className="text-xs font-bold text-gray-500">{e.company}</p>
                          <h3 className="mt-2 text-lg md:text-xl font-bold text-black leading-snug">
                            {e.title}
                          </h3>
                          <p className="mt-3 text-sm text-gray-600 leading-relaxed whitespace-normal">
                            {e.desc}
                          </p>
                          <p className="mt-4 text-xs text-gray-400 font-bold">{e.meta}</p>

                          <div className="mt-6 flex items-center justify-between">
                            <div className="text-xs text-gray-500 font-bold">
                              <span className="font-english mr-3">{e.dateLabel}</span>
                              <span className="mr-3">{e.time}</span>
                              <span className="inline-flex items-center gap-1">
                                <Globe size={14} /> {e.place}
                              </span>
                            </div>
                            <button className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7B44] hover:opacity-70 transition-opacity">
                              詳細
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent" />
              </div>
            );
          })()}
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="py-24 md:py-40 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16 text-reveal scroll-trigger">
            <span className="text-xs font-bold tracking-widest text-gray-400 block mb-4">
              FLOW
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">ご利用の流れ</h2>
            <p className="text-sm font-normal text-gray-400">(具体的なステップ)</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-8 md:gap-4 text-reveal scroll-trigger">
            {[
              {
                no: '01',
                title: 'LINE友だち追加',
                desc: 'まずは公式LINEを友だち追加。1分で完了します。',
                icon: <UserPlus size={28} />,
              },
              {
                no: '02',
                title: '限定スカウト・面談',
                desc: '実績に基づいた特別オファーが届きます。メンターとのキャリア面談も可能。',
                icon: <Mail size={28} />,
              },
              {
                no: '03',
                title: '選考対策・内定',
                desc: 'ES添削や面接対策を徹底サポート。最短ルートで内定を目指します。',
                icon: <Award size={28} />,
              },
            ].map((p, index, array) => (
              <React.Fragment key={p.no}>
                <div className="relative w-full md:w-1/3 bg-[#F8F9FA] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group cursor-default border border-transparent hover:border-[#FF7B44]/20 hover:-translate-y-1">
                  <div className="absolute top-4 left-4 text-xs font-black text-gray-200 font-english text-[40px] leading-none z-0 opacity-50">
                    {p.no}
                  </div>
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#FF7B44] group-hover:bg-[#FF7B44] group-hover:text-white transition-colors duration-300">
                    {p.icon}
                  </div>
                  <h3 className="relative z-10 text-lg font-bold mb-3 text-[#111111]">{p.title}</h3>
                  <p className="relative z-10 text-xs text-gray-500 leading-relaxed font-medium">{p.desc}</p>
                  
                  {/* CTA Button in 1st Box */}
                  {index === 0 && (
                    <div className="mt-6 w-full flex justify-center">
                      <MainCtaButton 
                        onClick={() => openUrl(LINE_URL)}
                        small={true} 
                        mainText="友だち追加" 
                        showSubtext={false} 
                        showBadge={false} 
                      />
                    </div>
                  )}
                </div>

                {index < array.length - 1 && (
                  <div className="text-gray-300 flex-shrink-0 self-center">
                    <ArrowRight size={24} className="hidden md:block" />
                    <ArrowDown size={24} className="md:hidden" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">よくある質問</h2>
          <div className="space-y-0 border-t border-gray-200">
            {[
              {
                q: 'サービスに費用はかかりますか？',
                a: 'いいえ、登録から内定後のサポートまで、全てのサービスを無料でご利用いただけます。',
              },
              {
                q: 'まだ就活を始めていなくても利用できますか？',
                a: 'はい、可能です。大学1・2年生向けのキャリア講座や、早期インターン情報も多数取り扱っております。',
              },
              {
                q: '紹介された企業は必ず応募しなければなりませんか？',
                a: 'いいえ、強制は一切ありません。ご自身のキャリアビジョンに合う企業のみを選んで応募いただけます。',
              },
              {
                q: 'トウコベでの指導実績がないと利用できませんか？',
                a: '登録自体は可能です。ただし「特別選考ルート」などの一部特典は、一定の指導実績がある講師の方を優先してご案内する場合がございます。',
              },
            ].map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left py-8 flex justify-between items-center focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm md:text-base flex items-center">
                      <span className="text-[#FF7B44] mr-6 font-bold font-english text-xl">Q.</span>
                      {item.q}
                    </span>
                    <span
                      className={`text-2xl font-light text-gray-300 transition-colors duration-300 group-hover:text-[#FF7B44] ${
                        isOpen ? 'text-[#FF7B44]' : ''
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-12 text-sm text-gray-600 leading-loose">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        id="contact"
        className="py-24 md:py-32 px-6 bg-[#FFF2EB] flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8),_transparent)] z-0" />
        <div className="text-reveal scroll-trigger w-full flex flex-col items-center relative z-10">
          <MainCtaButton onClick={() => openUrl(LINE_URL)} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img
              src="https://www.toukobe.com/wp-content/uploads/Group-164.png"
              alt="MANABI Inc."
              className="h-8 w-auto brightness-0 invert mx-auto md:mx-0 mb-4 opacity-80"
            />
            <p className="text-[10px] text-gray-500 tracking-widest font-english">
              &copy; Copyright © 2026 MANABI Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Floating CTA */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.08)] z-50 md:hidden flex justify-center transition-transform duration-300 ${
          scrolled ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button
          onClick={() => openUrl(LINE_URL)}
          className="w-full bg-[#06C755] text-white text-center py-4 rounded-lg font-bold text-sm shadow-md flex items-center justify-center gap-2 active:opacity-90 active:scale-[0.98] transition-all"
        >
          <img 
             src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" 
             alt="LINE" 
             style={{ width: 24, height: 24 }}
             className="object-contain" 
           />
          <span>LINEで限定イベントを確認</span>
        </button>
      </div>
    </div>
  );
};

export default App;