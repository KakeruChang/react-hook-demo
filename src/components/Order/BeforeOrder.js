import React from 'react'
import { Link } from 'react-router-dom'

import '../../scss/order.scss'
import data from '../../data/data'

const BeforeOrder = () => {
  return (
    <div>
      <p className='h5 mt-4'>お申し込み前に、下記内容を必ずご確認ください。</p>
      <div className='order-privacy'>
        <div className='order-privacy-title'>
          <h2 className='h5 ml-3'>プライバシーポリシー</h2>
        </div>
        <p className='order-privacy-text'>
          株式会社LogicLinks（以下「当社」といいます）は、LinksMateサービス（以下「本サービス」という）の提供に関し、個人情報の重要性を認識し、その保護の徹底を図り、お客様への安心・信頼感を提供するために以下の方針を定め、個人情報の保護に努めます。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>
          1.個人情報保護の方針
        </h3>
        <p className='order-privacy-text'>
          当社は、「個人情報の保護に関する法律」（平成15年法律第57号）（以下「個人情報保護法」といいます）、「行政手続における特定の個人を識別するための番号の利用等に関する法律」（平成25年法律第27号）、「電気通信事業における個人情報保護に関するガイドライン」その他の関連ガイドラインを遵守し、個人情報保護を適切に行うための基本方針として本プライバシーポリシーを制定いたします。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>
          2.個人情報利用目的の特定
        </h3>
        <p className='order-privacy-text'>
          当社は、本サービスの提供にあたって、以下の各号に定める目的を遂行するために必要な範囲で、個人情報を利用します。
        </p>
        <ul className='list-style-none order-privacy-text privacy-list'>
          {data.order.BeforeOrder.privacy.NO2List.map((listItem, index) => {
            return <li key={index}>{listItem}</li>
          })}
        </ul>
        <h3 className='h5 text-primary font-weight-bold'>
          3.個人情報利用の制限
        </h3>
        <p className='order-privacy-text'>
          当社は、あらかじめご本人の同意を得ず、利用目的の達成に必要な範囲を超えて個人情報を取り扱うことはありません。合併その他の理由により個人情報を取得した場合にも、あらかじめご本人の同意を得ないで、承継前の利用目的の範囲を超えて取り扱うことはありません。ただし、以下の各号に定める場合はこの限りではありません。
        </p>
        <ul className='list-style-none order-privacy-text privacy-list'>
          {data.order.BeforeOrder.privacy.NO3List.map((listItem, index) => {
            return <li key={index}>{listItem}</li>
          })}
        </ul>
        <h3 className='h5 text-primary font-weight-bold'>
          4.個人情報の適正な取得
        </h3>
        <h3 className='h5 text-primary font-weight-bold'>
          5.個人情報の取得に際する利用目的の通知
        </h3>
        <h3 className='h5 text-primary font-weight-bold'>
          6.個人情報利用目的の変更
        </h3>
        <h3 className='h5 text-primary font-weight-bold'>
          7.個人情報の安全管理・従業員の監督
        </h3>
        <h3 className='h5 text-primary font-weight-bold'>8.委託先の監督</h3>
        <h3 className='h5 text-primary font-weight-bold'>
          9.個人情報保護管理者の設置
        </h3>
        <h3 className='h5 text-primary font-weight-bold'>
          10.第三者提供の制限
        </h3>
        <h3 className='h5 text-primary font-weight-bold'>11.個人情報の開示</h3>
        <h3 className='h5 text-primary font-weight-bold'>
          12.個人情報の訂正等
        </h3>
        <h3 className='h5 text-primary font-weight-bold'>
          13.個人情報の利用停止等
        </h3>
        <h3 className='h5 text-primary font-weight-bold'>
          14.個人情報に該当しない情報の取得・利用
        </h3>
        <h3 className='h5 text-primary font-weight-bold'>15.免責</h3>
        <h3 className='h5 text-primary font-weight-bold'>16.問い合わせ窓口</h3>
        <h3 className='h5 text-primary font-weight-bold'>17.改定</h3>
      </div>
      <Link to='/order/selectplan'>selectplan</Link>
    </div>
  )
}

export default BeforeOrder
