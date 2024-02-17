import { IQuestion } from '@/models/Question'
import { ICategory } from '@/models/Category'

export enum AppRoutes {
  INDEX = '/',
  TEAMS = '/teams',
  GAME = '/game',
}

export const defaultQuestions: IQuestion[] = [
  {
    id: 1,
    category: {
      id: 1,
      name: 'Актори',
    },
    question: {
      textQuestion: 'Вгадайте акторів:',
      imgQuestion: [
        'https://i.pinimg.com/736x/86/e5/23/86e5231b1c352ca7e9045bef7bcec4af.jpg',
        'https://bm.img.com.ua/nxs/img/prikol/images/large/9/3/305639_851389.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3CB5TJ7Zf-glYfOcw7shfrdijJntE2_uxNuJbG6y5a6dMq_UH094Omy7mI3_9UHV4qI&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ij2ZFjxMuD3Q3E_xNEaaBsZ0UkNwcPGm6rW2H1KzhG-l7KA9Bi4j00PHBB6hU8fxhP0&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq53VpWsRg64w6iOUWBPLRL0Awl3rHedh10O7go8GfyKrLVy8kGxM3YXJ8vh__eekRKR4&usqp=CAU',
        'https://img.novosti-n.org/upload/ukraine/75693.jpg',
        'https://cdn.fishki.net/upload/post/201511/24/1749851/968f906ed7019dcf5c5458baefda920f.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8GaVLCA2QGTrZqZvOCYT2O3-YCoHk8Dfxye-hyCqlV2iZWTrJ9FHmAeiaNk0skoHN1I&usqp=CAU',
      ],
    },
    answer: {
      textAnswer:
        '1. Брюс Уілліс\n2. Леонардо Дікапріо\n3. Жан Клод Ван Дам\n4. Антоніо Бандерас\n5. Джим Керрі\n6. Памела Андерсон\n7. Сільвестр Сталлоне\n8. Міла Йовович',
    },
  },
  {
    id: 2,
    category: {
      id: 2,
      name: 'Футбол',
    },
    question: {
      textQuestion: 'Хто найбільше виборов нагород “золотий м`яч?',
      imgQuestion: [],
    },
    answer: {
      textAnswer: 'Ліонель Мессі',
    },
  },
  {
    id: 3,
    category: {
      id: 2,
      name: 'Футбол',
    },
    question: {
      textQuestion: 'Хто світовий рекордсмен по голам?',
      imgQuestion: [],
    },
    answer: {
      textAnswer: 'Кріштіано Роналдо',
    },
  },
  {
    id: 4,
    category: {
      id: 2,
      name: 'Футбол',
    },
    question: {
      textQuestion: "Футболіст який завершив свою кар'єру з червоною карткою?",
      imgQuestion: [],
    },
    answer: {
      textAnswer: 'Зінедін Зідан',
    },
  },
  {
    id: 5,
    category: {
      id: 3,
      name: '18+',
    },
    question: {
      textQuestion:
        'Дві жінки біля паркану - одна приклеєна, інша пришита. Що з ними потрібно зробити?',
      imgQuestion: [],
    },
    answer: {
      textAnswer: 'першу віддерти, другу - відпороти',
    },
  },
  {
    id: 6,
    category: {
      id: 3,
      name: '18+',
    },
    question: {
      textQuestion:
        'Яка жінка спочатку треться біля тебе, а потім починає вимагати з тебе гроші?',
      imgQuestion: [],
    },
    answer: {
      textAnswer: 'Кондуктор у громадському транспорті',
    },
  },
  {
    id: 7,
    category: {
      id: 3,
      name: '18+',
    },
    question: {
      textQuestion:
        'У Нью-Йорку між двома здоровенними хмарочосами натягнули канат і по ньому повільно йде канатоходець ' +
        'У цей же час у Жмеринці чоловікові середнього віку робить мінет баба років 70 ' +
        'Думки в обох чоловіків однакові ... Які вони???',
      imgQuestion: [],
    },
    answer: {
      textAnswer: 'Головне - не дивитися вниз!',
    },
  },
  {
    id: 8,
    category: {
      id: 4,
      name: 'Кіно',
    },
    question: {
      textQuestion:
        'Вгадайте назву фільму по кадрам. Яка саме частина фільму на зображеннях?',
      imgQuestion: [
        'https://i.pinimg.com/474x/0b/64/0f/0b640f47767099d14af691e1d2e5d17f.jpg',
        'https://images.kinorium.com/movie/shot/290389/h280_1255000.jpg?21509097409',
      ],
    },
    answer: {
      textAnswer: 'Залізна Людина (1 частина)',
    },
  },
  {
    id: 9,
    category: {
      id: 4,
      name: 'Кіно',
    },
    question: {
      textQuestion: 'Вгадайте назву фільму по кадрам.',
      imgQuestion: [
        'https://images.kinorium.com/movie/shot/195377/h280_48966652.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZxBgHCVB6yDUavn1anuB_N7PwXMfJFKPww&usqp=CAU',
      ],
    },
    answer: {
      textAnswer: 'Одинадцять друзів Оушена',
    },
  },
  {
    id: 10,
    category: {
      id: 4,
      name: 'Кіно',
    },
    question: {
      textQuestion:
        'Як називається фільм (Американська кимінальна комедія 2000 року) з Мартіном Лоуренсом в головній ролі, в якому прозвучала фраза: (відео) Друга частина цього фільму вийшла в 2006 році, а третя в 2011',
      imgQuestion: [],
    },
    answer: {
      textAnswer: 'Дім великої матусі',
    },
  },
  {
    id: 11,
    category: {
      id: 5,
      name: 'Історія',
    },
    question: {
      textQuestion:
        'В середньовічних замках всі гвинтові сходи побудовані таким чином, що під час підйому людина йде за стрілкою годинника, а коли вниз — то рухається проти годинникової стрілки. Чому так?',
      imgQuestion: [],
    },
    answer: {
      textAnswer:
        'Гвинтові сходи будували так для ефективної оборони: більшість людей правші. Дуже незручно використовувати зброю, коли під час підйому твоя права рука залишається позаду. Тим, хто оборонявся згори, було зручніше атакувати правою рукою.',
    },
  },
  {
    id: 12,
    category: {
      id: 5,
      name: 'Історія',
    },
    question: {
      textQuestion:
        'За легендою, в скрутні часи компанії Apple, Стів Джобс особисто проводив співбесіди. Він показував претендентам папірець з літерами і запитував, яка літера наступна. При цьому відповідь «Е» — неправильна.',
      imgQuestion: [
        'https://images.1plus1.video/news-1/31737/1594426549a24e0f369929e0ad448835.jpg',
      ],
    },
    answer: {
      textAnswer:
        'Це літера «F». Все дуже просто: нижня риска на малюнку вже є, тож для того, щоб алфавіт склався, потрібно до «_» домалювати «F».',
    },
  },
  {
    id: 13,
    category: {
      id: 5,
      name: 'Історія',
    },
    question: {
      textQuestion:
        'Баки для палива загальновідомих «шатлів» пофарбували в білий колір тільки для двох перших польотів. Далі було вирішено цього не робити. Чому?',
      imgQuestion: [],
    },
    answer: {
      textAnswer:
        'Для того, щоб знизити вагу. Фарба, якою покривають паливні баки, важить 270 кілограмів!',
    },
  },
]

export const defaultCategories: ICategory[] = [
  {
    id: 1,
    name: 'Актори',
  },
  {
    id: 2,
    name: 'Футбол',
  },
  {
    id: 3,
    name: '18+',
  },
  {
    id: 4,
    name: 'Кіно',
  },
  {
    id: 5,
    name: 'Історія',
  },
]
