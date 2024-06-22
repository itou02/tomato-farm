import './story.css'
import image from '../../config/images'

export default function Story() {
    return (
        <div className="storybody">
            <img src={image.color1} alt="" />
            <img src={image.color2} alt="" />
            <div className="container">
                <section className="family">
                    <div className="title">
                        <img src={image.titleBg} alt="" />
                        家族故事
                    </div>
                    <div className="content">
                        <img src={image.workSpace1} alt="" />
                        <div className="text">
                            四季紅農場座落在雲林四湖，由吳家兄弟互相維護的小型有機農場。<br /><br />
                            最初是以室外作物（西瓜、蒜頭、花生）為主，後來受到六輕工業區空汙的影響，導致作物經常腐爛，在縣政府的補助下，開始轉型到溫室作業，也在朋友的協助下開始研究種植小番茄，並且一直維持到現在。<br /><br />
                            現在番茄種植技術成熟，室外耕作減少，以室內為主，在番茄較穩定時才會提供宅配服務。
                        </div>
                    </div>
                    <div className="bro">
                        <img src={image.hello} alt="" />
                        <img src={image.bors} alt="" />
                    </div>
                    <div className="bro_intro">
                        <div>
                            <img src={image.bor1} alt="" />
                            <div className="bro_text">
                                <img src={image.pic1} alt="" />
                                大哥<br />江湖人稱「漢哥」
                                <img src={image.pic2} alt="" />
                            </div>
                        </div>
                        <div>
                            <img src={image.bor2} alt="" />
                            <div className="bro_text">
                                <img src={image.pic1} alt="" />
                                二哥<br />江湖人稱「興哥」
                                <img src={image.pic2} alt="" />
                            </div>
                        </div>
                        <div>
                            <img src={image.bor3} alt="" />
                            <div className="bro_text">
                                <img src={image.pic1} alt="" />
                                三弟<br />江湖人稱「阿昭」
                                <img src={image.pic2} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="special">
                    <div className="title">
                        <img src={image.titleBg} alt="" />
                        農場特色
                    </div>
                    <div className="text">
                        品牌名為四季紅農場，<br />
                        希望四季都能採很好吃的番茄，農場可以像番茄一樣，紅紅火火。<br />
                        我們使用溫室管理，定期讓溫室休耕、養土，<br />
                        並且每一顆小番茄都是純手工採摘，期望為顧客帶來品質穩定、天然有機的小番茄。
                    </div>
                    <div className="bro_intro">
                        <div>
                            <img src={image.special1} alt="" />
                            <div className="bro_text">
                                濕室管理，滴灌系統
                            </div>
                        </div>
                        <div>
                            <img src={image.special2} alt="" />
                            <div className="bro_text">
                                沿海土壤，口味更佳
                            </div>
                        </div>
                        <div>
                            <img src={image.special3} alt="" />
                            <div className="bro_text">
                                純天然，無加工
                            </div>
                        </div>
                        <div>
                            <img src={image.special4} alt="" />
                            <div className="bro_text">
                                在地生產，新鮮直送
                            </div>
                        </div>
                    </div>
                </section>
                <section className="process">
                    <div className="title">
                        <img src={image.titleBg} alt="" />
                        栽種過程
                    </div>
                    <div>
                        <img src={image.paint} alt="" className="process_img" />
                    </div>
                </section>
                <section className="tips">
                    <div className="title">
                        <img src={image.titleBg} alt="" />
                        番茄小知識
                    </div>
                    <div className="tips_content">
                        <div className="bro_text">
                            <img src={image.pic1} alt="" />
                            番茄是蔬菜還是水果？
                            <img src={image.pic2} alt="" />
                        </div>
                        <div className="text">
                            在台灣學術統計上，番茄被定義為蔬菜，<br />
                            然而根據消費習慣調查，一般認為大番茄屬於蔬菜，小番茄則屬於水果，<br />
                            主要是因為大番茄甜度較低，經常入菜與其他料理搭配；小番茄則甜度較高，較常當作水果直接食用。
                        </div>
                    </div>
                    <div className="tips_img">
                        <img src={image.tips} alt="" />
                    </div>
                    <div className="intro">
                        <div style={{ width: '44%', padding: '0 20px' }}>
                            <div className="little_title">
                                番茄怎麼來
                            </div>
                            <div className="list">
                                <ul>
                                    <li>台灣番茄栽培相傳在荷蘭占台時代便有引入</li>
                                    <li>有文獻記載，1895年台灣割讓給日本後開始發展番茄栽培</li>
                                    <li>1909~1911年開始試驗推廣，引入多個鮮食大果番茄及加工番茄品種</li>
                                    <li>1927年 便有番茄加工品外銷日本的紀錄</li>
                                    <li>1942年 鮮食番茄栽培面積已有1467公頃</li>
                                </ul>
                            </div>
                            <div className="little_title">
                                採收時節
                            </div>
                            <div className="list">
                                小番茄從苗的種植到可以採收果實大概需要三個月，主要是在秋冬兩季，而果實的採收一般來說同樣是三個月，不停心的品種可以到四個月，如果技術好的話甚至能夠到五個月，但是延長植株結果的時間雖然採收的量多了，但在質量上可能就會沒有那麼好。
                            </div>
                            <div className="little_title">
                                禁止使用剪刀採摘番茄
                            </div>
                            <div className="list">
                                <ul>
                                    <li>番茄有一種特殊的病害叫「毒素病」，也就是一般人俗稱的「瘋叢」(台語)，這種病是一種絕症且傳染率高，番茄一但得病就注定死亡。</li>
                                    <li>傳染媒介：銀葉粉蝨、剪刀</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: '1px', backgroundColor: '#B02F2E' }}>
                            <hr />
                        </div>
                        <div style={{ width: '60%', padding: '0 20px', height: '200px' }}>
                            <div className="little_title">
                                蕃茄有停心、半停心與不停心之分
                            </div>
                            <div className="list_2">
                                <div className="circle">
                                    停心
                                </div>
                                <ul>
                                    <li>當它長到一定時日後，頂芽形成花芽而停止生長，品種多為加工用或觀賞用番茄</li>
                                    <li>有限生長：果實長到一定數量停止生長，須把果實全數摘下方可持續生長</li>
                                </ul>
                            </div>
                            <div className="list_2">
                                <div className="circle">
                                    半停心
                                </div>
                                <ul>
                                    <li>介於兩者之間，環境惡劣時，傾向於停心型生長，環境良好時則接近於無限生長</li>
                                    <li>每長2片葉子，生長點就停止不再生長</li>
                                    <li>果皮較厚，口感稍差，甜度稍差</li>
                                </ul>
                            </div>
                            <div className="list_2">
                                <div className="circle">
                                    不停心
                                </div>
                                <ul>
                                    <li>生長點不會停止生長，它的頂芽一直都是葉芽，只要水分、養分足夠便可持續生長</li>
                                    <li>目前市面番茄品種多屬於這類型，像是牛番茄、黑柿番茄、玉女番茄等</li>
                                    <li>產量稍差（密植整枝栽培無差別）、較不耐熱，適合10～1月間種植，須整枝、立式栽培，較耗費人工</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="month">
                    <div className="title">
                        <img src={image.titleBg} alt="" />
                        本月日誌
                    </div>
                    <div className="content">
                        <img src={image.month} alt="" />
                        <div>
                            <div className="text">
                                經過半年的活，終於來到了番茄產季尾聲，這是波農場第一年忙著利用網站販賣水果，
                                感謝大家的支持與支持，給予我們學習與成長的機會，讓我們一路堅持到番茄收關。
                                <br />
                                #波萌番茄明年見
                            </div>
                            <div className="view_more">
                                查看更多
                            </div>
                        </div>
                    </div>
                </section>
                <section className="collection">
                    <div className="title">
                        <img src={image.titleBg} alt="" />
                        本月合集
                    </div>
                    <div className="content">
                        <div className="row">
                            <div>
                                <img src={image.month1} alt="" />
                                <div className="view_more">
                                    查看更多
                                </div>
                            </div>
                            <div>
                                <img src={image.month2} alt="" />
                                <div className="view_more">
                                    查看更多
                                </div>
                            </div>
                            <div>
                                <img src={image.month3} alt="" />
                                <div className="view_more">
                                    查看更多
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <img src={image.month4} alt="" />
                                <div className="view_more">
                                    查看更多
                                </div>
                            </div>
                            <div>
                                <img src={image.month5} alt="" />
                                <div className="view_more">
                                    查看更多
                                </div>
                            </div>
                            <div>
                                <img src={image.month6} alt="" />
                                <div className="view_more">
                                    查看更多
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );                                                                                                          
}