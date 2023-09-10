import styles from '../styles/IconContainer.module.css'

function IconContainer() {
  return (
    <div className={styles.IconContinerWrap}>
      <div className={styles.IconEachContainer}>
        <img
          src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/99cd83fe-ee6d-4cdd-8d62-812d40953b6c"
          alt="해외 호텔 특가"
        ></img>
        <div className={styles.IconEachContainerText}>
          해외 호텔 <br />
          특가
        </div>
      </div>
      <div className={styles.IconEachContainer}>
        <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e487a4de-e1fc-44b7-a7f7-e236604161a8"></img>
        <div className={styles.IconEachContainerText}>
          제주
          <br />
          BEST
        </div>
      </div>
      <div className={styles.IconEachContainer}>
        <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/a4febd66-3428-4ead-9d4a-f1bd518c1043"></img>
        <div className={styles.IconEachContainerText}>
          위클리
          <br />
          특가호텔
        </div>
      </div>
      <div className={styles.IconEachContainer}>
        <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/33bdbcd5-9b84-461f-a387-f799a0ff2c26"></img>
        <div className={styles.IconEachContainerText}>
          이달의
          <br />
          혜택
        </div>
      </div>
      <div className={styles.IconEachContainer}>
        <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/a7a2d6cc-3dc5-477f-9cde-7b722371c16f"></img>
        <div className={styles.IconEachContainerText}>
          펜션
          <br />
          풀빌라
        </div>
      </div>
      <div className={styles.IconEachContainer}>
        <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/536068a9-5beb-4bef-b320-8d6f8a9624b4"></img>
        <div className={styles.IconEachContainerText}>
          캠핑
          <br />
          글램핑
        </div>
      </div>
      <div className={styles.IconEachContainer}>
        <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/0f1bc666-cfea-4ba4-9f3b-8da541ad5053"></img>
        <div className={styles.IconEachContainerText}>
          부티크
          <br />
          모텔
        </div>
      </div>
    </div>
  )
}

export default IconContainer
