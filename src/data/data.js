import homePageMainMenuImg1 from '../assets/homePage/read_img01.png'
import homePageMainMenuImg2 from '../assets/homePage/read_img02.png'
import homePageMainMenuImg3 from '../assets/homePage/read_img03.png'
import homePageMainMenuImg4 from '../assets/homePage/read_img04.png'
import simuTitleImg1 from '../assets/homePage/simulation/price-icon01.png'
import simuTitleImg2 from '../assets/homePage/simulation/price-icon02.png'
import simuTitleImg3 from '../assets/homePage/simulation/price-icon03.png'
import orderTitleImg1 from '../assets/order/order-flow-l_01.png'
import orderTitleImg2 from '../assets/order/order-flow-l_02.png'
import orderTitleImg3 from '../assets/order/order-flow-l_03.png'
import orderTitleImg4 from '../assets/order/order-flow-l_04.png'
import orderTitleImg5 from '../assets/order/order-flow-l_05.png'
import beforeOrderImgMail from '../assets/order/order_mail.png'
import beforeOrderImgHonnnin from '../assets/order/order_honnnin.png'
import beforeOrderImgMNP from '../assets/order/order_mnp.png'
import beforeOrderImgCredit from '../assets/order/order_credit.png'
import choosePlanDataOnly from '../assets/order/icon_data_only.png'
import choosePlanOnseiUse from '../assets/order/icon_onsei_use.png'
import choosePlanOnseiNo from '../assets/order/icon_onsei_no.png'
import completeImgAround from '../assets/order/bg-key.png'
import completeImgCenter from '../assets/order/main-catch.png'
import completeImgRWD from '../assets/order/main-catch-1.png'

