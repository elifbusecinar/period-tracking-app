import React, { useState, useEffect } from 'react';
import { Moon, Sun, Calendar, TrendingUp, BookOpen, Settings, Heart, Activity, Droplet, Smile, Battery, AlertCircle } from 'lucide-react';

const CycleApp = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [cycleData, setCycleData] = useState({
    lastPeriodDate: null,
    averageCycleLength: 28,
    periodDuration: 5,
    painLevel: 2,
    usesBirthControl: false,
    conditions: []
  });

  const [dailyLog, setDailyLog] = useState({
    mood: null,
    energy: null,
    pain: null,
    flow: null,
    sleep: null
  });

  const [currentPhase, setCurrentPhase] = useState('menstrual');
  const [dayInCycle, setDayInCycle] = useState(1);

  // User's custom palette: #FFBB94, #FB9590, #DC586D, #A33757, #852E4E, #4C1D3D
  const phases = {
    menstrual: {
      name: 'Menstrüasyon',
      icon: '🩸',
      color: '#DC586D', // User Color 3 (Pink)
      description: 'Rahim içi doku dökülüyor',
      note: 'Ağrı şiddeti kişiye göre değişir. Şiddetli ağrı yaşıyorsan bir uzmana danışmayı düşünebilirsin.'
    },
    follicular: {
      name: 'Foliküler Faz',
      icon: '🌱',
      color: '#A33757', // User Color 4 (Magenta)
      description: 'Östrojen artıyor, enerji yükseliyor',
      note: 'Bu dönemde beyin sisi yaşaman da normal olabilir.'
    },
    ovulation: {
      name: 'Ovülasyon',
      icon: '🌼',
      color: '#FFBB94', // User Color 1 (Peach)
      description: 'Yumurtlama dönemi',
      note: 'Bu aşama her zaman 14. gün olmaz. Bazı kadınlar hisseder, bazıları hiç hissetmez.'
    },
    luteal: {
      name: 'Luteal Faz',
      icon: '🌙',
      color: '#FB9590', // User Color 2 (Salmon)
      description: 'Progesteron artıyor',
      note: 'Duygusal hassasiyet olabilir ama herkes PMS yaşamaz.'
    }
  };

  const mythBusters = [
    {
      myth: 'Regl ağrısı çekmek normaldir',
      truth: 'Hafif ağrı olabilir ama şiddetli ağrı araştırılmalıdır',
      icon: '⚠️'
    },
    {
      myth: 'Tüm kadınlar 28 günde regl olur',
      truth: '21–35 gün arası sağlıklı kabul edilir',
      icon: '📅'
    },
    {
      myth: 'PMS herkes için aynıdır',
      truth: 'Hatta bazı kadınlarda hiç yoktur',
      icon: '💭'
    },
    {
      myth: 'Ovülasyon her zaman hissedilir',
      truth: 'Çoğu kadın ovülasyonu fark etmez',
      icon: '🤔'
    }
  ];

  const getCurrentPhase = (day) => {
    if (day <= cycleData.periodDuration) return 'menstrual';
    if (day <= 13) return 'follicular';
    if (day <= 16) return 'ovulation';
    return 'luteal';
  };

  useEffect(() => {
    const phase = getCurrentPhase(dayInCycle);
    setCurrentPhase(phase);
  }, [dayInCycle, cycleData]);

  // Theme Styles
  const bgStyle = darkMode
    ? 'bg-gradient-to-br from-[#4C1D3D] via-[#35152b] to-[#1e0d18] text-white'
    : 'bg-gradient-to-br from-[#FFE5DC] via-[#FFD5CC] to-[#FFC9BD] text-[#4C1D3D]';

  const cardStyle = darkMode
    ? 'bg-[#852E4E]/20 backdrop-blur-md border border-white/10 shadow-xl shadow-[#DC586D]/10'
    : 'bg-white/40 backdrop-blur-md border border-[#DC586D]/20 shadow-lg shadow-[#DC586D]/10';

  const textColor = darkMode ? 'text-white' : 'text-[#4C1D3D]';
  const subTextColor = darkMode ? 'text-[#FFBB94]' : 'text-[#852E4E]';
  const accentColor = darkMode ? 'text-[#DC586D]' : 'text-[#DC586D]';

  // Helper for glass buttons
  const glassBtn = darkMode
    ? 'bg-white/5 hover:bg-white/10 border-white/10'
    : 'bg-white/30 hover:bg-white/50 border-[#DC586D]/20 backdrop-blur-sm';

  const HomeView = () => (
    <div className="space-y-6">
      {/* Current Phase Card */}
      <div className={`${cardStyle} rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[#DC586D]/20`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{phases[currentPhase].icon}</span>
            <div>
              <h2 className={`text-2xl font-bold`} style={{ color: '#DC586D' }}>
                {phases[currentPhase].name}
              </h2>
              <p className={subTextColor}>Döngü günü: {dayInCycle}</p>
            </div>
          </div>
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold border-4`}
            style={{
              backgroundColor: '#DC586D' + '20',
              color: '#DC586D',
              borderColor: '#DC586D'
            }}>
            {dayInCycle}
          </div>
        </div>

        <div className={`p-4 rounded-xl ${darkMode ? 'bg-black/20' : 'bg-white/50'} mb-4 border-l-4 border-[#DC586D]`}>
          <p className={textColor}>{phases[currentPhase].description}</p>
        </div>

        <div className={`p-4 rounded-xl border-l-4`}
          style={{
            backgroundColor: '#FB959010',
            borderColor: '#FB9590'
          }}>
          <p className={`text-sm ${darkMode ? 'text-white/90' : 'text-[#FB9590]'}`}>{phases[currentPhase].note}</p>
        </div>
      </div>

      {/* Cycle Timeline */}
      <div className={`${cardStyle} rounded-3xl p-6`}>
        <h3 className={`text-lg font-semibold mb-4 ${accentColor}`}>Döngü Takvimi</h3>
        <div className="relative h-3 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          <div className="absolute h-full flex">
            {/* Displaying all colors in timeline regardless of phase */}
            <div className="h-full bg-[#DC586D]" style={{ width: `${(cycleData.periodDuration / cycleData.averageCycleLength) * 100}%` }}></div>
            <div className="h-full bg-[#A33757]" style={{ width: `${(9 / cycleData.averageCycleLength) * 100}%` }}></div>
            <div className="h-full bg-[#FFBB94]" style={{ width: `${(3 / cycleData.averageCycleLength) * 100}%` }}></div>
            <div className="h-full bg-[#FB9590]" style={{ width: `${((cycleData.averageCycleLength - 16) / cycleData.averageCycleLength) * 100}%` }}></div>
          </div>
          <div
            className="absolute top-0 w-1 h-full bg-white shadow-lg transition-all"
            style={{ left: `${(dayInCycle / cycleData.averageCycleLength) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <span className={subTextColor}>Gün 1</span>
          <span className={subTextColor}>Gün {cycleData.averageCycleLength}</span>
        </div>
      </div>

      {/* Daily Log */}
      <div className={`${cardStyle} rounded-3xl p-6`}>
        <h3 className={`text-lg font-semibold mb-4 ${accentColor}`}>Bugün Nasıl Hissediyorsun?</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: 'mood', icon: Smile, label: 'Ruh Hali', color: '#FFBB94' }, // Peach
            { key: 'energy', icon: Battery, label: 'Enerji', color: '#A33757' }, // Magenta
            { key: 'pain', icon: AlertCircle, label: 'Ağrı', color: '#DC586D' }, // Pink
            { key: 'flow', icon: Droplet, label: 'Akıntı', color: '#FB9590' }  // Salmon
          ].map(item => (
            <button
              key={item.key}
              className={`p-4 rounded-2xl mobile-tap-active transition-all duration-300 flex flex-col items-center gap-2 ${glassBtn} ${dailyLog[item.key] ? 'ring-2 ring-[#FFBB94] bg-white/10' : ''}`}
              onClick={() => setDailyLog({ ...dailyLog, [item.key]: !dailyLog[item.key] })}
            >
              <item.icon className={`w-8 h-8 ${dailyLog[item.key] ? 'scale-110' : 'opacity-70'} transition-transform`} style={{ color: item.color }} />
              <p className={`text-sm font-medium ${textColor}`}>{item.label}</p>
            </button>
          ))}
        </div>
        <p className={`text-xs ${subTextColor} mt-4 text-center italic`}>
          Bu bilgiler senin bedenini anlamana yardımcı olur. Zorunlu değil, istediğin zaman kaydet.
        </p>
      </div>

      {/* Today's Suggestion */}
      <div className={`${cardStyle} rounded-3xl p-6 bg-gradient-to-r from-[#FFBB94]/10 to-transparent`}>
        <div className="flex items-center gap-2 mb-3">
          <Heart className={`w-5 h-5`} style={{ color: '#FFBB94' }} />
          <h3 className={`text-lg font-semibold`} style={{ color: '#FFBB94' }}>Bugün Bedenin Senden Ne İstiyor?</h3>
        </div>
        <div className={`p-4 rounded-xl`} style={{ backgroundColor: darkMode ? '#FFBB9410' : '#FFBB9420' }}>
          <p style={{ color: '#FFBB94' }}>
            {currentPhase === 'menstrual' && 'Kendine nazik ol. Düşük tempolu aktiviteler ve bol sıvı tüketimi bu dönemde iyi gelebilir.'}
            {currentPhase === 'follicular' && 'Enerjin artıyor olabilir. Yeni projeler başlatmak için iyi bir dönem olabilir.'}
            {currentPhase === 'ovulation' && 'Sosyal etkileşimler bu dönemde daha kolay gelebilir. Ama herkes için farklıdır.'}
            {currentPhase === 'luteal' && 'Dinlenmeye öncelik verebilirsin. Bu dönemde içe dönük hissetmen doğal olabilir.'}
          </p>
        </div>
        <p className={`text-xs ${subTextColor} mt-3 italic`}>
          * Bu öneriler genelleme değil, döngü fazına göre fikir verme amaçlıdır. Senin deneyimin farklı olabilir.
        </p>
      </div>
    </div>
  );

  const LearnView = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${textColor} mb-4`}>Yanlış Bilinenler</h2>
      {mythBusters.map((item, index) => (
        <div key={index} className={`${cardStyle} rounded-3xl p-6 transition-all hover:scale-[1.02]`}>
          <div className="flex items-start gap-4">
            <span className="text-3xl">{item.icon}</span>
            <div className="flex-1">
              <div className={`mb-3 p-3 rounded-lg`} style={{ backgroundColor: darkMode ? '#DC586D20' : '#DC586D10' }}>
                <p className={`text-sm font-semibold mb-1`} style={{ color: '#DC586D' }}>
                  ❌ Yanlış
                </p>
                <p className={textColor}>{item.myth}</p>
              </div>
              <div className={`p-3 rounded-lg`} style={{ backgroundColor: darkMode ? '#A3375720' : '#A3375710' }}>
                <p className={`text-sm font-semibold mb-1`} style={{ color: '#A33757' }}>
                  ✅ Doğru
                </p>
                <p className={textColor}>{item.truth}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={`${cardStyle} rounded-3xl p-6 mt-6`}>
        <h3 className={`text-lg font-semibold ${textColor} mb-3`}>Önemli Not</h3>
        <p className={textColor}>
          Bu uygulama senin bedenini anlamana yardımcı olur ama teşhis koymaz. Endişelerin varsa mutlaka bir sağlık uzmanına danış.
        </p>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${bgStyle} transition-all duration-500`}>
      <div className="max-w-2xl mx-auto p-4 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <div>
            <h1 className={`text-3xl font-bold ${textColor}`}>Döngü</h1>
            <p className={subTextColor}>Senin bedenin, senin hikâyen</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full ${glassBtn} transition-all hover:scale-110 hover:rotate-12`}
          >
            {darkMode ? <Sun className="w-6 h-6" style={{ color: '#FFBB94' }} /> : <Moon className="w-6 h-6" style={{ color: '#FB9590' }} />}
          </button>
        </div>

        {/* Content */}
        {currentView === 'home' && <HomeView />}
        {currentView === 'learn' && <LearnView />}
        {currentView === 'settings' && (
          <div className={`${cardStyle} rounded-3xl p-6`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-4`}>Ayarlar</h2>
            <p className={subTextColor}>Profil ayarları ve kişiselleştirme özellikleri burada olacak.</p>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-[#1A0A15]/80' : 'bg-white/50'} backdrop-blur-lg border-t ${darkMode ? 'border-white/10' : 'border-[#DC586D]/20'} shadow-lg pb-safe`}>
          <div className="max-w-2xl mx-auto flex justify-around p-4">
            {[
              { key: 'home', icon: Calendar, label: 'Ana Sayfa' },
              { key: 'learn', icon: BookOpen, label: 'Öğren' },
              { key: 'settings', icon: Settings, label: 'Ayarlar' }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setCurrentView(item.key)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${currentView === item.key
                  ? `${textColor}`
                  : `${subTextColor} hover:${textColor}`
                  }`}
                style={currentView === item.key ? { color: phases[currentPhase].color } : {}}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CycleApp;
