import Router, { useRouter } from "next/router"
import Styles from '../styles/Home.module.css' ;
import Header from '../compornent/header'
import Sidebar from '../compornent/sidebar'

export default function home() {
    const router = useRouter();

    return (
        <div className=" bg-gray">
            <Header />

            <main>
                <div className="grid grid-cols-9 gap-4">
                    <Sidebar />

                    <div className="col-span-7">
                        <div className={Styles.box} >
                            <div className={Styles.content}>
                                <h1>履歴</h1>
                                <br />
                                <table className={Styles.table}>
                                    <thead className="border border-black">
                                        <tr className="border border-black">
                                            <th>日付</th>
                                            <th>ユーザー</th>
                                            <th>内容</th>
                                        </tr>
                                    </thead>
                                    <tbody className="border border-black text-left">
                                        <tr>
                                            <td>2020/6/18</td>
                                            <td>user1</td>
                                            <td>ユーザーを作成しました</td>
                                        </tr>
                                        <tr>
                                            <td>2020/6/20</td>
                                            <td>user2</td>
                                            <td>ユーザーを作成しました</td>
                                        </tr>
                                        <tr>
                                            <td>2020/6/30</td>
                                            <td>user3</td>
                                            <td>ユーザーを作成しました</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}