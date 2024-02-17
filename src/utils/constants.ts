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
        "https://i.pinimg.com/736x/86/e5/23/86e5231b1c352ca7e9045bef7bcec4af.jpg",
        'https://bm.img.com.ua/nxs/img/prikol/images/large/9/3/305639_851389.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3CB5TJ7Zf-glYfOcw7shfrdijJntE2_uxNuJbG6y5a6dMq_UH094Omy7mI3_9UHV4qI&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ij2ZFjxMuD3Q3E_xNEaaBsZ0UkNwcPGm6rW2H1KzhG-l7KA9Bi4j00PHBB6hU8fxhP0&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq53VpWsRg64w6iOUWBPLRL0Awl3rHedh10O7go8GfyKrLVy8kGxM3YXJ8vh__eekRKR4&usqp=CAU',
        'https://img.novosti-n.org/upload/ukraine/75693.jpg',
        'https://lh3.googleusercontent.com/proxy/mPOs-idPCs-eiHUZ73Xgqq-XohAItUz4bvRxNUy1akfSHn91rN0iokPB_LlIOmx4JrIUNfxZsuCJZhbAj9S6eRNStUmoZFcZhtXnlceHrme8IR7xmCYPO0I',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8GaVLCA2QGTrZqZvOCYT2O3-YCoHk8Dfxye-hyCqlV2iZWTrJ9FHmAeiaNk0skoHN1I&usqp=CAU',
      ],
    },
    answer: {
      textAnswer: "1. Брюс Уілліс<br>2. Леонардо Дікапріо<br>3. Жан Клод Ван Дам<br>4. Антоніо Бандерас<br>5. Джим Керрі<br>6. Памела Андерсон<br>7. Сільвестр Сталлоне<br>8. Міла Йовович" ,
    },
  },
  {
    id: 2,
    category: {
      id: 2,
      name: 'Футбол',
    },
    question: {
      textQuestion: "Хто найбільше виборов нагород “золотий м`яч?",
      imgQuestion: [],
    },
    answer: {
      textAnswer: "Ліонель Мессі",
    },
  },
  {
    id: 3,
    category: {
      id: 2,
      name: 'Футбол',
    },
    question: {
      textQuestion: "Хто світовий рекордсмен по голам?",
      imgQuestion: [],
    },
    answer: {
      textAnswer: "Кріштіано Роналдо",
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
      textAnswer: "Зінедін Зідан",
    },
  },
  {
    id: 5,
    category: {
      id: 3,
      name: '18+',
    },
    question: {
      textQuestion: "Дві жінки біля паркану - одна приклеєна, інша пришита. Що з ними потрібно зробити?",
      imgQuestion: [],
    },
    answer: {
      textAnswer: "першу віддерти, другу - відпороти",
    },
  },
  {
    id: 6,
    category: {
      id: 3,
      name: '18+',
    },
    question: {
      textQuestion: "Яка жінка спочатку треться біля тебе, а потім починає вимагати з тебе гроші?",
      imgQuestion: [],
    },
    answer: {
      textAnswer: "кондуктор у громадському транспорті",
    },
  },
  {
    id: 7,
    category: {
      id: 3,
      name: '18+',
    },
    question: {
      textQuestion: "У Нью-Йорку між двома здоровенними хмарочосами натягнули канат і по ньому повільно йде канатоходець " +
        "У цей же час у Жмеринці чоловікові середнього віку робить мінет баба років 70 " +
        "Думки в обох чоловіків однакові ... Які вони???",
      imgQuestion: [],
    },
    answer: {
      textAnswer: "Головне - не дивитися вниз!",
    },
  },
  {
    id: 8,
    category: {
      id: 3,
      name: 'Кіно',
    },
    question: {
      textQuestion: "У Нью-Йорку між двома здоровенними хмарочосами натягнули канат і по ньому повільно йде канатоходець " +
        "У цей же час у Жмеринці чоловікові середнього віку робить мінет баба років 70 " +
        "Думки в обох чоловіків однакові ... Які вони???",
      imgQuestion: [],
    },
    answer: {
      textAnswer: "<b>Головне</b> - не дивитися вниз!",
    },
  },
  {
    id: 9,
    category: {
      id: 4,
      name: 'Кіно',
    },
    question: {
      textQuestion: "Вгадайте назву фільму по кадрам. Яка саме частина фільму на зображеннях?",
      imgQuestion: ['https://i.pinimg.com/474x/0b/64/0f/0b640f47767099d14af691e1d2e5d17f.jpg', 'https://images.kinorium.com/movie/shot/290389/h280_1255000.jpg?21509097409'],
    },
    answer: {
      textAnswer: "Залізна Людина (1 частина)",
    },
  },
  {
    id: 10,
    category: {
      id: 4,
      name: 'Кіно',
    },
    question: {
      textQuestion: "Вгадайте назву фільму по кадрам.",
      imgQuestion: ['https://images.kinorium.com/movie/shot/195377/h280_48966652.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZxBgHCVB6yDUavn1anuB_N7PwXMfJFKPww&usqp=CAU'],
    },
    answer: {
      textAnswer: "Одинадцять друзів Оушена",
    },
  },
]

export const defaultCategories:ICategory[] = [
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
]
