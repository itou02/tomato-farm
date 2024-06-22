import './status.css'
import image from '../../config/images'

export default function Goods() {
    return (
        <div className='goodbody'>
            <img src="../../assets/media/status/網頁素材_貨品追蹤訂購完成-色塊.png" alt="" />
            <div class="container">
                <section class="family">
                    <div class="select">
                        <select>
                            <option>運送狀態</option>
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Hamster</option>
                            <option>Parrot</option>
                            <option>Spider</option>
                            <option>Goldfish</option>
                        </select>
                        <div className="flex text-lg">
                            <input type="text" placeholder="請輸入電話號碼" />
                                <img src="media/status/pngtree-magnifying-glass-icon-png-image_3014769.png" alt="" />
                        </div>
                        <div class="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>訂單編號</th>
                                        <th>訂單日期</th>
                                        <th>運送狀態</th>
                                        <th>付款狀態</th>
                                        <th>總額</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>001</td>
                                        <td>2024-03-18</td>
                                        <td>已出貨</td>
                                        <td>已付款</td>
                                        <td>$ 1000</td>
                                    </tr>
                                    <tr>
                                        <td>002</td>
                                        <td>2024-03-29</td>
                                        <td>已出貨</td>
                                        <td className="text-[#DC7058]">未付款</td>
                                        <td>$ 1000</td>
                                    </tr>
                                    <tr>
                                        <td>003</td>
                                        <td>2024-03-18</td>
                                        <td>已出貨</td>
                                        <td>已付款</td>
                                        <td>$ 1000</td>
                                    </tr>
                                    <tr>
                                        <td>004</td>
                                        <td>2024-03-29</td>
                                        <td className="text-[#DC7058]">未出貨</td>
                                        <td className="text-[#DC7058]">未付款</td>
                                        <td>$ 1000</td>
                                    </tr>
                                    <tr>
                                        <td>005</td>
                                        <td>2024-03-18</td>
                                        <td>已出貨</td>
                                        <td>已付款</td>
                                        <td>$ 1000</td>
                                    </tr>
                                    <tr>
                                        <td>006</td>
                                        <td>2024-03-29</td>
                                        <td className="text-[#DC7058]">未出貨</td>
                                        <td className="text-[#DC7058]">未付款</td>
                                        <td>$ 1000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}