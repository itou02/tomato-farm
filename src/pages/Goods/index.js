import './status.css'
import image from '../../config/images'

export default function Goods() {
    return (
        <div className="goodbody">
            <img src={image.statusBg} alt="" />
            <div className="container">
                <section className="family">
                    <div className="select">
                        <select>
                            <option>運送狀態</option>
                            <option>已出貨</option>
                            <option>未出貨</option>
                        </select>
                        <div style={{ display: 'flex', fontSize: '18px' }}>
                            <input type="text" placeholder="請輸入電話號碼" />
                            <img src={image.search} alt="" />
                        </div>
                    </div>
                    <div className="table">
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
                                    <td style={{ color: '#DC7058' }}>未付款</td>
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
                                    <td style={{ color: '#DC7058' }}>未出貨</td>
                                    <td style={{ color: '#DC7058' }}>未付款</td>
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
                                    <td style={{ color: '#DC7058' }}>未出貨</td>
                                    <td style={{ color: '#DC7058' }}>未付款</td>
                                    <td>$ 1000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}
