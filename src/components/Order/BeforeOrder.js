import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

// import '../../scss/order.scss'
import data from '../../data/data'
import popup from '../../assets/order/icon_18_popup.png'
import { useWindowSize } from '../../hooks/useWindowSize'

const BeforeOrder = () => {
  const windowSize = useWindowSize()

  const tableResult = result => {
    if (result) {
      return (
        <FontAwesomeIcon className='text-primary' icon={faCircle} size='1x' />
      )
    }
    return <FontAwesomeIcon icon={faMinus} size='1x' />
  }

  const beforeOrderTableTH = obj => {
    let th = []
    for (let key in obj) {
      th.push(<td key={key}>{tableResult(obj[key])}</td>)
    }
    return th
  }

  const BeforeOrderTable = () => {
    if (windowSize.width >= 992) {
      return (
        <table className='table table-bordered necessary-table'>
          <thead className='thead-primary'>
            <tr>
              <th scope='col'></th>
              <th scope='col'>
                <div className='row justify-content-center'>
                  <div className='font-weight-bold col-12 text-center'>
                    メールアドレス
                  </div>
                  <img
                    src={data.order.BeforeOrder.necessary.img.email}
                    alt=''
                  />
                </div>
              </th>
              <th scope='col'>
                <div className='row justify-content-center'>
                  <div className='font-weight-bold col-12 text-center'>
                    本人確認書類
                  </div>
                  <img
                    src={data.order.BeforeOrder.necessary.img.credential}
                    alt=''
                  />
                </div>
              </th>
              <th scope='col'>
                <div className='row justify-content-center'>
                  <div className='font-weight-bold col-12 text-center'>
                    MNP番号
                  </div>
                  <img src={data.order.BeforeOrder.necessary.img.MNP} alt='' />
                </div>
              </th>
              <th scope='col'>
                <div className='row justify-content-center'>
                  <div className='font-weight-bold col-12 text-center'>
                    クレジットカード
                  </div>
                  <img
                    src={data.order.BeforeOrder.necessary.img.credit}
                    alt=''
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>音声通話なし</th>
              {beforeOrderTableTH(data.order.BeforeOrder.necessary.dataOnly)}
              <td rowSpan='3' className='necessary-table-h3'>
                <div>クレジットカード</div>
                <div>支払いを選択した場合</div>
              </td>
            </tr>
            <tr>
              <th scope='row'>
                <div>
                  <div>音声通話あり</div>
                  <div>（MNPなし）</div>
                </div>
              </th>
              {beforeOrderTableTH(data.order.BeforeOrder.necessary.withoutMNP)}
            </tr>
            <tr>
              <th scope='row'>
                <div>
                  <div>音声通話あり</div>
                  <div>（MNPあり）</div>
                </div>
              </th>
              {beforeOrderTableTH(data.order.BeforeOrder.necessary.withMNP)}
            </tr>
          </tbody>
        </table>
      )
    }
    return (
      <table className='table table-bordered necessary-table'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th
              className='bg-grey text-dark text-center necessary-th-dataonly'
              scope='col'
            >
              <div>音声通話なし</div>
            </th>
            <th
              className='bg-grey text-dark  text-center necessary-th-phone'
              scope='col'
            >
              <div>音声通話あり</div>
              <div>(MNPなし)</div>
            </th>
            <th
              className='bg-grey text-dark   text-center necessary-th-phone'
              scope='col'
            >
              <div>音声通話あり</div>
              <div>(MNPあり)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>
              <div className='row justify-content-center'>
                <div className='font-weight-bold col-12 text-center p-0'>
                  <div>メール</div>
                  <div>アドレス</div>
                </div>
                <img src={data.order.BeforeOrder.necessary.img.email} alt='' />
              </div>
            </th>
            <td>
              {tableResult(data.order.BeforeOrder.necessary.dataOnly.email)}
            </td>
            <td>
              {tableResult(data.order.BeforeOrder.necessary.withoutMNP.email)}
            </td>
            <td>
              {tableResult(data.order.BeforeOrder.necessary.withMNP.email)}
            </td>
          </tr>
          <tr>
            <th scope='row'>
              <div className='row justify-content-center'>
                <div className='font-weight-bold col-12 text-center px-1'>
                  <div>本人確認</div>
                  <div>
                    書類<small>*1</small>
                  </div>
                </div>
                <img
                  src={data.order.BeforeOrder.necessary.img.credential}
                  alt=''
                />
              </div>
            </th>
            <td>
              {tableResult(
                data.order.BeforeOrder.necessary.dataOnly.credential
              )}
            </td>
            <td>
              {tableResult(
                data.order.BeforeOrder.necessary.withoutMNP.credential
              )}
            </td>
            <td>
              {tableResult(data.order.BeforeOrder.necessary.withMNP.credential)}
            </td>
          </tr>
          <tr>
            <th scope='row'>
              <div className='row justify-content-center'>
                <div className='font-weight-bold col-12 text-center px-1'>
                  <div>MNP番号</div>
                  <div>
                    <small>*2</small>
                  </div>
                </div>
                <img src={data.order.BeforeOrder.necessary.img.MNP} alt='' />
              </div>
            </th>
            <td>
              {tableResult(data.order.BeforeOrder.necessary.dataOnly.MNPNumber)}
            </td>
            <td>
              {tableResult(
                data.order.BeforeOrder.necessary.withoutMNP.MNPNumber
              )}
            </td>
            <td>
              {tableResult(data.order.BeforeOrder.necessary.withMNP.MNPNumber)}
            </td>
          </tr>
          <tr>
            <th scope='col'>
              <div className='row justify-content-center'>
                <div className='font-weight-bold col-12 text-center px-1'>
                  <div>クレジット</div>
                  <div>カード</div>
                </div>
                <img src={data.order.BeforeOrder.necessary.img.credit} alt='' />
              </div>
            </th>
            <td colSpan='3' className='necessary-table-h3'>
              <div>クレジットカード</div>
              <div>支払いを選択した場合</div>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div className='container'>
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
        <p className='order-privacy-text'>
          当社は、適正に個人情報を取得し、偽りその他不正の手段により取得することはありません。又、15歳未満の子供から親権者の同意なく個人に関する情報をみだりに収集しないよう留意します。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>
          5.個人情報の取得に際する利用目的の通知
        </h3>
        <p className='order-privacy-text'>
          当社は、個人情報を取得するにあたり、あらかじめその利用目的をご本人に通知し、又は公表します。ただし、以下の各号に定める場合はこの限りではありません。
        </p>
        <ul className='list-style-none order-privacy-text privacy-list'>
          {data.order.BeforeOrder.privacy.NO5List.map((listItem, index) => {
            return <li key={index}>{listItem}</li>
          })}
        </ul>
        <h3 className='h5 text-primary font-weight-bold'>
          6.個人情報利用目的の変更
        </h3>
        <p className='order-privacy-text'>
          当社は、個人情報の利用目的を変更する場合には、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲を超えては行わず、変更された利用目的について、ご本人に通知し、又は公表します。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>
          7.個人情報の安全管理・従業員の監督
        </h3>
        <p className='order-privacy-text'>
          当社は、個人情報の漏洩、滅失又は毀損の防止その他の個人情報の安全管理が図られるよう、個人情報保護規程を定め、従業員に対する必要かつ適切な監督を行います。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>8.委託先の監督</h3>
        <p className='order-privacy-text'>
          当社は、個人情報の取扱いの全部又は一部を委託する場合は、委託先と機密保持を含む契約の締結、又は、当社が定める約款に合意を求め、委託先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>
          9.個人情報保護管理者の設置
        </h3>
        <p className='order-privacy-text'>
          当社は、個人情報保護管理者を設置し、本プライバシーポリシーを遵守するための内部規程の策定、監査体制の整備及び当社の個人データ等の取扱いの監督を行わせるものとします。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>
          10.第三者提供の制限
        </h3>
        <ul className='list-style-none order-privacy-text privacy-list-num'>
          {data.order.BeforeOrder.privacy.NO10List.map((listItem, index) => {
            return (
              <li key={index}>
                {listItem.text}
                {listItem.content.length > 0 && (
                  <ul className='list-style-none order-privacy-text privacy-list'>
                    {listItem.content.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                )}
                {listItem.extra.length > 0 && (
                  <ul className='list-style-none order-privacy-text'>
                    {listItem.extra.map((item, index) => {
                      return (
                        <li className='privacy-list-item-point' key={index}>
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
        <h3 className='h5 text-primary font-weight-bold'>11.個人情報の開示</h3>
        <p className='order-privacy-text'>
          当社は、ご本人から、個人情報開示の依頼があった場合には、ご依頼主がご本人であることを確認した上で遅滞なく開示します。ただし、開示することにより以下の各号のいずれかに該当する場合は、その全部又は一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
        </p>
        <ul className='list-style-none order-privacy-text privacy-list'>
          {data.order.BeforeOrder.privacy.NO11List.map((listItem, index) => {
            return <li key={index}>{listItem}</li>
          })}
        </ul>
        <h3 className='h5 text-primary font-weight-bold'>
          12.個人情報の訂正等
        </h3>
        <p className='order-privacy-text'>
          当社は、ご本人から、ご本人の個人情報が真実でないという理由によって、内容の訂正、追加又は削除（以下「訂正等」といいます）を求められた場合には、法令（個人情報保護法並びに同法の施行令及び施行規則を除く）の規定により特別の手続きが定められている場合を除き、利用目的の達成に必要な範囲内において、遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正等を行い、その旨ご本人に通知します。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>
          13.個人情報の利用停止等
        </h3>
        <p className='order-privacy-text'>
          当社は、ご本人から、ご本人の個人情報が、あらかじめ公表された利用目的の範囲を超えて取り扱われているという理由、又は偽りその他不正の手段により取得されたものであるという理由により、その利用の停止又は消去（以下「利用停止等」といいます）のご依頼があった場合には、ご依頼主がご本人であることを確認した上で、遅滞なく必要な調査を行い、利用停止等を行う理由があることが判明したときは、個人情報の利用停止等を行い、その旨ご本人に通知します。ただし、個人情報の利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、ご本人の権利利益を保護するために必要なこれに代わるべき措置をとることができる場合は、この代替策を講じます。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>
          14.個人情報に該当しない情報の取得・利用
        </h3>
        <p className='order-privacy-text'>
          当社は、新規サービスの開発及びサービス向上のため、個人情報保護法その他の法令の定める範囲内で、個人を識別できないように個人情報を加工して得られる情報その他個人情報に該当しない情報を取得し、利用することがあります。
        </p>
        <h3 className='h5 text-primary font-weight-bold'>15.免責</h3>
        <p className='order-privacy-text'>
          当社は、以下の場合について何らの責任を負いません。
        </p>
        <ul className='list-style-none order-privacy-text privacy-list'>
          {data.order.BeforeOrder.privacy.NO15List.map((listItem, index) => {
            return <li key={index}>{listItem}</li>
          })}
        </ul>
        <h3 className='h5 text-primary font-weight-bold'>16.問い合わせ窓口</h3>
        <p className='order-privacy-text'>
          ご本人による、当社がお客様より取得した個人情報の開示又は訂正等に関するお問い合わせ、及び当該個人情報の取扱いに関する苦情のお申出は以下の連絡先までお願いします。
        </p>
        <div className='order-privacy-text'>
          <div>LinksMate お客さまセンター</div>
          <div>ウェブからのお問い合わせ：</div>
          <Link to='#'>https://linksmate.jp/support</Link>
        </div>
        <div className='order-privacy-text'>
          <div>電話でのお問い合わせ（受付時間　午前9時～午後6時）</div>
          <div>一般電話（携帯電話を含む）からのお問い合わせ：</div>
          <div>0120-404-513</div>
        </div>
        <div className='order-privacy-text'>
          <div>IP電話からのお問い合わせ：</div>
          <div>050-3786-5404</div>
        </div>
        <h3 className='h5 text-primary font-weight-bold'>17.改定</h3>
        <p className='order-privacy-text'>
          当社は、本プライバシーポリシーの全部又は一部を改定することがあります。重要な変更がある場合には、当社のホームページ上にてお知らせいたします。
        </p>
        <div className='order-privacy-text'>
          <div>平成29年4月29日制定</div>
          <div>平成31年2月14日制定</div>
        </div>
      </div>
      <div className='order-privacy-title'>
        <h2 className='h5 ml-3 mt-3'>お申し込み時に必要なもの</h2>
      </div>
      <BeforeOrderTable />
      <div className='necessary-list'>
        <div className='necessary-list-star'>
          ※1 使用できる各公的書類については
          <Link to='#'>
            こちら
            <img src={popup} alt='' />
          </Link>
        </div>
        <div className='necessary-list-star'>
          ※2
          MNP予約番号は電話番号を変えることなく他社からLinksMateに乗り換える場合に必要となります。
        </div>
        <div>
          MNP予約番号発行手続き詳細などは
          <Link to='#'>
            こちら
            <img src={popup} alt='' />
          </Link>
        </div>
      </div>
      <div className='row justify-content-center my-3'>
        <div className='col-md-6 col-12'>
          <Link
            className='btn btn-warning text-light w-100 py-2'
            to='/order/selectplan'
          >
            <div className='h5'>プランを選ぶ</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BeforeOrder
