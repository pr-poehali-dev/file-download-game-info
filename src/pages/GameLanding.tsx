import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const GameLanding = () => {
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
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzliODdmNSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
              🎮 Новая игра
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-primary-light to-primary bg-clip-text text-transparent">
            НАЗВАНИЕ ИГРЫ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Погрузитесь в захватывающий мир приключений, где каждое решение имеет значение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={handleDownload} className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-scale group">
              <Icon name="Download" className="mr-2 group-hover:animate-bounce" size={24} />
              Скачать игру
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover-scale">
              <Icon name="Play" className="mr-2" size={24} />
              Трейлер
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Особенности игры
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* About Section */}
      <section className="py-20 px-4 bg-dark/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О игре</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Добро пожаловать в мир, где каждое действие имеет последствия. Эта игра сочетает в себе 
              захватывающий геймплей, глубокую историю и невероятную атмосферу.
            </p>
            <p>
              Исследуйте обширные локации, сражайтесь с врагами, решайте головоломки и раскрывайте 
              тайны загадочного мира. Каждый выбор влияет на развитие сюжета и судьбу героев.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Часов геймплея</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Уникальных локаций</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Достижений</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Системные требования</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать приключение?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Скачайте игру прямо сейчас и окунитесь в захватывающий мир
          </p>
          <Button size="lg" onClick={handleDownload} className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 hover-scale group">
            <Icon name="Download" className="mr-2 group-hover:animate-bounce" size={24} />
            Скачать сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Название игры. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default GameLanding;