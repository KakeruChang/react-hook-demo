import React, { Fragment } from 'react'

import { useWindowSize } from '../../hooks/useWindowSize'
import '../../scss/common.scss'
import '../../scss/mypage.scss'
import '../../scss/homePage.scss'

const MemberPhone = props => {
  const windowSize = useWindowSize()
  const phone = props.phone

  if (windowSize.width < 992) {
    return (
      <div className='row mb-3'>
        <div className='col-12'>
          <div className='lm-title border-primary m-3'>
            {phone.thisMonth.date.year}年{phone.thisMonth.date.month}
            月のご利用状況
          </div>
          <div className='row m-3'>
            {phone.thisMonth.content.map((item, index) => {
              return (
                <Fragment key={index}>
                  <div className='col-8'>{item.number}</div>
                  <div className='col-4'>{item.value}円</div>
                </Fragment>
              )
            })}
          </div>
          <div className='lm-note phone-note mx-4'>
            01月22日時点の速報値となります。
          </div>
          <div className='lm-note phone-note mx-4'>
            ご利用料金は税込となります。
          </div>
          <div className='lm-note phone-note mx-4'>
            速報値は通話利用当日から3日程度で反映されます。
          </div>
          <div className='lm-note phone-note mx-4'>
            全グループのご利用状況を表示しております。
          </div>
          <div className='lm-note phone-note mx-4'>
            海外ローミングでの通話状況は含まれません。
          </div>
          <div className='lm-note phone-note mx-4'>
            MatePhoneを利用した通話状況は含まれません。
          </div>
        </div>
        <div className='col-12'>
          <div className='lm-title border-primary m-3'>
            直近3ヶ月のご利用状況
          </div>
          <div className='row m-3'>
            {phone.before.map((item, index) => {
              return (
                <Fragment key={index}>
                  <div className='col-8'>
                    {item.date.year}年{item.date.month}月
                  </div>
                  <div className='col-4'>{item.value}円</div>
                </Fragment>
              )
            })}
          </div>
          <div className='lm-note phone-note mx-4'>
            通話料金はご利用月の翌々月にご請求いたします。
          </div>
        </div>
        <div className='col-12 row justify-content-center mt-3'>
          <div>
            <button className='simu-area'>詳しい通話明細はこちら</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='row mb-3'>
      <div className='col-6'>
        <div className='lm-title border-primary m-3'>
          {phone.thisMonth.date.year}年{phone.thisMonth.date.month}
          月のご利用状況
        </div>
        <div className='row m-3'>
          {phone.thisMonth.content.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className='col-8'>{item.number}</div>
                <div className='col-4'>{item.value}円</div>
              </Fragment>
            )
          })}
        </div>
      </div>
      <div className='col-6'>
        <div className='lm-title border-primary m-3'>直近3ヶ月のご利用状況</div>
        <div className='row m-3'>
          {phone.before.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className='col-8'>
                  {item.date.year}年{item.date.month}月
                </div>
                <div className='col-4'>{item.value}円</div>
              </Fragment>
            )
          })}
        </div>
      </div>
      <div className='col-6'>
        <div className='lm-note phone-note mx-4'>
          01月22日時点の速報値となります。
        </div>
        <div className='lm-note phone-note mx-4'>
          ご利用料金は税込となります。
        </div>
        <div className='lm-note phone-note mx-4'>
          速報値は通話利用当日から3日程度で反映されます。
        </div>
        <div className='lm-note phone-note mx-4'>
          全グループのご利用状況を表示しております。
        </div>
        <div className='lm-note phone-note mx-4'>
          海外ローミングでの通話状況は含まれません。
        </div>
        <div className='lm-note phone-note mx-4'>
          MatePhoneを利用した通話状況は含まれません。
        </div>
      </div>
      <div className='col-6'>
        <div className='lm-note phone-note mx-4'>
          通話料金はご利用月の翌々月にご請求いたします。
        </div>
      </div>
      <div className='col-12 row justify-content-center mt-3'>
        <div>
          <button className='simu-area'>詳しい通話明細はこちら</button>
        </div>
      </div>
    </div>
  )
}

export default MemberPhone
