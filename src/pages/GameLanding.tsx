import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState, useEffect, useRef } from 'react';

const GameLanding = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState(1247);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        return Math.max(1200, Math.min(1300, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const features = [
    { icon: 'Gamepad2', title: 'Динамичный геймплей', description: 'Погрузитесь в захватывающее действие' },
    { icon: 'Users', title: 'Мультиплеер', description: 'Играйте с друзьями онлайн' },
    { icon: 'Trophy', title: 'Достижения', description: 'Открывайте награды и бонусы' },
    { icon: 'Zap', title: 'Быстрая динамика', description: 'Молниеносные реакции и стратегия' }
  ];

  const handleDownload = () => {
    window.open('https://t.me/flexrasia', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark/95 to-dark/90">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30" 
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzliODdmNSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" 
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div 
          className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in"
          style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: Math.max(0, 1 - scrollY / 500) }}
        >
          <div className="mb-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <span className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
              🎮 Новая игра
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Онлайн: {onlinePlayers.toLocaleString()} игроков
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-primary-light to-primary bg-clip-text text-transparent">
            FLEX RUSSIA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Самая лучшая копия Black Russia — открытый мир криминальной России
          </p>
          <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleDownload} className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-scale group">
                <Icon name="Download" className="mr-2 group-hover:animate-bounce" size={24} />
                Скачать игру
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover-scale"
                onClick={() => setShowTrailer(true)}
              >
                <Icon name="Play" className="mr-2" size={24} />
                Трейлер
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://t.me/flexrasia', '_blank')}
                className="border-primary/20 hover:border-primary/50 hover-scale"
              >
                <Icon name="Smartphone" className="mr-2" size={18} />
                Android
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://t.me/flexrasia', '_blank')}
                className="border-primary/20 hover:border-primary/50 hover-scale"
              >
                <Icon name="Apple" className="mr-2" size={18} />
                iOS
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://t.me/flexrasia', '_blank')}
                className="border-primary/20 hover:border-primary/50 hover-scale"
              >
                <Icon name="Monitor" className="mr-2" size={18} />
                Windows
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">
            Особенности игры
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-fade-in">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-dark/50 border-primary/20 hover:border-primary/50 transition-all hover-scale backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">Скриншоты из игры</h2>
          <div className="grid md:grid-cols-2 gap-6 scroll-fade-in">
            <div className="relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover-scale group">
              <img 
                src="https://cdn.poehali.dev/projects/795fdb1f-a65e-4fef-8c83-184b6e9cc794/files/fce18f61-218c-4670-9ce6-7d3cca36293f.jpg" 
                alt="Открытый мир города"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Открытый мир</h3>
                  <p className="text-sm text-muted-foreground">Исследуй город</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover-scale group">
              <img 
                src="https://cdn.poehali.dev/projects/795fdb1f-a65e-4fef-8c83-184b6e9cc794/files/af349545-0a5f-4eea-a6b3-3d66ee17a87f.jpg" 
                alt="Кастомизация персонажа"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Кастомизация</h3>
                  <p className="text-sm text-muted-foreground">Создай своего персонажа</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover-scale group">
              <img 
                src="https://cdn.poehali.dev/projects/795fdb1f-a65e-4fef-8c83-184b6e9cc794/files/6e6d3db6-934f-40fc-b335-7fa9ebcb267d.jpg" 
                alt="Вождение автомобилей"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Вождение</h3>
                  <p className="text-sm text-muted-foreground">Гоняй на тачках</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover-scale group">
              <img 
                src="https://cdn.poehali.dev/projects/795fdb1f-a65e-4fef-8c83-184b6e9cc794/files/1808c164-5e5f-4ac5-ac66-79eaad6990b2.jpg" 
                alt="Мультиплеер"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Онлайн</h3>
                  <p className="text-sm text-muted-foreground">Играй с друзьями</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-dark/30">
        <div className="max-w-4xl mx-auto scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Flex Russia — самая лучшая копия Black Russia</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Flex Russia — это самая качественная и проработанная копия легендарной Black Russia. 
              Погрузитесь в открытый мир криминальной России с улучшенной графикой, оптимизацией и новыми возможностями.
            </p>
            <p>
              Стройте криминальную империю, участвуйте в разборках, зарабатывайте деньги честным и нечестным путём. 
              Вся атмосфера оригинала, но с улучшениями и стабильной работой на всех устройствах.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Копия оригинала</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Онлайн</div>
                <div className="text-sm text-muted-foreground">Мультиплеер</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Бесплатно</div>
                <div className="text-sm text-muted-foreground">Полностью free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">Новости и обновления</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-fade-in">
            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-sm text-primary">
                  <Icon name="Calendar" size={16} />
                  <span>3 дня назад</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Обновление 2.5: Новые машины</h3>
                <p className="text-muted-foreground mb-4">
                  В игру добавлено 15 новых автомобилей премиум-класса. Улучшена физика вождения и добавлены новые тюнинг-опции.
                </p>
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                  Подробнее <Icon name="ArrowRight" size={16} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-sm text-primary">
                  <Icon name="Calendar" size={16} />
                  <span>1 неделя назад</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Новый сезон: Криминальные войны</h3>
                <p className="text-muted-foreground mb-4">
                  Стартовал новый сезон с уникальными наградами, новыми миссиями и эксклюзивными скинами для оружия.
                </p>
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                  Подробнее <Icon name="ArrowRight" size={16} />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-sm text-primary">
                  <Icon name="Calendar" size={16} />
                  <span>2 недели назад</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Оптимизация и исправления</h3>
                <p className="text-muted-foreground mb-4">
                  Улучшена производительность на слабых устройствах, исправлены критические баги, добавлена поддержка новых Android-версий.
                </p>
                <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                  Подробнее <Icon name="ArrowRight" size={16} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-dark/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">Отзывы игроков</h2>
          <div className="grid md:grid-cols-3 gap-6 scroll-fade-in">
            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-primary">
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Лучшая копия Black Russia! Работает без лагов, все как в оригинале. Респект разработчикам!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Алексей М.</div>
                    <div className="text-sm text-muted-foreground">Играет 3 месяца</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-primary">
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Наконец-то нормальная копия! Графика топ, игроков много, сервера стабильные. Всем советую!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Дмитрий К.</div>
                    <div className="text-sm text-muted-foreground">Играет 5 месяцев</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-primary">
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                    <Icon name="Star" size={20} className="fill-current" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Играю с кентами каждый день. Flex Russia вообще огонь, даже лучше оригинала стала!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Максим В.</div>
                    <div className="text-sm text-muted-foreground">Играет 2 месяца</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">Системные требования</h2>
          <div className="grid md:grid-cols-2 gap-8 scroll-fade-in">
            {/* Minimum */}
            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Server" size={28} className="text-primary" />
                  <h3 className="text-2xl font-semibold">Минимальные</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">ОС</div>
                    <div>Windows 10 64-bit</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Процессор</div>
                    <div>Intel Core i5-6600K / AMD Ryzen 5 1600</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Оперативная память</div>
                    <div>8 GB RAM</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Видеокарта</div>
                    <div>NVIDIA GTX 1060 / AMD RX 580</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Место на диске</div>
                    <div>50 GB</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended */}
            <Card className="bg-gradient-to-br from-primary/10 to-dark/50 border-primary/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Cpu" size={28} className="text-primary" />
                  <h3 className="text-2xl font-semibold">Рекомендуемые</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">ОС</div>
                    <div>Windows 11 64-bit</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Процессор</div>
                    <div>Intel Core i7-9700K / AMD Ryzen 7 3700X</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Оперативная память</div>
                    <div>16 GB RAM</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Видеокарта</div>
                    <div>NVIDIA RTX 3060 / AMD RX 6700 XT</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Место на диске</div>
                    <div>50 GB SSD</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">Частые вопросы</h2>
          <div className="space-y-4 scroll-fade-in">
            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name="HelpCircle" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Flex Russia — это бесплатная игра?</h3>
                    <p className="text-muted-foreground">
                      Да, Flex Russia полностью бесплатна! Вы можете скачать и играть без каких-либо платежей.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name="HelpCircle" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Чем Flex Russia отличается от Black Russia?</h3>
                    <p className="text-muted-foreground">
                      Flex Russia — это улучшенная копия с лучшей оптимизацией, стабильными серверами и регулярными обновлениями. Все возможности оригинала + новые фичи.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name="HelpCircle" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">На каких устройствах работает игра?</h3>
                    <p className="text-muted-foreground">
                      Игра работает на Android 5.0 и выше, iOS 12+, а также на ПК с Windows 10/11. Оптимизирована даже для слабых устройств.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name="HelpCircle" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Есть ли мультиплеер?</h3>
                    <p className="text-muted-foreground">
                      Да! В Flex Russia можно играть онлайн с друзьями и тысячами других игроков. Создавайте банды, участвуйте в разборках и стройте криминальную империю вместе.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon name="HelpCircle" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Как получить поддержку?</h3>
                    <p className="text-muted-foreground">
                      Присоединяйтесь к нашему Telegram-каналу @flexrasia — там вы найдете помощь, новости, обновления и сможете пообщаться с другими игроками!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать приключение?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Скачайте игру прямо сейчас и окунитесь в захватывающий мир
          </p>
          <div className="flex flex-col gap-6 items-center">
            <Button size="lg" onClick={handleDownload} className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 hover-scale group">
              <Icon name="Download" className="mr-2 group-hover:animate-bounce" size={24} />
              Скачать сейчас
            </Button>
            <div className="flex flex-wrap gap-4 justify-center">
              <Card className="bg-dark/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer hover-scale" onClick={() => window.open('https://t.me/flexrasia', '_blank')}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Smartphone" size={32} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Доступно на</div>
                    <div className="text-lg font-bold">Android</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer hover-scale" onClick={() => window.open('https://t.me/flexrasia', '_blank')}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Apple" size={32} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Загрузить из</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer hover-scale" onClick={() => window.open('https://t.me/flexrasia', '_blank')}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Monitor" size={32} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Скачать для</div>
                    <div className="text-lg font-bold">Windows PC</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Flex Russia. Все права защищены.</p>
        </div>
      </footer>

      {/* Video Modal */}
      {showTrailer && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowTrailer(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowTrailer(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/toTvkf8gTkw?autoplay=1"
              title="Black Russia Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 bg-primary hover:bg-primary/90 rounded-full shadow-lg transition-all hover-scale animate-fade-in"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </button>
      )}
    </div>
  );
};

export default GameLanding;