import React, { useState } from "react";
import ImageSwitch from "../../component/imageSwitch";
import Image from "next/image";
import style from "./activity.module.scss";

const activityList = [
  "【05/30】 漫威角色Cosplay競賽截止",
  "【05/30】 5/16-5/29失物招領清單清單",
  "【05/30】 1:1漫威角色雕像展覽",
  "【05/25】 6/1-6/10購票抽A3電影海報",
  "【05/25】 六月新上映電影清單",
  "【05/20】 網站維修通告",
  "【05/17】 六月下線電影清單",
  "【04/27】 二周年優惠活動",
  "【04/25】 五月新上映電影清單",
  "【04/20】 五月份部分營業時間調整",
  "【04/18】 合作銀行最新優惠",
  "【04/17】 四月下線電影清單",
];

const Activity = () => {
  const [actIndex, setActIndex] = useState(0);
  return (
    <div className={style.activity}>
      <ImageSwitch
        imageStyle={style.imageStyle}
        carouselStyle={style.carousel}
        images={[
          <div className={style.information}>
            <Image src="/introduce.svg" width={100} height={20} />
            <p className={style.description}>
              今年的漫威Cosplay比賽已截止
              <br />
              感謝各路好手的熱情報名
              <br />
              總共超過5000人報名本此比賽
              <br />
              <br />
              我們將會在6/18號公布本次比賽的名次
              <br />
              並同時通知各位參賽者
              <br />
              屆時請注意自己的信箱
              <br />
              <br />
              #Find Your Power
            </p>
          </div>,
          "/activity.png",
        ]}
      />
      <div>
        <Image src="/introduce.svg" width={100} height={20} />

        <div className={style.list}>
          <div className={style.title}>【公告日期】 活動與公告名稱</div>
          <ul>
            {activityList.map((act, index) => (
              <li key={act} onClick={() => setActIndex(index)}>
                <span className={index === actIndex ? style.select : ""}>
                  {act}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity;
