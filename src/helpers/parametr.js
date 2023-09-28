export const routersList = {
  society: {
    title: 'Jamiyat haqida',
    routers: [
      {
        path: '/general-information',
        name: 'Umumiy ma‘lumot'
      },
      {
        path: '/management',
        name: 'Rahbariyat'
      },
      {
        path: '/reception-citizens',
        name: 'Fuqarolarni qabul qilish'
      },
      {
        path: '/ustav',
        name: 'Ustav'
      },
      {
        path: '/structure',
        name: 'Tashkiliy tuzilma'
      },
      {
        path: '/system-organizations',
        name: 'Tizim tashkiotlari'
      },
      {
        path: '/personnel-policy',
        name: 'Kadrlar siyosati'
      },
      {
        path: '/fighting-corruption',
        name: 'Korrupsiyaga qarshi kurashish'
      },
      {
        path: '/vacancies',
        name: 'Bo‘sh ish o‘rinlari'
      }
    ]
  },
  pressCenter: {
    title: 'Matbuot markazi',
    routers: [
      {
        path: '/news',
        name: 'Yangiliklar'
      },
      {
        path: '/posts',
        name: 'E’lonlar'
      },
      {
        path: '/quiz',
        name: 'Ko‘p uchraydigan savollar'
      },
      {
        path: '/photogalery',
        name: 'Fotogalereya'
      },
      {
        path: '/videogalery',
        name: 'Videogalereya'
      },
      {
        path: '/tenders',
        name: 'Tenderlar'
      },
      {
        path: '/oav',
        name: 'OAV biz haqimizda'
      }
    ]
  },
  normativeDocuments: {
    title: 'Normativ hujjatlar',
    routers: [
      {
        path: '/normative-documents/codexes',
        name: 'Kodekslar'
      },
      {
        path: '/normative-documents/resolutions',
        name: 'O‘zbekiston Respublikasi Prezidentining farmon va qarorlari'
      },
      {
        path: '/normative-documents/decisions',
        name: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari'
      },
      {
        path: '/normative-documents/regulatory-documents',
        name: 'Boshqa me’yoriy hujjatlar'
      },
      {
        path: '/normative-documents/expired-regulations',
        name: 'Kuchini yo‘qotgan normativ hujjatlar'
      }
    ]
  },
  investors: {
    title: 'Aksiyadorlar va investorlarga',
    routers: [
      {
        path: '/investors',
        name: 'Aksiyadorlarning umumiy yig‘ilishi'
      },
      {
        path: '#',
        name: 'Dividendlar'
      },
      {
        path: '#',
        name: 'Hisobotlar'
      },
      {
        path: '#',
        name: 'Emissiya risolasi'
      },
      {
        path: '#',
        name: 'Biznes reja'
      },
      {
        path: '#',
        name: 'Muhim faktlar'
      },
      {
        path: '#',
        name: 'Davlat xususiy - sheriklik'
      }
    ]
  },
  interactiveServices: {
    title: 'Interaktiv xizmatlar',
    routers: [
      {
        path: '/tariffs',
        name: 'Tarif va meyorlar'
      },
      {
        path: '/calculator',
        name: 'Kalkulyator'
      },
      {
        path: '/personal-cabinet',
        name: 'Shaxsiy kabinet'
      },
      {
        path: '/reestr',
        name: 'Reestr'
      },
      {
        path: '/polls',
        name: 'So‘rovnomalar'
      }
    ]
  }
}

export const allRoutersList = {
  headerRouters: [
    {
      path: '/general-information',
      ...routersList.society
    },
    {
      path: '/news',
      ...routersList.pressCenter
    },
    {
      path: '/normative-documents/resolutions',
      ...routersList.normativeDocuments
    },
    {
      path: '/investors',
      ...routersList.investors
    },
    {
      path: '/tariffs',
      ...routersList.interactiveServices
    }
  ]
}
