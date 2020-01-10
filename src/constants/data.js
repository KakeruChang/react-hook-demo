import homePageMainMenuImg1 from '../assets/homePage/read_img01.png'
import homePageMainMenuImg2 from '../assets/homePage/read_img02.png'
import homePageMainMenuImg3 from '../assets/homePage/read_img03.png'
import homePageMainMenuImg4 from '../assets/homePage/read_img04.png'

const data = {
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
    ]
  }
}

export default data
