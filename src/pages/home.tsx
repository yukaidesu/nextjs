import { useRouter } from "next/router";
import Head from 'next/head'

function homepage() {
    return (
        <div className=" bg-gray">
            <header className="header text-right border border-black bg-white">
                Usernameを入れる
            </header>      
            <main>
                <div className="grid grid-cols-9 gap-4">
                    <div className="col-span-2 border border-black text-center p-10 bg-white">
                        <p>Home</p>
                        <p>ユーザー管理</p>
                    </div>
                    <div className="col-span-7">
                        <h1>履歴</h1>
                        <table className="bg-white">
                            <tbody className="border border-black">
                                <tr className="border border-black">
                                    <th>日付</th>
                                    <th>ユーザー</th>
                                    <th>内容</th>
                                </tr>
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
            </main>
        </div>
    );
}
  
  export default homepage;