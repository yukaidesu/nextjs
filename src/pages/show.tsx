import Router, { useRouter } from "next/router"
import Styles from '../styles/Home.module.css' ;
import Header from '../compornent/header'
import Sidebar from '../compornent/sidebar'

export default function show() {
    const router = useRouter();
    const clickButton = () => {
        Router.back();
    }
 
    return (
        <div className=" bg-gray">
        <Header />
        <main>
            <div className="grid grid-cols-9 gap-4">
                <Sidebar />

                    <div className="col-span-7">
                        <div className={Styles.box} >
                            <div className={Styles.content}>
                                ユーザー画面・ユーザー詳細
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>id:</td>
                                            <td>{useRouter().query.id}</td>
                                        </tr>
                                        <tr>
                                            <td>名前:</td>
                                            <td>{useRouter().query.name}</td>
                                        </tr>
                                        <tr>
                                            <td>メールアドレス:</td>
                                            <td>{useRouter().query.email}</td>
                                        </tr>
                                        <tr>
                                            <td>権限:</td>
                                            <td>{useRouter().query.authority}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <button className="px-2 py-1  bg-red text-lg text-white rounded-full border border-black">
                                    編集
                                </button>
                                <button onClick={clickButton} className="px-2 py-1 rounded-full border border-black">
                                    戻る
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}