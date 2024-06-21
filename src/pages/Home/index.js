import '../../tailwind.css'
import './index.css'
import image from '../../config/images'

export default function Home() {
    return (
        <div className=' bg-[{image.hBG1}] w-fit relative'>
            <div className='flex flex-col w-full mt-20'>
                <div className=' bg-[#FFF5ED] relative mx-auto z-0'>
                    <img src={image.hBG1} className='w-full h-[30%]' />
                </div>
                <div className='absolute w-full mx-auto mt-[5%] z-1'>
                    <div className='flex  justify-between flex-row'>
                        <img src={image.hb1} className='w-[30%] custom-rounded' />
                        <div className='relative flex bg-white w-[35%] custom-rounded2'>
                            <div className='flex flex-col absolute z-2 text-xl font-bold gap-2 left-[16%] top-[16%]'>
                                <p>小番茄的休耕期</p>
                                <hr className=' border-stone-400' />
                                <p>溫室休息中～</p>
                                <hr className=' border-stone-400' />
                                <p>我們在種洋蔥！！</p>
                                <hr className=' border-stone-400' />
                                <p>--</p>
                                <div className='text-red-500 underline text-right'>
                                    <hr className=' border-stone-400' />
                                    more
                                </div>
                            </div>
                            <div className='absolute flex flex-col gap-3 right-[16%] top-[20%]'>
                                <div className='flex align-middle gap-2'>
                                    <span className=' text-2xl'>5月10日</span>
                                    <div className='bg-[#C40C0C] flex rounded-full w-8 h-8 '>
                                        <div className='flex justify-center align-middle mx-auto my-auto text-white'>五</div>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <span className='my-auto text-4xl'>22°C</span>
                                    <img src={image.hsun} className='w-16 h-16' />
                                </div>
                                <hr className='border-[#FF6501]' />
                                <span className='mx-auto text-2xl'>今日休息中</span>
                            </div>
                        </div>
                        <img src={image.hb2} className=' w-[30%] custom-rounded3' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full relative items-center'>
                <div className=' bg-[#FFF5ED] relative mx-auto z-0'>
                    <img src={image.hBG2} className='w-full' />
                </div>
                <div className='flex flex-col absolute z-1 top-[-100px] '>
                    <div className='flex justify-center'>
                        <div className='relative z-2'>
                            <img src={image.htitle} className='h-44 mx-auto' />
                        </div>
                        <div className='text-white text-center text-2xl font-bold absolute z-3 mx-auto top-[12%]'>
                            農場故事
                        </div>
                    </div>
                    <div className='flex w-[90%] justify-center text-center mx-auto'>
                        <img src={image.harea} className='relative z-3' />
                        <div className='w-[60%] text-center text-lg font-bold absolute z-4 mx-auto bottom-24'>
                            四季紅農場座落在雲林四湖，由吳家兄弟互相維護的小型有機農場。<br />
                            四季紅，並不是四季都種植小番茄，<br />
                            是希望我們能像番茄紅一樣，長長久久！<br />
                            <br />
                            我們使用溫室管理，定期讓溫室休耕、養土，<br />
                            並且每一顆小番茄都是純手工採摘，期望為顧客帶來品質穩定、天然有機的小番茄。<br />
                        </div>
                    </div>

                </div>
                <div className='absolute flex w-[80%] top-[25%] mx-auto justify-center gap-16'>
                    <div className='flex flex-col gap-8 font-bold text-center'>
                        <img src={image.hpic1} className='' />
                        <span>吳家家族經營，請大家多多支持</span>
                    </div>
                    <div className='flex flex-col gap-8 font-bold text-center'>
                        <img src={image.hpic2} className='' />
                        <span>使用滴灌技術，減少水分流失</span>
                    </div>
                    <div className='flex flex-col gap-8 font-bold text-center'>
                        <img src={image.hpic3} className='' />
                        <span>在海岸鹽濕地的環境種植，因為土壤的關係，小蕃茄口味會由鹹轉甜</span>
                    </div>

                </div>
                <div className='flex w-full top-[-400px] relative z-4 mx-auto justify-center'>
                    <div className=' w-full'>
                        <img src={image.hBG3} className=' mx-auto w-full' />
                    </div>
                    <div className='flex w-[75%] mx-auto absolute z-5  top-[20%] justify-between items-center'>
                        <div className=''>
                            <img src={image.hto} className='w-64 h-64 object-cover rounded-full' />
                        </div>
                        <div className='flex flex-col gap-8 text-2xl '>
                            <div className='flex items-center'>
                                <div>
                                    <img src={image.pressedL} className='h-20' />
                                </div>
                                <div>
                                    採收時保留蒂頭，確保番茄的新鮮度，避免水分快速流失
                                </div>
                                <div>
                                    <img src={image.pressed} className='h-20' />
                                </div>
                            </div>
                            <div className='flex items-center ml-12'>
                                <div>
                                    <img src={image.pressedL} className='h-20' />
                                </div>
                                <div>
                                    番茄中含有茄紅素，具有高抗氧化力，可以保護細胞免受損傷
                                </div>
                                <div>
                                    <img src={image.pressedL} className='h-20' />

                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <img src={image.pressedL} className='h-20' />

                                </div>
                                <div>
                                    沿海地帶土壤栽種，香甜美味口感特殊，忍不住一口接一口
                                </div>
                                <div>
                                    <img src={image.pressed} className='h-20' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center w-full top-[-800px] relative z-4 mx-auto justify-center'>
                <div className='w-full relative mx-auto z-5'>
                    <img src={image.hBG4} />
                </div>
                <div className='flex justify-center absolute z-6 top-8 mx-auto'>
                    <div className='relative z-6'>
                        <img src={image.htitle} className='h-44 mx-auto' />
                    </div>
                    <div className='text-white text-center text-2xl font-bold absolute z-7 mx-auto top-[40%]'>
                        種植週期行事曆
                    </div>
                </div>
                <div className=' absolute z-5 top-[18%] text-center text-xl font-bold'>
                    小番茄分為三個溫室來種植，8月底開始每隔半個月會分批播種，<br />
                    5月採收期結束後，接著就會到溫室的休耕期。
                </div>
                <div className='flex flex-col justify-center items-center gap-20 absolute mx-auto w-[70%] z-6 top-[30%]'>
                    <div className='flex gap-40'>
                        <img src={image.hsh1} className='w-44 h-44 rounded-full' />
                        <img src={image.hsh2} className='w-44 h-44 rounded-full' />
                        <img src={image.hsh3} className='w-44 h-44 rounded-full' />
                    </div>
                    <div className='w-[70%]'>
                        <img src={image.hline} />
                    </div>
                    <div className='w-[78%] flex mx-auto justify-between text-center text-lg font-bold'>
                        <span>
                            5~8月<br />
                            溫室們的休息
                        </span>
                        <span>
                            8~10月<br />
                            小番茄播種
                        </span>
                        <span>
                            11~5月<br />
                            等待採收小番茄
                        </span>
                    </div>
                    <div>
                        <button className='py-4 px-20 rounded-[44px] text-xl font-bold border-dashed border-2 bg-white border-[#DC7058] text-[#DC7058] '>
                            查看更多
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center w-full top-[-1000px] relative z-4 mx-auto justify-center'>
                <div className='w-full relative mx-auto z-5'>
                    <img src={image.hBG5} />
                </div>
                <div className='flex justify-center absolute z-6 top-40 mx-auto'>
                    <div className='relative z-6'>
                        <img src={image.htitle} className='h-44 mx-auto' />
                    </div>
                    <div className='text-white text-center text-2xl font-bold absolute z-7 mx-auto top-[40%]'>
                        聯絡我們
                    </div>
                </div>
                <div className='flex w-[80%] mx-auto mt-28 justify-between items-center absolute z-5'>
                    <div className='flex flex-col gap-4 w-[40%] text-3xl font-bold'>
                        <p>電話：0912-345-678</p>
                        <p>營業時間：週一~週六 8:00~17:00</p>
                        <p>地址：雲林縣四湖鄉雲林路5號</p>
                    </div>
                    <div className=' w-[55%]'>
                        <img src={image.hmap} className='custom-rounded4 '/>
                    </div>
                </div>

            </div>
        </div>
    );
}