const data = {
  user: {
    data: {
      thisMonth: { origin: 1, now: 0 },
      before: { origin: 1, now: 0 },
      plan: ''
    },
    phone: {
      thisMonth: {
        date: { year: '', month: '' },
        content: [
          {
            number: '',
            value: 0
          }
        ]
      },
      before: [
        // { value: 233, date: { year: '2019', month: '10' } },
        // { value: 100, date: { year: '2019', month: '11' } },
        // { value: 0, date: { year: '2019', month: '12' } }
      ]
    },
    games: [
      {
        gameName: '',
        gameID: '',
        state: true,
        startDate: '',
        recentStarDate: '',
        star: 0
      }
    ],
    LP: 0
  },
  // user: {
  //   data: {
  //     thisMonth: { origin: 10, now: 9 },
  //     before: { origin: 20, now: 8.8 },
  //     plan: '音声通話なし・SMSあり'
  //   },
  //   phone: {
  //     thisMonth: {
  //       date: { year: '2020', month: '01' },
  //       content: [
  //         {
  //           number: '070-1234-5678',
  //           value: 0
  //         }
  //       ]
  //     },
  //     before: [
  //       { value: 233, date: { year: '2019', month: '10' } },
  //       { value: 100, date: { year: '2019', month: '11' } },
  //       { value: 0, date: { year: '2019', month: '12' } }
  //     ]
  //   },
  //   games: [
  //     {
  //       gameName: 'グランブルーファンタジー',
  //       gameID: '1234567',
  //       state: true,
  //       startDate: '2019年12月07日',
  //       recentStarDate: '2020年01月10日',
  //       star: 2
  //     }
  //   ],
  //   LP: 1234
  // },
  homePage: {
    mainMenu: [
      {
        content: [
          { text: '対象コンテンツの', highLight: false },
          { text: '通信量カウント', highLight: false },
          { text: '90%以上OFF！', highLight: true }
        ],
        contentHover: [
          { text: 'データ通信量を節約！', highLight: false },
          { text: '対象ゲーム・コンテンツ', highLight: false },
          { text: 'は', highLight: false },
          { text: 'コチラ！', highLight: true }
        ],
        img: homePageMainMenuImg1,
        footerText: 'カウントフリーオプション',
        isHover: false
      },
      {
        content: [
          { text: '様々なゲーム内特典が', highLight: false },
          { text: '貰える！', highLight: true }
        ],
        contentHover: [
          { text: 'ゲームと連携して', highLight: false },
          { text: '素敵な特典を', highLight: false },
          { text: 'GET！', highLight: true }
        ],
        img: homePageMainMenuImg2,
        footerText: 'ゲーム連携・特典',
        isHover: false
      },
      {
        content: [
          { text: 'LinksMateなら、', highLight: false },
          { text: '月額250円', highLight: true },
          { text: 'から携帯電話・', highLight: false },
          { text: 'スマホがご利用できます！', highLight: false }
        ],
        contentHover: [
          { text: 'シンプルな料金プランと', highLight: false },
          { text: 'オプションを選んで', highLight: false },
          { text: 'オトクに使おう！', highLight: true }
        ],
        img: homePageMainMenuImg3,
        footerText: 'プラン・料金',
        isHover: false
      },
      {
        content: [
          { text: 'LinksMateをおトクに', highLight: false },
          { text: '楽しもう！', highLight: false },
          { text: 'キャンペーン', highLight: true },
          { text: '情報をご紹介！', highLight: false }
        ],
        contentHover: [
          { text: '現在実施中の', highLight: false },
          { text: 'おトク', highLight: true },
          { text: 'な', highLight: false },
          { text: 'キャンペーン情報を', highLight: false },
          { text: 'ご紹介いたします。', highLight: false }
        ],
        img: homePageMainMenuImg4,
        footerText: 'キャンペーン情報',
        isHover: false
      }
    ],
    simulation: {
      title: [
        '利用する機能を選択！',
        'データ通信容量でプランを選択！',
        'オプションを選択！'
      ],
      titleImg: [simuTitleImg1, simuTitleImg2, simuTitleImg3],
      simType: [
        {
          text: '音声通話+SMS+データ通信',
          value: 720,
          img: choosePlanOnseiUse
        },
        { text: 'SMS+データ通信', value: 120, img: choosePlanOnseiNo },
        { text: 'データ通信のみ', value: 1, img: choosePlanDataOnly }
      ],
      plan: [
        { text: 'データ通信容量を選択してください', value: 0 },
        { text: '10GB（970円/月額)', value: 970, data: 10 },
        { text: '20GB（1,020円/月額)', value: 1020, data: 20 }
      ],
      option: [
        { text: ['留守番', '電話機能'], value: 300 },
        { text: ['割り込み通話', '機能'], value: 200 },
        { text: ['10分かけ放題', 'オプション'], value: 850 },
        { text: ['カウントフリー', 'オプション'], value: 500 },
        { text: ['クラウドバックアップ', 'by AOS Cloud'], value: 500 }
      ]
    }
  },
  order: {
    title: [
      {
        index: 1,
        name: 'BeforeOrder',
        text: 'お申し込み前に',
        img: orderTitleImg1
      },
      {
        index: 2,
        name: 'SelectPlan',
        text: 'サービス選択',
        img: orderTitleImg2
      },
      {
        index: 3,
        name: 'InformationInput',
        text: 'お客さま情報入力',
        img: orderTitleImg3
      },
      {
        index: 4,
        name: 'CheckOrder',
        text: '申し込み内容確認',
        img: orderTitleImg4
      },
      {
        index: 5,
        name: 'CompleteOrder',
        text: '申し込み完了',
        img: orderTitleImg5
      }
    ],
    BeforeOrder: {
      privacy: {
        NO2List: [
          '本サービスをご利用いただくお客様の登録・アカウント開設・本人確認のため',
          '本サービスに関連した、無料会員登録のお客様の登録・アカウント開設・本人確認のため',
          '本サービスの管理・改善・不正利用防止のため',
          '当社指定のフィルタリングオプションをご利用いただくため',
          '本サービス料金の請求関連業務を行うため',
          '本サービスに関する利用状況の分析及び統計的データ作成のため',
          '本サービスに関するカスタマーサービス提供及び新企画の立案・提供のため',
          '本サービスに関するアンケート調査・分析及びマーケティング調査・分析のため',
          '本サービスに関するキャンペーン等の抽選及び賞品発送のため',
          '上記各利用目的に付随する利用のため',
          'その他当社の利用規約等で定める目的のため'
        ],
        NO3List: [
          '法令に基づく場合',
          '人の生命、身体又は財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき',
          '公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき',
          '国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき'
        ],
        NO5List: [
          '利用目的をご本人に通知し、又は公表することによりご本人又は第三者の生命、身体、財産その他の権利利益を害するおそれがある場合',
          '利用目的をご本人に通知し、又は公表することにより当社の権利又は正当な利益を害するおそれがある場合',
          '国の機関もしくは地方公共団体が法令の定める事務を遂行することに対して協力する必要がある場合であって、利用目的をご本人に通知し、又は公表することにより当該事務の遂行に支障を及ぼすおそれがあるとき',
          '取得の状況からみて利用目的が明らかであると認められる場合'
        ],
        NO11List: [
          'ご本人又は第三者の生命、身体、財産その他の権利利益を害するおそれがある場合',
          '当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合',
          '法令（個人情報保護法並びに同法の施行令及び施行規則を除く）に違反することとなる場合'
        ],
        NO10List: [
          {
            text:
              '当社は、以下の各号に定める場合を除くほか、あらかじめご本人の同意を得ないで、個人情報を第三者に提供しません。',
            content: [
              '法令に基づく場合',
              '人の生命、身体又は財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき',
              '公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき',
              '国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき',
              '個人情報保護法の定めに従って、予め次の事項を告知あるいは公表をしている場合'
            ],
            extra: [
              '利用目的に第三者への提供を含むこと',
              '第三者に提供されるデータの項目',
              '第三者への提供の手段又は方法',
              'ご本人の求めに応じて個人情報の第三者への提供を停止すること'
            ]
          },
          {
            text:
              '前項の定めにかかわらず、以下の各号に定める場合は上記に定める第三者には該当しません。',
            content: [
              '当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託する場合',
              '合併その他の事由による事業の承継に伴って個人情報が提供される場合',
              '個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的及び当該個人情報の管理について責任を有する者の氏名又は名称について、あらかじめご本人に通知し、又はご本人が容易に知り得る状態に置いているとき'
            ],
            extra: []
          },
          {
            text:
              '本サービスをご利用されるお客様のうち、当該利用者が18歳未満のため、フィルタリングオプションのご利用が必要となる場合、デジタルアーツ株式会社（以下「デジタルアーツ社」といいます）の「i-フィルター」をご利用いただきます。このため、当社は、該当するお客様の個人情報（氏名、名称、電話番号、住所その他本サービスのご利用のために当社に提供された個人情報）の一部又は全部を、デジタルアーツ社及び「i-フィルター」に関連し同社と提携する株式会社セールスパートナーと共同して利用する場合があります。',
            content: [],
            extra: []
          }
        ],
        NO15List: [
          'ご本人が当社のサービスの機能又は別の手段を用いて第三者に対して自ら個人情報を明らかにした場合',
          'ご本人が当社のサービス上で開示又は提供した情報等により、第三者が個人を識別できるに至った場合'
        ]
      },
      necessary: {
        img: {
          email: beforeOrderImgMail,
          credential: beforeOrderImgHonnnin,
          MNP: beforeOrderImgMNP,
          credit: beforeOrderImgCredit
        },
        dataOnly: { email: true, credential: true, MNPNumber: false },
        withoutMNP: { email: true, credential: true, MNPNumber: false },
        withMNP: { email: true, credential: true, MNPNumber: true }
        // note:['使用できる各公的書類についてはこちら','MNP予約番号は電話番号を変えることなく他社からLinksMateに乗り換える場合に必要となります']
      }
    },
    complete: {
      center: completeImgCenter,
      around: completeImgAround,
      RWD: completeImgRWD
    }
  }
}

export default data
