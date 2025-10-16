import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const weapons = [
    {
      name: 'AKM',
      type: 'Штурмовая винтовка',
      damage: 49,
      range: 47,
      stability: 41,
      fireRate: 55,
      ammo: '7.62mm',
      image: '/placeholder.svg'
    },
    {
      name: 'M416',
      type: 'Штурмовая винтовка',
      damage: 43,
      range: 52,
      stability: 65,
      fireRate: 71,
      ammo: '5.56mm',
      image: '/placeholder.svg'
    },
    {
      name: 'AWM',
      type: 'Снайперская винтовка',
      damage: 132,
      range: 95,
      stability: 28,
      fireRate: 25,
      ammo: '.300 Magnum',
      image: '/placeholder.svg'
    },
    {
      name: 'UZI',
      type: 'Пистолет-пулемёт',
      damage: 26,
      range: 30,
      stability: 72,
      fireRate: 85,
      ammo: '9mm',
      image: '/placeholder.svg'
    },
    {
      name: 'Kar98k',
      type: 'Снайперская винтовка',
      damage: 79,
      range: 88,
      stability: 35,
      fireRate: 30,
      ammo: '7.62mm',
      image: '/placeholder.svg'
    },
    {
      name: 'Groza',
      type: 'Штурмовая винтовка',
      damage: 49,
      range: 45,
      stability: 55,
      fireRate: 76,
      ammo: '7.62mm',
      image: '/placeholder.svg'
    }
  ];

  const maps = [
    { name: 'Erangel', size: '8x8 км', terrain: 'Разнообразный', players: 100 },
    { name: 'Miramar', size: '8x8 км', terrain: 'Пустыня', players: 100 },
    { name: 'Sanhok', size: '4x4 км', terrain: 'Джунгли', players: 100 },
    { name: 'Vikendi', size: '6x6 км', terrain: 'Снег', players: 100 }
  ];

  const gameModes = [
    { name: 'Classic', desc: 'Классический режим Battle Royale', players: '100 игроков' },
    { name: 'Arena', desc: 'Быстрые матчи 4v4', players: '8 игроков' },
    { name: 'TDM', desc: 'Командный бой насмерть', players: '4v4' },
    { name: 'Payload', desc: 'Режим с вертолетами и RPG', players: '100 игроков' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-pubg-orange/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Target" className="text-pubg-orange" size={32} />
              <h1 className="text-2xl font-bold text-pubg-orange">PUBG MOBILE</h1>
            </div>
            <div className="hidden md:flex space-x-1">
              {['home', 'weapons', 'maps', 'modes', 'stats'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(section)}
                  className={activeSection === section ? 'bg-pubg-orange text-black hover:bg-pubg-orange/90' : 'text-white hover:bg-white/10'}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'weapons' && 'Оружие'}
                  {section === 'maps' && 'Карты'}
                  {section === 'modes' && 'Режимы'}
                  {section === 'stats' && 'Статистика'}
                </Button>
              ))}
            </div>
            <Button variant="outline" className="border-pubg-gold text-pubg-gold hover:bg-pubg-gold hover:text-black">
              Играть
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {activeSection === 'home' && (
          <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 gradient-military opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30"></div>
            <div className="relative z-10 text-center space-y-6 px-4 animate-fade-in">
              <h2 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                BATTLE ROYALE
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Последний выживший побеждает. 100 игроков. Одна карта. Только один победитель.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-pubg-orange text-black hover:bg-pubg-orange/90 text-lg px-8">
                  <Icon name="Play" className="mr-2" />
                  Начать игру
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8">
                  <Icon name="Users" className="mr-2" />
                  Команда
                </Button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'weapons' && (
          <section className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-pubg-orange mb-4">Арсенал оружия</h2>
              <p className="text-xl text-muted-foreground">Выберите оружие под свой стиль игры</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-card border border-border">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="assault">Штурмовые</TabsTrigger>
                <TabsTrigger value="sniper">Снайперские</TabsTrigger>
                <TabsTrigger value="smg">ПП</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {weapons.map((weapon, index) => (
                    <Card key={index} className="bg-card border-2 border-border hover:border-pubg-orange transition-all duration-300 overflow-hidden group animate-scale-in">
                      <div className="h-48 bg-gradient-to-br from-pubg-gray to-pubg-dark relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-pubg-orange text-black">{weapon.type}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{weapon.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Icon name="Gauge" size={14} className="mr-1" />
                            {weapon.ammo}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Урон</span>
                            <span className="text-white font-bold">{weapon.damage}</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-pubg-orange" style={{ width: `${weapon.damage}%` }}></div>
                          </div>

                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Дальность</span>
                            <span className="text-white font-bold">{weapon.range}</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-pubg-gold" style={{ width: `${weapon.range}%` }}></div>
                          </div>

                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Стабильность</span>
                            <span className="text-white font-bold">{weapon.stability}</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: `${weapon.stability}%` }}></div>
                          </div>

                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Скорострельность</span>
                            <span className="text-white font-bold">{weapon.fireRate}</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-red-500" style={{ width: `${weapon.fireRate}%` }}></div>
                          </div>
                        </div>

                        <Button className="w-full bg-pubg-orange text-black hover:bg-pubg-orange/90">
                          Подробнее
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}

        {activeSection === 'maps' && (
          <section className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-pubg-orange mb-4">Боевые карты</h2>
              <p className="text-xl text-muted-foreground">Исследуйте разнообразные территории</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {maps.map((map, index) => (
                <Card key={index} className="bg-card border-2 border-border hover:border-pubg-orange transition-all overflow-hidden group">
                  <div className="h-64 bg-gradient-to-br from-pubg-dark to-pubg-gray relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute inset-0 gradient-dark"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-4xl font-bold text-white mb-2">{map.name}</h3>
                      <div className="flex gap-4 text-sm">
                        <Badge variant="outline" className="border-pubg-orange text-pubg-orange">
                          <Icon name="Map" size={14} className="mr-1" />
                          {map.size}
                        </Badge>
                        <Badge variant="outline" className="border-pubg-gold text-pubg-gold">
                          <Icon name="Users" size={14} className="mr-1" />
                          {map.players} игроков
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">Местность: {map.terrain}</p>
                    <Button className="w-full bg-pubg-orange text-black hover:bg-pubg-orange/90">
                      Выбрать карту
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'modes' && (
          <section className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-pubg-orange mb-4">Игровые режимы</h2>
              <p className="text-xl text-muted-foreground">Найдите свой стиль боя</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gameModes.map((mode, index) => (
                <Card key={index} className="bg-card border-2 border-border hover:border-pubg-orange transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{mode.name}</h3>
                        <p className="text-muted-foreground">{mode.desc}</p>
                      </div>
                      <Icon name="Trophy" className="text-pubg-gold" size={40} />
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">{mode.players}</span>
                      <Button className="bg-pubg-orange text-black hover:bg-pubg-orange/90">
                        Играть
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'stats' && (
          <section className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-pubg-orange mb-4">Статистика игрока</h2>
              <p className="text-xl text-muted-foreground">Отслеживайте свой прогресс</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-pubg-orange to-pubg-gold border-0">
                <CardContent className="p-6 text-center">
                  <Icon name="Award" className="mx-auto mb-4 text-black" size={48} />
                  <h3 className="text-4xl font-bold text-black mb-2">1,247</h3>
                  <p className="text-black/80">Побед</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pubg-dark to-pubg-gray border-2 border-pubg-orange">
                <CardContent className="p-6 text-center">
                  <Icon name="Target" className="mx-auto mb-4 text-pubg-orange" size={48} />
                  <h3 className="text-4xl font-bold text-white mb-2">8,542</h3>
                  <p className="text-muted-foreground">Убийств</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pubg-gray to-pubg-dark border-2 border-pubg-gold">
                <CardContent className="p-6 text-center">
                  <Icon name="Crosshair" className="mx-auto mb-4 text-pubg-gold" size={48} />
                  <h3 className="text-4xl font-bold text-white mb-2">3.8</h3>
                  <p className="text-muted-foreground">K/D Ratio</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-2 border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Последние матчи</h3>
                <div className="space-y-4">
                  {[
                    { mode: 'Classic', map: 'Erangel', place: 1, kills: 12, time: '23:45' },
                    { mode: 'Arena', map: 'Warehouse', place: 2, kills: 8, time: '5:12' },
                    { mode: 'Classic', map: 'Miramar', place: 5, kills: 7, time: '18:30' }
                  ].map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                          match.place === 1 ? 'bg-pubg-gold text-black' : 'bg-pubg-gray text-white'
                        }`}>
                          #{match.place}
                        </div>
                        <div>
                          <p className="font-bold text-white">{match.mode} - {match.map}</p>
                          <p className="text-sm text-muted-foreground">{match.kills} убийств • {match.time}</p>
                        </div>
                      </div>
                      <Icon name="ChevronRight" className="text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </main>

      <footer className="bg-black/90 border-t border-pubg-orange/20 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold text-pubg-orange mb-4">PUBG MOBILE</h4>
              <p className="text-muted-foreground text-sm">
                Легендарная Battle Royale игра на мобильных устройствах
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Игра</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Скачать</li>
                <li>Новости</li>
                <li>Обновления</li>
                <li>Турниры</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Сообщество</li>
                <li>Правила</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Социальные сети</h5>
              <div className="flex gap-4">
                <Icon name="Twitter" className="text-muted-foreground hover:text-pubg-orange cursor-pointer" />
                <Icon name="Facebook" className="text-muted-foreground hover:text-pubg-orange cursor-pointer" />
                <Icon name="Youtube" className="text-muted-foreground hover:text-pubg-orange cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 PUBG Corporation. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
