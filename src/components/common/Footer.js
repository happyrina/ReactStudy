import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContainerWrap}>
        <div className={styles.footerInfo}>
          <button className={styles.footerInfoBtn}>
            트리플 사업자 정보
            <img
              src="https://assets.triple.guide/images/ico_arrow_more@3x.png"
              alt="트리플 사업자 정보 아이콘 드롭버튼"
              className={styles.footerInfoBtnImg}
            />
          </button>
          <div className={styles.footerLoginApp}>
            <button type="button" className={styles.footerLogin}>
              로그인
            </button>
            <a
              href="https://triple.guide/intro?pid=intro_web"
              className={styles.footerAppInfo}
            >
              <span>트리플 앱</span>
              <img src="https://assets.triple.guide/images/ico_download@3x.png" />
            </a>
          </div>
        </div>
        <div className={styles.footerText}>
          ㈜인터파크트리플은 통신판매중개로서 통신판매의 당사자가 아니며 상품
          거래정보 및 거래등에 대해 책임을 지지 않습니다.
        </div>
        <div className={styles.footerContainerGroup}>
          <a>서비스 이용약관</a>ㅣ<a>개인정보 처리방침</a>ㅣ<a>고객센터</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
